import React, { useState } from "react";
import "./Partner.css";

const Partner = () => {
  const [formData, setFormData] = useState({
    organization: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    interestArea: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! Our team will contact you shortly.");
    console.log("Form Submitted:", formData);
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Organisation/Company:</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Enter your organization's name"
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Person:</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Enter the contact person's name"
              required
            />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label>Your Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Area of Interest:</label>
            <input
              type="text"
              name="interestArea"
              value={formData.interestArea}
              onChange={handleChange}
              placeholder="Enter your area of interest"
            />
          </div>
          <div className="form-group">
            <label>Your Message to Us:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="contact-info1">
          <h3>Our Contact Details</h3>
          <p><strong>Address:</strong> (Your organization's address)</p>
          <p><strong>Email:</strong> (Your organization's email)</p>
          <p><strong>Phone No.:</strong> (Your organization's phone number)</p>
          <p><strong>WhatsApp No.:</strong> (Your organization's WhatsApp number)</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
