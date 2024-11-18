import React from 'react';
import Cillage from "../../photos/cillage.jpeg";
import { useState,useEffect } from 'react';

function Centres() {
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
        fontSize: windowWidth > 768 ? '28px' : windowWidth > 480 ? '24px' : '18px',
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
                <h1>Technology Demonstration Centres</h1>
            </header>

            <div style={sectionStyle}>
                <img src={Cillage} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                <p>
                            Our Technology Demonstration Centres aim to bridge the technology gap in rural areas,
                            promoting sustainable advancements in areas like clean water, solar energy, sanitation, health,
                            agriculture, housing, and education. These centres empower communities with hands-on exposure
                            to innovations that drive local development and employment.
                        </p>
                        <h2>Our Focus Areas</h2>
                        <ul>
                            <li>Providing clean water solutions</li>
                            <li>Harnessing solar energy for rural needs</li>
                            <li>Improving sanitation and health standards</li>
                            <li>Supporting sustainable agriculture practices</li>
                            <li>Innovating housing solutions</li>
                            <li>Enhancing educational resources</li>
                        </ul>
                </div>
            </div>

          
        </div>
    );

}

export default Centres;
