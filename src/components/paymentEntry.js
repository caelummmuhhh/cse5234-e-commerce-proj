import { React, useState } from 'react';

import CardEntry from './paymentEntry/CardEntry';
import AddressEntry from './paymentEntry/AddressEntry';

import '../styles/paymentEntry.css';

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

    const [paymentInfo, setPaymentInfo] = useState(JSON.parse(window.localStorage.getItem('paymentInfo')) || PAYMENTINFO);

    const handlePaymentEntrySubmit = (e) => {
        e.preventDefault();
        setPaymentInfo(paymentInfo);
        window.localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
    }

    const setCard = (card) => {
        paymentInfo.card = card;
        setPaymentInfo(paymentInfo);
    }

    const setAddress = (address) => {
        paymentInfo.address = address;
        setPaymentInfo(paymentInfo);
    }

    return (
        <div className='w-96 flex-column gap-1'>
            <h1>Payment Entry</h1>

            <form onSubmit={handlePaymentEntrySubmit}>
                <CardEntry card={paymentInfo.card} setCard={setCard}/>
                <AddressEntry address={paymentInfo.address} setAddress={setAddress} />

                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default PaymentEntry;