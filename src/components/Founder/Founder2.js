import React from "react";
import fo2 from "../../photos/fo2.png"
import { useState } from "react";
const Founder2 = ()=>{
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
        src={fo2}
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
export default Founder2;