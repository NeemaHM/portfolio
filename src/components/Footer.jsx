import "./FooterStyles.css"

import React from 'react'

import { FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaWordpress } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
               
                <div className="location">
                <h4>
                    <FaLocationDot size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    Ontario, Canada 
                    </h4>
                </div>
            
                <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>    
                    (431)-877-7123
                </h4>              
                </div>
                <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>    
                    neyharry2003@gmail.com
                </h4>              
                </div>                
            </div>

            <div className="right">
                <h4>
                    About Me
                </h4>
                <p>
                    Hello! My name is Neema. Each project is a new learning experience for
                    me, crafting my skills in software development.
                </p>
                <div className="social">
                <FaGithub size={32} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaLinkedin size={32} style={{color:"#fff", marginRight: "2rem"}}/>  
                <FaWordpress size={32} style={{color:"#fff", marginRight: "2rem"}}/>  

            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
