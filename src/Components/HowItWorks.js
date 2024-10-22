// HowItWorks.js
import React from 'react';
import { FaMobileAlt, FaBluetooth, FaCog, FaTachometerAlt, FaSmile, FaSyncAlt } from 'react-icons/fa';
import './HowItWorks.css';

const steps = [
  { id: 1, icon: <FaMobileAlt />, title: 'Download the App', description: 'Get started by downloading our app from the Google Play Store or the Apple App Store. The app is your control center for managing everything from conversations to customization.' },
  { id: 2, icon: <FaBluetooth />, title: 'Pair Your Smart Doll', description: 'Easily connect the smart doll to your phone via Bluetooth and personalize your child’s experience.' },
  { id: 3, icon: <FaCog />, title: 'Customize & Set Preferences', description: 'Choose the doll’s voice, language, and personality. Enter personal details like your child’s name to enhance interaction.' },
  { id: 4, icon: <FaTachometerAlt />, title: 'Monitor and Engage', description: 'Stay in control with the parental dashboard. View summaries, set boundaries, and ensure safe interactions.' },
  { id: 5, icon: <FaSmile />, title: 'Enjoy Fun, Safe Interaction', description: 'Let your child build a connection with the doll through personalized conversations, games, and learning.' },
  { id: 6, icon: <FaSyncAlt />, title: 'Update & Enhance the Experience', description: 'Regularly update the app to access new features and improvements. Your smart doll will continue to gain new abilities and content, ensuring the fun never stops.' },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title" data-aos="fade-up">How It Works</h2>
      <div className="steps-container">
        {steps.map(step => (
          <div className="step" key={step.id} >
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
