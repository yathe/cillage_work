import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/sol.png"
import ag1 from "../../photos/sol2.png"
const SolarEnergy = ()=>{
    const images = [ag, ag1];
   
  
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
        <h1 style={{ textAlign: "center", fontSize: "4rem", fontWeight: "bold", color: "blue" }}> Solar Energy</h1>
        <div style={{ width: "60%", margin: "0 auto 40px auto" }}>
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} style={{ textAlign: "center", color: "#333",height:'500px' }}>
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
  
        <p style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "left",margin:'20px 10px' }}>
        As the Photo Voltaic Solar Panels technology   is 
becoming more affordable,  solar electric panels 
are becoming an energy source of choice for far 
flung off grid locations.  Solar panels are also being 
seen as a backup power source to ensure a reliable 
power supply in the regions where load shedding is 
very frequent.
        </p>
        <p style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "left",margin:'20px 10px' }}>
        Solar Water Pump Systems is another emerging 
area for large scale deployment in Indian Villages.
        </p>
        <p style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "left",margin:'20px 10px' }}>
        Government is  supporting household solar energy 
programme by offering sizeable subsidy for 
individual and community based solar 
installations.
        </p>

        <p style={{ fontSize: "1rem", fontWeight: "400", color: "black", textAlign: "left",margin:'20px 10px' }}>
        Foundation will provide knowhow and will help 
developing an eco system to make solar 
installations, their operations and maintenance 
sustainable. This will generate local employment 
and train youths  in this emerging technology area.

        </p>
  
       
      </div>
     
      
    )
}
export default SolarEnergy;
