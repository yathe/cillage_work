import React, { useState } from "react";
import "./Partner.css";

const Partner = () => {
  const [organization, setOrganization] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [interestArea, setInterestArea] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      organization,
      contactPerson,
      email,
      phone,
      address,
      interestArea,
      message,
    };

    try {
      const response = await fetch(`${process.env.FORM}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Form submitted successfully!");
        alert("Thank you for your interest! Our team will contact you shortly.");
        console.log("Form Submitted:");

        // Reset form fields
        setOrganization("");
        setContactPerson("");
        setEmail("");
        setPhone("");
        setAddress("");
        setInterestArea("");
        setMessage("");
      } else {
        setStatus("Error submitting the form. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting the form. Please check your connection.");
      console.error("Form submission error:", error);
    }
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
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Enter your organization's name"
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Person:</label>
            <input
              type="text"
              name="contactPerson"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              placeholder="Enter the contact person's name"
              required
            />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label>Your Address:</label>
            <textarea
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Area of Interest:</label>
            <input
              type="text"
              name="interestArea"
              value={interestArea}
              onChange={(e) => setInterestArea(e.target.value)}
              placeholder="Enter your area of interest"
            />
          </div>
          <div className="form-group">
            <label>Your Message to Us:</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
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
