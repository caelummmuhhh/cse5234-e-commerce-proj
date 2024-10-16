import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import PurchaseItem from './PurchaseItem/PurchaseItem';

import './purchase.css';

const Purchase = () => {
    const [order, setOrder] = useState(
        JSON.parse(window.localStorage.getItem('order')) ||
        {
            buyQuantity: {},
        }
    )

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Check if cart is empty
        if (Object.keys(order.buyQuantity).length === 0 ||
            Object.values(order.buyQuantity).reduce((total, quantity) => total + quantity, 0) <= 0) {
            console.log("cart is empty...");

            // Cart is empty, clear the order
            window.localStorage.removeItem('order');

            // TODO: tell user cart is empty, cannot check out.
            return;
        }

        navigate('/purchase/paymentEntry', { state: { order: order } });
    }

    let TITLE = 'Products';

    // lab5: hard coded for now...
    const products = require('../../fakeData.json');

    const setItemQuantity = (itemId, quantity) => {
        setOrder((prevOrder) => {
            const updatedQuantity = {
                ...Object.fromEntries(
                    Object.entries(prevOrder.buyQuantity).filter(([k, v]) => v > 0)
                ),
                ...(quantity > 0 && { [itemId]: quantity }),
            };

            if (quantity === 0) {
                delete updatedQuantity[itemId];
            }

            // console.log(
            //     {
            //         ...prevOrder,
            //         buyQuantity: {
            //             ...Object.fromEntries(
            //                 Object.entries(prevOrder.buyQuantity).filter(([k, v]) => v > 0)
            //             ),
            //             ...(quantity > 0 && { [itemId]: quantity }),
            //         }
            //     }
            // );

            return ({
                ...prevOrder,
                buyQuantity: updatedQuantity
            });
        });
    };

    useEffect(() => {
        window.localStorage.setItem('order', JSON.stringify(order));
    }, [order]);

    return (
        <div>
            <h1>{TITLE}</h1>

            <form onSubmit={handleSubmit} className="flex flex-column align-items-center">
                <div id="products-container">
                    { products.map((item) => (
                        // TODO: something is wrong with this state update?
                        <PurchaseItem key={item.id} item={item} setItemQuantity={setItemQuantity} defaultQuantity={order.buyQuantity[item.id] || 0}/>
                    ))}
                </div>

                <button className="my-3 w-25 fw-bold rounded-pill border" type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default Purchase;
