import React from "react";
import ag from "../../photos/ag.png";
import ag1 from "../../photos/ag1.png";
import ag2 from "../../photos/ag3.png";
import ag5 from "../../photos/ag5.png";
import ag6 from "../../photos/ag6.png";
import ag7 from "../../photos/ag8.png";
import ag8 from "../../photos/ag9.png";
import ag9 from "../../photos/ag10.png";
import drone from "../../photos/drone.jpg";
import sustainable from "../../photos/Sustainable.jpg";
import drip from "../../photos/drip-irrigation.jpg";
import rainwater from "../../photos/rainwater.jpg";
import promote from "../../photos/Promote.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_us from "../About_us";
import { useState, useEffect } from "react";
const Agriculture = () => {
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
        fontWieght:"400",
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
            <header>
                <h1 style={headerStyle}> Agriculture</h1>
            </header>

            <div style={sectionStyle}>
                <img src={drone} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Drone-Based Farming Practices</h2>
                    <p>
                        The integration of drones into agriculture has revolutionized traditional farming methods, offering innovative solutions to improve efficiency and productivity. Drone-based farming practices leverage the capabilities of drones to monitor crops, assess field conditions, and apply agricultural inputs like fertilizers and pesticides with unparalleled precision.
                    </p>
                    <p>
                        The benefits of drone-based farming practices extend beyond efficiency. They significantly reduce labor requirements, cut costs, and contribute to sustainable farming by minimizing the overuse of chemicals and water. By reducing human exposure to hazardous chemicals during pesticide application, drones also enhance safety for farm workers.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>

                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Sustainable Organic Farming Practices</h2>
                    <p>
                        Sustainable organic farming practices represent a holistic approach to agriculture, focusing on the integration of ecological and natural processes to cultivate healthy crops and maintain environmental harmony. These practices rely on traditional farming techniques enhanced with modern sustainable principles, avoiding the use of synthetic chemicals and emphasizing natural methods to improve soil health, biodiversity, and ecological balance.
                    </p>
                    <p>
                        Green manure is another important practice, where cover crops are grown and then plowed into the soil to enrich it with organic matter. This improves the soil’s water retention capacity and fertility while suppressing weeds and preventing erosion. Similarly, composting plays a vital role by recycling organic waste into nutrient-rich material that serves as a natural fertilizer
                    </p>
                </div>
                <img src={sustainable} alt="Technology Centre" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <img src={drip} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Drip Irrigation and Sprinkler Systems</h2>
                    <p>
                        Drip irrigation and sprinkler systems are two widely used methods of irrigation that aim to optimize water use in agriculture, promoting sustainable farming practices. Drip irrigation is a highly efficient system that delivers water directly to the roots of plants through a network of pipes, tubes, and emitters. This method minimizes water wastage by reducing evaporation and runoff, ensuring that water is applied precisely where it’s needed most.
                    </p>
                    <p>
                        Sprinkler systems, on the other hand, distribute water over a wider area by spraying it through a network of pipes and nozzles, simulating rainfall. They are more versatile and can cover large fields, orchards, and lawns, ensuring that all plants receive adequate moisture.
                    </p>
                </div>

            </div>
            <div style={sectionStyle}>

                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Rain Water Harvesting</h2>
                    <p>
                        Rainwater harvesting is a technique that involves collecting and storing rainwater for various uses, particularly in agriculture. This method captures runoff from roofs, pavements, or other surfaces and channels it into storage tanks or reservoirs. It is especially valuable for agricultural purposes, as it provides an alternative and sustainable water source, reducing the dependency on external or conventional water sources like rivers, lakes, or groundwater.
                    </p>
                    <p>
                        By allowing rainwater to be stored and used efficiently, the technique reduces the strain on groundwater resources and helps maintain a balanced ecosystem. This practice is particularly important in regions with irregular rainfall patterns or in areas suffering from water scarcity.
                    </p>
                </div>
                <img src={rainwater} alt="Technology Centre" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <img src={promote} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>Promoting High Yield Crop Varieties</h2>
                    <p>
                        Promoting high-yield crop varieties is a strategy aimed at enhancing agricultural productivity by selecting and cultivating crop strains that are specifically bred for higher outputs. These varieties are developed through extensive research and field trials to ensure they are well-suited to the local climate, soil conditions, and agricultural practices.
                    </p>
                    <p>
                        These high-yield varieties are often designed to be more resilient, capable of withstanding local environmental challenges such as drought, heat, or heavy rainfall. In addition, they are bred to resist common pests and diseases, reducing the need for chemical pesticides and contributing to more sustainable farming practices. This can result in both lower input costs and a reduction in environmental impact, benefiting both farmers and the surrounding ecosystem.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Agriculture;
