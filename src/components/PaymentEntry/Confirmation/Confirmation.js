import React from 'react';

const Confirmation = () => {
    let TITLE = 'Order Confirmed';

    return (
        <div>
            <div style={{marginTop: '80px'}}></div>
            <h1>{TITLE}</h1>
            <p style={{ fontSize: '16px' }}>
                Thank you for your purchase!<br />
                Order Code: 1234567890
            </p>
        </div>
    );
};

export default Confirmation;
