import React from 'react';
import './Ourmission.css';

const Mission = () => {
    return (
        <div style = {{backgroundColor:'#e1b470'}}>
        <div className="mission-container">
            <div className="mission-header">
                <h1>Our Mission</h1>
            </div>
            <div className="mission-content">
                <ul>
                    <li>To bring Technological solutions to Rural India</li>
                    <li>To identify Technologies for generation of employment</li>
                    <li>To provide relevant rural technologies under one roof</li>
                    <li>To set up Technology Demonstration/Incubation "Cillage Centers" at Taluka Levels to promote technologies for clean water, solar energy, sanitation, health, agriculture, housing & education</li>
                    <li>To set up 'Business Promotion Centres' to generate local employment by promoting entrepreneurship and nurturing local entrepreneurs to start companies/small manufacturing units in the rural areas</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Mission;
