import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0], credit_card_number: '', expir_date: '', cvvCode: '', card_holder_name: '',
        address_1: '', address_2: '', city: '', state: '', zip: '',
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', { state: { order: order } });
    }

    let TITLE = 'Purchase Page';

    return (
        <div>
            {TITLE}
            <form onSubmit={handleSubmit}>
                <label>Product 1</label>
                <img
                    src="images/Toaster1.jpeg"
                    alt="Floral Toaster"
                    style={{ width: '300px', height: '300px' }}
                />
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[0] = e.target.value; }}
                />
                <br />
                <label>Product 2</label>
                <img
                    src="images/Toaster2.jpeg"
                    alt="Hamilton Toaster"
                    style={{ width: '300px', height: '300px' }}
                />
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[1] = e.target.value; }}
                />
                <br />
                <label>Product 3</label>
                <img
                    src="images/Toaster3.jpeg"
                    alt="Long Toaster"
                    style={{ width: '300px', height: '300px' }}
                />
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[2] = e.target.value; }}
                />
                <br />
                <label>Product 4</label>
                <img
                    src="images/Toaster4.jpeg"
                    alt="R2D2 Toaster"
                    style={{ width: '300px', height: '300px' }}
                />
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[3] = e.target.value; }}
                />
                <br />
                <label>Product 5</label>
                <img
                    src="images/Toaster5.jpeg"
                    alt="Goofy button Toaster"
                    style={{ width: '300px', height: '300px' }}
                />
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[4] = e.target.value; }}
                />
                <br />
                <label>Product 6</label>
                <img
                    src="images/Toaster6.jpeg"
                    alt="Knob Toaster"
                    style={{ width: '300px', height: '300px' }}
                />
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[5] = e.target.value; }}
                />
                <br />
                <button className='button'>Pay</button>
            </form>
        </div>
    );
};

export default Purchase;