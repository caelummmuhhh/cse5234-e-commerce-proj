import './App.css';
import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Helmet } from 'react-helmet';

import Purchase from './components/Purchase/Purchase';
import PaymentEntry from "./components/PaymentEntry/PaymentEntry";
import ShippingEntry from "./components/ShippingEntry/ShippingEntry";
import ViewOrder from "./components/ViewOrder/ViewOrder";
import ViewConfirmation from "./components/Confirmation/Confirmation";
import Home from "./components/Home/Home";
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';

function App() {
  const [order, setOrder] = useState(
    JSON.parse(window.localStorage.getItem('order')) ||
    {
      payment: {
        card: {
          number: '',
          expiration: '',
          cvv: '',
          name: '',
        },
        address: {
          zip: '',
          city: '',
          state: '',
          address1: '',
          address2: '',
        }
      },
      shipping: {
        zip: '',
        city: '',
        state: '',
        address1: '',
        address2: '',
      },
      items: {
        buyQuantity: {},
      }
    }
  );

  useEffect(() => {
    try {
      window.localStorage.setItem('order', JSON.stringify(order));
    } catch (error) {
      console.error(error);
    }
  }, [order]);

  return (
    <Router>
      <Helmet>
        <title>Toaster City</title>
      </Helmet>


      <div className="flex flex-column align-items-center">
        <Topbar />

        <div className="content my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/purchase" element={<Purchase orderProp={order} setOrderProp={setOrder} />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry orderProp={order} setOrderProp={setOrder} />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry orderProp={order} setOrderProp={setOrder} />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder orderProp={order} setOrderProp={setOrder} />} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation />} />
          </Routes>
        </div>

        <Footer />
      </div>

    </Router>
  );
}
export default App;
