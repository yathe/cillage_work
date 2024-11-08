import React from "react"
import ag from "../../photos/saf.png"
import ag1 from "../../photos/saf1.png"




function CleanWater() {
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
                    Clean Water
                </h1>
            </header>

            <section style={{ marginTop: '30px' }}>
                <p style={{
                    fontSize: '18px',
                    color: '#4a3c2f',
                    lineHeight: '1.6',
                    textAlign: 'justify'
                }}>
                    Access to clean, safe drinking water is essential for life, yet it remains out of reach for millions in India. The scarcity and contamination of water have become major contributors to widespread health
                     issues, with industrialization, agricultural runoff, and natural contaminants, like arsenic and chromium, further aggravating the crisis.
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
                    1. Ultrafiltration (UF), Nanofiltration, and Reverse Osmosis (RO) Membrane Filtration Systems:-
                    These filtration technologies effectively remove contaminants, including bacteria, viruses, 
                    and dissolved impurities, ensuring that water is purified to safe, potable standards.<br/>
                    2. Arsenic and Chromium Removal Filters:-Many regions in India suffer from geogenic contamination of arsenic and chromium in groundwater, leading to severe health risks.  <br/>
                    3. Mobile Water Treatment Systems (Solar/Diesel-Based):-For remote or disaster-affected areas, mobile water treatment units offer a flexible solution to ensure immediate access to clean water. <br/>
                    4. Community-Level Water Treatment Systems and Water ATMs:-Community-scale water treatment systems, including Water ATMs, are an effective way to make purified water accessible to large populations. 
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
              
                <p style={{
                    fontSize: '18px',
                    color: '#4a3c2f',
                    lineHeight: '1.6',
                    textAlign: 'justify'
                }}>
                    Safe drinking water is essential  for life. Non availability of  safe drinking 
water is a reason for many health issues in India. Due to 
Industrialization, agriculture and geogenic reasons, water is getting 
polluted and scarce. Unpredictable  flash floods,  large dry areas add 
to the woes. Foundation will promote technologies which can help 
provide clean and safe water 
                </p>
            </section>

           
            
        </div>
    );
}

export default CleanWater;
