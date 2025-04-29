import React, { useState } from "react";
import "./Donate.css";
import axios from "axios";

const Donate = () => {
  // State to store form data
  const [formDatas, setFormDatas] = useState({
    fullName: "",
    dateBirth: "",
    email: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    panNumber: "",
    amount: "",
    bankAccount: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDatas({
      ...formDatas,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit to Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "528f1f6b-74ad-4fd4-8d86-3782f1d3ea5c",
        name: formDatas.fullName,
        dateOfBirth: formDatas.dateBirth,
        email: formDatas.email,
        mobileNumber: formDatas.mobileNumber,
        address: formDatas.address,
        pincode: formDatas.pincode,
        city: formDatas.city,
        state: formDatas.state,
        panNumber: formDatas.panNumber,
        amount: formDatas.amount,
        bankAccount: formDatas.bankAccount,
        agree: formDatas.agree ? "Agreed" : "Not Agreed",
        autorespond: "true",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          // Also save to your backend
          axios
            .post(`${process.env.REACT_APP_URL}`, formDatas)
            .then((res) => {
              console.log("Data saved to backend:", res);
            })
            .catch((error) => {
              console.error("Failed to save data to backend:", error);
            });
          
          // Reset form
          setFormDatas({
            fullName: "",
            dateBirth: "",
            email: "",
            mobileNumber: "",
            address: "",
            pincode: "",
            city: "",
            state: "",
            panNumber: "",
            amount: "",
            bankAccount: "",
            agree: false,
          });
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  const handleCloseModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="boxer">
      <div className="donate-container">
        <h1 className="donate-title">Donation Form</h1>

        <form onSubmit={handleSubmit} className="donate-form">
          <input type="hidden" name="access_key" value="528f1f6b-74ad-4fd4-8d86-3782f1d3ea5c" />
          
          {/* Form Fields */}
          <div className="donate-form-row">
            <div className="donate-form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formDatas.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="donate-form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateBirth"
                value={formDatas.dateBirth}
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
                value={formDatas.email}
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
                value={formDatas.mobileNumber}
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
              value={formDatas.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            ></textarea>
          </div>

          {/* Additional Fields */}
          <div className="donate-form-row">
            <div className="donate-form-group">
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formDatas.pincode}
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
                value={formDatas.city}
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
                value={formDatas.state}
                onChange={handleInputChange}
                placeholder="Enter state"
              />
            </div>
            <div className="donate-form-group">
              <label>PAN Number</label>
              <input
                type="text"
                name="panNumber"
                value={formDatas.panNumber}
                onChange={handleInputChange}
                placeholder="Enter PAN number"
              />
            </div>
          </div>

          <div className="donate-form-group">
            <label>Amount to be Donated *</label>
            <input
              type="number"
              name="amount"
              value={formDatas.amount}
              onChange={handleInputChange}
              placeholder="Enter donation amount"
              required
            />
          </div>

          <div className="donate-form-group">
            <label>Foundation's Bank Account Detail</label>
            <textarea
              name="bankAccount"
              value={formDatas.bankAccount}
              onChange={handleInputChange}
              placeholder="Enter bank account details"
              required
            ></textarea>
          </div>

          <div className="donate-footer">
            <p className="donate-note">
              Please note that if you do not provide your PAN Number, you will not be able to claim 50% tax exemption u/s 80G in India.
            </p>
            <div>
              <input
                type="checkbox"
                name="agree"
                checked={formDatas.agree}
                onChange={handleInputChange}
              />
              <label>
                I hereby declare that I am a citizen of India and making this donation out of my own funds.
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
                Thanks for your interest in supporting the foundation. A confirmation email has been sent to your email address!
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
