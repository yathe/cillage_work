import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/saf.png"
import ag1 from "../../photos/saf1.png"
const CleanWater = ()=>{
    const images = [ag, ag1];
    const texts = [
      "UF , nano and  RO membrane filtration Arsenic/Chromium  removal filters",
      "Solar/Diesel  based mobile water treatment  system Water treatment systems and Water ATMs at community level"
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
  
    return (
    
      <div style={{ backgroundColor: "#e1b470", padding: "40px",
        textAlign: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#333", }}>
        <h1 style={{ textAlign: "center", fontSize: "4rem", fontWeight: "bold", color: "blue" }}>Safe Drinking Water</h1>
        <div style={{ width: "60%", margin: "0 auto 40px auto" }}>
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
                <h3 style={{ marginTop: "10px", fontSize: "18px", textAlign: "center" }}>{texts[index]}</h3>
              </div>
            ))}
          </Slider>
        </div>
  
        <p style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "left",margin:'20px 10px' }}>
        Safe drinking water is essential  for life. Non availability of  safe drinking 
water is a reason for many health issues in India. Due to 
Industrialization, agriculture and geogenic reasons, water is getting 
polluted and scarce. Unpredictable  flash floods,  large dry areas add 
to the woes. Foundation will promote technologies which can help 
provide clean and safe water 
        </p>
  
        <ul style={{ textAlign: "left", margin: "20px auto", padding: "0", width: "60%" }}>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          UF , nano and  RO membrane filtration
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Arsenic/Chromium  removal filters
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Solar/Diesel  based mobile water treatment  system
          </li>
          <li style={{ fontSize: "16px", color: "black", fontWeight: "400", margin: "10px 0" }}>
          Water treatment systems and Water ATMs at community level
          </li>
        
        </ul>
      </div>
     
     
    )
}
export default CleanWater;
