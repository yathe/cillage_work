import React from 'react';
import Entre from "../../photos/enter.jpeg";
import Ruralemploy from "../../photos/empl.jpg";
import { useState,useEffect } from 'react';
function Rural() {
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
    
    
    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>Rural Business Promotion Center</h1>
            </header>
    
            <div style={sectionStyle}>
                <img src={Entre} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                <h2>Promoting Entrepreneurship</h2>
                <ul>
                    <li>Foundation will set up following Cillage Centres at Taluka Levels:</li>
                    <li>Rural Technology Demonstration Centres</li>
                    <li>Rural Technology Incubation Centres</li>
                    <li>Rural business Promotion Centres</li>
                    <li>Rural Youths will be pursued to be part of these Centres and set up</li>
                    <li>businesses in their native villages itself.</li>
                </ul>
                                    </div>
            </div>
            <div style={sectionStyle}>
                
                <div style={contentStyle}>
                <h2>Generating Employment</h2>
                <p>
                    Cillage Centres will help people to set up rural specific micro 
                    and small enterprises and generate employment opportunities 
                    in these enterprises for local youths.
                </p>                     </div>
                                    <img src={Ruralemploy} alt="Technology Centre" style={imageStyle} />
            </div>
    
          
          
        </div>
    );
}
export default Rural;
