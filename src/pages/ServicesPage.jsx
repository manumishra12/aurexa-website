// src/pages/ServicesPage.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const ServicesPage = () => {
  const services = [
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

  const img1 = "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp";
  const img2 = "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              OUR EXPERTISE
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to empower your organization with strategic insights and technological excellence.
            </p>
          </div>

          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden border border-white/20 bg-white/5 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105"
                >
                  <img
                    src={index % 2 === 0 ? img1 : img2}
                    alt={service}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h4 className="text-lg font-semibold text-white">{service}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;