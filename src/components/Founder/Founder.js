import React from "react";
import fo from "../../photos/fo.png"
import { useState,useEffect } from "react";
const Founder = ()=>{
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
              <img src={fo} alt="Technology Centre" style={imageStyle} />
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
       Dr. Lalit Varshney
    </div>
   
                  <p>
                  Dr. Varshney is  former Senior Professor and 
Outstanding Scientist from  BARC. He is pioneer in 
Radiation technology applications in Health Care, 
Environment and Industry. He has  several journal 
publications, patents and technology transfers and 
also IAEA expert on such applications. Medical 
product sterilization, sludge hygenisation, waste 
water treatment, food processing, polymers and composites, hydrogels, 
plant growth promoters etc are some of his contribution to national 
program
                  </p>
              </div>
          </div>

          
      </div>
  );
}
export default Founder;
