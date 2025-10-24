// src/components/Navigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/', isExternal: false },
    { name: 'About', to: '/about', isExternal: true },
    { name: 'Services', to: '/services', isExternal: true },
    // { name: 'Pages', to: '#pages', isExternal: true },
    { name: 'Blog', to: '/blog', isExternal: false },
    { name: 'Contact', to: '/contact', isExternal: true },
  ];

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        setIsMobileMenuOpen(false);
      }
    } 
  };

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 lg:px-14 py-4 mt-6">
      {/* Logo - links to home */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="flex items-center justify-center">
          <img src="/logo-bg.png" alt="Quantum Quest Insights" className="h-16 w-auto" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">QUANTUM</span>
          <span className="text-xl font-bold text-white -mt-1">QUEST INSIGHTS</span>
          <span className="text-[10px] text-gray-300 tracking-widest mt-0.5">UNVEILING INSIGHTS, UNLOCKING GROWTH</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 font-medium">
        {navItems.map((item) =>
          item.isExternal ? (
            <a
              key={item.name}
              href={item.to}
              onClick={(e) => handleAnchorClick(e, item.to)}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.to}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      <Link to="/contact">
        <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow transition-colors">
          Get a Quote
        </button>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(9,14,23,0.95)] backdrop-blur-md lg:hidden z-50 border-t border-slate-800">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.to}
                  onClick={(e) => {
                    handleAnchorClick(e, item.to);
                  }}
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white hover:text-orange-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <button
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;