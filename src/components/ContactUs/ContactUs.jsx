import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">      
      <h1>Contact Us</h1>
      
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>If you have any questions, issues, or need assistance with your order, please reach out to our support team.</p>
        <p>
          <strong>Email:</strong> support@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Business Hours:</strong> Monday - Friday, 9 AM - 5 PM (EST)
        </p>
      </section>

      <section className="support-policies">
        <h2>Support & Return Policies</h2>
        <p>Our goal is to ensure that you are satisfied with your purchase. If you need to return an item, please follow our return policy outlined below:</p>
        <ul>
          <li>Returns are accepted within 30 days of purchase.</li>
          <li>Items must be in their original condition and packaging.</li>
          <li>To initiate a return, please contact our support team via email or phone.</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <h3>How can I track my order?</h3>
        <p>You will receive a tracking number via email once your order has shipped.</p>

        <h3>What should I do if my order is damaged?</h3>
        <p>Please contact our support team immediately if your order arrives damaged, and we will assist you with a replacement or refund.</p>

        <h3>Can I change my order after it has been placed?</h3>
        <p>If you need to make changes to your order, please contact us within 24 hours of placing your order for the best chance of success.</p>
      </section>
    </div>
  );
};

export default ContactUs;
