import { React, useEffect, useState } from 'react';

import CardEntry from './CardEntry/CardEntry';
import AddressEntry from './AddressEntry/AddressEntry';

import './PaymentEntry.css';
import { useNavigate } from 'react-router-dom';

const PaymentEntry = () => {
    // const location = useLocation();
    const navigate = useNavigate();

    const [paymentInfo, setPaymentInfo] = useState(
        JSON.parse(window.localStorage.getItem('paymentInfo')) ||
        {
            card: {
                number: '',
                expiration: '',
                cvv: ''
            },
            address: {
                zip: '',
                city: '',
                state: '',
                address1: '',
                address2: ''
            }
        }
    );

    const handlePaymentEntrySubmit = (e) => {
        e.preventDefault();
        setPaymentInfo(paymentInfo);

        window.localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));

        // navigate('/purchase/shippingEntry', { state: { paymentInfo: paymentInfo, order: location.state.order } });
        navigate('/purchase/shippingEntry');
    }

    const setCard = (card) => {
        paymentInfo.card = card;
        setPaymentInfo(paymentInfo);
    }

    const setAddress = (address) => {
        // Is this first line necessary?
        paymentInfo.address = address;
        setPaymentInfo(paymentInfo);
    }

    // useEffect(() => {
    //     // there's not order info, kick user back to purchase page
    //     if (!location.state) {
    //         console.log('no order infomation, kicked user back to purchase page.');
    //         navigate('/purchase');
    //     }
    // });

    useEffect(() => {
        const order = window.localStorage.getItem('order');
        if (!order) navigate('/purchase');
    });

    useEffect(() => {
        window.localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
    }, [paymentInfo]);

    return (
        <div className='flex flex-column align-items-center container'>
            <div className='row align-items-center w-50'>
                <div className='col-3 flex justify-content-start p-0'>
                    <button id='back-button' className='btn btn-link text-white text-decoration-none fw-bold' onClick={() => navigate('/purchase')}>Back</button>
                </div>

                <div className='col-6'>
                    <h1 className='m-0'>Payment</h1>
                </div>

                <div className='col-3'>

                </div>
            </div>

            <form onSubmit={handlePaymentEntrySubmit} className='my-3 flex flex-column gap-3 align-items-center w-50'>
                <CardEntry card={paymentInfo.card} setCard={setCard} />
                <AddressEntry address={paymentInfo.address} setAddress={setAddress} title='Billing'/>

                <button className="my-3 w-25 fw-bold rounded-pill border" type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default PaymentEntry;