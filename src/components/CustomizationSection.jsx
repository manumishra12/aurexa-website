import React from "react";

const CustomizationSection = () => {
  return (
    <section className="bg-gradient-to-br from-[rgba(9,14,23,1)] to-[rgba(28,26,53,1)] text-white py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Offer */}
          <div className="bg-gradient-to-br from-[rgba(28,26,53,1)] to-[rgba(9,14,23,1)] rounded-3xl p-8 text-center shadow-xl flex flex-col justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-bounce-slow">
              <span className="text-white font-bold text-2xl">⚙</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              2 Hrs Free
              <br />
              Customization Offer
            </h3>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Buy any template from Radiant Templates (From $79 onwards) and get
              2 hours free customization/fix (worth $60) on your under
              development site. You need to book customization within 15 days of
              purchasing a template. After 15 days we won’t be able to honor the
              request.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-semibold shadow hover:opacity-90 transition">
              Get Started Today
            </button>
          </div>

          {/* Right Side - Library */}
          <div className="bg-gradient-to-br from-[rgba(28,26,53,1)] to-[rgba(9,14,23,1)] rounded-3xl p-8 text-center shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Explore Our Comprehensive Library
                <br />
                For A Complete Collection Of Resources
              </h3>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-semibold shadow mb-8 hover:opacity-90 transition">
                Explore Our Full Library
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/682ab797d7d614e5dbf534e7_Group%25201009003723-p-800.webp"
                alt="Library Preview"
                className="rounded-2xl shadow-2xl max-w-xs hover:scale-[1.02] transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Fixed Side Elements */}
        {/* <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-50 hidden xl:block">
          <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm border border-slate-600 hover-scale">
            🎨 120+ Templates
          </div>
          <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm border border-slate-600 hover-scale">
            ⚙ Customization
          </div>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover-scale">
            👥 Hire Our Team
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CustomizationSection;
