import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi"; // Mazeed minimal icon
import { VscClose } from "react-icons/vsc";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import bur from "../assets/bur.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = !scrolled;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out">
      {/* Top Bar for Extra Trust (Visible only when not scrolled) */}


      <div className={`mx-auto transition-all duration-700 ${scrolled ? "max-w-full" : "max-w-[94%] mt-2"}`}>
        <div className={`relative flex items-center justify-between px-6 lg:px-10 transition-all duration-700 
          ${scrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 h-16 shadow-2xl"
            : "bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl h-20 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"}`}>

          {/* LEFT: LOGO */}
          <div className="flex-1 flex items-center">
            <Link to="/" className="relative group">
              <img
                src={bur}
                alt="Logo"
                className={`h-9 lg:h-12 w-auto transition-all duration-500 ${isLight ? "brightness-0" : "brightness-100"}`}
              />
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full`} />
            </Link>
          </div>

          {/* CENTER: NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-2">
            <NavItem to="/" label="Home" isLight={isLight} />
            <NavItem to="/about" label="The Agency" isLight={isLight} />
            <NavItem to="/portfolio" label="Portfolio" isLight={isLight} />
            <NavItem to="/contact" label="Invest" isLight={isLight} />
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex-1 flex items-center justify-end gap-4 lg:gap-8">
            <div className={`hidden xl:flex flex-col items-end ${isLight ? "text-gray-900" : "text-white"}`}>
              <span className="text-[9px] uppercase tracking-widest font-black text-orange-600">Available 24/7</span>
              <span className="text-xs font-bold font-mono">Talk to Expert</span>
            </div>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-3 bg-orange-600 hover:bg-black text-white px-7 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-orange-600/20"
              >
                Book Visit <FiArrowUpRight size={18} />
              </motion.button>
            </Link>

            {/* Unique Burger Icon */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`group flex flex-col gap-1.5 p-3 rounded-full transition-all ${isLight ? "hover:bg-black/5 text-black" : "hover:bg-white/10 text-white"}`}
            >
              <span className={`w-6 h-0.5 transition-all ${isLight ? "bg-black" : "bg-white"} group-hover:w-4`} />
              <span className={`w-4 h-0.5 transition-all ${isLight ? "bg-black" : "bg-white"} group-hover:w-6`} />
              <span className={`w-6 h-0.5 transition-all ${isLight ? "bg-black" : "bg-white"} group-hover:w-5`} />
            </button>
          </div>
        </div>
      </div>

      {/* FULL SCREEN ELITE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-white z-[150] flex flex-col p-6 lg:p-12 overflow-hidden"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center">
              <img src={bur} alt="Logo" className="h-8 brightness-0" />
              <button
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-black"
              >
                Close <div className="p-3 bg-black text-white rounded-full group-hover:rotate-90 transition-transform"><VscClose size={20} /></div>
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row h-full mt-10 lg:mt-0 items-center justify-between">
              <div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2">
                <p className="text-orange-600 font-bold text-xs uppercase tracking-[0.5em] mb-4">Discover More</p>
                <LargeMenuLink to="/" num="01" label="Home" onClick={() => setMenuOpen(false)} />
                <LargeMenuLink to="/about" num="02" label="Who We Are" onClick={() => setMenuOpen(false)} />
                <LargeMenuLink to="/portfolio" num="03" label="Our Properties" onClick={() => setMenuOpen(false)} />
                <LargeMenuLink to="/contact" num="04" label="Contact Now" onClick={() => setMenuOpen(false)} />
              </div>

              {/* Sidebar Info in Overlay */}
              <div className="hidden lg:flex flex-col gap-10 w-1/3 border-l border-gray-100 pl-20">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-4">Headquarters</h4>
                  <p className="text-xl font-bold text-gray-900 leading-relaxed">Office 402, Business Center,<br />Rawalpindi, Pakistan</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-4">Get In Touch</h4>
                  <p className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors">hello@devlyx.com</p>
                  <p className="text-xl font-bold text-gray-900">+92 300 0000000</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Sub-components for cleaner structure
function NavItem({ to, label, isLight }) {
  return (
    <Link to={to} className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group
      ${isLight ? "text-gray-900" : "text-gray-200 hover:text-white"}`}>
      {label}
      <span className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 rounded-lg transition-all scale-75 group-hover:scale-100" />
    </Link>
  );
}

function LargeMenuLink({ to, num, label, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="group flex items-center gap-6 lg:gap-10">
      <span className="text-xs lg:text-sm font-black font-mono text-orange-600">{num}</span>
      <h2 className="text-4xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-orange-600 transition-all group-hover:translate-x-4 duration-500">
        {label}
      </h2>
      <FiArrowUpRight className="text-4xl text-gray-200 opacity-0 group-hover:opacity-100 transition-all -translate-x-10 group-hover:translate-x-0" />
    </Link>
  );
}