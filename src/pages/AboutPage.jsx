import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden pt-20"> {/* Navbar gap adjusted */}

      {/* PREMIUM HERO */}
      <section className="relative w-full bg-[#0B0F17] pt-24 pb-48 px-6 lg:px-20 text-center overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Al Burraq</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            Delivering luxury real estate solutions blending innovation, trust, and expertise — creating spaces where dreams become reality.
          </motion.p>
        </div>
      </section>

      {/* Hero Image Overlay */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-12 -mt-32 mb-24">
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
          alt="Modern luxury building"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full h-[300px] md:h-[500px] object-cover border-8 border-white"
        />
      </div>

      {/* OUR STORY */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80" 
            alt="Company team" 
            className="rounded-3xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Al Burraq started with a vision to redefine luxury living by creating exclusive communities that merge elegance with comfort and smart design.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the years, we have grown by delivering quality, trust, and tailored experiences to our valued clients. Our mission is to build not just homes, but lifestyles.
          </p>
        </motion.div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-orange-50 py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We believe in values that drive everything we do — from customer care to quality craftsmanship.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-gray-900">
          <ValueCard 
            icon={<FaHandshake className="text-orange-500 w-12 h-12 mx-auto mb-4" />} 
            title="Integrity" 
            desc="Transparent dealings and honest communication are at the heart of our relationships." 
          />
          <ValueCard 
            icon={<FaLightbulb className="text-orange-500 w-12 h-12 mx-auto mb-4" />} 
            title="Innovation" 
            desc="We embrace modern design and technology to create sustainable and smart homes." 
          />
          <ValueCard 
            icon={<FaChartLine className="text-orange-500 w-12 h-12 mx-auto mb-4" />} 
            title="Excellence" 
            desc="Quality craftsmanship and attention to detail define every project we undertake." 
          />
        </div>
      </section>

      {/* TEAM 
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          <TeamMember 
            img="https://randomuser.me/api/portraits/women/44.jpg" 
            name="Sarah Thompson" 
            role="Founder & CEO" 
          />

          <TeamMember 
            img="https://randomuser.me/api/portraits/men/46.jpg" 
            name="James Parker" 
            role="Head of Sales" 
          />

          <TeamMember 
            img="https://randomuser.me/api/portraits/women/48.jpg" 
            name="Laura Smith" 
            role="Lead Architect" 
          />

          <TeamMember 
            img="https://randomuser.me/api/portraits/men/52.jpg" 
            name="Michael Lee" 
            role="Marketing Director" 
          />

        </div>
      </section>
      */}

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24 px-6 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>Over 25+ years of experience in luxury real estate.</li>
            <li>Trusted by hundreds of happy homeowners and investors.</li>
            <li>Exclusive properties in prime locations.</li>
            <li>Personalized service and expert guidance every step of the way.</li>
            <li>Commitment to quality, transparency, and innovation.</li>
          </ul>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80" 
          alt="Happy family moving into new home" 
          className="rounded-3xl shadow-xl w-full object-cover max-h-96"
        />
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-orange-500 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
        <button className="bg-white text-orange-500 font-semibold px-12 py-4 rounded-full shadow-lg hover:scale-105 transition transform">
          Contact Our Experts
        </button>
      </section>

    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl cursor-default"
    >
      {icon}
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

