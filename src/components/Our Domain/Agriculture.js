import React from 'react';
import Promote from '../../photos/Promote.png';
import Sustainable from '../../photos/Sustainable.png';
import drone from '../../photos/drone.jpg';
import drip from '../../photos/drip-irrigation.jpg';
import rainwater from '../../photos/rainwater.jpg';
import './Agriculture.css'; // Import the CSS file

function Agriculture() {
    return (
        <div className="container">
            <header className="header">
                <h1>Agriculture</h1>
            </header>

            <section className="focus-section">
                <h2>Drone-Based Farming Practices</h2>
                <p>
                    Drone-based farming practices involve the use of drones for monitoring crops, assessing field conditions, and applying inputs like fertilizers and pesticides. Drones can cover large areas quickly and provide real-time data, helping farmers make informed decisions. This technology enhances precision agriculture, leading to better resource management and higher productivity.
                </p>
            </section>
            <section className="image-section">
                <img src={drone} alt="Drone-Based Farming" className="image" />
            </section>
            <section className="focus-section">
                <h2>Sustainable Organic Farming Practices</h2>
                <p>
                    Sustainable organic farming practices include methods like crop rotation, green manure, composting, and biological pest control. These practices enhance soil fertility and biodiversity without relying on synthetic chemicals. They contribute to the production of healthy food while maintaining ecological balance and protecting the environment.
                </p>
            </section>
            <section className="image-section">
                <img src={Sustainable} alt="Organic Farming Practices" className="image" />
            </section>

            <section className="focus-section">
                <h2>Drip Irrigation and Sprinkler Systems</h2>
                <p>
                    Drip irrigation and sprinkler systems are efficient water delivery methods that minimize water wastage. Drip irrigation delivers water directly to the roots of plants, reducing evaporation and runoff. Sprinkler systems distribute water evenly across the field, ensuring all plants receive adequate moisture. These systems improve water use efficiency and support sustainable farming practices.
                </p>
            </section>
            <section className="image-section">
                <img src={drip} alt="Drip Irrigation Systems" className="image" />
            </section>

            <section className="focus-section">
                <h2>Rain Water Harvesting</h2>
                <p>
                    Rainwater harvesting involves collecting and storing rainwater for agricultural use. It helps in recharging groundwater levels and provides an alternative water source during dry periods. This technique reduces dependency on external water sources and supports sustainable water management practices in agriculture.
                </p>
            </section>
            <section className="image-section">
                <img src={rainwater} alt="Rain Water Harvesting" className="image" />
            </section>

            <section className="focus-section">
                <h2>Efficient Logistics and Transportation</h2>
                <p>
                    Developing efficient logistics and transportation systems ensures that agricultural produce reaches markets and consumers promptly. It involves optimizing routes, improving storage facilities, and using advanced transportation methods. This reduces post-harvest losses, maintains product quality, and increases profitability for farmers.
                </p>
            </section>

            <section className="focus-section">
                <h2>Promoting High Yield Crop Varieties</h2>
                <p>
                    Introducing high yield crop varieties involves selecting and promoting crop strains that are bred for increased productivity. These varieties are developed through research and field trials to ensure they can withstand local climatic conditions and resist common pests and diseases. This helps in achieving food security and improving farmers' income.
                </p>
            </section>
            <section className="image-section">
                <img src={Promote} alt="High Yield Crop Varieties" className="image" />
            </section>
        </div>
    );
}

export default Agriculture;
