import React, { useEffect, useState } from "react";
import ag from "../../photos/sol.png";
import ag1 from "../../photos/sol2.png";

function SolarEnergy() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(windowWidth);

    const containerStyle = {
        width: windowWidth > 768 ? "100%" : "100%",
        padding: "20px",
        backgroundColor: "#e1b470",
        lineHeight: "1.6",
        color: "#4a3c2f",
        fontSize: windowWidth > 768 ? "18px" : windowWidth > 480 ? "16px" : "14px",
        textAlign: "justify",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const headerStyle = {
        textAlign: "center",
        fontSize: windowWidth > 768 ? "36px" : windowWidth > 480 ? "28px" : "24px",
        color: "#6a4f4b",
        paddingBottom: "10px",
        textTransform: "uppercase",
    };

    const sectionStyle = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        flexDirection: windowWidth > 768 ? "row" : "column",
    };

    const imageAndContentWidth = {
        width: windowWidth > 768 ? "45%" : "100%",
    };

    const imageStyle = {
        ...imageAndContentWidth,
        height: "400px",
        objectFit: "contain", // Matches the CleanWater page for image scaling
        borderRadius: "8px",
    };

    const contentStyle = {
        ...imageAndContentWidth,
        padding: windowWidth > 768 ? "20px" : windowWidth > 480 ? "15px" : "10px",
        border: "1px solid #d3b82f",
        borderRadius: "10px",
        fontFamily: "Georgia, serif",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    };

    const missionTitleStyle = {
        fontSize: windowWidth > 768 ? "28px" : windowWidth > 480 ? "24px" : "20px",
        color: "#6a4f4b",
        textAlign: "center",
        marginBottom: "15px",
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>Solar Energy</h1>
            </header>

            <div style={sectionStyle}>
                <img src={ag} alt="Solar Panel" style={imageStyle} />
                <div style={contentStyle}>
                    <p>
                    As photovoltaic solar panels become more affordable, they have emerged as the preferred energy source for remote, off-grid locations. These areas often lack access to reliable electricity infrastructure, making solar energy an ideal solution. Solar panels provide a sustainable and eco-friendly alternative to traditional energy sources, reducing dependence on fossil fuels and lowering carbon emissions. The falling costs of solar technology have also made it feasible for more communities to adopt this renewable energy source, bridging the energy gap in underserved regions.
                    </p>
                    <p>
                        Government is supporting household solar energy programme by offering sizeable subsidy for individual and community based solar installations. The Foundation will provide knowhow and will help developing an eco system to make solar installations, their operations and maintenance sustainable. This will generate local employment and train youths in this emerging technology area.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>
                <div style={contentStyle}>
                    <h2 style={missionTitleStyle}>The Foundation’s Focus areas</h2>
                    <p>
                        <strong>1. Promoting Solar Power for Remote and Off-Grid Areas:</strong> In many rural and underserved regions, the lack of reliable electricity hinders development. The foundation will support the installation of solar electric panels to provide a clean.<br />
                        <strong>2. Supporting Solar Water Pump Systems for Agriculture:</strong> Solar water pumps have immense potential to improve water access for irrigation in Indian villages.<br />
                        <strong>3. Fostering Local Employment and Skill Development:</strong> By training youth in solar technology, from system installation to maintenance, we are creating job opportunities in an high-demand sector.<br />
                        <strong>4. Encouraging Community and Household Solar Installations:</strong> With government subsidies available for household and community-based solar programs, we are guiding communities through the process of acquiring and installing solar systems.
                    </p>
                </div>
                <img src={ag1} alt="Solar Installation" style={imageStyle} />
            </div>
        </div>
    );
}

export default SolarEnergy;
