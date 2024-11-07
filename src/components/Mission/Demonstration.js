import React from 'react';
import './demonstration.css';
import Cillage from "../../photos/cillage.jpeg";

function Centres() {
    return (
        <div className="container">
            <header className="header">
            <h1>Technology Demonstration Centres</h1>
            </header>

            <section className="focus-section">
                <p>
                Our Technology Demonstration Centres aim to bridge the technology gap in rural areas,
                    promoting sustainable advancements in areas like clean water, solar energy, sanitation, health,
                    agriculture, housing, and education. These centres empower communities with hands-on exposure
                    to innovations that drive local development and employment.
                   </p>
            </section>

         

            <section className="image-section">
            <img src={Cillage} alt="Technology Centre" className="image" />
            </section>

            <section className="focus-section">
            <h2>Our Focus Areas</h2>
                <ul>
                    <li>Providing clean water solutions</li>
                    <li>Harnessing solar energy for rural needs</li>
                    <li>Improving sanitation and health standards</li>
                    <li>Supporting sustainable agriculture practices</li>
                    <li>Innovating housing solutions</li>
                    <li>Enhancing educational resources</li>
                </ul>
            </section>

         

           
        </div>
    );
}

export default Centres;