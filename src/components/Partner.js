import React, { useState } from "react";
import "./Partner.css";

const Partner = () => {
  // State hooks for storing form input values
  const [organization, setOrganization] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [interestArea, setInterestArea] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
 const handleSubmit = (e) => {
  e.preventDefault();

  // Construct the email subject and body with the form data
  const subject = encodeURIComponent("Partnership Inquiry");
  const body = encodeURIComponent(`
    Organization/Company: ${organization}
    Contact Person: ${contactPerson}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
    Area of Interest: ${interestArea}
    Message: ${message}
  `);

  // Redirect directly to the email client with pre-filled details
  window.location.href = `mailto:contact@cillage.org?subject=${subject}&body=${body}`;

  // Reset the form fields after submission
  setOrganization("");
  setContactPerson("");
  setEmail("");
  setPhone("");
  setAddress("");
  setInterestArea("");
  setMessage("");
};


  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-header">Partner With Us</h1>
        <p className="form-description">
          We offer the following partnership options, customizable to meet your 'Corporate Social Responsibility' goals:
        </p>
        <div className="info-section">
          <h3>Adopt a Project</h3>
          <p>
            Cillage India Foundation is starting a range of projects focused on clean water, sanitation, agriculture, and food processing at various locations in India. You can adopt projects aligned with your CSR goals based on location and domain. CIF will handle program direction, technical expertise, and periodic impact reports.
          </p>
          <h3>Corporate Donations</h3>
          <p>
            Your organization can donate towards specific projects or causes, including clean water, agriculture, sanitation, food processing, health care, and energy. CIF will ensure your contributions support impactful programs aligned with your preferences.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="organization">Organization/Company:</label>
            <input
              type="text"
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactPerson">Contact Person:</label>
            <input
              type="text"
              id="contactPerson"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="interestArea">Area of Interest:</label>
            <input
              type="text"
              id="interestArea"
              value={interestArea}
              onChange={(e) => setInterestArea(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="contact-info1">
          <h3>Our Contact Details</h3>
          <p><strong>Email:</strong> contact@cillage.org</p>
          <p><strong>Phone No.:</strong> 9869432338</p>
          <p><strong>WhatsApp No.:</strong> 9869432338</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
