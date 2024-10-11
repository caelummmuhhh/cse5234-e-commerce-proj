import React from "react";
import "./AboutUs.css";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";

const AboutUs = () => {
  return (
    <div className="about-us">
          <Topbar />
          <Footer />
      <h1>About Us</h1>
      <p>Welcome to Toaster City! We are focused on bringing the best Toasters to you!</p>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Give our customers the best choices of Toasters on the planet.</p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Teamwork</li>
          <li>Excellence</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>Ethan Tsou</h3>
          <p>Toaster Diplomat</p>
        </div>
        <div className="team-member">
          <h3>Ryan Tussing</h3>
          <p>Chief Toaster Officer</p>
        </div>
        <div className="team-member">
          <h3>Caelum Vo</h3>
          <p>Toaster CEO</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at toasterecity@gmail.com.</p>
      </section>
    </div>
  );
};

export default AboutUs;
