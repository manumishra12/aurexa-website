import React from 'react';

const FeaturesSection = () => {
    const homePages = [
        {
            title: 'Home One',
            description: 'Modern AI Dashboard',
            gradient: 'from-purple-600 to-purple-800'
        },
        {
            title: 'Home Two',
            description: 'Analytics Platform',
            gradient: 'from-blue-600 to-purple-800'
        },
        {
            title: 'Home Three',
            description: 'SaaS Interface',
            gradient: 'from-purple-800 to-pink-800'
        }
    ];

    return (
        <section
            className="text-white py-20"
            style={{ background: "linear-gradient(135deg, rgba(9,14,23,1) 0%, rgba(28,26,53,1) 100%)" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Heading + Quote */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16">
                    <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
                            Craft A Seamless And Polished
                        </h2>
                        <h2 className="text-4xl lg:text-6xl font-light italic text-gray-300 leading-none">
                            Website Experience!
                        </h2>
                    </div>

                    <div className="flex-1 lg:max-w-xl text-slate-300">
                        <blockquote className="text-base lg:text-lg leading-relaxed">
                            “Experience the full potential of Aurexa, Modern AI SaaS Webflow template designed to
                            elevate your brand. With dynamic layouts, interactive features, and seamless customization,
                            this template empowers your company to create impactful, visually stunning online
                            experiences.”
                        </blockquote>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-slate-700 hover:shadow-lg transition">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-5xl font-bold mb-2 text-gray-100">16+</h3>
                                <p className="text-slate-300 text-lg">Unique Pages</p>
                            </div>
                            <div
                                className="w-50 h-60 rounded-lg animate-float overflow-hidden"
                                style={{ background: "linear-gradient(135deg, rgba(9,14,23,1), rgba(28,26,53,1))" }}
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6825e04ed78cee4932a66a60_Mask%20group%20(10).webp"
                                    alt="Feature Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Ready-to-use pages to launch your website fast.
                        </p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-10 border border-slate-700 hover:shadow-lg transition">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-5xl font-bold mb-2 text-gray-100">80+</h3>
                                <p className="text-slate-300 text-lg">Sections & Blocks</p>
                            </div>
                            <div
                                className="w-50 h-60 rounded-lg animate-float overflow-hidden"
                                style={{ background: "linear-gradient(135deg, rgba(9,14,23,1), rgba(28,26,53,1))" }}
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6825e04ed78cee4932a66a60_Mask%20group%20(10).webp"
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
                    <div className="flex items-center gap-4 mt-4 mb-4">
                        <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center"
                        >
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
                    <button className="px-6 py-3 rounded-xl text-white font-semibold shadow hover:opacity-90 transition"
                        style={{ background: "orange" }}
                    >
                        Request For Figma File
                    </button>
                </div>

                {/* Unique Home Pages */}
                <div className="text-center mb-14 mt-20">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Unique <span className="text-gray-300">Home Pages</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    <div className="bg-[#1C1A35] rounded-2xl p-4 border border-slate-700 hover:shadow-lg transition">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949073075df68239088e7_Mask%20group%20-%202025-05-30T112734.836-p-500.webp"
                                alt="Home One"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Home One</p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-4 border border-slate-700 hover:shadow-lg transition">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/68394907e834ceab8b38c8a3_Mask%20group%20-%202025-05-30T112740.334-p-500.webp"
                                alt="Home Two"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Home Two</p>
                    </div>

                    <div className="bg-[#1C1A35] rounded-2xl p-4 border border-slate-700 hover:shadow-lg transition">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683949063ea4d58c120773ee_Mask%20group%20-%202025-05-30T112745.416-p-500.webp"
                                alt="Home Three"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center text-slate-300 font-medium">Home Three</p>
                    </div>
                </div>


            </div>
        </section>


    );
};

export default FeaturesSection;