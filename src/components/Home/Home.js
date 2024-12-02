import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1 style={{color: "#c9c9c9"}}>Welcome to Toaster City!</h1>
                <p style={{color: "#adadad"}}>We hold the world's largest supply of Toasters in the world <br></br>designed tech and culinary expoerts!</p>
                <img className="display-img" alt="" src={`${process.env.PUBLIC_URL}/images/display_toaster.png`}></img>
            </div>
        </div>
    );
};

export default Home;
