// src/pages/ServicesPage.jsx
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/FooterCTA";

const ServicesPage = () => {
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
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "IT Architecture & Strategic Planning",
      desc: "Designing future-ready digital frameworks for sustainable growth.",
      img: "https://images.unsplash.com/photo-1562601553-b67e9e26f364?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },
    {
      name: "Enterprise Risk & Compliance Management",
      desc: "Mitigating risk with proactive compliance and regulatory strategies.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Business Process Optimization & Automation",
      desc: "Simplifying operations with workflow automation and intelligent systems.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Human Capital & Workforce Technology",
      desc: "Empowering teams with digital HR and workforce optimization tools.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Industry 4.0 & Engineering Tech",
      desc: "Revolutionizing industries through smart manufacturing and automation.",
      img: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Financial Services & Digital Banking",
      desc: "Modernizing finance through secure and seamless digital solutions.",
      img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
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
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "RegTech & Compliance Solutions",
      desc: "Enhancing transparency and control with advanced regulatory tech.",
      img: "https://plus.unsplash.com/premium_photo-1661696766614-49a79483876c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Digital Procurement & Supply Solutions",
      desc: "Optimizing procurement cycles with smart digital integrations.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Customer Experience & Marketing Technologies",
      desc: "Delivering exceptional digital journeys through AI-driven engagement.",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cybersecurity & Data Protection",
      desc: "Protecting digital assets with end-to-end cybersecurity frameworks.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Digital Commerce & Retail Innovation",
      desc: "Redefining shopping experiences through next-gen retail tech.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        background:
          "linear-gradient(135deg, #342885 0%, #4851CC 30%, #2686a3b7 60%, #32ba9ab8 100%)",
      }}
    >
      <Navigation />

      <main className="flex-grow py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              OUR EXPERTISE
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Who We Serve
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Comprehensive solutions designed to empower your organization with
              strategic insights and technological excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden border border-white/20 bg-white/5 shadow-lg hover:shadow-cyan-400/30 transition-all duration-500 transform hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {service.name}
                    </h4>
                    <p className="text-sm text-slate-300">{service.desc}</p>
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
