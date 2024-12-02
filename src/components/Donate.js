import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    panNumber: "",
    amount: "",  // Added field for amount
    bankAccount: "",  // Added field for bank account
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // You can replace this with a database API call
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="boxer">
    <div className="donate-container">
      <h1 className="donate-title">Donation Form</h1>

      <form onSubmit={handleSubmit} className="donate-form">
        <div className="donate-form-row">
          <div className="donate-form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="donate-form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="donate-form-row">
          <div className="donate-form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="donate-form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
        </div>

        <div className="donate-form-group">
          <label>Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>

        <div className="donate-form-row">
          <div className="donate-form-group">
            <label>Pincode *</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              placeholder="Enter pincode"
              required
            />
          </div>
          <div className="donate-form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter city"
            />
          </div>
        </div>

        <div className="donate-form-row">
          <div className="donate-form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter state"
            />
          </div>
          <div className="donate-form-group">
            <label>PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              placeholder="Enter PAN number"
            />
          </div>
        </div>

        {/* Added new fields */}
        <div className="donate-form-group">
          <label>Amount to be Donated *</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter donation amount"
            required
          />
        </div>

        <div className="donate-form-group">
          <label>Bank Account Details *</label>
          <textarea
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleInputChange}
            placeholder="Enter your bank account details"
            required
          ></textarea>
        </div>

        <div className="donate-footer">
          <p className="donate-note">
            Please note that if you do not provide your PAN Number, you will not
            be able to claim 50% tax exemption u/s 80G in India.
          </p>
          <div>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            <label htmlFor="agree">
              I hereby declare that I am a citizen of India and making this
              donation out of my own funds.
            </label>
          </div>
        </div>

        <button type="submit" className="donate-submit-button">
          Continue to Payment
        </button>
      </form>

      {submitted && (
        <div className="donate-modal">
          <div className="donate-modal-content">
            <h2>Thank You!</h2>
            <p>
              Thanks for your interest in supporting the foundation. Our team
              will reach you shortly.
            </p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Donate;
