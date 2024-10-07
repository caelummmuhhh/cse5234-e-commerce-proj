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

import Purchase from "./components/purchase";
import PaymentEntry from "./components/paymentEntry";
import ShippingEntry from "./components/shippingEntry";
import ViewOrder from "./components/viewOrder";
import ViewConfirmation from "./components/paymentEntry/Confirmation";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Lab 5</title>
      </Helmet>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
