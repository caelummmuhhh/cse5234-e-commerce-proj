import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();
    const orderStatus = JSON.parse(window.localStorage.getItem('orderStatus'));

    return (
        <div className='flex flex-column align-items-center container'>
            <div className='row align-items-center w-50'>
                <div className='col-3 flex justify-content-start p-0'>
                    <button id='back-button' className='btn btn-link text-white text-decoration-none fw-bold' onClick={() => navigate('/purchase/viewOrder')}>Back</button>
                </div>

                <div className='col-6'>
                    {orderStatus && orderStatus.confirmation_number && (
                        <h1 className='m-0'>Confirmation</h1>
                    )}
                    {orderStatus && orderStatus.unavailable_items && (
                        <h1 className='m-0'>Error</h1>
                    )}

                </div>

                <div className='col-3'></div>
            </div>

            <p style={{ fontSize: '16px', textAlign: 'center' }}>
                {orderStatus.message}
                <br />

                {/* Order was successful. */}
                {orderStatus && orderStatus.confirmation_number && (
                    <span>
                        Confirmation Number: {orderStatus.confirmation_number}
                    </span>
                )}
            </p>
            
            
            {orderStatus && orderStatus.unavailableItems && (
                <div>
                    {
                        orderStatus.unavailableItems.map((item) => (
                            <p>
                                {item.item}<br />
                                Requested Quantity: {item.requested_qty} <br />
                                Available Quantity: {item.available_qty}
                            </p>
                        ))
                    }
                </div>
            )}

        </div>
    );
};

export default Confirmation;
