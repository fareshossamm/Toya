// index.js or App.js
import React from 'react';
// In your src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js as well
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Hero from './Components/Hero'; // Import Hero component
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
        <Hero /> 
        <WhyChooseUs /> 
        <Routes>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
