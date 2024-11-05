import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemOrderOverview from './ItemOrderOverview/ItemOrderOverview';

async function postOrder(order, shippingInfo, paymentInfo) {
    const URL = `https://1zpl4u5btg.execute-api.us-east-2.amazonaws.com/Test/order-processing/order`;

    const organizedPaymentInfo = {
        'name': paymentInfo.card.name,
        'card_number': paymentInfo.card.number,
        'expiration_date': paymentInfo.card.expiration,
        'cvv': paymentInfo.card.cvv,
        'billing_address': {
            'address_1': paymentInfo.address.address1,
            'address_2': paymentInfo.address.address2,
            'city': paymentInfo.address.city,
            'state': paymentInfo.address.state,
            'zip': paymentInfo.address.zip
        }
    };

    const organizedShippingInfo = {
        'address_1': shippingInfo.address1,
        'address_2': shippingInfo.address2,
        'city': shippingInfo.city,
        'state': shippingInfo.state,
        'zip': shippingInfo.zip,
        'name': paymentInfo.card.name
    };

    let body = {
        'items': Object.entries(order).map(([item_id, quantity]) => ({
            item_id: Number(item_id),
            quantity: quantity,
        })),
        'payment_info': organizedPaymentInfo,
        'shipping_info': organizedShippingInfo
    };

    try {
        let response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        return await response.json();
    } catch (e) {
        console.error("Error fetching inventory:", e);
        return [];
    }
}

const ViewOrder = ({ orderProp, setOrderProp }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        postOrder(orderProp.items.buyQuantity, orderProp.shipping, orderProp.payment).then((response) => {
            window.localStorage.setItem('orderStatus', JSON.stringify(response));
            navigate('/purchase/viewConfirmation');
        });
    }

    const calcTotal = () => {
        return Object.keys(orderProp.items.buyQuantity).reduce((total, itemId) => total + (products.find((item) => item.item_id === Number(itemId)).unit_price * orderProp.items.buyQuantity[itemId]), 0);
    }

    // Obtain and set the products from the inventory
    useEffect(() => {
        fetch('https://1zpl4u5btg.execute-api.us-east-2.amazonaws.com/Test/inventory-management/inventory')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='flex flex-column align-items-center container gap-3'>
            <div className='row align-items-center w-50'>
                <div className='col-3 flex justify-content-start p-0'>
                    <button id='back-button' className='btn btn-link text-white text-decoration-none fw-bold' onClick={() => navigate('/purchase/shippingEntry')}>Back</button>
                </div>

                <div className='col-6'>
                    <h1 className='m-0'>Confirm Order</h1>
                </div>

                <div className='col-3'></div>
            </div>

            <div className='flex flex-row flex-wrap gap-3 w-75 align-items-center justify-content-center'>
                {products.length === 0 ? <h4>Loading...</h4> :
                    Object.keys(orderProp.items.buyQuantity).map((itemId) => (
                        <ItemOrderOverview
                            key={itemId}
                            item={products.find((item) => item.item_id === Number(itemId))}
                            quantity={orderProp.items.buyQuantity[itemId]}>
                        </ItemOrderOverview>
                    ))
                }
            </div>

            <div className='w-50 flex flex-column align-items-center'>
                {products.length === 0 ? <h4>Loading...</h4> : <h4>Total: ${calcTotal().toFixed(2)}</h4>}
                {products.length === 0 ? <h4>Loading...</h4> : <button type='submit' onClick={handleSubmit}>Confirm Purchase</button>}
            </div>
        </div>
    );
};

export default ViewOrder;