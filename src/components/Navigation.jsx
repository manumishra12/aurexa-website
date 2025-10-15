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
      <Link to="/" className="flex items-center space-x-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
        //   style={{
        //     background:
        //       "linear-gradient(135deg, rgba(9,14,23,1), rgba(28,26,53,1))",
        //   }}
        >
          <img src="/blue_logo_1.png" alt="A" className="h-6 w-auto" />
        </div>
        <span className="text-xl font-bold text-white">Quantum Quest Insights</span>
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

      {/* CTA Button - Desktop */}
      <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow transition-colors">
        Get a Quote
      </button>

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