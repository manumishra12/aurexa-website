// src/pages/AboutPage.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6">
              WHO WE ARE
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We blend qualitative expertise with
            </h1>
            <h2 className="text-4xl lg:text-6xl font-light italic text-gray-300 leading-none">
              quantitative insights!
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <blockquote className="text-lg lg:text-xl text-slate-200 leading-relaxed font-medium">
              “At Quantum Quest Insights, integrity, innovation, and collaboration are at the core of everything we do.
              These values drive our decision-making processes and foster a culture of excellence within the company.
              <br /><br />
              Ethical Standards: We uphold the highest ethical standards in our research practices, ensuring transparency, accuracy, and
              integrity in all our interactions. Our commitment to ethical conduct is non-negotiable.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">These principles guide every project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', color: 'orange' },
              { title: 'Innovation', color: 'purple' },
              { title: 'Collaboration', color: 'cyan' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-6`}>
                  <svg className={`h-8 w-8 text-${item.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* icon path */}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">Description here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;