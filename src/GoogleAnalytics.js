// src/GoogleAnalytics.js
import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Declare dataLayer explicitly
    window.dataLayer = window.dataLayer || [];
    
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H7TYG86QF2';
    script.async = true;
    document.body.appendChild(script);

    // Define gtag function
    const gtag = (...args) => {
      window.dataLayer.push(args); // Use window.dataLayer
    };

    gtag('js', new Date());
    gtag('config', 'G-H7TYG86QF2');

    return () => {
      document.body.removeChild(script); // Clean up script
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
