import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import '../Components/Hero.css'; // Import your CSS styles
import heroImage from './Imgs/hero.webp'; // Replace with your image path

const Hero = () => {
  const { t, i18n } = useTranslation(); // Initialize translation and language detection
  
  // Check if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className={`row align-items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="col-lg-6 col-md-12 hero-content" data-aos={isArabic ? "fade-left" : "fade-right"} data-aos-duration="800">
            <h2 className="hero-title">
              {t('hero.title')}
            </h2>
            
            <h4 className="desc"style={{ fontSize: i18n.language === 'ar' ? '25px' : 'inherit' }}>
              {t('hero.description')}
            </h4>
            
            <div className="btns">
              <Link to="/contact" className="hero-button" id='buy'>
                {t('hero.buyNow')}
              </Link>
              <Link to="/contact" className="hero-button" id='contact'>
                {t('hero.contactUs')}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 col-md-12 hero-img-container" data-aos={isArabic ? "fade-right" : "fade-left"} data-aos-duration="600">
            <img
              src={heroImage}
              alt={t('hero.imageAlt')}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
