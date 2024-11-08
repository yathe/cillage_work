import React from "react";
import ag from "../../photos/san.png";
import ag1 from "../../photos/san1.png";
import ag2 from "../../photos/san2.png";

function Sanitation() {
    return (
        <div style={{
            width: '100%',
            padding: '20px',
            backgroundColor: '#e1b470', /* Soft cream background */
            border: '1px solid #d3b82f', /* Classic golden border */
            borderRadius: '10px',
            fontFamily: 'Georgia, serif',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}>
            <header style={{ textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '36px',
                    color: '#6a4f4b',
                    borderBottom: '3px solid #d3b82f',
                    paddingBottom: '10px',
                    textTransform: 'uppercase'
                }}>
                    Sanitation
                </h1>
            </header>

            <section style={{ marginTop: '30px' }}>
                <p style={{
                    fontSize: '18px',
                    color: '#4a3c2f',
                    lineHeight: '1.6',
                    textAlign: 'justify'
                }}>
                    In both urban and rural settings, proper sanitation is a foundational aspect of community health, 
                    significantly impacting the quality of life, public health, and the environment. In India, where 
                    waterborne diseases are a major concern, inadequate sanitation remains one of the leading 
                    contributors to widespread health issues, especially in underserved rural areas.
                </p>
            </section>

            <section style={{ textAlign: 'center', margin: '20px 0' }}>
                <img src={ag} alt="Technology Centre" style={{
                    width: '90%',
                    maxWidth: '800px',
                    height: 'auto',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }} />
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 style={{
                    fontSize: '28px',
                    color: '#6a4f4b',
                    textAlign: 'center',
                    marginBottom: '15px'
                }}>
                    The Foundation’s Mission
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#4a3c2f',
                    lineHeight: '1.6',
                    textAlign: 'justify'
                }}>
                    1. Toilet Construction and Maintenance: We aim to construct public toilet facilities where 
                    they are needed most, especially in rural areas with limited access. <br/>
                    2. Waste Management Innovations: Implementing effective waste management systems is essential 
                    to our sanitation strategy. <br/>
                    3. Community Education Programs: Through workshops and educational materials, we will raise 
                    awareness about the importance of sanitation.
                </p>
            </section>

            <section style={{ textAlign: 'center', margin: '20px 0' }}>
                <img src={ag1} alt="Technology Centre" style={{
                    width: '90%',
                    maxWidth: '800px',
                    height: 'auto',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }} />
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 style={{
                    fontSize: '28px',
                    color: '#6a4f4b',
                    textAlign: 'center',
                    marginBottom: '15px'
                }}>
                    The Impact of Sanitation on Health
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#4a3c2f',
                    lineHeight: '1.6',
                    textAlign: 'justify'
                }}>
                    Sanitation facilities provide a safe, private space for personal hygiene. The foundation will 
                    promote community-led total sanitation by building and maintaining toilets and implementing 
                    effective waste management technologies in villages and cities.
                </p>
            </section>

            <section style={{ textAlign: 'center', margin: '20px 0' }}>
                <img src={ag2} alt="Technology Centre" style={{
                    width: '90%',
                    maxWidth: '800px',
                    height: 'auto',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }} />
            </section>
        </div>
    );
}

export default Sanitation;
