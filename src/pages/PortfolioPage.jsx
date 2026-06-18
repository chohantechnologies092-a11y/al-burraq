import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationOutline, IoExpandOutline } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import newChakwal from '../assets/NCC.png';
import executiveTown from '../assets/executive town.png';
import paradiseValley from '../assets/ppv.png';
import rehmanGardens from '../assets/rg.png';
import bheraCity from '../assets/new City Bhera.png';
import baghCity from '../assets/bagh city.png';
import prismaApartments from '../assets/pr.png';
import modelResorts from '../assets/Mr.png';
import companyLogo from '../assets/bur.png';

const projects = [
  { name: 'New Chakwal City', logo: newChakwal, location: 'Chakwal', size: '1200 Kanals', details: 'A premium housing project with modern infrastructure and secure gated living.' },
  { name: 'Executive Town', logo: executiveTown, location: 'Chakwal', size: '222 Kanals', details: 'Luxury lifestyle with high-end planning and a peaceful environment.' },
  { name: 'Rehman Garden', logo: rehmanGardens, location: 'P.D. Khan', size: '780 Kanals', details: 'Affordability and essential amenities for comfortable living.' },
  { name: 'New City Bhera', logo: bheraCity, location: 'Bhera', size: '388 Kanals', details: 'An emerging real estate hub with strong investment potential.' },
  { name: 'Bagh City', logo: baghCity, location: 'Sargodha', size: '200 Kanals', details: 'Promotes green living with open spaces and peaceful surroundings.' },
  { name: 'Prisma Apartments', logo: prismaApartments, location: 'Islamabad', size: 'Standard', details: 'Elegant apartment living with modern facilities in the capital.' },
  { name: 'Model Resorts', logo: modelResorts, location: 'Kallar Kahar', size: '35 Kanals', details: 'Resort-style lifestyle experience with luxury comfort.' },
];

const localProjects = [
  { name: 'Bismillah Town', location: 'Local', size: '—', details: 'A well-planned local plotting project offering excellent residential opportunities.', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Hussain Town', location: 'Local', size: '—', details: 'Prime location plotting project with great future prospects.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  { name: 'AlBurraq Town', location: 'Local', size: '—', details: 'Signature local project with essential amenities.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { name: 'Jaddah Town', location: 'Local', size: '—', details: 'Affordable and secure plotting options for local residents.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80' },
  { name: 'Alkhaki Town', location: 'Local', size: '—', details: 'Emerging residential plots in a serene local environment.', img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80' },
  { name: 'Eagle Town', location: 'Local', size: '—', details: 'Strategic location with easy access to major local routes.', img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80' },
  { name: 'Green Town', location: 'Local', size: '—', details: 'Eco-friendly local plots surrounded by nature.', img: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80' },
];

const featuredProject = { 
  name: 'Paradise Valley', 
  logo: paradiseValley, 
  location: 'Chakwal', 
  size: 'Developing', 
  details: 'Paradise Valley combines nature and modern living with beautifully designed landscapes. An exclusive project offering unparalleled luxury and smart community features.' 
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      
      {/* Company Logo Watermark/Shadow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <img 
          src={companyLogo} 
          alt="Watermark" 
          className="w-full h-full object-contain opacity-10 filter grayscale brightness-0 drop-shadow-2xl"
        />
      </div>

      {/* Background glow effects - Adjusted for light theme */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4 justify-center md:justify-start"
          >
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <span className="text-orange-600 font-mono text-sm tracking-widest uppercase font-bold">Our Portfolio</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-gray-900"
          >
            Signature <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Projects</span>
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 max-w-sm text-sm md:text-base leading-relaxed hidden md:block"
        >
          Explore our exclusive collection of premium real estate developments, showcasing excellence in design, luxury, and modern living.
        </motion.p>
      </div>

      {/* Featured Project - Paradise Valley */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center gap-12 group hover:shadow-[0_20px_60px_rgba(234,88,12,0.08)] transition-all duration-500">
          
          {/* Logo Side */}
          <div className="w-full lg:w-2/5 h-64 md:h-80 bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100 group-hover:bg-orange-50/50 transition-colors duration-500">
            <img 
              src={featuredProject.logo} 
              alt={featuredProject.name} 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Featured Project
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 group-hover:text-orange-600 transition-colors duration-500">
              {featuredProject.name}
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider border border-gray-100">
                <IoLocationOutline className="text-orange-500 text-lg" />
                {featuredProject.location}
              </span>
              <span className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider border border-gray-100">
                <IoExpandOutline className="text-orange-500 text-lg" />
                {featuredProject.size}
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
              {featuredProject.details}
            </p>

            <Link to="/paradise-valley" className="inline-flex items-center gap-3 bg-gray-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg group-hover:shadow-orange-500/20">
              View Details <FiArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mb-16 opacity-50">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <span className="text-gray-400 font-mono text-xs tracking-[0.3em] uppercase whitespace-nowrap">More Developments</span>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Grid Layout for Other Projects */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-orange-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <div>
              {/* Top Logo Section */}
              <div className="h-32 mb-8 bg-gray-50 rounded-2xl p-6 flex items-center justify-center border border-gray-100 group-hover:bg-orange-50/50 transition-colors duration-500">
                <img 
                  src={project.logo} 
                  alt={project.name} 
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="flex items-center gap-1.5 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-gray-100">
                    <IoLocationOutline className="text-orange-500" />
                    {project.location}
                  </span>
                  {project.size !== "—" && (
                    <span className="flex items-center gap-1.5 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-gray-100">
                      <IoExpandOutline className="text-orange-500" />
                      {project.size}
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-12 group-hover:text-gray-700 transition-colors">
                  {project.details}
                </p>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500 cursor-pointer shadow-sm group-hover:shadow-lg">
              <FiArrowUpRight className="text-gray-400 group-hover:text-white group-hover:rotate-45 transition-all duration-500" size={20} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Premium Divider for Local Projects */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mt-24 mb-16">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] whitespace-nowrap">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(234,88,12,0.6)]"></div>
          <span className="text-gray-900 font-bold text-xs tracking-[0.2em] uppercase">Local Plotting Projects</span>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Bento Box Layout for Local Projects */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[auto] xl:auto-rows-[280px]"
      >
        {localProjects.map((project, idx) => {
          // Determine grid span classes
          let spanClass = "";
          let innerClass = "";
          let textClass = "";

          if (idx === 0) {
            spanClass = "md:col-span-2 xl:row-span-2";
            innerClass = "p-8 md:p-12 justify-end";
            textClass = "text-4xl md:text-5xl mb-4";
          } else if (idx === 1 || idx === 4) {
            spanClass = "md:col-span-2 xl:col-span-2";
            innerClass = "p-8 flex-col sm:flex-row sm:items-center justify-between";
            textClass = "text-2xl mb-2 sm:mb-0";
          } else {
            spanClass = "xl:col-span-1";
            innerClass = "p-6 justify-between";
            textClass = "text-xl mb-2";
          }

          return (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`group relative border border-gray-100/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(234,88,12,0.15)] flex flex-col ${spanClass} min-h-[260px] bg-gray-900`}
            >
              {/* Background Image */}
              <img 
                src={project.img} 
                alt={project.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 opacity-60 group-hover:opacity-80"
              />
              
              {/* Gradient Overlays for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none transition-opacity duration-500"></div>

              <div className={`relative z-10 w-full h-full flex ${innerClass}`}>
                {/* Content based on type */}
                {idx === 0 ? (
                  // Large Box Layout
                  <div className="flex flex-col h-full justify-between gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                      <IoLocationOutline size={32} />
                    </div>
                    <div>
                      <h3 className={`font-black text-white group-hover:text-orange-400 transition-colors ${textClass} drop-shadow-md`}>
                        {project.name}
                      </h3>
                      <p className="text-gray-200 text-lg leading-relaxed max-w-md drop-shadow-sm">
                        {project.details}
                      </p>
                      <div className="mt-8 flex items-center gap-3 text-sm font-bold text-gray-300 uppercase tracking-wider">
                        <span className="text-orange-400">{project.location}</span>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span>Plotting Project</span>
                      </div>
                    </div>
                  </div>
                ) : (idx === 1 || idx === 4) ? (
                  // Wide Box Layout
                  <>
                    <div className="max-w-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                          <IoLocationOutline size={24} />
                        </div>
                        <h3 className={`font-bold text-white group-hover:text-orange-400 transition-colors ${textClass} drop-shadow-md`}>
                          {project.name}
                        </h3>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed drop-shadow-sm">
                        {project.details}
                      </p>
                    </div>
                    <div className="mt-6 sm:mt-0 flex items-center justify-between sm:flex-col sm:items-end gap-4 h-full">
                       <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md">{project.location}</span>
                       <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 mt-auto">
                         <FiArrowUpRight className="text-white" size={20} />
                       </div>
                    </div>
                  </>
                ) : (
                  // Small Box Layout
                  <>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                          <IoLocationOutline size={20} />
                        </div>
                        <FiArrowUpRight className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={22} />
                      </div>
                      <h3 className={`font-bold text-white group-hover:text-orange-400 transition-colors ${textClass} drop-shadow-md`}>
                        {project.name}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        {project.details}
                      </p>
                      <div className="mt-auto pt-4 border-t border-white/20">
                        <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">{project.location}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
