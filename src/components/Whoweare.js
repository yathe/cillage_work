
import React from 'react';
import './Whoweare.css';
import { Link } from 'react-router-dom';

const Whoweare = () => {
  return (
    <div>
      <div className="about-us">
    

        <h1>About Us</h1>
        <h2>Founders</h2>
        <div className="founder">
          <Link style={{textDecoration:"none"}} to={'/founder1'}><h5>.Shrikrishna Gupta</h5></Link>
          <p>(Former Outstanding Scientist at Department of Atomic Energy)<br />
            An expert on Accelerator Technologies<br />
            Coordinated with various GOI ministries to promote DAE Technologies for Societal Benefits
          </p>
        </div>
        <div className="founder">
          <Link style={{textDecoration:"none"}} to={'/founder'}><h5>.Dr.Lalit Varshney</h5></Link>
          <p>(Former Head, Radiation Technology Development Division, BARC)<br />
            An Expert on Sludge Hygenisation & Waste Water Treatment<br />
            Implemented many DAE Technologies for Rural Applications in the field
          </p>
        </div>
        <div className="founder">
          <Link style={{textDecoration:"none"}} to={'/founder2'}><h5>.Arun Kumar Tiwari</h5></Link>
          <p>(An entrepreneur promoting/manufacturing products for clean water and waste water treatment)<br />
            An IIT Delhi Alumni<br />
            Experienced in working at villages to promote sustainable living
          </p>
        </div>
      </div>
      <div className="about-us">
        <h2>DIRECTORS</h2>
        <div className="founder">
          <h5>.Pushkal Tiwari</h5>
          <p>(An enterprenuer promoting/manufacturing products for<br />
            societal benefits).<br />
            Experienced in working at villages to promote sustainable living.
          </p>
        </div>
        <div className="founder">
          <h5>.Shubhankar Srivastava</h5>
          <p>A BITS Pilani Alumnus<br />
          An enterprenuer developing AI based applications for  Industry.<br />
          An expert in Data Science
          </p>
        </div>
        <div className="founder">
          <h5>.Shreyash Gupta</h5>
          <p>An IIT Mumbai Alumnus<br />
          Currently a Harvard University Student in Management<br />
          Experienced in Product Management Consultancy
          </p>
        </div>
      </div>
    </div>

  );
};


export default Whoweare;
