import React from 'react';
import './demonstration.css';
import Community from "../../photos/community.jpg";
import renewable from "../../photos/renewable.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
const Centres = () => {
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
        fontSize: windowWidth > 768 ? '28px' : windowWidth > 480 ? '20px' : '15px',
        color: '#6a4f4b',
        fontWeight:'bold',
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
        height: '400px',
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
            <header>
                <h1 style={headerStyle}>Technology Demonstration Centres</h1>
            </header>

            <div style={sectionStyle}>
                <img src={Community} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Empowering Communities Through Innovation</h2>
                    <p>
                        <strong>1.  Interactive Demonstrations:</strong> Experience innovative technologies solving everyday challenges, including clean water, renewable energy, advanced agriculture, and healthcare solutions. <br />
                        <strong>2.   Training and Capacity Building:</strong> Join our training sessions and workshops to gain essential skills for using and maintaining these technologies, ensuring long-term sustainability.<br />
                        <strong>3.  Sustainable Practices:</strong>Learn eco-friendly technologies and practices that minimize environmental impact, including renewable energy, waste management, and sustainable agriculture.<br />
                        <strong>4.  Community Engagement:</strong>Community involvement is crucial. We engage local residents in planning and implementation, fostering ownership and responsibility, and refining our approaches through community feedback.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>

                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Our Mission</h2>
                    <p>
                        Our mission is to bridge the gap between cutting-edge technology and the communities that need it most. By providing access to practical technological solutions, we aim to enhance daily living, promote economic growth, and empower individuals to drive their own development.Health and wellbeing are fundamental to a thriving community. Our Technology Demonstration Centres showcase healthcare technologies that can improve health outcomes, such as telemedicine platforms, mobile health units, and diagnostic tools. By enhancing access to healthcare, we help communities address common health issues more effectively and efficiently
                    </p>
                    <p>
                        Sustainability is at the core of our mission. We introduce eco-friendly technologies and practices that help communities reduce their environmental impact. From renewable energy solutions like solar panels and wind turbines to sustainable agricultural practices and efficient water management systems, we demonstrate how technology can contribute to a greener and more sustainable future.
                    </p>
                </div>
                <img src={renewable} alt="Technology Centre" style={imageStyle} />
            </div>
        </div>
    );

};

export default Centres;
