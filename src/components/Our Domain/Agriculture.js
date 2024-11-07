
import React from "react";
import ag from "../../photos/ag.png";
import ag1 from "../../photos/ag1.png";
import ag2 from "../../photos/ag3.png";
import ag5 from "../../photos/ag5.png";
import ag6 from "../../photos/ag6.png";
import ag7 from "../../photos/ag8.png";
import ag8 from "../../photos/ag9.png";
import ag9 from "../../photos/ag10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";

const Agriculture = () => {
  const images = [ag, ag1, ag2, ag5, ag6, ag7, ag8, ag9];
  const texts = [
    "Soil nutrient analysis and suggesting targeted fertilization",
    "Promoting high yield crop varieties",
    "Promoting sustainable organic farming practices",
    "Drip irrigation, sprinkler systems",
    "Rain water harvesting and ground water recharge",
    "Bringing Drone based farming practices",
    "Efficient logistics and transportation",
    "Efficient post harvest management technologies"
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

  // Responsive font size based on screen width
  const getResponsiveFontSize = (large, small) => window.innerWidth > 768 ? large : small;

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
      {/* Responsive Heading */}
      <h1 
        style={{ 
          textAlign: "center", 
          fontSize: getResponsiveFontSize("4rem", "2.5rem"), 
          fontWeight: "bold", 
          color: "blue" 
        }}
      >
        Agriculture
      </h1>
      
      <div style={{ width: "80%", maxWidth: "800px", margin: "0 auto 40px auto" }}>
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
              <h3 style={{ marginTop: "10px", fontSize: getResponsiveFontSize("18px", "16px"), textAlign: "center" }}>
                {texts[index]}
              </h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* Responsive Secondary Heading */}
      <h1 
        style={{ 
          fontSize: getResponsiveFontSize("1.5rem", "1.25rem"), 
          fontWeight: "500", 
          color: "black", 
          textAlign: "center" 
        }}
      >
        Foundation is attempting to bring technologies in farming through:
      </h1>

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

export default Agriculture;
