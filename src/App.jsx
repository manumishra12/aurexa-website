// src/App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import ScrollingBanner from './components/ScrollingBanner';
import CustomizationSection from './components/CustomizationSection';
import InnerPagesSection from './components/InnerPagesSection';
import CMSPagesSection from './components/CMSPagesSection';
import AuthPagesSection from './components/AuthPagesSection';
import FooterCTA from './components/FooterCTA';

const App = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header />
      <FeaturesSection />
      <ScrollingBanner />
      <CustomizationSection />
      <InnerPagesSection />
      <CMSPagesSection />
      {/* <AuthPagesSection /> */}
      <FooterCTA />
    </div>
  );
};

export default App;