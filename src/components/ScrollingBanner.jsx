import React from 'react';

const ScrollingBanner = () => {
  const features = [
    'DevOps Automation',
    'Agentic AI',
    'Hyper-Automation',
    'Open Banking API\'s',
    'Ai-Augmented Tools',
    'Omnichannel Engagement',
    'Data Mesh',
    'AI Workforce Agents',
    'Real-Time Fraud Detection',
    'Zero-Trust Architecture',
    'Quantum Cryptography',
    'Edge AI',
    'Digital Twin',
    'Network as a Service (NaaS)',
    'AI sourcing',
    'Voice Commerce',
    'Predictive Logistics'
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 overflow-hidden">
      <div className="flex space-x-8 animate-scroll whitespace-nowrap">
        {[...features, ...features, ...features].map((feature, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="text-2xl font-bold">★</span>
            <span className="text-2xl font-bold">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;