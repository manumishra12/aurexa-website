// src/pages/QuantumMarketIntel.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const QuantumMarketIntel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            OUR OFFERINGS
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quantum Market Intel</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Offers in-depth analysis of market share, industry trends, customer segments, and regional dynamics.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/quantum_intel_1.png"
                alt="Quantum Market Intel Dashboard"
                className="rounded-2xl shadow-xl w-full h-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
              <p className="text-slate-300 mb-6">
                Quantum Intel’s market intelligence delivers in-depth and precise technology-focused insights designed to support strategic decision-making.
              </p>
              <p className="text-slate-300 mb-6">
                This tool provides detailed analysis of market share, growth forecasts, customer segmentation, regional trends, and industry distribution, ensuring that organizations have a clear view of evolving market dynamics.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Methodology</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6l-6-6-6 6" />
                    </svg>
                    Integrates quantitative data with subject matter expert analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6l-6-6-6 6" />
                    </svg>
                    Enables businesses to accurately evaluate opportunities, anticipate challenges, and gain a competitive advantage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 px-6 lg:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Market Intelligence Visualizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Market Share",
                img: "/quantum_intel_1.png", 
                desc: "Breakdown of market share by vendor"
              },
              {
                title: "Industry Share",
                img: "/quantum_intel_2.png", 
                desc: "Distribution across industries like BFSI, Healthcare, Tech"
              },
              {
                title: "Regional Share",
                img: "/quantum_intel_3.png", 
                desc: "Performance across regions: APAC, EMEA, LATAM"
              },
              {
                title: "Customer Segment",
                img: "/quantum_intel_4.png", 
                desc: "Segmentation by Large, Medium, Small customers"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-contain rounded-lg"
                />
                <p className="text-slate-300 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Clarity",
                desc: "Make informed decisions with data-driven insights."
              },
              {
                title: "Competitive Advantage",
                desc: "Outperform competitors by understanding their moves."
              },
              {
                title: "Growth Opportunities",
                desc: "Identify untapped markets and segments for expansion."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumMarketIntel;