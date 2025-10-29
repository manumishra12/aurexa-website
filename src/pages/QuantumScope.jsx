// src/pages/QuantumScope.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const QuantumScope = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            {/* Hero */}
            <section className="relative py-24 px-6 lg:px-12 text-center">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
                        OUR OFFERINGS
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quantum Scope</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Enables competitive positioning of vendors by analyzing technology capabilities and market share.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <img
                                src="/quantum_scope.jpeg"
                                alt="Quantum Scope Dashboard"
                                className="rounded-2xl shadow-xl w-full h-auto"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">What is Quantum Scope?</h2>
                            <p className="text-slate-300 mb-6">
                                Quantum Scope is a leadership-grade strategic command system designed for the age of cutting-edge technologies, risk complexity, and dynamic market shifts. It helps organizations reframe strategic management as a precision, arming executives with the clarity and confidence to lead with intent, not instinct.
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-6">
                                <h3 className="text-xl font-semibold text-white mb-4">The Framework</h3>
                                <div className="space-y-4">
                                    <div>
                                        <strong className="text-orange-900">X-Axis (Tech Adoption):</strong> Demonstrates how technological advancements unfold over time, showcasing various levels of development and their impact on industries.
                                    </div>
                                    <div>
                                        <strong className="text-orange-900">Y-Axis (Market Impact):</strong> Demonstrates the proportion of market occupied by different products or companies, customer experience and customer support, highlighting competitive landscape dynamics in specific technology.
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="inline-block mt-8">
                            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                                Start Your Campaign
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 px-6 lg:px-12 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Precision Positioning",
                                desc: "Map vendors accurately based on Tech Innovation and Market Share."
                            },
                            {
                                title: "Strategic Clarity",
                                desc: "Arm decision-makers with data-driven insights to lead with intent."
                            },
                            {
                                title: "Competitive Advantage",
                                desc: "Identify Leaders, Challengers, Niche Players, and Emerging Innovators."
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

export default QuantumScope;