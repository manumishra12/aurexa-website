// src/components/Header.jsx
import React from "react";
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="relative text-white min-h-screen overflow-hidden">
      <Navigation />

      {/* Transparent background image (larger size) */}
      <div className="absolute bottom-0 right-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/background.png"
          alt="Background"
          className="w-[190%] md:w-[190%] lg:w-[250%] h-auto object-cover object-bottom-right translate-x-20 translate-y-10 scale-110"
        />
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none -mt-80 mb-80 px-8">
        <h1
          className="text-center text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[5.5vw] font-extrabold uppercase tracking-wide leading-tight"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textShadow: "0 0 6px rgba(255,255,255,0.3)",
          }}
        >
          Quantum Quest Insights
        </h1>
      </div>

      <div className="relative z-10 px-6 lg:px-12 pt-32">
        <div className="max-w-4xl mx-auto text-center mt-20">
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            16+ HIGH-IMPACT PRESENTATIONS
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Quantum Quest Insights <br />
            IT/Research <span className="italic text-gray-200">& Advisory</span>
          </h1>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow transition mb-20">
            Explore Demos
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-6 max-w-7xl mx-auto pb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm w-full md:w-[32%] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <span className="text-orange-400 text-xs font-medium tracking-wider">
                  {i === 1 ? 'MISSION' : i === 2 ? 'VISION' : 'OBJECTIVE'}
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mt-3 mb-4 leading-snug text-white">
                  {i === 1 ? 'AI Dashboard' : i === 2 ? 'Workflow Automation' : 'Cloud Native'} <br />
                  <span className="text-gray-300">
                    {i === 1 ? 'Insights & Analytics' : i === 2 ? 'Boost Productivity' : 'Deployments'}
                  </span>
                </h2>
                <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                  {i === 1
                    ? 'To provide transformative insights and market dynamics...'
                    : i === 2
                    ? 'We envision a future to pioneer in research market...'
                    : 'Our key objectives include pushing the boundaries of research...'}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20 mt-6">
                <img
                  src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683945a1276f22aa8622c317_Home%201%201.webp"
                  alt="Preview"
                  className="w-full h-48 object-cover"
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
