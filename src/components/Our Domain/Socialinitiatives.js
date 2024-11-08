import React from 'react';
import './Socialinitiatives.css';
import ag from "../../photos/wa.png";
import ag1 from "../../photos/wa1.png";

function SocialInit() {
    return (
        <div className="container">
            <header className="header">
                <h1>Waste Water Treatment & Sewage Sludge Hygenisation</h1>
            </header>

            <section className="focus-section">
                <h2>Hybrid Bio-Granular SBR Technology</h2>
                <p>
                    This technology is designed to treat wastewater efficiently using a combination of biological and granular processes, ensuring cleaner and safer water for communities.
                </p>
            </section>
            <section className="image-section">
                <img src={ag} alt="Hybrid Bio-Granular SBR Technology" className="image" />
            </section>

            <section className="focus-section">
                <h2>Radiation Technology for Sludge Hygienisation</h2>
                <p>
                    Radiation technology is used to hygienize sludge, making it safe for disposal or use as a fertilizer, thereby promoting sustainable waste management practices.
                </p>
                <p>
                    Waste Water and Sludge Treatment Technologies will be promoted to ensure sustainable living by providing safe and efficient methods for waste management.
                </p>
            </section>
            <section className="image-section">
                <img src={ag1} alt="Radiation Technology for Sludge Hygienisation" className="image" />
            </section>
        </div>
    );
}

export default SocialInit;
