import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import PurchaseItem from './PurchaseItem/PurchaseItem';

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: {},
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Check if cart is empty
        if (Object.keys(order.buyQuantity).length === 0 ||
            Object.values(order.buyQuantity).reduce((total, quantity) => total + quantity, 0) <= 0) {
            console.log("cart is empty...");
            // TODO: tell user cart is empty, cannot check out.
            return;
        }

        navigate('/purchase/paymentEntry', { state: { order: order } });
    }

    let TITLE = 'Purchase Page';

    // lab5: hard coded for now...
    const products = require('../../fakeData.json');

    const setItemQuantity = (itemId, quantity) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            buyQuantity: {
                ...prevOrder.buyQuantity,
                [itemId]: quantity,
            },
        }));
    };

    return (
        <div>
            <h1>{TITLE}</h1>
            <form onSubmit={handleSubmit}>
                {products.map((item) => (<PurchaseItem key={item.id} item={item} setItemQuantity={setItemQuantity}></PurchaseItem>))}
                <br />
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default Purchase;
