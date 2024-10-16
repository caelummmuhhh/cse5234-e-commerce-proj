import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-column align-items-center container'>
            <div className='row align-items-center w-50'>
                <div className='col-3 flex justify-content-start p-0'>
                    <button id='back-button' className='btn btn-link text-white text-decoration-none fw-bold' onClick={() => navigate('/purchase/viewOrder')}>Back</button>
                </div>

                <div className='col-6'>
                    <h1 className='m-0'>Confirmation</h1>
                </div>

                <div className='col-3'></div>
            </div>

            <p style={{ fontSize: '16px' }}>
                Thank you for your purchase!
                Order Code: 1234567890
            </p>
        </div>
    );
};

export default Confirmation;
