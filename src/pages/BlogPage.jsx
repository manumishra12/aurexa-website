// src/pages/BlogPage.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/FooterCTA';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Market Intelligence",
      title: "The Future of AI in Enterprise Decision-Making",
      excerpt: "How artificial intelligence is transforming strategic planning and competitive analysis across global industries.",
      image: "https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      date: "June 12, 2025",
    },
    {
      id: 2,
      category: "Technology Trends",
      title: "Edge Computing: Reshaping Data Strategy in 2025",
      excerpt: "Exploring the rise of edge technologies and their impact on latency, security, and real-time analytics.",
      image: "https://plus.unsplash.com/premium_photo-1733158477861-62832089e440?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1052",
      date: "June 5, 2025",
    },
    {
      id: 3,
      category: "Strategic Advisory",
      title: "Building Resilient IT Architectures for Scale",
      excerpt: "Key principles for designing future-proof infrastructure that supports growth and innovation.",
      image: "https://plus.unsplash.com/premium_photo-1661904022671-b9d88de2849f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      date: "May 28, 2025",
    },
    {
      id: 4,
      category: "Data & Analytics",
      title: "From Insights to Action: Closing the Analytics Gap",
      excerpt: "Why most organizations fail to act on data—and how to turn insights into measurable outcomes.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1251",
      date: "May 20, 2025",
    },
    {
      id: 5,
      category: "Cybersecurity",
      title: "Next-Gen Threat Intelligence for Financial Services",
      excerpt: "How RegTech and AI are converging to protect critical financial infrastructure.",
      image: "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1104",
      date: "May 14, 2025",
    },
    {
      id: 6,
      category: "Sustainability",
      title: "Green Tech: The New Frontier of Competitive Advantage",
      excerpt: "How sustainable innovation is driving market differentiation and investor confidence.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1313",
      date: "May 8, 2025",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            INSIGHTS & PERSPECTIVES
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest From Our Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Expert analysis, market trends, and strategic insights to help you navigate the evolving technology landscape.
          </p>
        </div>
      </section>

      <section className="flex-grow px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-3 mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-300 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-xs">{post.date}</span>
                    <a
                      href="#"
                      className="text-cyan-300 hover:text-teal-300 font-medium text-sm flex items-center gap-1 transition"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;