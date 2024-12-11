import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  const whatsappNumber = "9224688900"; // Replace with your NGO's number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="container2">
      {/* Heading Section */}
      <div className="text-container1">
        <h1>Reach Out to Us</h1>
        
      </div>

      {/* Content Section */}
      <div className="grid2">
        <div className="section2">
          <h5 className="label2">Chat with Us on WhatsApp</h5>
          <p className="description1">
          We are here to assist you! Chat with us on WhatsApp for support, queries, or collaboration.
        </p>
          <p className="description1">
            Have questions or need assistance? Connect with us instantly on WhatsApp. We’re just a click away!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Logo"
              className="whatsapp-icon"
            />
            Start Chat
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h3>Why Contact Us?</h3>
        <ul className="info-list">
          <li>Get personalized support from our team.</li>
          <li>Learn more about our initiatives and how you can contribute.</li>
          <li>Collaborate with us to make a difference in the community.</li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="line1"></div>
    </div>
  );
};

export default Whatsapp;
