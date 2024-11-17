import React, { useEffect, useState } from "react";
import ag from "../../photos/saf.jpg";
import ag1 from "../../photos/saf33.jpg";

function CleanWater() {
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
                <h1>Clean Water</h1>
            </header>

            <div style={sectionStyle}>
                <img src={ag} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Safe Drinking Water</h2>
                    <p>
                    The foundation's efforts to provide clean water are crucial in addressing these pervasive issues. By implementing advanced water purification technologies, such as Ultrafiltration, Nanofiltration, and Reverse Osmosis, the foundation aims to remove harmful contaminants from water sources. Moreover, the deployment of arsenic and chromium removal filters can mitigate the dangers posed by these toxic elements found in many groundwater supplies.
                    </p>
                    <p>
                        Safe drinking water is essential for life. The non-availability of safe drinking water is a reason for many health issues in India. Due to industrialization, agriculture, and geogenic reasons, water is getting polluted and scarce. Unpredictable flash floods and large dry areas add to the woes.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>

                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>The Foundation’s Mission</h2>
                    <p>
                        <strong>1. Ultrafiltration (UF), Nanofiltration, and Reverse Osmosis (RO) Membrane Filtration Systems:</strong> These filtration technologies effectively remove contaminants, including bacteria, viruses ensuring that water is purified to safe.<br />
                        <strong>2. Arsenic and Chromium Removal Filters:</strong> Many regions in India suffer from geogenic contamination of arsenic and chromium in groundwater, leading to severe health risks.<br />
                        <strong>3. Mobile Water Treatment Systems (Solar/Diesel-Based):</strong> For remote or disaster-affected areas, mobile water treatment units offer a flexible solution to ensure immediate access to clean water.<br />
                        <strong>4. Community-Level Water Treatment Systems and Water ATMs:</strong> Community-scale water treatment systems, including Water ATMs, are an effective way to make purified water accessible to large populations.
                    </p>
                </div>
                <img src={ag1} alt="Technology Centre" style={imageStyle} />
            </div>
        </div>
    );
}

export default CleanWater;
