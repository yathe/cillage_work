import React from 'react'
import './About.css'
import partner from '../photos/partner.jpg'
import vol from "../photos/volunteer.jpg"
const About = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector(".text-container1");

    // Check if Intersection Observer is supported
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class when element is in view
                    //textContainer.classList.add("animate");
                    observer.unobserve(entry.target); // Stop observing after animation triggers
                }
            });
        }, { threshold: 0.5 }); // Adjust threshold as needed

        observer.observe(textContainer);
    }
});
  return (
    <div className='container1'><div className="text-container1">
    <h1>About the  </h1>
    <h1>Cillage India Foundation  </h1>
</div>
<ul className='about-ul'>
    <li className='about-ul-li'>'Cillage India Foundation’ is a social initiative by a group of  scientists and  entrepreneurs</li>
    <li className='about-ul-li'>Foundation is a Section 8 Company registered  with Ministry of Corporate Affairs.</li>
    <li className='about-ul-li'>Foundation intends to improve basic infrastructure in villages and transform the life in Indian Villages</li>
    <li className='about-ul-li'>Our work domains are clean water, solar energy, sanitation, health, agriculture & education in villages</li>
    <li className='about-ul-li'>Through CSR Programmes of Corporates; Foundation aims to set-up  prototype units of various rural
    technologies in the villages</li>
    <li className='about-ul-li'>Foundation will promote entrepreneurship/geneate local employment  in rural areas by setting up
    ‘Technology Incubation/Business Promotion Centers’</li>
    <li className='about-ul-li'>Foundation aims to adopt & convert few villages into ‘Model  Sustainable Villages’</li>
</ul>
</div>
  )
}


export default About
