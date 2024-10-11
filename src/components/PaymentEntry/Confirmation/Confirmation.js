import React from 'react';
import Topbar from '../../topbar/Topbar';
import Footer from '../../footer/Footer';

const Confirmation = () => {
    let TITLE = 'Order Confirmed';

    return (
        <div>
            <Topbar />
            <Footer />
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
