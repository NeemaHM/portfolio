import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>
          NEEMA MWANSEMBO
          <h1>Software Developer.</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            {/* Anchor tag styled like a button for downloading CV */}
            <a className="btn" href="./assets/Neema-CV.pdf" download>Download CV</a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default HeroImg;

