import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [message, setMessage] = useState('');
  const [identityProof, setIdentityProof] = useState('');
  const [identityProofNumber, setIdentityProofNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the backend to create the Razorpay order
    fetch('/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, name, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        const options = {
          key: data.key, // Your Razorpay key
          amount: data.amount, // Amount in paise
          currency: data.currency,
          name: 'NGO Name',
          description: 'Donation',
          order_id: data.orderId,
          handler: function (response) {
            alert('Payment Successful');
            // You can handle the response here, such as saving transaction info to your database
          },
          prefill: {
            name: name,
            email: email,
          },
          theme: {
            color: '#e1b470',
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      })
      .catch((err) => {
        console.log('Payment initiation failed:', err);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="container1">
      <div className="text-container">
        <h1>Donate to Our Cause</h1>
      </div>

      <div className="donate-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Donation Amount (₹)</label>
            <input
              type="number"
              placeholder="Donation Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="upi">UPI (Google Pay, PhonePe, etc.)</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              placeholder="Message (Optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            ></textarea>
          </div>

          <div className="form-group identity-proof-section">
            <label>Select Type of Identity Proof (Optional)</label>
            <select
              value={identityProof}
              onChange={(e) => setIdentityProof(e.target.value)}
            >
              <option value="">Select Type of Identity Proof</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
            </select>

            <input
              type="text"
              placeholder="Identity Proof Number"
              value={identityProofNumber}
              onChange={(e) => setIdentityProofNumber(e.target.value)}
              disabled={!identityProof}
            />
          </div>


          <button type="submit">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
