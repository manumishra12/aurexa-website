// src/pages/Quantum360.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const Quantum360 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            OUR OFFERINGS
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quantum 360</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Delivers comprehensive market insights, including competitive advantage, product intelligence, and customer understanding.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-full h-full text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
                    <path
                      strokeLinecap="round"
                      strokeWidth={1.5}
                      d="M12 9v6M9 12h6"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: "Competitive Intelligence",
                    items: ["Investments", "Organizational Changes", "Strategy"],
                    color: "cyan"
                  },
                  {
                    title: "Market Understanding",
                    items: ["Market Share", "Market Forecast", "Market Volume Analysis"],
                    color: "blue"
                  },
                  {
                    title: "Product Intelligence",
                    items: ["Pricing", "Product Intros", "Promotions"],
                    color: "orange"
                  },
                  {
                    title: "Customer Understanding",
                    items: ["Product Definition", "Customer Behaviour", "Loyalty/Customer Satisfaction"],
                    color: "green"
                  }
                ].map((quad, i) => (
                  <div
                    key={i}
                    className={`bg-${quad.color}-500/10 backdrop-blur-sm rounded-xl p-4 border border-${quad.color}-500/20`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{quad.title}</h3>
                    <ul className="space-y-1">
                      {quad.items.map((item, j) => (
                        <li key={j} className="text-slate-300 text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is Quantum 360?</h2>
              <p className="text-slate-300 mb-6">
                Quantum 360 delivers a holistic market intelligence framework that empowers organizations with a complete view of their competitive landscape.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">The Framework</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-cyan-400">Competitive Intelligence:</strong> Tracks investments, organizational changes, and strategies of key players.
                  </div>
                  <div>
                    <strong className="text-blue-400">Market Understanding:</strong> Delivers insights on market share, opportunity forecasts, and volume analysis to identify growth avenues.
                  </div>
                  <div>
                    <strong className="text-orange-400">Product Intelligence:</strong> Offers guidance on pricing, product introductions, and promotional activities.
                  </div>
                  <div>
                    <strong className="text-green-400">Customer Understanding:</strong> Analyzes customer behavior, adoption, loyalty, and satisfaction.
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Together, Quantum 360 equips businesses with actionable intelligence to achieve sustainable growth and a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 lg:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Competitive Edge",
                desc: "Track competitors' moves and position yourself strategically."
              },
              {
                title: "Market Clarity",
                desc: "Understand market dynamics, forecasts, and volume trends."
              },
              {
                title: "Product Optimization",
                desc: "Refine pricing, launches, and promotions for maximum impact."
              },
              {
                title: "Customer Insight",
                desc: "Deep-dive into behavior, loyalty, and satisfaction to build stronger relationships."
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

export default Quantum360;