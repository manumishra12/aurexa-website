import React from 'react';

const FeaturesSection = () => {
    return (
        <section
            className="text-white py-20"
            style={{ background: "linear-gradient(135deg, #342885 0%, #4851CC 30%, #257992dd 60%, #51f6d0ff 100%)" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Heading + Quote */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16">
                    <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
                            We blend qualitative expertise with
                        </h2>
                        <h2 className="text-4xl lg:text-6xl font-light italic text-gray-300 leading-none">
                            quantitative insights!
                        </h2>
                    </div>

                    <div className="flex-1 lg:max-w-xl text-slate-300">
                        <blockquote className="text-base lg:text-lg leading-relaxed">
                            “At Quantum Quest Insights, integrity, innovation, and collaboration are at the core of everything we do.
                            These values drive our decision-making processes and foster a culture of excellence within the company.<br /><br />
                            Ethical Standards: We uphold the highest ethical standards in our research practices, ensuring transparency, accuracy, and
                            integrity in all our interactions. Our commitment to ethical conduct is non-negotiable.”
                        </blockquote>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-transform duration-300">

                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-5xl font-bold mb-2 text-gray-100">10+</h3>
                                <p className="text-slate-300 text-lg">Clients</p>
                            </div>
                            <div
                                className="w-[200px] h-60 rounded-lg animate-float overflow-hidden"
                                style={{ background: "linear-gradient(135deg, rgba(186, 196, 217, 0.58), rgba(188, 188, 188, 0.49))" }}
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6825e04ed78cee4932a66a60_Mask%20group%20%20(10).webp"
                                    alt="Feature Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Ready-to-use pages to launch your website fast.
                        </p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-transform duration-300">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-5xl font-bold mb-2 text-gray-100">20+</h3>
                                <p className="text-slate-300 text-lg">Case Studies</p>
                            </div>
                            <div
                                className="w-[200px] h-60 rounded-lg animate-float overflow-hidden"
                                style={{ background: "linear-gradient(135deg, rgba(186, 196, 217, 0.58), rgba(188, 188, 188, 0.49))" }}
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6825e04ed78cee4932a66a60_Mask%20group%20%20(10).webp"
                                    alt="Feature Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Pre-optimized to load your pages faster.
                        </p>
                    </div>
                </div>

                {/* Figma File */}
                <div className="bg-white text-slate-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6825e04ed78cee4932a66a49_Group%201597883353.svg"
                                alt="Aurexa Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl">Figma File Available</h4>
                            <p className="text-sm text-slate-600 max-w-md">
                                Please attach the original purchase receipt where the purchase code and workspace name
                                are mentioned, and the fully editable Figma file will be shared.
                            </p>
                        </div>
                    </div>
                    <button
                        className="px-6 py-3 rounded-xl text-white font-semibold shadow hover:opacity-90 transition"
                        style={{ background: "orange" }}
                    >
                        Request For Figma File
                    </button>
                </div>

                {/* Unique Home Pages */}
                <div className="text-center mb-14 mt-20">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Our <span className="text-gray-300">Solutions</span>
                    </h3>
                </div>

                {/* First row: 3 cards in grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:shadow-xl transition">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949073075df68239088e7_Mask%20group%20-%202025-05-30T112734.836-p-500.webp"
                                alt="Quantum Scope"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-white font-semibold">Quantum Scope</p>
                        <p className="text-center text-slate-300 text-sm mt-2 leading-relaxed">
                            Enables competitive positioning of vendors by analyzing technology capabilities and market share.
                        </p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-transform duration-300">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949063ea4d58c120773ee_Mask%20group%20-%202025-05-30T112745.416-p-500.webp"
                                alt="Quantum Market Intel"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Quantum Market Intel</p>
                        <p className="text-center text-slate-300 text-sm mt-2">
                            Offers in-depth analysis of market share, industry trends, customer segments, and regional dynamics.
                        </p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-transform duration-300">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949063ea4d58c120773ee_Mask%20group%20-%202025-05-30T112745.416-p-500.webp"
                                alt="Quantum Amplify"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Quantum Amplify</p>
                        <p className="text-center text-slate-300 text-sm mt-2">
                            Provides strategic marketing support to help vendors strengthen their market presence and maximize impact.
                        </p>
                    </div>
                </div>

                {/* Second row: 2 cards, centered, same size */}
                <div className="flex justify-center gap-10 flex-wrap">
                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-transform duration-300 w-full max-w-[350px]">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949063ea4d58c120773ee_Mask%20group%20-%202025-05-30T112745.416-p-500.webp"
                                alt="Quantum Consulting"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Quantum Consulting</p>
                        <p className="text-center text-slate-300 text-sm mt-2">
                            Provides expert advisory services to organizations, helping them optimize technology strategies, streamline operations, and unlock new growth opportunities through tailored research and consulting solutions.
                        </p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm transition-transform duration-300 w-full max-w-[350px]">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/68394907e834ceab8b38c8a3_Mask%20group%20-%202025-05-30T112740.334-p-500.webp"
                                alt="Quantum 360"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Quantum 360</p>
                        <p className="text-center text-slate-300 text-sm mt-2">
                            Delivers comprehensive market insights, including competitive advantage, product intelligence, and customer understanding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;