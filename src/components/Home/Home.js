import React from "react";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Topbar />
            <div className="home-content">
                <h1>Welcome to Toaster City!</h1>
                <p>We hold the world's largest supply of Toasters in the world!</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
