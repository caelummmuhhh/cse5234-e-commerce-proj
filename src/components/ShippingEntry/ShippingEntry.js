import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AddressEntry from '../PaymentEntry/AddressEntry/AddressEntry';

const ShippingEntry = () => {
    const [shippingDetails, setShippingDetails] = useState(
        JSON.parse(window.localStorage.getItem('shipping')) ||
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
        setShippingDetails(address);
    }

    // useEffect(() => {
    //     window.localStorage.setItem('shipping', JSON.stringify(shippingDetails));
    // }, [shippingDetails]);

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
        </div>
    );
};

export default ShippingEntry;
