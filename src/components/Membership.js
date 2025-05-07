import React, { useEffect, useState } from "react";
import "./Membership.css";
import { toast, Toaster } from "react-hot-toast";
import scanner from "../photos/scanner.png"
const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    city: "",
    occupation: "",
    pastExperience: "",
    valueAddition: "",
    skills: [],
    cv: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === "checkbox") {
      const skillValue = value;
      setFormData(prev => {
        const skills = checked
          ? [...prev.skills, skillValue]
          : prev.skills.filter(skill => skill !== skillValue);
        return { ...prev, skills };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  useEffect(() => {
    const isValid =
      formData.name &&
      formData.dob &&
      formData.gender &&
      formData.email &&
      formData.phone &&
      formData.city &&
      formData.occupation &&
      formData.pastExperience &&
      formData.valueAddition &&
      formData.skills.length > 0;

    setFormValid(isValid);
  }, [formData]);

  const saveToGoogleSheet = async () => {
    const scriptUrl = "https://sheetdb.io/api/v1/alvj213tvn7jj";
  
    try {
    
                  const params = new URLSearchParams();
                  params.append('email', formData.email);
                  params.append('name', formData.name);
                  params.append('dob', formData.dob);
                  params.append('gender', formData.gender);
                  params.append('phone', formData.phone);
                  params.append('city', formData.city);
                  params.append('occupation', formData.occupation);
                  params.append('pastExperience', formData.pastExperience);
                  params.append('valueAddition', formData.valueAddition);
                  params.append('cv', formData.cv);
                  params.append('skills', formData.skills);
                 
              
                  const response = await fetch(`${scriptUrl}?${params.toString()}`, {
                    method: 'POST',
                    mode: 'no-cors', // Important for bypassing CORS
                  });
              
                  // Note: With 'no-cors' you can't read the response
                  console.log('Data sent to Google Sheet',response);
                } catch (error) {
                  console.error('Error saving to Google Sheet:', error);
                }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent default page reload
    setShowUPIModal(true);
  };

  const handlePaymentContinue = async () => {
    try {
      await saveToGoogleSheet();

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "528f1f6b-74ad-4fd4-8d86-3782f1d3ea5c",
          name: formData.name,
          dob: formData.dob,
          gender: formData.gender,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          occupation: formData.occupation,
          pastExperience: formData.pastExperience,
          valueAddition: formData.valueAddition,
          skills: formData.skills.join(", "),
          cv: formData.cv ? formData.cv.name : "Not provided",
          payment_status: "initiated",
          autorespond: "true"
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setShowUPIModal(false);
        setFormData({
          name: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          city: "",
          occupation: "",
          pastExperience: "",
          valueAddition: "",
          skills: [],
          cv: null
        });
        toast.success("Data saved and email sent successfully!");
      } else {
        throw new Error(data.message || "Email sending failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed: " + error.message);
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setShowUPIModal(false);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <Toaster toastOptions={{ duration: 4000 }} />
        <h1 className="form-header">Become a Member</h1>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="528f1f6b-74ad-4fd4-8d86-3782f1d3ea5c" />

          {/* All other input fields remain the same */}

          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Name *</label>
            <input name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>DOB *</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Gender *</label>
            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>City *</label>
            <input name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Occupation *</label>
            <input name="occupation" value={formData.occupation} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Past Experience *</label>
            <textarea name="pastExperience" value={formData.pastExperience} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Value You Can Add *</label>
            <textarea name="valueAddition" value={formData.valueAddition} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Upload CV</label>
            <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleInputChange} />
            <small>(Optional)</small>
          </div>
          <div className="form-group">
            <label>Skills *</label>
            <div className="skills-checkboxes">
              {["Leadership", "Marketing", "Programming", "Design"].map(skill => (
                <label key={skill}>
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleInputChange}
                  />{" "}
                  {skill}
                </label>
              ))}
            </div>
            <small>(Select at least one)</small>
          </div>

          <button
            type="submit"
            className="form-submit-button"
            disabled={!formValid}
          >
            Submit and Proceed to Payment
          </button>
        </form>

        {/* Payment Modal */}
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
                  {/* <div className="upi-id">
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
                  </div> */}
                </div>

                {/* <div className="payment-buttons">
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
                </div> */}
              </div>
              <p>UPI ID: <strong>UPID9873382338@kotak</strong></p>
              <div className="modal-button-group">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("UPID9873382338@kotak");
                    toast.success("UPI ID copied to clipboard!");
                  }}
                  className="modal-button modal-button-primary"
                >
                  Copy UPI ID
                </button>
                <button
                  type="button"
                  onClick={handlePaymentContinue}
                  className="modal-button modal-button-secondary"
                >
                  I've Completed Payment
                </button>
                <button
                  onClick={() => setShowUPIModal(false)}
                  className="modal-button modal-button-danger"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {submitted && (
          <div className="donate-modal">
            <div className="donate-modal-content">
              <h2>Thank You!</h2>
              <p>Your membership application has been submitted successfully.</p>
              <p>We'll review your application and get back to you soon.</p>
              <button
                onClick={handleCloseModal}
                className="modal-button modal-button-primary"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;
