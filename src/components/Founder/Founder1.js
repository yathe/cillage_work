import React from "react";
import fo1 from "../../photos/fo1.png"
import { useState } from "react";
const Founder1 = ()=>{
    const [isRotating, setIsRotating] = useState(true);

    // Click handler function to toggle rotation
    const handleClick = () => {
      setIsRotating(!isRotating); // isRotating ko toggle kar deta hai
    };
    return (
    <div style={{backgroundColor:'#e1b470'}}>
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
       
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={fo1}
        alt="Image Description"
        onClick={handleClick}
        style={{
          maxWidth: "300px",
          height: "auto",
          marginBottom: "20px",
          animation: isRotating ? "rotate 5s linear infinite" : "none",
          cursor: "pointer",
        }}
      />
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
         Shrikrishna Gupta
      </div>
      <div
        style={{
          fontSize: "16px",
          color: "#555",
           margin:'30px 30px'
        }}
      >
          Shri Gupta, Outstanding Scientist and former Project 
Director and OSD at DAE. He played a pivotal role in 
deployment of the  DAE Spin-off technologies for 
societal application in the field of Food Agriculture, 
Water, Environment and Health as Head Technology 
Transfer Division. An expert on particle accelerator 
rand vacuum  technology  by profession has largely  contributed to DAE accelerator program
      </div>
    </div>
    <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
    )
}
export default Founder1;