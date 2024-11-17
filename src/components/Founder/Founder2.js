import React from "react";
import fo2 from "../../photos/fo2.png"
import { useState,useEffect } from "react";
const Founder2 = ()=>{
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
              <img src={fo2} alt="Technology Centre" style={imageStyle} />
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
       Arun Kumar Tiwari
    </div>
   
    <ul style={{ textAlign: "center", margin: "30px auto", padding: "0", width: "60%" }}>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Shri Tiwari is an Industrialist and social worker, very 
keen to restore environment by deploying modern 
technology and improve the quality of deprived 
citizen from rural area.
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          He is IITD alumnus  and licensee of DAE/DRDO/ISRO 
          technologies.
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Completed many projects  of DAE on water and Sanitation. Actively 
involved in many social initiatives.
          </li>
         
        
        </ul>
              </div>
          </div>

          
      </div>
  );
}
export default Founder2;
