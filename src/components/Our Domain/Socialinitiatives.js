import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/wa.png";
import ag1 from "../../photos/wa1.png";

const SocialInit = () => {
  const images = [ag, ag1];
  const texts = [
    "Hybrid Bio-Granular SBR Technology",
    "Radiation Technology for Sludge Hygienisation"
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Helper function to set responsive font size
  const getResponsiveFontSize = (desktopSize, tabletSize, mobileSize) => {
    if (window.innerWidth > 1024) return desktopSize;
    if (window.innerWidth > 768) return tabletSize;
    return mobileSize;
  };

  return (
    <div 
      style={{ 
        backgroundColor: "#e1b470", 
        padding: "40px",
        textAlign: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#333"
      }}
    >
      {/* Main Heading - responsive font size */}
      <h1 
        style={{ 
          textAlign: "center", 
          fontSize: getResponsiveFontSize("3.5rem", "2.8rem", "2rem"), 
          fontWeight: "bold", 
          color: "blue",
          marginBottom: "20px"
        }}
      >
        Waste Water Treatment & Sewage Sludge Hygenisation
      </h1>
      
      <div style={{ width: "90%", maxWidth: "800px", margin: "0 auto 40px auto" }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} style={{ textAlign: "center", color: "#333" }}>
            <img 
  src={src} 
  alt={`Slide ${index}`} 
  style={{ 
    width: "100%",
    height: "400px",
    borderRadius: "8px",
    objectFit: "contain",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }} 
/>
              <h3 
                style={{ 
                  marginTop: "10px", 
                  fontSize: getResponsiveFontSize("1.2rem", "1rem", "0.9rem"), 
                  textAlign: "center" 
                }}
              >
                {texts[index]}
              </h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* Secondary Heading - responsive font size */}
      <h2 
        style={{ 
          fontSize: getResponsiveFontSize("1.5rem", "1.25rem", "1rem"), 
          fontWeight: "400", 
          color: "black", 
          textAlign: "center",
          margin: "20px 10px"
        }}
      >
        Waste Water and Sludge Treatment Technologies will be promoted for Sustainable Living
      </h2>
    </div>
  );
}

export default SocialInit;
