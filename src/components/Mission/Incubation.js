import React from 'react';
import Promoting from "../../photos/prom.jpg";
import Generating from "../../photos/gen.jpg";
import { useState, useEffect } from 'react';

const Incubation = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <header style={headerStyle}>
                <h1>Technology Incubation Center</h1>
            </header>

            <div style={sectionStyle}>
                <img src={Promoting} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Empowering Startups Through Innovation</h2>
                    <p>
                        A Technology Incubation Center (TIC) is a specialized facility designed to support and nurture early-stage technology startups and innovative projects. These centers provide a conducive environment for startups to develop their ideas, refine their business models, and bring their products to market. TICs play a vital role in fostering innovation, creating jobs, and contributing to the economic growth of a region. Many successful startups have emerged from Technology Incubation Centers around the world. These startups have gone on to revolutionize their respective industries and create significant economic impact. Technology Incubation Centers play a crucial role in fostering innovation and entrepreneurship. By providing the necessary support, resources, and mentorship, TICs help startups overcome challenges and achieve their full potential. They are essential for building a thriving innovation ecosystem and driving economic growth.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Key Features</h2>
                    <p>
                        <strong>1.     Infrastructure and Resources:</strong> These centers provide state-of-the-art infrastructure, including office space, laboratories, and prototyping facilities. Startups can utilize these resources to develop and test their products.<br/>
                        <strong>2.     Funding and Investment:</strong> TICs often have connections with venture capitalists, angel investors, and funding agencies. They help startups secure the necessary funding to scale their operations and bring their products to market.<br/>
                        <strong>3.     Collaborative Environment:</strong> Startups in TICs can collaborate with other like-minded entrepreneurs, researchers, and industry professionals. This collaborative environment fosters innovation and knowledge sharing.<br/>
                        <strong>4.     Business Support Services:</strong> TICs offer a range of business support services, including legal, financial, and marketing assistance. These services help startups navigate the complexities of running a business and increase their chances of success.
                    </p>
                </div>
                <img src={Generating} alt="Technology Centre" style={imageStyle} />
            </div>
        </div>
    );
};

export default Incubation;
