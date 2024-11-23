import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../photos/OIP.jpg";
import ag4 from "../../photos/Smart.jpg";
import { useState } from "react";
import { useEffect } from "react";
const SocialInit = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);
console.log(windowWidth);
  const containerStyle = {
      width: windowWidth > 768 ? '100%' : windowWidth > 480 ? '100%' : '100%',
      padding: '20px',
      backgroundColor: '#e1b470',
      lineHeight: '1.6',
      color: '#4a3c2f',
      fontSize: windowWidth > 768 ? '18px' : windowWidth > 480 ? '16px' : '14px',
      textAlign: 'justify',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
      textAlign: 'center',
      fontSize: windowWidth > 768 ? '28px' : windowWidth > 480 ? '20px' : '15px',
      color: '#6a4f4b',
      paddingBottom: '10px',
      textTransform: 'uppercase',
  };

  const sectionStyle = {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      gap: '20px',
      marginTop: '20px',
      marginBottom: '20px',
      flexDirection: windowWidth > 768 ? 'row' : 'column',
  };

  const imageAndContentWidth = {
      width: windowWidth > 768 ? '45%' : '100%',
  };

  const imageStyle = {
      ...imageAndContentWidth,
      height:'400px',
      objectFit: 'contain',
      borderRadius: '8px',
  };
  
  const contentStyle = {
      ...imageAndContentWidth,
      padding: windowWidth > 768 ? '20px' : windowWidth > 480 ? '15px' : '10px',
      border: '1px solid #d3b82f',
      borderRadius: '10px',
      fontFamily: 'Georgia, serif',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const missionTitleStyle = {
      fontSize: windowWidth > 768 ? '28px' : windowWidth > 480 ? '24px' : '20px',
      color: '#6a4f4b',
      textAlign: 'center',
      marginBottom: '15px',
  };

  return (
      <div style={containerStyle}>
          <header style={headerStyle}>
              <h1>Virtual Care & Smart Learning</h1>
          </header>
          <div style={sectionStyle}>
              <img src={img1} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Digital Clinic</h2>
                  <p>
                  A digital clinic leverages technology to provide healthcare services remotely, making medical consultations more accessible and efficient. These clinics use telemedicine platforms to connect patients with healthcare professionals via video calls, phone consultations, or messaging systems. Digital clinics often offer features like online appointment scheduling, electronic health records, prescription management, and remote monitoring of chronic conditions. By reducing the need for in-person visits, digital clinics can save time for both patients and doctors, and provide medical care to those in remote or underserved areas. Prescription management is another vital component of digital clinics. Patients can receive their prescriptions electronically, which can then be sent directly to their chosen pharmacy. This not only saves time but also reduces the risk of errors associated with handwritten prescriptions.
                  </p>
              </div>
          </div>

          <div style={sectionStyle}>
             
              <div style={contentStyle}>
                  <h2 style={missionTitleStyle}>Smart Education: EdTech</h2>
                  <p>
                  Smart Education leverages advanced technologies to enhance and personalize the learning experience. It integrates tools like artificial intelligence, virtual reality, and data analytics to create interactive and adaptive educational environments. This approach allows for real-time feedback, tailored lesson plans, and engaging learning modules that cater to individual student needs and learning styles. Smart Education also facilitates remote learning, making quality education accessible to students regardless of their geographical location. By fostering a more engaging and efficient learning process, Smart Education aims to prepare students for the demands of the modern world.
                  </p>
                  <p>
                  Smart Education breaks down geographical barriers, making education accessible to students in remote or underserved areas. Online platforms and digital classrooms enable students to learn from anywhere, at any time.
                  </p>
              </div>
              <img src={ag4} alt="Technology Centre" style={imageStyle} />
          </div>
      </div>
  );
}

export default SocialInit;
