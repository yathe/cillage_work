
import React from 'react';
import './OurDomain.css'; // Import the CSS file
import rural from '../photos/rural_business_promotion.jpg';
import incubation from '../photos/incubation.jpg';
import agriculture from "../photos/agriculture.jpg"
import cleanwater from "../photos/cleanwater.jpg"
import solar_dryer from "../photos/solar dryer.jpg"
import sanitation from "../photos/sanitation.jpg"
import solar from "../photos/1.jpg"
import heat from "../photos/2.jpg"
import { Link } from 'react-router-dom';
const OurDomain = () => {
  return (
    <div className="container0">
      <div className='container-1'>      <h1 className="heade">Our Domains</h1></div>

      <div className="grid">
       <Link to={"/cleanwater"} style={{textDecoration:'none'}}> <div className="section">
          <h5 className="label">Clean Water</h5>
          <img src={cleanwater} alt="Technology Demonstration" className="image" />
        </div></Link>

       <Link to={"/solar"} style={{textDecoration:'none'}}> <div className="section">
          <h5 className="label">Solar Energy</h5>
          <img src={solar} alt="Rural Business Promotion" className="image" />
        </div></Link>
        <Link to={"/sanititation"} style={{textDecoration:'none'}}><div className="section">
          <h5 className="label">Sanitation</h5>
          <img src={sanitation} alt="Technology Incubation" className="image" />
        </div></Link>
       <Link to={"/socialint"} style={{textDecoration:'none'}}> <div className="section">
          <h5 className="label">Social Initiatives</h5>
          <img src={heat} alt="Technology Incubation" className="image" />
        </div></Link>
       <Link to={"/agriculture"} style={{textDecoration:'none'}}> <div className="section">
          <h5 className="label">Agriculture</h5>
          <img src={agriculture} alt="Technology Incubation" className="image" />
        </div></Link>
       <Link to={"/food"} style={{textDecoration:'none'}}> <div className="section">
          <h5 className="label">Food Processing</h5>
          <img src={solar_dryer} alt="Technology Incubation" className="image" />
        </div></Link>
      </div>
    </div>
  );
}

export default OurDomain;
