import { React, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemOrderOverview from './ItemOrderOverview/ItemOrderOverview';

async function fetchInventory(name = '', inStock = '') {
    let url = `https://1zpl4u5btg.execute-api.us-east-2.amazonaws.com/Test/inventory-management/inventory`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        console.error("Error fetching inventory:", e);
        return [];
    }
}

const ViewOrder = () => {
    const [products, setProducts] = useState([]);

    const location = useLocation();
    // const order = location.state.order.buyQuantity;
    const order = JSON.parse(window.localStorage.getItem('order')).buyQuantity;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        navigate('/purchase/viewConfirmation', { state: location.state });
    }

    // useEffect(() => {
    //     // there's not order info, kick user back to purchase page
    //     if (!location.state) {
    //         console.log('no order infomation, kicked user back to purchase page.');
    //         navigate('/purchase');
    //     }
    // });

    const calcTotal = () => {
        return Object.keys(order).reduce((total, itemId) => total + (products.find((item) => item.id === Number(itemId)).price * order[itemId]), 0);
    }

    // lab5: hard coded for now...
    // const products = require('../../fakeData.json');

    // Fetch inventory and set products on component mount
    useEffect(() => {
        fetchInventory().then(items => {
            setProducts(items);  // Set products fetched from API
        }).catch(err => {
            console.error("Error fetching inventory:", err);
        });
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
                {
                    Object.keys(order).map((itemId) => (
                        <ItemOrderOverview
                            key={itemId}
                            item={products.find((item) => item.id === Number(itemId))}
                            quantity={order[itemId]}>
                        </ItemOrderOverview>
                    ))
                }
            </div>

            <div className='w-50 flex flex-column align-items-center'>
                <h4>Total: ${calcTotal().toFixed(2)}</h4>
                <button type='submit' onClick={handleSubmit}>Confirm Purchase</button>
            </div>
        </div>
    );
};

export default ViewOrder;