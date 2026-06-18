import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaMapMarkerAlt, FaHome, FaDollarSign } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Assets (Ensure paths are correct for your project)
import pv from "../assets/pv1.jpeg";
import pv1 from "../assets/pv.jpeg";

export default function ParadiseValley() {
  const { pathname } = useLocation();

  // ✅ Technical Fix: Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 px-5 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-widest text-xs sm:text-sm text-orange-500 font-semibold">
              Paradise Valley
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Elevating Modern <br />
              <span className="text-orange-500">Luxury Living</span>
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl">
              Experience refined architecture, serene landscapes, and
              high-return investment opportunities crafted for excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                Book Consultation
              </button>
              <button className="px-8 py-3 border rounded-full hover:bg-gray-100 transition">
                View Brochure
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img src={pv} alt="Luxury Villa" className="rounded-3xl w-full object-cover shadow-xl" />
            <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white px-6 py-4 rounded-2xl shadow-lg border">
              <p className="text-xs text-gray-500">Starting From</p>
              <p className="text-xl font-bold text-orange-500">PKR 1,505,000</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-5 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img alt="pv1" src={pv1} className="rounded-3xl w-full shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Designed for <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8">
              Paradise Valley blends architectural brilliance with smart
              urban planning for future-ready living.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature icon={<FaLeaf />} title="Green Landscapes" />
              <Feature icon={<FaMapMarkerAlt />} title="Prime Location" />
              <Feature icon={<FaHome />} title="Modern Architecture" />
              <Feature icon={<FaDollarSign />} title="Strong ROI" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL IMAGE SECTION */}
      <section className="relative h-[60vh] sm:h-[75vh]">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              A Community for <span className="text-orange-500">Visionaries</span>
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto text-base sm:text-lg">
              Secure, elegant, and designed for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-orange-500 font-semibold">Plot Pricing</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Choose Your <span className="text-orange-500">Perfect Plot</span>
            </h2>
          </div>

          {/* D-BLOCK */}
          <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-orange-500 pl-4">D-Block Residential (4 Years Plan)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <PricingCard title="3.5 Marla" total="2,019,000" booking="201,900" monthly="18,500" halfYearly="86,500" special="183,200" specialLabel="Balloting" />
            <PricingCard title="5 Marla" total="2,885,000" booking="288,500" monthly="26,500" halfYearly="123,500" special="260,000" specialLabel="Balloting" popular />
            <PricingCard title="7 Marla" total="3,877,011" booking="387,700" monthly="35,550" halfYearly="166,158" special="350,347" specialLabel="Balloting" />
            <PricingCard title="10 Marla" total="4,842,511" booking="484,250" monthly="44,403" halfYearly="207,537" special="437,595" specialLabel="Balloting" />
          </div>

          {/* ECONOMY BLOCK */}
          <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-orange-500 pl-4">Economy Block (Residential)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <PricingCard title="3.5 Marla" total="1,505,000" booking="150,500" monthly="13,800" halfYearly="64,500" special="136,000" specialLabel="Balloting" cashRate="1,354,500" />
            <PricingCard title="5 Marla" total="2,106,000" booking="210,500" monthly="19,600" halfYearly="87,000" special="205,000" specialLabel="Balloting" cashRate="1,895,400" />
            <PricingCard title="10 Marla" total="3,574,000" booking="357,400" monthly="32,500" halfYearly="154,000" special="327,200" specialLabel="Balloting" cashRate="3,216,600" />
            <PricingCard title="1 Kanal" total="6,633,000" booking="663,300" monthly="60,850" halfYearly="2,84,000" special="600,400" specialLabel="Balloting" cashRate="5,969,700" />
          </div>

          {/* PHASE - I */}
          <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-orange-500 pl-4">Phase - I Residential</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PricingCard title="5 Marla" total="4,000,000" booking="400,000" monthly="41,500" halfYearly="185,000" special="360,000" specialLabel="Possession" />
            <PricingCard title="10 Marla" total="7,307,000" booking="730,700" monthly="75,500" halfYearly="339,000" special="659,500" specialLabel="Possession" popular />
            <PricingCard title="1 Kanal" total="11,979,000" booking="1,197,000" monthly="124,000" halfYearly="555,000" special="1,080,000" specialLabel="Possession" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 text-center bg-white">
        <p className="uppercase tracking-widest text-xs sm:text-sm text-orange-500 font-semibold">Limited Opportunities</p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Your Luxury Future <br />
          <span className="text-orange-500">Starts Today</span>
        </h2>
        <Link to="/contact">
          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2 mx-auto">
              Schedule a Private Visit <FiArrowUpRight size={20} />
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
}

// Helper Components
function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg transition">
      <div className="text-orange-500 text-xl">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

function PricingCard({ title, total, booking, monthly, halfYearly, special, specialLabel, cashRate, popular }) {
  return (
    <div className={`relative bg-white p-6 rounded-3xl border shadow-md hover:shadow-xl transition flex flex-col justify-between ${popular ? "border-orange-500 scale-105 z-10" : "border-gray-200"}`}>
      {popular && (
        <span className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">
          Popular
        </span>
      )}
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-2xl font-extrabold text-orange-500 mb-4 text-nowrap">PKR {total}</p>
        
        <div className="space-y-2 border-t pt-4 text-sm text-gray-600">
          <div className="flex justify-between"><span>Booking (10%)</span><span className="font-bold">{booking}</span></div>
          <div className="flex justify-between font-medium text-gray-900"><span>Monthly x40</span><span>{monthly}</span></div>
          <div className="flex justify-between"><span>Half Yearly x8</span><span>{halfYearly}</span></div>
          <div className="flex justify-between border-t pt-2 mt-2 font-semibold text-orange-600">
            <span>{specialLabel} (9%)</span><span>{special}</span>
          </div>
          {cashRate && (
            <div className="mt-3 p-2 bg-orange-50 rounded text-center border border-orange-100">
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Full Cash Rate</p>
              <p className="text-base font-bold text-orange-700">PKR {cashRate}</p>
            </div>
          )}
        </div>
      </div>
      <button className="w-full mt-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors duration-300">
        Book Plot
      </button>
    </div>
  );
}