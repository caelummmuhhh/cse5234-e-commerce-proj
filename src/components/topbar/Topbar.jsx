import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar sticky-top flex flex-row justify-content-between px-4">
      <div className="utilities">
        <Link to="/" className="p-3 btn-home ">
          <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="home" className="logo" />
        </Link>
      </div>
      <div className="flex flex-row justify-content-evenly">
        <div className="btn-menu flex justify-content-center">
          <Link to="/purchase" className="btn-menu flex justify-content-center fw-bold text-decoration-none">Purchase</Link>
        </div>
        <div className="btn-contact-us flex justify-content-center">
          <Link to="/ContactUs" className="btn-contact-us flex justify-content-center fw-bold text-decoration-none">Contact Us</Link>
        </div>
        <div className="btn-about-us">
          <Link to="/AboutUs" className="btn-about-us flex justify-content-center fw-bold text-decoration-none">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
