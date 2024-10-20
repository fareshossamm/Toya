// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';
import './App.css';
import WhyChooseUs from './Components/WhyChooseUs';

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
          <Route path="/" element={
            <>
              <Hero />
              <WhyChooseUs />
              <Testimonials />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
