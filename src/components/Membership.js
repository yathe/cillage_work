import React, { useState, useEffect } from 'react';
import './Membership.css';
import scanner from "../photos/scanner.png";

const Membership = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [formValid, setFormValid] = useState(false);

  // Check if all required fields are filled
  useEffect(() => {
    const checkFormValidity = () => {
      const form = document.querySelector('form');
      if (!form) return false;
      
      const requiredFields = form.querySelectorAll('[required]');
      const allFilled = Array.from(requiredFields).every(field => {
        if (field.type === 'checkbox') {
          return field.checked;
        }
        return field.value.trim() !== '';
      });
      
      setFormValid(allFilled);
    };

    // Add event listeners to all form fields
    const form = document.querySelector('form');
    if (form) {
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
        input.addEventListener('change', checkFormValidity);
      });
    }

    // Initial check
    checkFormValidity();

    // Cleanup
    return () => {
      if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          input.removeEventListener('input', checkFormValidity);
          input.removeEventListener('change', checkFormValidity);
        });
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Store form data before submission
    const data = {
      name: form.name.value,
      dob: form.dob.value,
      gender: form.gender.value,
      email: form.email.value,
      phone: form.phone.value,
      city: form.city.value,
      occupation: form.occupation.value,
      pastExperience: form.pastExperience.value,
      valueAddition: form.valueAddition.value,
      skills: Array.from(form.querySelectorAll('input[name="skills"]:checked')).map(el => el.value).join(', '),
      cv: form.cv.files[0]?.name || 'No file uploaded'
    };
    
    setFormData(data);
    setShowUPIModal(true);
  };

  const handlePaymentContinue = () => {
    // Submit to Web3Forms after payment confirmation
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "528f1f6b-74ad-4fd4-8d86-3782f1d3ea5c",
        ...formData,
        payment_status: "initiated",
        autorespond: "true",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          setShowUPIModal(false);
          document.querySelector('form').reset();
          setFormValid(false); // Reset form validity after submission
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
    setShowUPIModal(false);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-header">Member with Us</h1>
        <p className="form-description">
          Volunteering for a cause is a highly rewarding experience. Your work, whether on the field or behind the scenes, will help us make Indian Villages a better place to live.
        </p>
        <p className="form-description">
          At Cillage India Foundation, we believe that all of us can make a difference in our own way. This is why we will customize the volunteering programs depending on our strengths and our needs.
        </p>
        <div className="info-section">
          <h3>Current Intern Positions:</h3>
          <ul>
            <li>Technology Research and Report Preparation</li>
            <li>Video making on various rural technologies and editing</li>
            <li>Designing Posters on various technologies being promoted by CIF</li>
          </ul>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="528f1f6b-74ad-4fd4-8d86-3782f1d3ea5c" />
          
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              placeholder="Enter your gender"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Enter your occupation"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pastExperience">Mention past volunteering and internships you may have done:</label>
            <textarea
              id="pastExperience"
              name="pastExperience"
              placeholder="Enter your experiences"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="valueAddition">What value addition you may bring to CIF's overall program, if chosen for internship:</label>
            <textarea
              id="valueAddition"
              name="valueAddition"
              placeholder="Enter your response"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label>Please post your CV here:</label>
            <input type="file" id="cv" name="cv" />
          </div>
          
          <div className="form-group">
            <label>Skill Sets you possess:</label>
            <div className="skills-checkboxes">
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Designing Posters"
                />
                Designing Posters
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Video Making"
                />
                Video Making
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Video Editing"
                />
                Video Editing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Research & Documentation"
                />
                Research & Documentation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Event Organizing"
                />
                Event Organizing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Fund Raising"
                />
                Fund Raising
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Working with Villagers"
                />
                Working with Villagers
              </label>
            </div>
          </div>
          
          <div className="button-container">
            <button 
              type="submit" 
              className="submit-button"
              disabled={!formValid}
            >
              {formValid ? "Submit and Proceed to Payment" : "Submit"}
            </button>
          </div>
        </form>

        {/* UPI Payment Modal */}
        {showUPIModal && (
          <div className="donate-modal">
            <div className="donate-modal-content">
              <h2>Complete Your Payment</h2>
              <div className="upi-payment-container">
                <p>Please scan the QR code or use the UPI ID below to complete your payment:</p>
                
                <div className="upi-details">
                  <div className="qr-code-placeholder">
                    <img src={scanner} alt="UPI QR Code" />
                  </div>
                  <div className="upi-id">
                    <p>UPI ID:</p>
                    <p className="upi-id-value">UPID9873382338@kotak</p>
                    <button 
                      className="copy-button"
                      onClick={() => {
                        navigator.clipboard.writeText('UPID9873382338@kotak');
                        alert('UPI ID copied to clipboard!');
                      }}
                    >
                      Copy UPI ID
                    </button>
                  </div>
                </div>
                
                <div className="payment-buttons">
                  <button 
                    className="payment-continue-button"
                    onClick={handlePaymentContinue}
                  >
                    I've Completed Payment
                  </button>
                  <button 
                    className="payment-cancel-button"
                    onClick={() => setShowUPIModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submission Success Modal */}
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

export default Membership;