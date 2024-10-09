import logo from './logo.svg';
import './App.css';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Helmet } from 'react-helmet';

import Purchase from './components/Purchase/Purchase';
import PaymentEntry from "./components/PaymentEntry/PaymentEntry";
import ShippingEntry from "./components/ShippingEntry/ShippingEntry";
import ViewOrder from "./components/ViewOrder/ViewOrder";
import ViewConfirmation from "./components/PaymentEntry/Confirmation/Confirmation";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Lab 5</title>
      </Helmet>
      <Router>
        <div className="content justify-center">
          <Routes>
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/" element={<Navigate replace to="/purchase" />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder />} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
