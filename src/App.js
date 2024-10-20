import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';
import WhyChooseUs from './Components/WhyChooseUs';
import AboutUs from './Components/AboutUs';  // Import the AboutUs component
import './App.css';

function App() {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <WhyChooseUs />
              <Testimonials />
            </>
          } />
          
          {/* About Us Page Route */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
