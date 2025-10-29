// src/pages/WhoWeServePage.jsx
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/FooterCTA";

const WhoWeServePage = () => {
  const [activeTab, setActiveTab] = useState("industry");

  const services = [
    {
      name: "Software Development & Implementation",
      desc: "Building robust and scalable applications tailored to your business goals.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Enterprise Data Strategy & Governance",
      desc: "Transforming data into actionable insights through governance and strategy.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Connected Devices & Edge Technologies",
      desc: "Empowering IoT ecosystems with intelligent edge solutions.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Data Analytics & AI Solutions",
      desc: "Driving innovation through predictive analytics and machine learning.",
      img: "/data_analytics.jpeg",
    },
    {
      name: "IT Architecture & Strategic Planning",
      desc: "Designing future-ready digital frameworks for sustainable growth.",
      img: "https://images.unsplash.com/photo-1562601553-b67e9e26f364?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Enterprise Risk & Compliance Management",
      desc: "Mitigating risk with proactive compliance and regulatory strategies.",
      img: "/enterprise_data_strategy.jpeg",
    },
    {
      name: "Business Process Optimization & Automation",
      desc: "Simplifying operations with workflow automation and intelligent systems.",
      img: "/bpm.jpeg",
    },
    {
      name: "Human Capital & Workforce Technology",
      desc: "Empowering teams with digital HR and workforce optimization tools.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Industry 4.0 & Engineering Tech",
      desc: "Revolutionizing industries through smart manufacturing and automation.",
      img: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Financial Services & Digital Banking",
      desc: "Modernizing finance through secure and seamless digital solutions.",
      img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Green Tech & Sustainable Solutions",
      desc: "Driving sustainability through innovative and eco-friendly technologies.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cloud Infrastructure & Network Solutions",
      desc: "Seamless cloud adoption and secure network management services.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Unified Communication & Collaboration Platforms",
      desc: "Bringing teams together through intelligent communication tools.",
      img: "/unified_communication.jpeg",
    },
    {
      name: "RegTech & Compliance Solutions",
      desc: "Enhancing transparency and control with advanced regulatory tech.",
      img: "https://plus.unsplash.com/premium_photo-1661696766614-49a79483876c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Digital Procurement & Supply Solutions",
      desc: "Optimizing procurement cycles with smart digital integrations.",
      img: "/digital_procurement.jpeg",
    },
    {
      name: "Customer Experience & Marketing Technologies",
      desc: "Delivering exceptional digital journeys through AI-driven engagement.",
      img: "/customer_exp.jpeg",
    },
    {
      name: "Cybersecurity & Data Protection",
      desc: "Protecting digital assets with end-to-end cybersecurity frameworks.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Digital Commerce & Retail Innovation",
      desc: "Redefining shopping experiences through next-gen retail tech.",
      img: "/digital_commerce.jpeg",
    },
  ];

  const geographies = [
    { name: "North America", desc: "Deep market intelligence across US & Canada." },
    { name: "Europe", desc: "Expertise in GDPR, fintech, and industrial digitalization." },
    { name: "Latin America", desc: "Rapidly growing tech adoption across Brazil & Mexico." },
    { name: "Middle East", desc: "Smart city and energy digital transformation expertise." },
    { name: "Asia Pacific", desc: "AI and robotics leadership across China, Japan, Korea." },
    { name: "South Asia", desc: "Mobile-first SaaS growth, including India & Bangladesh." },
    { name: "Africa", desc: "Digital leapfrogging, fintech innovation & infra growth." },
  ];

  const industryTypes = [
    { type: "SMB", desc: "Fast deployment, cost-efficient, scalable growth." },
    { type: "Large", desc: "Structured digital transformation and integration." },
    { type: "Enterprise", desc: "Global consistency, governance & long-term value." },
  ];

  const changeMakers = [
    {
      role: "Strategic",
      titles: "CEO, CMO, CTO, CFO",
      value: "Driving transformation and market expansion.",
    },
    {
      role: "Product",
      titles: "VP Product, VP Architect, VP Product Marketing",
      value: "Building winning products with market insights.",
    },
    {
      role: "Marketing",
      titles: "CMO, VP Sales",
      value: "Revenue growth through data-led customer engagement.",
    },
    {
      role: "Finance | Compliance | Governance",
      titles: "CFO, CCO",
      value: "Ensuring financial health, compliance & ROI.",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        background:
          "linear-gradient(135deg, #342885 0%, #4851CC 30%, #28778fff 60%, #2e9c82ff 100%)",
      }}
    >
      <Navigation />

      <main className="flex-grow py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* ----------- Header ---------- */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-500 px-4 py-1 rounded-full text-xs font-bold">
            OUR EXPERTISE
          </span>
          <h1 className="text-4xl font-bold mt-4">WHO WE SERVE</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Comprehensive solutions designed to empower your organization with strategic insights and technological excellence.
          </p>
        </div>

        {/* ----------- Tabs ---------- */}
        <div className=" mb-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {["industry", "geography", "industryType", "changeMaker"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 text-slate-200 hover:bg-white/20"
                }`}
              >
                {tab === "industry"
                  ? "Industry"
                  : tab === "geography"
                  ? "Geography"
                  : tab === "industryType"
                  ? "Industry Type"
                  : "Change Makers"}
              </button>
            ))}
          </div>
        </div>

        {/* ----------- Tab Content ---------- */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">

          {/* ✅ INDUSTRY TAB — SHOW SERVICES WITH IMAGES */}
          {activeTab === "industry" && (
            <>
              <h2 className="text-2xl font-bold mb-6">Our Services Across Industries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                  <div key={i} className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:shadow-xl hover:scale-105 transition">
                    <img src={service.img} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-2 text-white">{service.name}</h4>
                      <p className="text-sm text-slate-300">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ✅ GEOGRAPHY TAB */}
          {activeTab === "geography" && (
            <>
              <h2 className="text-2xl font-bold mb-6">Global Reach. Local Expertise.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {geographies.map((geo, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/20 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold text-white">{geo.name}</h3>
                    <p className="mt-2 text-slate-300 text-sm">{geo.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ✅ INDUSTRY TYPE TAB */}
          {activeTab === "industryType" && (
            <>
              <h2 className="text-2xl font-bold mb-6">Solutions for Every Organization Size</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {industryTypes.map((size, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/20 hover:scale-105 transition">
                    <h3 className="text-xl font-bold">{size.type}</h3>
                    <p className="mt-2 text-slate-300">{size.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ✅ CHANGE MAKERS TAB */}
          {activeTab === "changeMaker" && (
            <>
              <h2 className="text-2xl font-bold mb-6">Empowering Change Makers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {changeMakers.map((maker, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/20 hover:scale-105 transition">
                    <h3 className="text-xl font-bold">{maker.role}</h3>
                    <p className="mt-2 text-slate-300 text-sm"><strong>Titles: </strong>{maker.titles}</p>
                    <p className="mt-3 text-slate-400 text-xs"><strong>Value Delivered:</strong> {maker.value}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeServePage;
