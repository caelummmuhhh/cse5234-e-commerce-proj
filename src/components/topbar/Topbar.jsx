import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="utilities">
        <Link to="/" className="btn-home">
        <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="home" className="logo" />
        </Link>
      </div>
      <div className ="btn-menu">
        <button className="btn-menu">Purchase</button>
      </div>
      <div className ="btn-contact-us">
        <button className="btn-contact-us">Contact Us</button>
      </div>
      <div className="btn-about-us">
        <button className="btn-about-us">About Us</button>
      </div>
    </div>
  );
};

export default Topbar;
