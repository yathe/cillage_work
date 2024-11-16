 import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import ag from "../../photos/sol.png"
import ag1 from "../../photos/sol2.png"
import { useState } from "react";
import { useEffect } from "react";

function SolarEnergy() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log(windowWidth);
    const containerStyle = {
        width: windowWidth > 768 ? '100%' : windowWidth > 480 ? '100%' : '100%',
        padding: '20px',
        backgroundColor: '#e1b470',
        lineHeight: '1.6',
        color: '#4a3c2f',
        fontSize: windowWidth > 768 ? '18px' : windowWidth > 480 ? '16px' : '14px',
        textAlign: 'justify',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };
    
    const headerStyle = {
        textAlign: 'center',
        fontSize: windowWidth > 768 ? '36px' : windowWidth > 480 ? '28px' : '24px',
        color: '#6a4f4b',
        paddingBottom: '10px',
        textTransform: 'uppercase',
    };
    
    const sectionStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        flexDirection: windowWidth > 768 ? 'row' : 'column',
    };
    
    const imageAndContentWidth = {
        width: windowWidth > 768 ? '45%' : '100%',
    };
    
    const imageStyle = {
        ...imageAndContentWidth,
        height:'400px',
        objectFit: 'contain',
        borderRadius: '8px',
    };
    
    const contentStyle = {
        ...imageAndContentWidth,
        padding: windowWidth > 768 ? '20px' : windowWidth > 480 ? '15px' : '10px',
        border: '1px solid #d3b82f',
        borderRadius: '10px',
        fontFamily: 'Georgia, serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };
    
    const missionTitleStyle = {
        fontSize: windowWidth > 768 ? '28px' : windowWidth > 480 ? '24px' : '20px',
        color: '#6a4f4b',
        textAlign: 'center',
        marginBottom: '15px',
    };
    
    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>Solar Energy
                </h1>
            </header>
    
            <div style={sectionStyle}>
                <img src={ag} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <p>
                    As the Photo Voltaic Solar Panels technology   is 
    becoming more affordable,  solar electric panels 
    are becoming an energy source of choice for far 
    flung off grid locations.  Solar panels are also being 
    seen as a backup power source to ensure a reliable 
    power supply in the regions where load shedding is 
    very frequent.
                    </p>
                    <p>
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
                </div>
            </div>
    
            <div style={sectionStyle}>
                
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>The Foundation’s Mission</h2>
                    <p>
                    <strong>1. Promoting Solar Power for Remote and Off-Grid Areas:-</strong>In many rural and underserved regions, the lack of reliable electricity hinders development. 
                        The foundation will support the installation of solar electric panels to provide a clean. <br/>
                        <strong>2. Supporting Solar Water Pump Systems for Agriculture:-</strong>Solar water pumps have immense potential to improve water access for irrigation in Indian villages, where agriculture forms the backbone of the economy.  <br/>
                        <strong>3. Providing Knowledge and Building a Solar Ecosystem:-</strong> The foundation will offer technical guidance and training for the installation, operation, and maintenance of solar systems, 
                        making the technology accessible and manageable for local communities. <br/>
                        <strong>4. Fostering Local Employment and Skill Development:-</strong>By training youth in solar technology, from system installation to maintenance, we are creating job opportunities in an emerging, high-demand sector. <br/>
                        <strong>5. Encouraging Community and Household Solar Installations:-</strong>With government subsidies available for household and community-based solar programs, we are dedicated to guiding communities through the process of acquiring and installing solar systems. 
                    </p>
                </div>
                <img src={ag1} alt="Technology Centre" style={imageStyle} />
            </div>
        </div>
    );
    
}

export default SolarEnergy;
