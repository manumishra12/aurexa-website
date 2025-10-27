// src/pages/ResearchStep3.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const ResearchStep3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6">
            RESEARCH METHODOLOGY
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Data Validation & Cross-Verification</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Triangulating information to ensure accuracy and reliability.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Data Validation & Cross-Verification</h2>
                <p className="text-slate-200 text-lg">
                  We ensure every insight is accurate, reliable, and actionable.
                </p>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6l-6-6-6 6" />
                  </svg>
                  <span className="text-slate-200 text-lg">Triangulate information from multiple sources for accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6l-6-6-6 6" />
                  </svg>
                  <span className="text-slate-200 text-lg">Compare vendor claims with customer feedback and benchmarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6l-6-6-6 6" />
                  </svg>
                  <span className="text-slate-200 text-lg">Validate tech/product updates with real-world market adoption trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchStep3;