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

// Import new pages
import QuantumScope from './pages/QuantumScope';
import QuantumMarketIntel from './pages/QuantumMarketIntel';
import QuantumAmplify from './pages/QuantumAmplify';
import QuantumConsulting from './pages/QuantumConsulting';
import Quantum360 from './pages/Quantum360';

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{
          background: "linear-gradient(135deg, #342885 0%, #4851CC 30%, #1a97bdff 60%, #1ec49dff 100%)",
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

          {/* New Offering Pages */}
          <Route path="/quantum-scope" element={<QuantumScope />} />
          <Route path="/quantum-market-intel" element={<QuantumMarketIntel />} />
          <Route path="/quantum-amplify" element={<QuantumAmplify />} />
          <Route path="/quantum-consulting" element={<QuantumConsulting />} />
          <Route path="/quantum-360" element={<Quantum360 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;