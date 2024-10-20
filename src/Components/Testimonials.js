import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'; // or 'swiper/swiper.css' based on your version
import './Testimonial.css';
import { FaStar } from 'react-icons/fa';
import testimonialImage from './Imgs/hero.webp';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [
    {
      quote: "Toya transformed our business with innovative solutions!",
      name: "Alice Johnson",
      company: "Creative Agency",
      image: testimonialImage,
      rating: 5
    },
    {
      quote: "Exceptional service and a great team to work with!",
      name: "Bob Smith",
      company: "Tech Innovations",
      image: testimonialImage,
      rating: 4
    },
    {
      quote: "Their creativity knows no bounds. Highly recommended!",
      name: "Charlie Brown",
      company: "Design Co.",
      image: testimonialImage,
      rating: 5
    },
  ];

  return (
    <div className="about-container">
      {/* Other sections */}

      {/* Testimonials Section */}
      <section className="testimonial-section" data-aos="fade-up" data-aos-delay="400">
        <h2>What Our Clients Say</h2>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]} // Add this line
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-content">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Other sections */}
    </div>
  );
};

export default About;
