import React from "react";
import Pic from "./assets/images/about-photo.png";
import Candle from "./assets/images/about-candle.png"
import "./components/sections/sections.css"

const About = () => {



    return (
        <React.Fragment>
        <div className="about-section-container" >
            <div className="about-section-image-container">
                <img className="about-section-candle" src={Candle} alt="Mother and Daughter"></img>
                <img className="about-section-photo" src={Pic} alt="Mother and Daughter"></img>
                <img className="about-section-candle" src={Candle} alt="Mother and Daughter"></img>
            </div>
            <div className="about-section-table">
                <h1>Mother & Daughter</h1>
                <p>Each candle handcrafted with love.</p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About;