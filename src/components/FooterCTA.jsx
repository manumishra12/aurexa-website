import React from 'react';

const FooterCTA = () => {
  const carouselImages = [
    "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683833865f5a5ed1b8f1ad8d_Mask%20group%20-%202025-05-29T154329.041-p-500.webp",
    "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683833865f5a5ed1b8f1ad8d_Mask%20group%20-%202025-05-29T154329.041-p-500.webp",
    "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683833865f5a5ed1b8f1ad8d_Mask%20group%20-%202025-05-29T154329.041-p-500.webp",
    "https://cdn.prod.website-files.com/67e1033cbc2a3f92a23aeb87/683833865f5a5ed1b8f1ad8d_Mask%20group%20-%202025-05-29T154329.041-p-500.webp"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[rgba(9,14,23,1)] to-[rgba(28,26,53,1)] text-white overflow-hidden">
      
      {/* Left Side Double Columns */}
      <div className="absolute inset-y-0 left-0 w-70 hidden lg:flex space-x-3 p-2">
        {[0,1].map((col) => (
          <div key={col} className="marquee flex flex-col space-y-4">
            {carouselImages.concat(carouselImages).map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`carousel-left-${col}-${i}`} 
                className="rounded-lg shadow-lg w-56"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Right Side Double Columns */}
      <div className="absolute inset-y-0 right-0 w-70 hidden lg:flex space-x-3 p-2">
        {[0,1].map((col) => (
          <div key={col} className="marquee flex flex-col space-y-4 reverse-marquee">
            {carouselImages.concat(carouselImages).map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`carousel-right-${col}-${i}`} 
                className="rounded-lg shadow-lg w-56"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 text-center relative z-10">
        
        {/* Logo */}
        <div className="w-12 h-12 bg-gradient-to-br from-[rgba(28,26,53,1)] to-[rgba(9,14,23,1)] rounded-lg mx-auto mb-3 flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <p className="font-semibold text-lg mb-6">Aurexa</p>
        
        {/* CTA Content */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Want Us To Customize Aurexa Or Create A<br />
          New Design For You? Please Get In Touch!
        </h2>
        
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full mb-10 text-lg px-8 py-3 transition-all duration-300">
          Checkout Our Templates
        </button>

        {/* Footer Bottom */}
        <p className="text-slate-400 mb-3">
          Designed by Radiant Templates. Powered by Webflow
        </p>
        <div className="flex justify-center space-x-4 text-slate-400">
          <a href="#" className="hover:text-white transition-colors">License</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Changelog</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
