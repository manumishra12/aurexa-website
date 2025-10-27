// src/pages/ResearchStep5.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const ResearchStep5 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6">
            RESEARCH METHODOLOGY
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4"> Vendor Positioning with Quantum Scope</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Mapping vendors using our proprietary framework.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">5</span>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Vendor Positioning with Quantum Scope</h2>
                <p className="text-slate-200 text-lg">
                  Our proprietary framework maps vendors based on Tech Innovation (X-axis) and Market Share (Y-axis).
                </p>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Mapping Vendors</h3>
                <p className="text-slate-200 text-lg">
                  Map vendors on Quantum Scope, our proprietary vendor positioning framework.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">X-Axis (Tech Innovation)</h3>
                <p className="text-slate-200 text-lg">
                  Evaluates level of technological advancement and industry impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Y-Axis (Market Share)</h3>
                <p className="text-slate-200 text-lg">
                  Highlights competitive strength and market penetration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Categorization</h3>
                <p className="text-slate-200 text-lg">
                  Clear categorization of Leaders, Challengers, Niche Players, and Emerging Innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchStep5;