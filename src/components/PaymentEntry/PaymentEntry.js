import { React, useEffect, useState } from 'react';

import CardEntry from './CardEntry/CardEntry';
import AddressEntry from './AddressEntry/AddressEntry';

import './PaymentEntry.css';
import { useLocation, useNavigate } from 'react-router-dom';

import Topbar from '../topbar/Topbar';
import Footer from '../footer/Footer';

const PaymentEntry = () => {
    const PAYMENTINFO = {
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
    };

    const location = useLocation();
    const navigate = useNavigate();

    const [paymentInfo, setPaymentInfo] = useState(JSON.parse(window.localStorage.getItem('paymentInfo')) || PAYMENTINFO);

    const handlePaymentEntrySubmit = (e) => {
        e.preventDefault();
        setPaymentInfo(paymentInfo);
        window.localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
        navigate('/purchase/shippingEntry', { state: { paymentInfo: paymentInfo, order: location.state.order } });
    }

    const setCard = (card) => {
        paymentInfo.card = card;
        setPaymentInfo(paymentInfo);
    }

    const setAddress = (address) => {
        paymentInfo.address = address;
        setPaymentInfo(paymentInfo);
    }

    useEffect(() => {
        // there's not order info, kick user back to purchase page
        if (!location.state) {
            console.log('no order infomation, kicked user back to purchase page.');
            navigate('/purchase');
        }
    });

    return (
        <div className='w-96 flex-column gap-1'>
        <Topbar />
        <Footer />
        <div style={{marginTop: '80px'}}></div>
            <h1>Payment Entry</h1>

            <form onSubmit={handlePaymentEntrySubmit}>
                <CardEntry card={paymentInfo.card} setCard={setCard} />
                <AddressEntry address={paymentInfo.address} setAddress={setAddress} />

                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default PaymentEntry;