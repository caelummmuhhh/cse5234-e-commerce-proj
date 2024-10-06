import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentEntry = () => {
    const location = useLocation();
    const order = location.state.order || {};
    const [ paymentInfo, setPaymentInfo ] = useState({
        credit_card_number: '', expir_month:'', expir_year:'', cvv_code:'', card_holder_name: ''
    });
    const navigate = useNavigate();
    const months = [ "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December",
    ];

    // Get from current year to 20 years in the future for credit card expiration year
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i <= 20; i++) {
        years.push(currentYear + i);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        order.credit_card_number = paymentInfo.credit_card_number;
        order.cvvCode = paymentInfo.cvv_code;
        order.card_holder_name = paymentInfo.card_holder_name;
        order.expir_date = `${paymentInfo.expir_month}/${paymentInfo.expir_year}`;
        
        navigate('/purchase/shippingEntry', {state: {order: order}});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Card Holder Name:
                <input
                    type="text"
                    name="card_holder_name"
                    onChange={handleChange}
                    required></input>
            </label>
            <br />
            <label>
                Card Number:
                <input
                    type="tel"
                    name="credit_card_number"
                    onChange={handleChange}
                    placeholder="xxxx xxxx xxxx xxxx"
                    pattern="[0-9]*"
                    maxLength="16"
                    required
                ></input>
            </label>
            <br />
            Expiration:
            <select
                name="expir_month"
                defaultValue=""
                onChange={handleChange}
                required>
                <option key="0" value="" disabled>Expiration Month</option>
                {months.map((month, index) => (<option key={index+1} value={index + 1}>{month}</option>))}
            </select>
            <select
                name="expir_year"
                defaultValue=""
                onChange={handleChange}
                required>
                <option value="" disabled>Expiration Year</option>
                {years.map((year) => (<option key={year} value={year}>{year}</option>))}
            </select>
            <br />
            <label>
                CVV:
                <input
                    type="text"
                    name="cvv_code"
                    onChange={handleChange}
                    pattern="[0-9]*"
                    maxLength="4"
                    required></input>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PaymentEntry;
