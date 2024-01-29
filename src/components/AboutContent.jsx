import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";


import React from 'react'

const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
            <p>
            I am Neema, a recent graduate with a Computer Programming diploma from Durham College, 
            My academic journey has instilled in me a deep understanding of programming languages, database management, and systems analysis.
            </p>
            <p>
            I love turning ideas into reality with code. I've got a solid foundation in various programming languages and technologies from my degree. 
            I enjoy solving problems and am always eager to learn and stay updated in this ever-evolving tech world. </p> 
            <p>          
            I bring a collaborative and adaptable mindset, making me a great fit for any team. </p>
            <p>Let's connect and explore how my programming skills can contribute to your projects!</p>
            
            <Link to="/contact">
                <button className="btn">Contact Me</button>
            </Link>
        
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
    </div>

  </div>;
};

export default AboutContent;
