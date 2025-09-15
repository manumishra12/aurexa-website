import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="relative text-white min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(9,14,23,1) 0%, rgba(28,26,53,1) 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10" />

      {/* Huge transparent fading text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none -mt-80 mb-80">
        <h1
          className="text-[10vw] font-extrabold uppercase tracking-widest"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.1))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          SOFTWARE
        </h1>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-14 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(9,14,23,1), rgba(28,26,53,1))",
            }}
          >
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold">Aurexa</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8 font-medium">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#pages" className="hover:text-gray-300">Pages</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow">
          Start Free Trial
        </button>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[rgba(9,14,23,0.95)] lg:hidden z-50">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#pages">Pages</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 px-6 lg:px-12 pt-32">
        <div className="max-w-4xl mx-auto text-center mt-20">
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            16+ HIGH-IMPACT PRESENTATIONS
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            High-Performance Webflow <br />
            Template{" "}
            <span className="italic text-gray-200">For AI SaaS</span>
          </h1>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow transition mb-20">
            Explore Demos
          </button>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-6 max-w-7xl mx-auto pb-16">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative rounded-2xl p-8 border border-slate-700 shadow-xl bg-[rgba(28,26,53,0.8)] w-full md:w-[32%] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <span className="text-orange-400 text-xs font-medium tracking-wider">
                  DATA-DRIVEN, AI-POWERED
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mt-3 mb-4 leading-snug text-gray-100">
                  AI-Powered SaaS Smarter,
                  <br />
                  <span className="text-gray-300">Faster, Scalable</span>, Effortless
                </h2>
                <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                  Unlock next-level performance with our cutting-edge AI solutions built for scale,
                  with seamless integrations.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium shadow">
                  Request A Demo
                </button>
              </div>

              {/* Image inside card */}
              <div className="rounded-xl overflow-hidden border border-slate-700 mt-6">
                <img
                  src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683945a1276f22aa8622c317_Home%201%201.webp"
                  alt="AI Dashboard Preview"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;