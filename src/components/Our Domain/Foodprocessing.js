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
import Effective from "../../photos/Effective.jpg";
import Supply from "../../photos/Supply.jpg";
import { useState } from "react";
import { useEffect } from "react";
const FoodProcessing = () => {
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
      fontWieght:"400",
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
          <header>
              <h1 style={headerStyle}>Food Preservation and Food Irradiation</h1>
          </header>

          <div style={sectionStyle}>
              <img src={ag} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Enhancing Safety of Food Items</h2>
                  <p>
                  Enhancing the safety of food items is crucial for ensuring that the food we consume is free from harmful pathogens and contaminants. One of the methods used to improve food safety is food irradiation, a process that involves exposing food to ionizing radiation. This technique helps eliminate harmful microorganisms, such as bacteria, viruses, and pests, that could cause foodborne illnesses or spoilage
                  </p>
                  <p>
                  By killing bacteria, molds, and insects, irradiation slows down the decay process, preserving the food's freshness and nutritional value for a longer period. This is particularly beneficial for perishable items such as fruits, vegetables, meat, and poultry, as it reduces waste and ensures that these products remain safe and edible during transportation and storage.
                  </p>
              </div>
          </div>

          <div style={sectionStyle}>
              
              <div style={contentStyle}>
                  <h2 style={missionTitleStyle}>Extension of Shelf Life of Perishable Food Items</h2>
                  <p>
                  Extending the shelf life of perishable food items is essential for reducing food waste and ensuring that food remains safe and nutritious for longer periods. Various preservation methods, including refrigeration, freezing, and vacuum packing, are commonly used to slow down the natural spoilage process of food. 
                  </p>
                  <p>
                  Refrigeration is one of the most common methods for extending the shelf life of perishable foods such as dairy products, fruits, vegetables, and meats. By lowering the temperature, refrigeration slows down the activity of microorganisms and the chemical processes that lead to food spoilage. This method is widely used in households and commercial food storage systems, ensuring that perishable items remain safe for consumption for longer.
                  </p>
              </div>
              <img src={ag1} alt="Technology Centre" style={imageStyle} />
          </div>
          <div style={sectionStyle}>
              <img src={ag2} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Delay in Ripening of Fruits and Vegetables</h2>
                  <p>
                     
Delaying the ripening of fruits and vegetables is an important technique in ensuring that produce remains fresh during transportation and storage, helping to reduce losses from over-ripening. Two common methods used to achieve this are controlled atmosphere storage and the use of ethylene blockers, both of which help extend the shelf life of perishable produce.
                  </p>
                  <p>
                  Controlled atmosphere storage involves adjusting the levels of oxygen, carbon dioxide, and humidity in the storage environment. By lowering the oxygen levels and increasing carbon dioxide, the metabolic rate of fruits and vegetables slows down, delaying the ripening process. This technique is especially useful for storing fruits like apples, pears, and bananas, which continue to ripen after harvesting.
                  </p>
              </div>
          </div>
          <div style={sectionStyle}>
             
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Cost-Effective Transportation Under Refrigeration</h2>
              
                  <p>
                  Cost-effective transportation under refrigeration is essential for preserving the quality and safety of perishable food items during transit. By maintaining optimal temperatures throughout the journey, refrigeration prevents spoilage, slows down the growth of bacteria, and helps extend the shelf life of food products.
                  </p>
                  <p>
                  refrigerated transport can help streamline supply chains, enabling produce and other perishables to reach markets that would otherwise be inaccessible or impractical without the ability to keep food fresh during extended transport times. By investing in efficient and well-maintained refrigerated transport, businesses can reduce costs related to food spoilage, improve product quality, and ensure that consumers receive safe, fresh food.
                  </p>
              </div>
              <img src={Effective} alt="Technology Centre" style={imageStyle} />
          </div>
          <div style={sectionStyle}>
              <img src={Supply} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Supply of Food/Water in Emergency Situations</h2>
                  <p>
                  In emergency situations, such as floods, landslides, or natural disasters, having a reliable supply of food and water is essential to support affected communities and ensure public health. One of the key challenges during such events is the need to provide food and water that is safe, nutritious, and accessible
                  </p>
                  <p>
                  Food irradiation involves exposing food to ionizing radiation, which helps eliminate harmful pathogens, bacteria, and pests that could cause foodborne illnesses. This technique not only makes food safer by reducing the risk of contamination but also extends its shelf life, making it ideal for emergency food supplies. Foods that are irradiated, such as grains, meat, and ready-to-eat meals, can be safely stored for longer periods without the need for refrigeration, which is often unavailable during emergencies.
                  </p>
              </div>
          </div>
      </div>
  );

};

export default FoodProcessing;
