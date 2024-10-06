import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const ShippingEntry = () => {
    const [shippingDetails, setShippingDetails] = useState({
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
    });
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state);

    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder', {shippingDetails : shippingDetails, setShippingDetails : setShippingDetails});
        console.log('Shipping Details: ', shippingDetails);

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Address 1:
                    <input
                        type="text"
                        name="address_1"
                        value={shippingDetails.address_1}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <label>
                    Address 2:
                    <input
                        type="text"
                        name="address_2"
                        value={shippingDetails.address_2}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={shippingDetails.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={shippingDetails.state}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <label>
                    Zip Code:
                    <input
                        type="text"
                        name="zip"
                        value={shippingDetails.zip}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ShippingEntry;
