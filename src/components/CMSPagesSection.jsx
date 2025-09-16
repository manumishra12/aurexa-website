import React from 'react';

const CMSPagesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[rgba(9,14,23,1)] to-[rgba(28,26,53,1)] text-white overflow-hidden  pt-20 pb-20">
      {/* Grid Background */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]"></div> */}

      <div className="container-max relative z-10">

        {/* === CMS Pages Section === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Who We Serve</h2>
          <h3 className="text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Creative Designs To Showcase<br />
            Your CMS Pages
          </h3>
        </div>

        {/* Outer Transparent Container for CMS Cards */}
        <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp"
                alt="Blog Details Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Software Development & Implementation</h4>
              </div>
            </div>

            {/* Help Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Enterprise Data Strategy & Governance</h4>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Connected Devices & Edge Technologies</h4>
              </div>
            </div>

            {/* Blog Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp"
                alt="Blog Details Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Data Analytics & AI Solutions</h4>
              </div>
            </div>

            {/* Help Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">IT Architecture & Strategic Planning</h4>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Enterprise Risk & Compliance Management</h4>
              </div>
            </div>

            {/* Blog Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp"
                alt="Blog Details Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Business Process Optimization & Automation</h4>
              </div>
            </div>

            {/* Help Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Human Capital & Workforce Technology</h4>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Industry 4.0 & Engineering Tech</h4>
              </div>
            </div>

            {/* Blog Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp"
                alt="Blog Details Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Financial Services & Digital Banking</h4>
              </div>
            </div>

            {/* Help Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Green Tech & Sustainable Solutions</h4>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Cloud Infrastructure & Network Solutions</h4>
              </div>
            </div>

            {/* Blog Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp"
                alt="Blog Details Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Unified Communication & Collaboration Platforms</h4>
              </div>
            </div>

            {/* Help Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">RegTech & Compliance Solutions</h4>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Digital Procurement & Supply Solutions</h4>
              </div>
            </div>

            {/* Blog Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b55f285b0f3415942a_Mask%20group%20-%202025-05-29T154919.628-p-500.webp"
                alt="Blog Details Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Customer Experience & Marketing Technologies</h4>
              </div>
            </div>

            {/* Help Details Card */}
            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Cybersecurity & Data Protection</h4>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683834b563e111481691c621_Mask%20group%20-%202025-05-29T154908.689-p-500.webp"
                alt="Help Center Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-lg font-semibold text-white">Digital Commerce & Retail Innovation</h4>
              </div>
            </div>


          </div>
        </div>

        <div className="text-center mb-16 px-4 font-[Inter]">
          <span className="text-orange-400 text-sm font-extrabold uppercase tracking-widest inline-block mb-3 animate-pulse hover:text-orange-300 transition-colors">
            ✦ QUANTUM 360
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-6 hover:from-pink-500 hover:to-orange-400 transition-all duration-300"></h2>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-6">
            Market Intelligence Framework
          </h2>
          <p className="text-slate-200 text-lg md:text-xl leading-relaxed mt-6 max-w-4xl mx-auto">
            Quantum 360 delivers a holistic market intelligence framework that empowers organizations with a complete view of their competitive landscape.
            <br className="hidden md:block" />
            It provides competitive intelligence by tracking investments, organizational changes, and strategies of key players. Through market understanding, it delivers insights on market share, opportunity forecasts, and volume analysis to identify growth avenues.
            <br className="hidden md:block" />
            It strengthens product intelligence, offering guidance on pricing strategies, product introductions, and promotional activities, while enabling comprehensive customer understanding through behavior analysis, product adoption, loyalty, and satisfaction metrics.
          </p>
        </div>

        {/* Utility Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 404 Card */}
          <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
            <img
              src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683835210580b9f836081df7_Mask%20group%20-%202025-05-29T155025.490-p-500.webp"
              alt="404 Page"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white"> Competitive Intelligence</h4>
            </div>
          </div>

          {/* Password Protected Card */}
          <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
            <img
              src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6838352125db4c83932ae6de_Mask%20group%20-%202025-05-29T155035.244-p-500.webp"
              alt="Password Protected"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white">Market Understanding</h4>
            </div>
          </div>

          {/* Sign Up Card */}
          <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
            <img
              src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6838399eb4a36fa0a017ffb9_Mask%20group%20-%202025-05-29T161003.965-p-500.webp"
              alt="Sign Up"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white">Product Intelligence</h4>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
            <img
              src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/6838399d6db6760245e027a7_Mask%20group%20-%202025-05-29T160957.885-p-500.webp"
              alt="Sign In"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h4 className="text-lg font-semibold text-white">Customer Understanding</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMSPagesSection;