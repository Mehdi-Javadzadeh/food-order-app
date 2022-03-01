import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assests/contact.jpeg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter your Name" />
          <label htmlFor="name">Email</label>
          <input type="email" name="name" placeholder="Enter email address" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your massage"
          ></textarea>
          <Link to="/menu">
            <button type="submit">Send Message</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;
