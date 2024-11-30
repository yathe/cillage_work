import React, { useState } from "react";
import fo1 from "../photos/fo1.png";
import fo2 from "../photos/fo2.png";
import fo from "../photos/fo.png"
import "./Whoweare.css";

const Whoweare = () => {
  const [modalData, setModalData] = useState(null);

  const founders = [
    {
      name: "Shrikrishna Gupta",
      image: fo1,
      description: "(Former Outstanding Scientist at Department of Atomic Energy)<br/>An expert on Accelerator Technologies<br/>Coordinated with various GOI ministries to promote DAE Technologies for Societal Benefits",
      modalContent: "Shri Gupta, Outstanding Scientist and former Project Director and OSD at DAE. He played a pivotal role in deployment of the DAE Spin-off technologies for societal application in the field of Food Agriculture, Water, Environment and Health as Head Technology Transfer Division. An expert on particle accelerator and vacuum technology by profession has largely contributed to DAE accelerator program.",
    },
    {
      name: "Dr. Lalit Varshney",
      image: fo,
      description: "(Former Head, Radiation Technology Development Division, BARC)<br/>An Expert on Sludge Hygenisation & Waste Water Treatment<br/>Implemented many DAE Technologies for Rural Applications in the field",
      modalContent:
        "Dr. Varshney is  former Senior Professor and Outstanding Scientist from  BARC. He is pioneer in Radiation technology applications in Health Care, Environment and Industry. He has  several journal publications, patents and technology transfers and also IAEA expert on such applications. Medical product sterilization, sludge hygenisation, waste water treatment, food processing, polymers and composites, hydrogels, plant growth promoters etc are some of his contribution to national program",
    },
    {
      name: "Arun Kumar Tiwari",
      image: fo2,
      description: "(An entrepreneur promoting/manufacturing products for clean water and waste water treatment)<br/>An IIT Delhi Alumni<br/>Experienced in working at villages to promote sustainable living",
      modalContent:
        "<ul><li>Shri Tiwari is an Industrialist and social worker, very keen to restore the environment by deploying modern technology and improving the quality of life for deprived citizens from rural areas.</li><li>He is an IITD alumnus and licensee of DAE/DRDO/ISRO technologies.</li><li>Completed many projects of DAE on water and sanitation. Actively involved in many social initiatives.</li></ul>",
    },
  ];

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <div className="about-us">
      <h1>About Us</h1>
      {founders.map((founder, index) => (
        <div className="founder" key={index}>
          <img
            src={founder.image}
            alt={founder.name}
            className="founder-image"
          />
          <div className="founder-details">
            <h5>{founder.name}</h5>
            <p dangerouslySetInnerHTML={{ __html: founder.description }}></p>
            <span className="see-more" onClick={() => openModal(founder)}>
              See more...
            </span>
          </div>
        </div>
      ))}

      {modalData && (
        <>
          <div className="modal-overlay active" onClick={closeModal}></div>
          <div className="modal active">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-content">
              <img
                src={modalData.image}
                alt={modalData.name}
                className="modal-image"
              />
              <div
                className="modal-text"
                dangerouslySetInnerHTML={{ __html: modalData.modalContent }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Whoweare;
