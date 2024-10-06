import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewOrder = () => {
    const location = useLocation();
    const order = location.state.order || {};
    console.log(order);
    let TITLE = 'View Order Page';

    return (
        <div>
            <h1>
                {TITLE}
            </h1>
        </div>
    );
};

export default ViewOrder;