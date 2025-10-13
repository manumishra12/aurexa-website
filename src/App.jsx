// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import ScrollingBanner from './components/ScrollingBanner';
import CMSPagesSection from './components/CMSPagesSection';
import FooterCTA from './components/FooterCTA';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{
          background: "linear-gradient(135deg, #342885 0%, #4851CC 30%, #1d93b7ff 60%, #2decbf92 100%)",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <FeaturesSection />
                <ScrollingBanner />
                <CMSPagesSection />
                <FooterCTA />
              </>
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;