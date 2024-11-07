import React from "react";
import fo from "../../photos/fo.png"
import { useState } from "react";
const Founder = ()=>{
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
        src={fo}
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
         Dr. Lalit Varshney
      </div>
      <div
        style={{
          fontSize: "16px",
          color: "#555",
          margin:'30px 30px'
        }}
      >
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
export default Founder;