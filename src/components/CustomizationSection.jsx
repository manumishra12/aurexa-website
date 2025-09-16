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
              QUANTUM AMPLIFY
            </h3>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Quantum Amplify provides comprehensive marketing assistance to global Information and Communication Technology vendors, enabling them to strengthen visibility and accelerate market outreach.

              <br /> <br />Our support includes blogs, webinars, events, whitepapers, newsletters, case studies, digital campaigns, and social media promotions, all tailored to amplify vendor presence. We help vendors create awareness, communicate product updates, and highlight innovations to engage their target audience effectively. With a focus on global reach, Quantum Amplify ensures vendors connect with end-users across specific markets, building stronger brand recognition and thought leadership.

            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-semibold shadow hover:opacity-90 transition">
              Get Started Today
            </button>
          </div>

          {/* Right Side - Library */}
          <div className="bg-gradient-to-br from-[rgba(28,26,53,1)] to-[rgba(9,14,23,1)] rounded-3xl p-8 text-center shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                QUANTUM SCOPE
              </h3>
              {/* \<br /> */}
              <h5 className="text-xl font mb-4">
                Systematic Competitive Outlook for Precision and Endurance
              </h5>
              <br />


              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Quantum Scope is a leadership-grade strategic command system designed for the age of cutting-edge technologies, risk complexity, and dynamic market shifts. It helps organizations to reframe strategic management as a precision, arming executives with the clarity and confidence to lead with intent, not instinct.

                <br /> <br />The X-axis represents Tech Innovation, demonstrating how technological advancements unfold over time. It showcases various levels of technology development and their impact on industries.
                <br />The Y-axis signifies Market Share, illustrating the proportion of market occupied by different products or firms. It highlights competitive landscape dynamics in various sectors.
              </p>

              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-semibold shadow mb-8 hover:opacity-90 transition">
                Explore Our Full Library
              </button>

            </div>
            {/* <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/682ab797d7d614e5dbf534e7_Group%25201009003723-p-800.webp"
                alt="Library Preview"
                className="rounded-2xl shadow-2xl max-w-xs hover:scale-[1.02] transition-transform"
              />
            </div> */}
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
