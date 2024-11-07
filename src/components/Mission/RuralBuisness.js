import React from 'react';
import './ruralbuisness.css';
import Entre from "../../photos/enter.jpeg";
import Ruralemploy from "../../photos/empl.jpg";

function Rural() {
    return (
        <div className="container">
            <header className="header">
                <h1>Rural Business Promotion Center</h1>
            </header>

            <section className="focus-section">
                <h2>Promoting Entrepreneurship</h2>
                <ul>
                    <li>Foundation will set up following Cillage Centres at Taluka Levels:</li>
                    <li>Rural Technology Demonstration Centres</li>
                    <li>Rural Technology Incubation Centres</li>
                    <li>Rural business Promotion Centres</li>
                    <li>Rural Youths will be pursued to be part of these Centres and set up</li>
                    <li>businesses in their native villages itself.</li>
                </ul>
            </section>
            <section className="image-section">
                <img src={Entre} alt="Promoting Entrepreneurship" className="image" />
            </section>

            <section className="focus-section">
                <h2>Generating Employment</h2>
                <p>
                    Cillage Centres will help people to set up rural specific micro 
                    and small enterprises and generate employment opportunities 
                    in these enterprises for local youths.
                </p>
            </section>
            <section className="image-section">
                <img src={Ruralemploy} alt="Generating Employment" className="image" />
            </section>
        </div>
    );
}
export default Rural;