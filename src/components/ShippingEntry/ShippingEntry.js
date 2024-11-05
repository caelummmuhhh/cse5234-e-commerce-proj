import { React } from 'react';
import { useNavigate } from 'react-router-dom'
import AddressEntry from '../PaymentEntry/AddressEntry/AddressEntry';

const ShippingEntry = ( {orderProp, setOrderProp} ) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/viewOrder');
    };

    const setAddress = (address) => {
        setOrderProp((prevOrder) => {
            return {
                ...prevOrder,
                shipping: address
            };
        });
    };

    return (
        <div className='flex flex-column align-items-center container'>
            <div className='row align-items-center w-50'>
                <div className='col-3 flex justify-content-start p-0'>
                    <button id='back-button' className='btn btn-link text-white text-decoration-none fw-bold' onClick={() => navigate('/purchase/paymentEntry')}>Back</button>
                </div>

                <div className='col-6'>
                    <h1 className='m-0'>Shipping</h1>
                </div>

                <div className='col-3'></div>
            </div>

            <form onSubmit={handleSubmit} className='my-3 flex flex-column gap-3 align-items-center w-50'>
                <AddressEntry address={orderProp.shipping} setAddress={setAddress} title='Shipping'/>

                <button className="my-3 w-25 fw-bold rounded-pill border" type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ShippingEntry;
