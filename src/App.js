import './App.css';
import "./App.css";
// import { useState } from "react";
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
import Footer from './components/Footer/Footer';

/* The state for the app looks like this: */
// {
//   order: {
//     buyQuantity: {1: 1, 2: 1, 3: 2}
//   },
//   payment: {
//     card: {
//       number: '',
//       expiration: '',
//       cvv: ''
//     },
//     address: {
//         zip: '',
//         city: '',
//         state: '',
//         address1: '',
//         address2: ''
//     }
//   },
//   shipping: {
//     address_1: '',
//     address_2: '',
//     city: '',
//     state: '',
//     zip: '',
//   }
// }

function App() {
  // const [order, setOrder] = useState(
  //   // This needs to hold the state being stored in each of the pages
  //   // First pull from local storage)
  //   // If not, set the frame of the object
  //   JSON.parse(window.localStorage.getItem('order')) ||
  //   {
  //     payment: {
  //       card: {
  //         number: '',
  //         expiration: '',
  //         cvv: ''
  //       },
  //       address: {
  //           zip: '',
  //           city: '',
  //           state: '',
  //           address1: '',
  //           address2: ''
  //       }
  //     },
  //     items: {
  //       buyQuantity: {},
  //     }
  //   }
  // );

  // const setPayment = (payment) => {
  //   order.payment = payment;
  //   setOrder(order);
  // };

  // const setItems = (items) => {
  //   order.items = items;
  //   setOrder(order);
  // };

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
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
              <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
              <Route path="/purchase/viewOrder" element={<ViewOrder />} />
              <Route path="/purchase/viewConfirmation" element={<ViewConfirmation />} />
            </Routes>
          </div>

          <Footer />
        </div>

      </Router>
  );
}
export default App;
