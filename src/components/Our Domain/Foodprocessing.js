import React from 'react';
import ag from '../../photos/f.png';
import ag1 from '../../photos/f1.png';
import ag2 from '../../photos/f2.png';
import Effective from '../../photos/Effective.jpg';
import Supply from '../../photos/Supply.jpg';
import ag5 from '../../photos/f5.png';
import './Foodprocessing.css'; // Import the CSS file

function Foodprocessing() {
    return (
        <div className="container">
            <header className="header">
                <h1>Food Preservation and Food Irradiation</h1>
            </header>

            <section className="focus-section">
                <h2>Enhancing Safety of Food Items</h2>
                <p>
                    Enhancing the safety of food items involves using irradiation techniques to eliminate pathogens and pests, ensuring that the food remains safe for consumption. This process helps in reducing foodborne illnesses and extending the shelf life of various food products.
                </p>
            </section>
            <section className="image-section">
                <img src={ag} alt="Enhancing Safety of Food Items" className="image" />
            </section>

            <section className="focus-section">
                <h2>Extension of Shelf Life of Perishable Food Items</h2>
                <p>
                    Extending the shelf life of perishable food items involves processes such as refrigeration, freezing, and vacuum packing. These methods slow down the spoilage of food, allowing for longer storage and reduced food waste.
                </p>
            </section>
            <section className="image-section">
                <img src={ag1} alt="Extension of Shelf Life" className="image" />
            </section>

            <section className="focus-section">
                <h2>Delay in Ripening of Fruits and Vegetables</h2>
                <p>
                    Delaying the ripening of fruits and vegetables can be achieved through controlled atmosphere storage and the use of ethylene blockers. These techniques help in maintaining the freshness of produce during transportation and storage, reducing losses due to over-ripening.
                </p>
            </section>
            <section className="image-section">
                <img src={ag2} alt="Delay in Ripening of Fruits and Vegetables" className="image" />
            </section>

            <section className="focus-section">
                <h2>Cost-Effective Transportation Under Refrigeration</h2>
                <p>
                    Cost-effective transportation under refrigeration ensures that perishable food items are kept at optimal temperatures during transit. This helps in maintaining the quality and safety of the food, while also reducing spoilage and extending shelf life.
                </p>
            </section>
            <section className="image-section">
                <img src={Effective} alt="Cost-Effective Transportation Under Refrigeration" className="image" />
            </section>

            <section className="focus-section">
                <h2>Supply of Food/Water in Emergency Situations</h2>
                <p>
                    In emergency situations such as floods or landslides, it is crucial to have a reliable supply of food and water. Food irradiation and preservation techniques ensure that these supplies remain safe and are available when needed the most.
                </p>
            </section>
            <section className="image-section">
                <img src={Supply} alt="Supply of Food/Water in Emergency Situations" className="image" />
            </section>

            <section className="focus-section">
                <h2>Promotion of Self-Help Groups (SHG)</h2>
                <p>
                    Promoting self-help groups (SHG) involves providing support for value addition to domestic products and services. This includes assistance with packaging, digital market linkages, and quality certification, helping local communities to enhance their economic opportunities.
                </p>
            </section>
            <section className="image-section">
                <img src={ag5} alt="Promotion of Self-Help Groups" className="image" />
            </section>
        </div>
    );
}

export default Foodprocessing;
