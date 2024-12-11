import React from "react";
import ag from "../../photos/san.jpg";
import ag1 from "../../photos/sn1.png";
import ag2 from "../../photos/san2.png";
import About_us from "../About_us";
import ag3 from "../../photos/wa.png";
import ag4 from "../../photos/wa1.png";
import { useState, useEffect } from "react";
function Sanitation() {
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
        fontWieght:"400",
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
                <h1 style={headerStyle}> Sanitation
                </h1>
            </header>

            <div style={sectionStyle}>
                <img src={ag} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}> Importance of Sanitation in Urban and Rural Areas</h2>
                    <p>
                    Proper sanitation is crucial in both urban and rural settings, as it significantly impacts the quality of life. Access to clean and safe sanitation facilities ensures that individuals can maintain their dignity and hygiene. This is particularly important in preventing the spread of infectious diseases and promoting overall well-being. The presence of adequate sanitation facilities also reduces the time and effort spent on seeking safe places for defecation, especially for women and children.
                    </p>
<p>
Sanitation plays a vital role in public health by reducing the prevalence of waterborne diseases. In India, where these diseases pose a significant health risk, improving sanitation infrastructure is essential.
</p>
                </div>
            </div>

            <div style={sectionStyle}>

                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>The Foundation’s Focus areas</h2>
                    <p>
                        <strong>1.  Toilet Construction and Maintenance:</strong> We aim to construct public toilet facilities where
                        they are needed most, especially in rural areas with limited access. <br />
                        <strong>2.   Waste Management Innovations:</strong> Implementing effective waste management systems is essential
                        to our sanitation strategy.<br />
                        <strong>3.  Community Education Programs:</strong>Through workshops and educational materials, we will raise
                        awareness about the importance of sanitation.<br />
                        <strong>4.  Hygiene Promotion Campaigns:</strong>We will run extensive hygiene promotion campaigns to educate communities about the importance of personal hygiene practices, such as handwashing, to prevent diseases.<br />
                        <strong>5.  Sustainable Water Supply Solutions:</strong>Ensuring access to sustainable water supply systems, such as rainwater harvesting and borewell installations, to complement sanitation facilities.
                    </p>
                </div>
                <img src={ag1} alt="Technology Centre" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
              <img src={ag3} alt="Technology Centre" style={imageStyle} />
              <div style={contentStyle}>
              <h2 style={missionTitleStyle}>Hybrid Bio-Granular SBR Technology</h2>
                  <p>
                  Wastewater management is a critical component of ensuring public health and environmental sustainability, particularly in regions facing water scarcity. The Hybrid Bio-Granular Sequencing Batch Reactor (SBR) Technology is an advanced solution that combines biological and granular processes to treat wastewater efficiently. This technology is designed to deliver cleaner and safer water, providing a sustainable option for communities, industries, and agriculture.
                  </p>
                  <p>
                  The hybrid SBR system operates through a sequence of processes that allow for the effective removal of organic pollutants, nitrogen, and phosphorus. A key feature of this system is its use of granular sludge, which settles more rapidly than conventional sludge. This results in better separation of treated water and biomass, significantly improving the quality of the treated effluent.
                  </p>
              </div>
          </div>

          <div style={sectionStyle}>
             
              <div style={contentStyle}>
                  <h2 style={missionTitleStyle}>Radiation Technology for Sludge Hygienisation</h2>
                  <p>
                  Proper management of wastewater sludge is critical for environmental protection and sustainable waste practices. Radiation Technology for Sludge Hygienisation is an innovative solution that ensures sludge is treated effectively, making it safe for disposal or reuse. This cutting-edge technology uses ionizing radiation to eliminate harmful pathogens and microorganisms present in the sludge, transforming it into a hygienized and safer product.
                  </p>
                  <p>
                  The process involves exposing the sludge to radiation, such as electron beams or gamma rays, which disrupt the DNA of harmful bacteria, viruses, and other pathogens. This ensures the treated sludge is free from contaminants, significantly reducing risks to public health and the environment.
                  </p>
              </div>
              <img src={ag4} alt="Technology Centre" style={imageStyle} />
          </div>
            <div style={sectionStyle}>
                <img src={ag2} alt="Technology Centre" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={{
                        fontSize: '28px',
                        color: '#6a4f4b',
                        textAlign: 'center',
                        marginBottom: '15px'
                    }}>
                        The Impact of Sanitation on Health
                    </h2>
                    <p>
                    Sanitation facilities offer a safe, private space for individuals to take care of their personal hygiene needs. These spaces are essential for maintaining human dignity, particularly for women and children, who may face safety risks without proper facilities. Providing access to clean and secure toilets can significantly reduce the occurrence of open defecation, which is a major health hazard in many rural areas..</p>
<p>
A significant part of the foundation's mission is to construct and maintain toilets where they are most needed. This includes rural areas with limited access to sanitation infrastructure. By building public toilets and ensuring their proper maintenance, the foundation helps prevent the spread of diseases caused by poor sanitation. Proper toilet facilities also reduce environmental contamination and improve the overall quality of life for residents.
</p>
                </div>
            </div>

        </div>
    );
}

export default Sanitation;
