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
        <Link to="/purchase" className="btn-menu">Purchase</Link>
      </div>
      <div className ="btn-contact-us">
        <Link to="/ContactUs" className="btn-contact-us">Contact Us</Link>
      </div>
      <div className="btn-about-us">
        <Link to="/AboutUs" className="btn-about-us">About Us</Link>
      </div>
    </div>
  );
};

export default Topbar;
