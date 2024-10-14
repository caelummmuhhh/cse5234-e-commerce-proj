import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
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
          <h6>Toaster Diplomat</h6>
          <p>
            In the illustrious realm of culinary craftsmanship, where art and innovation converge,
            few stand as tall as the legendary Ethan Tsou, the Toaster Diplomat of Toaster City.
            With over 120 years of unwavering dedication to the toasting industry, Ethan has not only 
            witnessed the evolution of sliced bread in 1928 and the toaster's invention in the 1910s, 
            but has actively shaped its destiny since then.
            </p>
        </div>
        <div className="team-member">
          <h3>Ryan Tussing</h3>
          <h6>Chief Toaster Officer</h6>
          <p>
            Few innovators have toasted the boundaries of culinary innovation quite like Ryan Tossing, 
            our esteemed Chief Toaster Officer (CTO), a pioneering spirit whose crispy toasting journey 
            began in the 1920s. As an inventor and visionary, Ryan’s culinary luminary has been at the 
            forefront of the kitchen appliance revolution, crafting groundbreaking technologies that have 
            forever changed the flow of every kitchen.
          </p>
        </div>
        <div className="team-member">
          <h3>Caelum Vo</h3>
          <h6>Toaster CEO</h6>
          <p>
            In the realm of gastronomy, few names radiate as powerfully as Caelum Vo, a legendary chef 
            whose culinary artistry dazzled palates across the globe. With a storied career marked by 
            the ownership of multiple Michelin-starred restaurants, this culinary virtuoso has now turned 
            his attention to the world of innovation, blending gourmet expertise with groundbreaking technology.
          </p>
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
