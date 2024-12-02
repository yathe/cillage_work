
import React from 'react';
import './About_us.css';
import contactImage from '../photos/contact_page.jpg'; // Make sure this path is correct
import cillageLogo from '../photos/loho.jpg'; // Make sure this path is correct
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const About_us = () => {
  return (
    <div style={{backgroundColor:"#e1b470",marginTop:"-20px"}}>
    <div className="get-involved">
      {/* Top Banner with Background Image */}
      <div className="top-banner">
        <img src={contactImage} alt="Contact Background" className="banner-image" />
      </div>

      {/* Contact Details Section */}
      <div className="contact-section">
        <div className="logo-and-text">
          <div className="logo-and-name">
            <img src={cillageLogo} alt="Cillage Logo" className="cillage-logo" />
            <h5>CILLAGE INDIA FOUNDATION</h5>
          </div>

          {/* "Get in touch" positioned next to the logo */}
          <div className="overlay-text">
            <h2><span className="highlight">Get</span> in touch</h2>
          </div>
        </div>

        <div className="contact-info">
          {/* Address */}
          <div className="address">
            <h3>Registered Address:</h3>
            <p>903, Omkar CHSL, Plot-3, Sector-9,<br/> Ulwe, Navi Mumbai,<br/> Dist: Raigad</p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <h3>Social:</h3>
            <div className="icons">
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>

          {/* Email */}
          <div className="email">
            <h3>Email:</h3>
            <p>contact@cillage.org</p>
          </div>

          {/* Phone */}
          <div className="phone">
            <h3>Phone:</h3>
            <p>9869432338</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default About_us;
