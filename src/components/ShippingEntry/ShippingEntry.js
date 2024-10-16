import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AddressEntry from '../PaymentEntry/AddressEntry/AddressEntry';

const ShippingEntry = () => {
    const [shippingDetails, setShippingDetails] = useState(
        window.localStorage.getItem('shippingDetails') ||
        {
            zip: '',
            city: '',
            state: '',
            address1: '',
            address2: ''
        }
    );

    // const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submission');

        // Set the shipping details in local storage
        window.localStorage.setItem('shipping', JSON.stringify(shippingDetails));

        // Navigate to the view order page
        // navigate('/purchase/viewOrder', { state: { paymentInfo: location.state.paymentInfo, order: location.state.order, shippingDetails: shippingDetails } });
        navigate('/purchase/viewOrder');
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setShippingDetails((prevDetails) => ({
    //         ...prevDetails,
    //         [name]: value,
    //     }));
    // };

    const setAddress = (address) => {
        console.log('setting address');
        setShippingDetails(address);
        console.log(shippingDetails);
    }

    useEffect(() => {
        window.localStorage.setItem('shipping', JSON.stringify(shippingDetails));
    }, [shippingDetails]);

    // This shouldn't be possible because the same check is made on PaymentEntry.js
    // useEffect(() => {
    //     // there's not order info, kick user back to purchase page
    //     if (!location.state) {
    //         console.log('no order infomation, kicked user back to purchase page.');
    //         navigate('/purchase');
    //     }
    // });

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
                <AddressEntry address={shippingDetails} setAddress={setAddress} title='Shipping'/>

                <button className="my-3 w-25 fw-bold rounded-pill border" type='submit'>Submit</button>
            </form>

            {/* <form onSubmit={handleSubmit}>
                <label>
                    Address 1:
                    <input
                        type="text"
                        name="address1"
                        value={shippingDetails.address1}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Address 2:
                    <input
                        type="text"
                        name="address2"
                        value={shippingDetails.address2}
                        onChange={handleChange}
                    />
                </label>
                <br />
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
                <br />
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
                <br />
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
                <br />
                <button type="submit">Submit</button>
            </form> */}
        </div>
    );
};

export default ShippingEntry;
