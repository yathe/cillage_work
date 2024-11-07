import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/san.png"
import ag1 from "../../photos/san1.png"
import ag2 from "../../photos/san2.png"
const Sanitation = ()=>{
    const images = [ag, ag1,ag2];
   
  
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
      
      <div style={{ backgroundColor: "#e1b470",padding: "40px",
        textAlign: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#333", }}>
        <h1 style={{ textAlign: "center", fontSize: "4rem", fontWeight: "bold", color: "blue" }}>Sanitation </h1>
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
               
              </div>
            ))}
          </Slider>
        </div>
  
        <h2 style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "center",margin:'20px 10px' }}>
        Sanitation in Indian Villages and Cities is crucial for reducing water 
borne diseases. Proper Sanitation prevents contamination of water 
source
        </h2>
        <h2 style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "center",margin:'20px 10px' }}>
        
 Sanitation facilities provide a safe, private space for personal hygiene
 Foundation will promote community led total sanitation by building 
and maintain toilets and implementing effective waste management 
technologies in villages and cities
        </h2>
  
       
      </div>
      
      
    )
}
export default Sanitation;
