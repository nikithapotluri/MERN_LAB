import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="contact-footer" id="contact-footer">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <div className="contact-item">
          <h3>Address:</h3>
          <p>1234 Main Street, Anytown, India</p>
        </div>
        <div className="contact-item">
          <h3>Phone:</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h3>Email:</h3>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </div>
    </footer>
  );
}

export default Footer;