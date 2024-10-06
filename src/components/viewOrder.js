import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemOrderOverview from './productDisplay/itemOrderOverview';

const ViewOrder = () => {
    let TITLE = 'Confirm Order';
    const location = useLocation();
    const order = location.state.order.buyQuantity;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        navigate('/purchase/viewConfirmation', {state: location.state});
    }

    useEffect(() => {
        // there's not order info, kick user back to purchase page
        if (!location.state) {
            console.log('no order infomation, kicked user back to purchase page.');
            navigate('/purchase');
        }
    });

    const calcTotal = () => {
        return Object.keys(order).reduce((total, itemId) => total + (products[itemId].price * order[itemId]), 0);
    }

    // lab5: hard coded for now...
    const products = require('../fakeData.json');

    return (
        <div>
            <h1>{TITLE}</h1>
            <table>
                {Object.keys(order).map((itemId) => (<ItemOrderOverview key={itemId} item={products[itemId]} quantity={order[itemId]}></ItemOrderOverview>))}
            </table>
            <h4>Total: ${calcTotal().toFixed(2)}</h4>
            <button type='submit' onClick={handleSubmit}>Confirm Purchase</button>
        </div>
    );
};

export default ViewOrder;