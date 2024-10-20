// src/Components/AboutUs.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUsers, FaRegSmileBeam, FaHeart } from 'react-icons/fa';
import './About.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      {/* Storytelling Section */}
      <section className="storytelling-section">
        <div className="storytelling-content">
          <h1 data-aos="fade-up">Discover the Magic of Toya</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            At Toya, we believe in the power of imagination and the joy of creativity. Our journey began with a simple idea: to create products that inspire children to explore, learn, and play. Every doll, every accessory, and every project we develop is crafted with love and attention to detail, ensuring that children not only have fun but also engage in meaningful play experiences.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Our passion for fostering creativity led us to design a range of educational toys that encourage children to express themselves, develop their skills, and connect with others. Through our projects, we aim to create a community where every child feels valued, heard, and inspired to dream big.
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            Join us on this exciting adventure as we continue to innovate and explore new ways to ignite creativity in the hearts of children everywhere. Together, let's make the world a more imaginative place, one Toya at a time!
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section class="vision-mission-section">
  <div class="vision-mission-content vision">
    <h2>Our Vision</h2>
    <p>
  To inspire a world where every child thrives through imaginative play, fostering creativity and environmental stewardship in a sustainable future. At SmartyDoll, we envision a generation of learners who embrace curiosity and innovation, shaping a better tomorrow for themselves and the planet.
</p>

 </div>
  <div class="vision-mission-content mission">
    <h2>Our Mission</h2>
    <p>
  At Toya, we empower children through innovative play that inspires creativity and critical thinking. Our mission is to create high-quality, sustainable toys that educate while entertaining, nurturing curiosity and a passion for learning. Together with parents and educators, we aim to foster responsible future generations who value both creativity and the planet.
</p>

  </div>
</section>


      {/* Values Section */}
      <section className="values-section" data-aos="fade-up">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <FaHeart className="value-icon" />
            <h3>Integrity</h3>
            <p>We believe in honesty and transparency in everything we do.</p>
          </div>
          <div className="value-item">
            <FaRegSmileBeam className="value-icon" />
            <h3>Joy</h3>
            <p>Bringing joy to children's lives through innovative play.</p>
          </div>
          <div className="value-item">
            <FaUsers className="value-icon" />
            <h3>Community</h3>
            <p>We are committed to building a community that supports each other.</p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section class="impact-section">
    <h2>Our Impact</h2>
    <div class="impact-cards">
        <div class="impact-card">
            <h3>Empowering Creativity</h3>
            <p>We foster imagination and creativity in children through innovative and engaging play experiences.</p>
        </div>
        <div class="impact-card">
            <h3>Community Engagement</h3>
            <p>Collaborating with local communities to create educational programs that promote creativity and sustainability.</p>
        </div>
        <div class="impact-card">
            <h3>Quality Education</h3>
            <p>Providing access to quality educational toys that enhance learning and development in a fun way.</p>
        </div>
    </div>
</section>

    </div>
  );
};

export default AboutUs;
