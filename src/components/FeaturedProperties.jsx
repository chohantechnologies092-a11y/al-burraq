import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

/* Adding images of Paradise Valley  */
import pv1 from "../assets/pv1.jpeg";

export default function FeaturedProperties() {
  const projects = [
    {
      id: "paradise",
      img: pv1,
      title: "Paradise Valley",
      tag: "Residential",
      description: "Experience luxury living in the heart of nature with modern amenities.",
      link: "/paradise-valley",
      showButton: true
    },
    {
      id: "super-market",
      img: "https://img.magnific.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg",
      title: "Chakwal Super Market",
      tag: "Commercial",
      description: "The ultimate commercial hub for business growth and premium retail shops.",
      link: "#",
      showButton: false
    },
    {
      id: "Model-town",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      title: "Model Town",
      tag: "Community",
      description: "Eco-friendly residential project with lush green parks and secure gated living.",
      link: "#",
      showButton: false
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-white/60 font-medium tracking-[0.2em] uppercase text-xs">Portfolio</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1]">
              Recent <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
                Projects.
              </span>
            </h2>
          </div>
          <div className="max-w-md lg:pb-4 border-l border-white/10 pl-6">
             <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
              Curated spaces designed for the future. Explore our latest architectural endeavors that redefine modern living and commercial success.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Container - Bento Style Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden bg-[#0a0a0a] rounded-[2rem] sm:rounded-[3rem] border border-white/5 transition-all duration-700 hover:border-white/20 ${
              index === 0 
                ? 'lg:row-span-2 aspect-[4/5] lg:aspect-auto lg:h-[700px]' 
                : 'aspect-[4/3] lg:aspect-auto lg:h-[338px]'
            }`}
          >
            {/* Project Image - Grayscale to Color effect */}
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            />

            {/* Smart Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content Area */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10">
              
              {/* Top Row: Tag & Explore Button */}
              <div className="flex justify-between items-start">
                <span className="inline-block px-5 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/90 font-medium">
                  {project.tag}
                </span>
                
                {project.showButton && (
                   <Link
                    to={project.link}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out hover:scale-105"
                  >
                    <FiArrowUpRight size={26} />
                  </Link>
                )}
              </div>

              {/* Bottom Row: Text Details */}
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className={`font-medium text-white mb-2 ${index === 0 ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>
                  {project.title}
                </h3>
                
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}