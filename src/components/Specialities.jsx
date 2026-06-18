import React from 'react';
import { FiArrowUpRight, FiHome, FiTrendingUp, FiMap, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Specialities() {
  const specialities = [
    {
      title: "Housing Schemes",
      description: "Modern living communities built for future lifestyles.",
      icon: <FiHome size={20} />,
    },
    {
      title: "Commercial Towers",
      description: "High ROI business infrastructure & premium offices.",
      icon: <FiTrendingUp size={20} />,
    },
    {
      title: "Residential Areas",
      description: "Secure, elegant & meticulously planned family spaces.",
      icon: <FiBriefcase size={20} />,
    },
    {
      title: "Agricultural Land",
      description: "Smart, secure & long-term investment opportunities.",
      icon: <FiMap size={20} />,
    }
  ];

  return (
    <section className="relative w-full bg-[#050505] py-12 px-6 sm:px-10 lg:px-16 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">

        {/* LEFT IMAGE SECTION */}
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Real Estate Office"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
          />

          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Floating Glassmorphic Stats Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-black/60 backdrop-blur-2xl border border-orange-500/30 rounded-2xl p-6 sm:pr-12 shadow-[0_15px_40px_rgba(234,88,12,0.2)] transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(234,88,12,0.8)]"></div>
              <p className="text-xs font-mono text-orange-200 uppercase tracking-[0.2em] font-bold">Trusted Legacy</p>
            </div>
            <div className="flex items-baseline gap-2">
               <h3 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 drop-shadow-sm">25+</h3>
               <span className="text-white font-bold text-lg sm:text-xl uppercase tracking-widest">Years</span>
            </div>
            <p className="text-gray-300 text-sm mt-2 font-medium border-t border-white/10 pt-2">Delivering excellence since <span className="text-orange-400 font-bold">2001</span></p>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="flex flex-col justify-center">

          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-orange-500"></div>
            <span className="text-orange-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
              Our Core Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1] tracking-tight mb-4">
            Delivering <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Premium</span> <br />
            Real Estate Solutions.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            We specialize in transforming visions into reality through innovative housing schemes, commercial towers, residential developments, and strategic agricultural land investments across Pakistan.
          </p>

          {/* Specialities Grid */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {specialities.map((item, index) => (
              <div 
                key={index}
                className="group p-4 bg-[#0f0f0f] border border-white/5 rounded-xl hover:bg-[#151515] hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white mb-1 text-base group-hover:text-orange-400 transition-colors">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div>
             <Link 
               to="/portfolio"
               className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-[11px] sm:text-xs hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] group"
             >
               Explore Our Projects
               <FiArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
}