// src/components/Navigation.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const servicesList = [
    "Software Development & Implementation",
    "Enterprise Data Strategy & Governance",
    "Connected Devices & Edge Technologies",
    "Data Analytics & AI Solutions",
    "IT Architecture & Strategic Planning",
    "Enterprise Risk & Compliance Management",
    "Business Process Optimization & Automation",
    "Human Capital & Workforce Technology",
    "Industry 4.0 & Engineering Tech",
    "Financial Services & Digital Banking",
    "Green Tech & Sustainable Solutions",
    "Cloud Infrastructure & Network Solutions",
    "Unified Communication & Collaboration Platforms",
    "RegTech & Compliance Solutions",
    "Digital Procurement & Supply Solutions",
    "Customer Experience & Marketing Technologies",
    "Cybersecurity & Data Protection",
    "Digital Commerce & Retail Innovation"
  ];

  // Split into 3 columns (6 items each)
  const col1 = servicesList.slice(0, 6);
  const col2 = servicesList.slice(6, 12);
  const col3 = servicesList.slice(12, 18);

  const navItems = [
    { name: 'Home', to: '/', isExternal: false },
    { name: 'About', to: '/about', isExternal: false },
    { name: 'Services', to: '/services', isExternal: false },
    { name: 'Blog', to: '/blog', isExternal: false },
    { name: 'Contact', to: '/contact', isExternal: false },
  ];

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 lg:px-14 py-4 mt-6">
      {/* Logo */}
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
      <div className="hidden lg:flex items-center space-x-8 font-medium relative">
        {navItems.map((item) => {
          if (item.name === 'Services') {
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                ref={dropdownRef}
              >
                <Link
                  to={item.to}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>

                {/* Dropdown - Wider, 3-column */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-[#1C1A35] border border-slate-700 rounded-xl shadow-2xl z-50 p-6">
                    <h4 className="text-orange-400 text-xs font-bold tracking-wider mb-4">
                      WHO WE SERVE
                    </h4>
                    <div className="grid grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                      {/* Column 1 */}
                      <div>
                        {col1.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            className="block text-slate-300 hover:text-white text-sm py-1 transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            • {service}
                          </Link>
                        ))}
                      </div>
                      {/* Column 2 */}
                      <div>
                        {col2.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            className="block text-slate-300 hover:text-white text-sm py-1 transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            • {service}
                          </Link>
                        ))}
                      </div>
                      {/* Column 3 */}
                      <div>
                        {col3.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            className="block text-slate-300 hover:text-white text-sm py-1 transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            • {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.to}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* CTA Button - Desktop */}
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
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