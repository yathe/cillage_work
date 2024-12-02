import React from 'react';
import earthWithHandsImage from '../photos/Devic-Earth.jpg'; // Ensure correct image path
import tech from '../photos/tech.jpg'; // Ensure correct image path
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <img src={earthWithHandsImage} alt="Earth with Hands" className="background-image" />
            <h1 className="earthText">Transforming Rural Lives with the Use of Technology</h1>
            <div className="text-container">
                <div className="mission-heading-container">
                    <h1 className="mission-heading">Our Mission</h1>
                    <a
                        href="\Cillage India Foundation-3.pdf" // Ensure correct link to the PDF
                        className="pdf-button"
                        target="_blank"
                        rel="noopener noreferrer">
                        Foundation Brochure
                    </a>
                </div>
            </div>
            <div className="text-contained">
                <div className="image-text-row">
                    <div className="image-container">
                        <Link to="/mission">
                            <img src={tech} alt="Technology Icons" className="tech-image" />
                        </Link>
                    </div>
                    <div className="right">
                        <h2>Bringing Technology to Rural India</h2>
                        <ul className="home-ul">
                            <li>Identification of Technologies for Rural India.</li>
                            <li>Maintain the knowhow of all the relevant rural technologies under one roof.</li>
                            <li>Setting up ‘Technology Demonstration/Incubation Centers’ at Taluka Levels to promote technologies for clean water, solar energy, sanitation, health, agriculture & education. These centres will be called ‘Cillage Centres’.</li>
                            <li>Engaging with Gram Panchayats to convert their villages into “Model Sustainable Villages’.</li>
                        </ul>
                        <h2>Generating Local Employment by promoting Entrepreneurship in Villages</h2>
                        <ul className="home-ul">
                            <li>Generating local employment by nurturing local entrepreneurs to start companies/small manufacturing units in the rural area.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
