// src/components/FooterCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCTA = () => {
  const carouselImages = [
    "/background.png",
    "/background.png",
    "/background.png",
    "/background.png"
  ];

  return (
    <footer
      className="relative text-white overflow-hidden py-12"
      style={{
        background: "linear-gradient(135deg, #342885 0%, #4851CC 30%, #2d7d96ff 60%, #2a8d76ff 100%)",
      }}
    >
      {/* Soft top border to separate from above section */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>

      {/* Left Side Double Columns */}
      <div className="absolute inset-y-0 left-0 w-70 hidden lg:flex space-x-3 p-2">
        {[0, 1].map((col) => (
          <div key={col} className="marquee flex flex-col space-y-4">
            {carouselImages.concat(carouselImages).map((src, i) => (
              <img
                key={i}
                src={src.trim()}
                alt={`carousel-left-${col}-${i}`}
                className="rounded-lg shadow-lg w-56"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Right Side Double Columns */}
      <div className="absolute inset-y-0 right-0 w-70 hidden lg:flex space-x-3 p-2">
        {[0, 1].map((col) => (
          <div key={col} className="marquee flex flex-col space-y-4 reverse-marquee">
            {carouselImages.concat(carouselImages).map((src, i) => (
              <img
                key={i}
                src={src.trim()}
                alt={`carousel-right-${col}-${i}`}
                className="rounded-lg shadow-lg w-56"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Main Content - Compact & High Contrast */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-6 text-center relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src="/logo-bg.png" alt="Quantum Quest Insights" className="h-16 w-auto" />
        </div>
        <p className="font-semibold text-base text-white/90 mb-4">Quantum Quest Insights</p>

        {/* CTA Content */}
        <h2 className="text-xl lg:text-2xl font-bold text-white/95 mb-5 max-w-2xl mx-auto leading-tight">
          Want us to boost your company growth?<br />
          Please Get In Touch!
        </h2>

        <Link to="/contact" className="inline-block mb-6">
          <button className="bg-white text-indigo-900 hover:bg-gray-100 font-semibold rounded-full px-6 py-2.5 text-sm transition-all duration-300 shadow-md hover:shadow-lg">
            Please get in touch
          </button>
        </Link>

        {/* Footer Bottom */}
        <p className="text-white/60 mt-6 text-xs">
          Designed by Quantum Quest Insights.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;