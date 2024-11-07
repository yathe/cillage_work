import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ag from "../../photos/f.png";
import ag1 from "../../photos/f1.png";
import ag2 from "../../photos/f2.png";
import ag3 from "../../photos/f3.png";
import ag4 from "../../photos/f4.png";
import ag5 from "../../photos/f5.png";

const FoodProcessing = () => {
  const images = [ag, ag1, ag2, ag3, ag4, ag5];
  const texts = [
    "Enhancing Safety of food items",
    "Extension of shelf life of perishable food items",
    "Delay in ripening of fruits and vegetables",
    "Cost effective transportation under refrigeration",
    "Supply of Food/ water in emergency situations like flood/landslides",
    "Promotion of self-help groups (SHG) for value addition to domestic products/services by providing support related to packaging, digital market linkages, and quality certification."
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  // Helper function for responsive font size
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
        color: "#333",
      }}
    >
      <header style={{ marginBottom: "30px" }}>
        {/* Responsive Heading */}
        <h1
          style={{
            fontSize: getResponsiveFontSize("3.5rem", "2.8rem", "2rem"), // Adjust font size based on device
            fontWeight: "bold",
            color: "#2c3e50",
          }}
        >
          Food Preservation and Food Irradiation
        </h1>
      </header>

      <div style={{ width: "80%", maxWidth: "800px", margin: "0 auto 40px auto" }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} style={{ textAlign: "center" }}>
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
                  color: "#333",
                }}
              >
                {texts[index]}
              </h3>
            </div>
          ))}
        </Slider>
      </div>

      <section
        style={{
          margin: "20px auto",
          width: "80%",
          maxWidth: "800px",
          textAlign: "left",
        }}
      >
        <ul style={{ padding: 0, listStyleType: "none" }}>
          {texts.map((text, index) => (
            <li
              key={index}
              style={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "400",
                margin: "10px 0",
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FoodProcessing;
