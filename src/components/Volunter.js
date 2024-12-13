import React, { useState } from 'react';
import './Volunter.css';
import emailjs from '@emailjs/browser';

const Volunter = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    city: '',
    occupation: '',
    pastExperience: '',
    valueAddition: '',
    skills: [],
    cv: null,
    cvBase64: '', // For Base64 conversion
  });

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: checked
          ? [...formData.skills, value]
          : formData.skills.filter((skill) => skill !== value),
      });
    } else if (type === 'file') {
      const file = e.target.files[0];
      if (file && file.size <= 50 * 1024) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            cv: file,
            cvBase64: reader.result.split(',')[1], // Base64 encoding
          });
        };
        reader.readAsDataURL(file);
      } else {
        alert('File size exceeds 50KB limit. Please upload a smaller file.');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   

   
    axios.post(`${process.env.REACT_APP_URL1}`,formData).
      then((res)=>{
        alert("Your data are successfully send");
      }).catch((error)=>{
        console.log("something error",error);
      })
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-header">Volunteer with Us</h1>
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
        <div className="button-container">
          <button className="submit-button" onClick={() => setFormVisible(true)}>
            Apply for Internship
          </button>
          <button className="submit-button" onClick={() => setFormVisible(true)}>
            Apply for Volunteership
          </button>
        </div>

        {formVisible && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
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
                value={formData.gender}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.city}
                onChange={handleChange}
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
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pastExperience">Mention past volunteering and internships you may have done:</label>
              <textarea
                id="pastExperience"
                name="pastExperience"
                placeholder="Enter your experiences"
                value={formData.pastExperience}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="valueAddition">What value addition you may bring to CIF’s overall program, if chosen for internship:</label>
              <textarea
                id="valueAddition"
                name="valueAddition"
                placeholder="Enter your response"
                value={formData.valueAddition}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Please post your CV here:</label>
              <input type="file" id="cv" name="cv" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Skill Sets you possess:</label>
              <div className="skills-checkboxes">
                <label>
                  <input
                    type="checkbox"
                    value="Designing Posters"
                    checked={formData.skills.includes('Designing Posters')}
                    onChange={handleChange}
                  />
                  Designing Posters
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Video Making"
                    checked={formData.skills.includes('Video Making')}
                    onChange={handleChange}
                  />
                  Video Making
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Video Editing"
                    checked={formData.skills.includes('Video Editing')}
                    onChange={handleChange}
                  />
                  Video Editing
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Research and Documentation"
                    checked={formData.skills.includes('Research & Documentation')}
                    onChange={handleChange}
                  />
                  Research & Documentation
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Event Organizing"
                    checked={formData.skills.includes('Event Organizing')}
                    onChange={handleChange}
                  />
                  Event Organizing
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Fund Raising"
                    checked={formData.skills.includes('Fund Raising')}
                    onChange={handleChange}
                  />
                  Fund Raising
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Working with Villagers"
                    checked={formData.skills.includes('Working with Villagers')}
                    onChange={handleChange}
                  />
                  Working with Villagers
                </label>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Volunter;
