
import React from 'react';
import './Whatwedo.css'; // Import the CSS file
import incubator from '../photos/incubator.jpg';
import rural from '../photos/rural_business_promotion.jpg';
import incubation from '../photos/incubation.jpg';
import { Link } from 'react-router-dom';

const Whatwedo = () => {
  return (
    <div className="container">
      <div className='container-1'>      <h1 className="heade">What We Do</h1></div>

      <div className="grid">
       <Link to = {'/demonstration'} style={{textDecoration:'none'}}> <div className="section">
          <h5 className="label">TECHNOLOGY DEMONSTRATION CENTRES</h5>
          <img src={incubator} alt="Technology Demonstration" className="image" />
        </div></Link>
        <Link to={'/rural'} style={{textDecoration:'none'}}><div className="section">
          <h5 className="label">RURAL BUSINESS PROMOTION CENTRES</h5>
          <img src={rural} alt="Rural Business Promotion" className="image" />
        </div></Link>
        <Link to={'/incubation'} style={{textDecoration:'none'}}><div className="section">
          <h5 className="label">TECHNOLOGY INCUBATION CENTRES</h5>
          <img src={incubation} alt="Technology Incubation" className="image" />
        </div></Link>
      </div>
    </div>
  );
}

export default Whatwedo;
