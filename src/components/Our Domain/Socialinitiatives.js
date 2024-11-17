import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/wa.png";
import ag1 from "../../photos/wa1.png";
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
              <h1>Waste water Treatment & sewage sludge hygiene</h1>
          </header>

          <div style={sectionStyle}>
              <img src={ag} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Hybrid Bio-Granular SBR Technology</h2>
                  <p>
                  Wastewater management is a critical component of ensuring public health and environmental sustainability, particularly in regions facing water scarcity. The Hybrid Bio-Granular Sequencing Batch Reactor (SBR) Technology is an advanced solution that combines biological and granular processes to treat wastewater efficiently. This technology is designed to deliver cleaner and safer water, providing a sustainable option for communities, industries, and agriculture.
                  </p>
                  <p>
                  The hybrid SBR system operates through a sequence of processes that allow for the effective removal of organic pollutants, nitrogen, and phosphorus. A key feature of this system is its use of granular sludge, which settles more rapidly than conventional sludge. This results in better separation of treated water and biomass, significantly improving the quality of the treated effluent.
                  </p>
              </div>
          </div>

          <div style={sectionStyle}>
             
              <div style={contentStyle}>
                  <h2 style={missionTitleStyle}>Radiation Technology for Sludge Hygienisation</h2>
                  <p>
                  Proper management of wastewater sludge is critical for environmental protection and sustainable waste practices. Radiation Technology for Sludge Hygienisation is an innovative solution that ensures sludge is treated effectively, making it safe for disposal or reuse. This cutting-edge technology uses ionizing radiation to eliminate harmful pathogens and microorganisms present in the sludge, transforming it into a hygienized and safer product.
                  </p>
                  <p>
                  The process involves exposing the sludge to radiation, such as electron beams or gamma rays, which disrupt the DNA of harmful bacteria, viruses, and other pathogens. This ensures the treated sludge is free from contaminants, significantly reducing risks to public health and the environment.
                  </p>
              </div>
              <img src={ag1} alt="Technology Centre" style={imageStyle} />
          </div>
      </div>
  );
}

export default SocialInit;
