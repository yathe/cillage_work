import React from "react";
import fo1 from "../../photos/fo1.png"
import { useState,useEffect } from "react";
const Founder1 = ()=>{
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

  
  return (
      <div style={containerStyle}>
          
          <div style={sectionStyle}>
              <img src={fo1} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        color:'black',
        textAlign:'center'
      }}
    >
      Shrikrishna Gupta
    </div>
   
                  <p>
                  Shri Gupta, Outstanding Scientist and former Project 
Director and OSD at DAE. He played a pivotal role in 
deployment of the  DAE Spin-off technologies for 
societal application in the field of Food Agriculture, 
Water, Environment and Health as Head Technology 
Transfer Division. An expert on particle accelerator 
rand vacuum  technology  by profession has largely  contributed to DAE accelerator program

                  </p>
              </div>
          </div>

          
      </div>
  );
}
export default Founder1;
