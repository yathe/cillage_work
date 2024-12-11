import React from 'react';
import Entre from "../../photos/1er.jpg";
import Ruralemploy from "../../photos/1e.jpg";
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
        fontWeight:'bold',
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
            <header>
                <h1 style={headerStyle}>Rural Business Promotion Centres</h1>
            </header>
    
            <div style={sectionStyle}>
                <img src={Entre} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
               <p>Rural business promotion centers play a crucial role in fostering economic development in rural areas. 
                They provide support and resources to local entrepreneurs, helping them start and grow their businesses.</p>
                <p><strong>1.Training and Education: </strong>Offering workshops and training programs to enhance the skills of local entrepreneurs and workers.</p><br />

<p><strong>2.Access to Resources:</strong> Providing access to financial resources, such as loans and grants, as well as physical resources like office space and equipment.</p><br />

<p><strong>3.Networking Opportunities:</strong> Facilitating connections between rural businesses and larger markets, suppliers, and potential customers.</p><br />

<p><strong>4.Mentorship and Support:</strong> Offering guidance and mentorship from experienced business professionals to help navigate challenges and seize opportunities.</p><br />

<p><strong>5.Promotion and Marketing:</strong> Assisting with marketing strategies to increase visibility and reach of rural businesses.</p>              
                                    </div>
            </div>
            <div style={sectionStyle}>
                
                <div style={contentStyle}>
                <h2>Our Mission</h2>
                <p>
                We envision vibrant and thriving rural communities where local businesses flourish, creating jobs and opportunities for all. By empowering rural entrepreneurs and fostering sustainable growth, we aim to bridge the gap between rural and urban economies, ensuring that the benefits of development reach every corner of the country.

Together, we can build a brighter future for our rural communities, where innovation, sustainability, and prosperity go hand in hand.
                </p>                     </div>
                                    <img src={Ruralemploy} alt="Technology Centre" style={imageStyle} />
            </div>
    
          
          
        </div>
    );
}
export default Rural;
