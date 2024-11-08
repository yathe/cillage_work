import React from "react"
import ag from "../../photos/sol.png"
import ag1 from "../../photos/sol2.png"


function SolarEnergy() {
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
                    Solar Energy
                </h1>
            </header>

            <section style={{ marginTop: '30px' }}>
                <p style={{
                    fontSize: '18px',
                    color: '#4a3c2f',
                    lineHeight: '1.6',
                    textAlign: 'justify'
                }}>
                    As the Photo Voltaic Solar Panels technology   is 
becoming more affordable,  solar electric panels 
are becoming an energy source of choice for far 
flung off grid locations.  Solar panels are also being 
seen as a backup power source to ensure a reliable 
power supply in the regions where load shedding is 
very frequent.
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
                    1. Promoting Solar Power for Remote and Off-Grid Areas:-In many rural and underserved regions, the lack of reliable electricity hinders development. 
                    The foundation will support the installation of solar electric panels to provide a clean. <br/>
                    2. Supporting Solar Water Pump Systems for Agriculture:-Solar water pumps have immense potential to improve water access for irrigation in Indian villages, where agriculture forms the backbone of the economy.  <br/>
                    3. Providing Knowledge and Building a Solar Ecosystem:- The foundation will offer technical guidance and training for the installation, operation, and maintenance of solar systems, 
                    making the technology accessible and manageable for local communities. <br/>
                    4. Fostering Local Employment and Skill Development:-By training youth in solar technology, from system installation to maintenance, we are creating job opportunities in an emerging, high-demand sector. <br/>
                    5. Encouraging Community and Household Solar Installations:-With government subsidies available for household and community-based solar programs, we are dedicated to guiding communities through the process of acquiring and installing solar systems. 
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
                     Government is  supporting household solar energy 
programme by offering sizeable subsidy for 
individual and community based solar 
installations.<br/>
Foundation will provide knowhow and will help 
developing an eco system to make solar 
installations, their operations and maintenance 
sustainable. This will generate local employment 
and train youths  in this emerging technology area.
                </p>
            </section>

          
        </div>
    );
}

export default SolarEnergy;
