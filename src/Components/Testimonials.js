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
      quote: "I've been using Toya products for a few months now, and I can confidently say they are top-notch! The quality is exceptional, and the design is both modern and functional. I love how they combine aesthetics with usability. Every piece feels thoughtfully crafted, making my daily routine so much easier. Highly recommend!",
      name: "Alice Johnson",
      image: testimonialImage,
      rating: 5
    },
    {
      quote: "Toya's customer service is truly outstanding. I had a question about my order, and their team responded promptly and helped me resolve my issue with a friendly attitude. It's refreshing to see a company that genuinely cares about its customers. I'm impressed and will definitely be a repeat customer!",
      name: "Bob Smith",
      image: testimonialImage,
      rating: 4
    },
    {
      quote: "As a busy parent, I’m always looking for products that simplify my life, and Toya has delivered! Their innovative solutions have made such a difference in our household. From organizing toys to versatile storage options, everything is designed with practicality in mind. Toya has quickly become a brand I trust for quality and convenience!",
      name: "Charlie Brown",
      company: "Design Co.",
      image: testimonialImage,
      rating: 5
    },
  ];

  return (
    <div className="testimonial-container">
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
