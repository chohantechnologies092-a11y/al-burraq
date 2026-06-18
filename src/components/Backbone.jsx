import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLocationOutline, IoExpandOutline } from "react-icons/io5";

// Assets waise hi rahen ge...
import newChakwal from "../assets/NCC.png";
import executiveTown from "../assets/executive town.png";
import paradiseValley from "../assets/ppv.png";
import rehmanGardens from "../assets/rg.png";
import bheraCity from "../assets/new City Bhera.png";
import baghCity from "../assets/bagh city.png";
import prismaApartments from "../assets/pr.png";
import modelResorts from "../assets/Mr.png";

export default function Backbone() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    { name: "New Chakwal City", logo: newChakwal, location: "Chakwal", size: "1200 Kanals", details: "A premium housing project with modern infrastructure and secure gated living." },
    { name: "Executive Town", logo: executiveTown, location: "Chakwal", size: "222 Kanals", details: "Luxury lifestyle with high-end planning and a peaceful environment." },
    { name: "Paradise Valley", logo: paradiseValley, location: "Chakwal", size: "Developing", details: "Combines nature and modern living with beautifully designed landscapes." },
    { name: "Rehman Garden", logo: rehmanGardens, location: "P.D. Khan", size: "780 Kanals", details: "Affordability and essential amenities for comfortable living." },
    { name: "New City Bhera", logo: bheraCity, location: "Bhera", size: "388 Kanals", details: "An emerging real estate hub with strong investment potential." },
    { name: "Bagh City", logo: baghCity, location: "Sargodha", size: "200 Kanals", details: "Promotes green living with open spaces and peaceful surroundings." },
    { name: "Prisma Apartments", logo: prismaApartments, location: "Islamabad", size: "Standard", details: "Elegant apartment living with modern facilities in the capital." },
    { name: "Model Resorts", logo: modelResorts, location: "Kallar Kahar", size: "35 Kanals", details: "Resort-style lifestyle experience with luxury comfort." },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Item spacing adjusted for a tighter frame
  const itemWidth = isMobile ? 80 : 120; 
  const gap = isMobile ? 24 : 48; 
  const totalSpacing = itemWidth + gap;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <section className="w-full bg-[#f8f9fa] py-10 md:py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto"> {/* Max width reduced from 7xl to 5xl for better framing */}
        
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
            Our Backbone
          </h2>
          <div className="h-1 w-12 bg-orange-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* ✅ Compact Slider Frame */}
        <div className="relative h-32 md:h-44 flex items-center justify-center mb-8">
          <div className="relative w-full flex justify-center items-center">
            <motion.div 
              className="flex items-center"
              animate={{ x: ((projects.length - 1) / 2 - index) * totalSpacing }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            >
              {projects.map((project, i) => {
                const isActive = i === index;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setIndex(i)}
                    animate={{
                      scale: isActive ? 1.2 : 0.8,
                      opacity: isActive ? 1 : 0.3,
                    }}
                    style={{ width: itemWidth, marginRight: gap }}
                    className={`flex-shrink-0 h-24 md:h-28 cursor-pointer flex items-center justify-center p-3 md:p-4 rounded-2xl bg-white transition-all duration-500 border ${
                      isActive 
                        ? "border-orange-500 shadow-md grayscale-0" 
                        : "border-gray-200 grayscale opacity-50"
                    }`}
                  >
                    <img src={project.logo} alt={project.name} className="w-full h-full object-contain" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ✅ Refined Info Card */}
        <div className="flex justify-center h-auto min-h-[220px] md:min-h-[260px]"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-2xl bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
            >
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {projects[index].name}
              </h3>

              <div className="flex justify-center gap-2 mb-4 md:mb-6">
                <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <IoLocationOutline />
                  {projects[index].location}
                </span>
                {projects[index].size !== "—" && (
                  <span className="flex items-center gap-1 bg-gray-50 text-gray-600 px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider border border-gray-100">
                    <IoExpandOutline />
                    {projects[index].size}
                  </span>
                )}
              </div>

              <p className="text-gray-500 text-sm md:text-lg leading-relaxed italic px-2 md:px-6">
                "{projects[index].details}"
              </p>

              {/* Progress Bar Style Navigation */}
              <div className="flex justify-center gap-1.5 mt-6 md:mt-8">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === index ? 'w-6 md:w-8 bg-orange-600' : 'w-1.5 md:w-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}