import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaStar, FaUsers, FaThumbsUp, FaClock } from 'react-icons/fa'; // Import icons from the library
import './WhyChooseUs.css'; // Ensure you have your CSS file
import Why from './Imgs/why.webp'; // Replace with your image path

const WhyChooseUs = () => {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent({
      title: t('whyChooseUs.title'),
      features: [
        { icon: <FaCheckCircle />, text: t('whyChooseUs.feature1') },
        { icon: <FaStar />, text: t('whyChooseUs.feature2') },
        { icon: <FaUsers />, text: t('whyChooseUs.feature3') },
        { icon: <FaThumbsUp />, text: t('whyChooseUs.feature4') },
        { icon: <FaClock />, text: t('whyChooseUs.feature5') },
        { icon: <FaCheckCircle />, text: t('whyChooseUs.feature6') },
      ],
    });
  }, [i18n.language, t]);

  const isArabic = i18n.language === 'ar'; // Check if the current language is Arabic

  return (
    <div className={`why-choose-us ${isArabic ? 'rtl' : ''}`}>
      <div className="section-image">
        <img src={Why} alt="Why Choose Us" />
      </div>
      <div className="section-content">
        <h2>{content.title}</h2>
        <div className="features">
          {content.features && content.features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
