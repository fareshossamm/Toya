// WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; // Import your CSS styles
import chooseUsImage from './Imgs/why.jpg'; // Replace with your image path
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap Container, Row, and Col
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import {
  faGraduationCap,
  faUserCog,
  faShieldAlt,
  faChild,
  faTools,
  faComments
} from '@fortawesome/free-solid-svg-icons'; // Import icons

const WhyChooseUs = () => {
  const features = [
    {
      icon: faGraduationCap,
      text: "Interactive Learning: Toya blends fun with education, helping kids learn while they play."
    },
    {
      icon: faUserCog,
      text: "Personalized Experience: Tailored interactions that adapt to your child's personality and growth."
    },
    {
      icon: faShieldAlt,
      text: "Safe & Secure: Designed with top-tier privacy and security for your child’s safety."
    },
    {
      icon: faChild,
      text: "Grows with Your Child: Toya evolves with new content as your child develops."
    },
    {
      icon: faTools,
      text: "Easy Parental Control: Simple app controls let parents customize and monitor playtime."
    },
    {
      icon: faComments,
      text: "Emotional Development: Promotes empathy and communication through engaging conversations."
    }
  ];

  return (
    <Container fluid className="choose-us-section">
      <Row className="align-items-center">
      <Col xs={12} md={6} className="choose-us-image" data-aos="fade-down" data-aos-duration="800">
          <img src={chooseUsImage} alt="Why Choose Us" />
        </Col>
        <Col xs={12} md={6} className="choose-us-content" data-aos="fade-up" data-aos-duration="800">
          <h2 className="choose-us-title">Why Choose Us?</h2>
          <ul className="choose-us-list">
            {features.map((feature, index) => (
              <li key={index} className="choose-us-item">
                <FontAwesomeIcon icon={feature.icon} className="choose-us-icon" />
                {feature.text}
              </li>
            ))}
          </ul>
        </Col>
      
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
