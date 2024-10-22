import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';
import WhyChooseUs from './Components/WhyChooseUs';
import AboutUs from './Components/AboutUs'; 
import HowItWorks from './Components/HowItWorks'; 
import BlogPage from './Components/BlogPage'; 
import GoogleAnalytics from './GoogleAnalytics'; // Import the Google Analytics component
import './App.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <GoogleAnalytics /> {/* Include Google Analytics component */}
        <Navbar />
        <ScrollToTop /> {/* Include ScrollToTop component */}
        
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Hero id="hero" />
              <WhyChooseUs id="why-choose-us" />
              <Testimonials id="testimonials" />
            </>
          } />
          
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blogs" element={<BlogPage />} />

          {/* Optional: Add a Not Found Route */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
