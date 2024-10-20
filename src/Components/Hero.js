// Hero.js
import React from 'react';
import { Link } from "react-router-dom";
import '../Components/Hero.css'; // Import your CSS styles
import heroImage from './Imgs/hero.webp'; // Replace with your image path

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 hero-content" data-aos="fade-right" data-aos-duration="800">
                <h2 className="hero-title">
                Meet Your Child’s New Best Friend: The Smart Doll That Talks, Learns, and Grows with Them!
                
                </h2>
                
                <h4 className="desc">
                Interactive conversations, learning experiences, and endless fun – all in one smart doll. Control everything with our app!
                </h4>
                <div className="btns">
                  <Link to="/contact" className="hero-button" id='buy'>
                   BUY NOW 
                  </Link>
                  <Link to="/contact" className="hero-button" id='contact'>
                   Contact US
                  </Link>
                 
    
                </div>
              </div>
    
              <div className="col-lg-6 col-md-12 hero-img-container" data-aos="fade-left" data-aos-duration="800">
                <img
                  src={heroImage}
                  alt="Fares Hossam - Frontend Developer"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </section>
      );
};

export default Hero;
