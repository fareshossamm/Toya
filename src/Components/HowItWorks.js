import React from 'react';
import { FaMobileAlt, FaBluetooth, FaCog, FaTachometerAlt, FaSmile, FaSyncAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './HowItWorks.css';

const steps = [
  { id: 1, icon: <FaMobileAlt />, titleKey: 'howItWorks.download.title', descriptionKey: 'howItWorks.download.description' },
  { id: 2, icon: <FaBluetooth />, titleKey: 'howItWorks.pair.title', descriptionKey: 'howItWorks.pair.description' },
  { id: 3, icon: <FaCog />, titleKey: 'howItWorks.customize.title', descriptionKey: 'howItWorks.customize.description' },
  { id: 4, icon: <FaTachometerAlt />, titleKey: 'howItWorks.monitor.title', descriptionKey: 'howItWorks.monitor.description' },
  { id: 5, icon: <FaSmile />, titleKey: 'howItWorks.enjoy.title', descriptionKey: 'howItWorks.enjoy.description' },
  { id: 6, icon: <FaSyncAlt />, titleKey: 'howItWorks.update.title', descriptionKey: 'howItWorks.update.description' },
];

const HowItWorks = () => {
  const { t, i18n } = useTranslation(); // Initialize translation function

  return (
    <section className="how-it-works">
      <h2 className="section-title" data-aos="fade-up">{t('howItWorks.title')}</h2>
      <div className="steps-container">
        {steps.map(step => (
          <div className="step" key={step.id}>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title" style={{ fontSize: i18n.language === 'ar' ? '30px' : 'inherit', fontWeight: 'bold' }}>
  {t(step.titleKey)}
</h3>
            <p className="step-description" style={{ fontSize: i18n.language === 'ar' ? '22px' : 'inherit' }}>
              {t(step.descriptionKey)}
            </p>
            <div className="step-number">{step.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
