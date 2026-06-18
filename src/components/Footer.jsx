import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F17] text-white pt-32 pb-16 px-6 lg:px-12 overflow-hidden">

      {/* HUGE Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] md:text-[180px] font-bold text-white opacity-[0.03] whitespace-nowrap pointer-events-none">
        Al Burraq
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Al Burraq <span className="text-orange-500">Marketing</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-xs">
            Strategic digital marketing & property growth solutions designed to drive visibility, leads and real ROI.
          </p>
          <div className="mt-4 text-gray-400">
            <p className="hover:text-orange-400 transition cursor-pointer">sajidalburraq@gmail.com</p>
            <p className="hover:text-orange-400 transition cursor-pointer mt-1">+92 302 5787878</p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-6 text-lg">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-400 transition">About Us</li>
            <li className="hover:text-orange-400 transition">Services</li>
            <li className="hover:text-orange-400 transition">Projects</li>
            <li className="hover:text-orange-400 transition">Contact</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-6 text-lg">Socials</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-400 transition">Facebook ↗</li>
            <li className="hover:text-orange-400 transition">WhatsApp ↗</li>
            <li className="hover:text-orange-400 transition">LinkedIn ↗</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>

          <p className="text-gray-400 mb-6">
            Stay ahead with marketing insights and property growth strategies.
          </p>

          {/* Email Input */}
          <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 pr-2">

            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-white placeholder-gray-400"
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 flex items-center justify-center rounded-full"
            >
              →
            </motion.button>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm relative z-10 gap-4">

        <p>© 2026 Al Burraq Marketing. All rights reserved.</p>

        <p className="text-center">
          Powered by <a href="https://devlyxsolutions.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 font-semibold transition-colors">Devlyx Solutions</a>
        </p>

        <div className="flex gap-6">
          <span className="hover:text-orange-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-orange-400 cursor-pointer">Terms & Conditions</span>
        </div>

      </div>

    </footer>
  );
}
