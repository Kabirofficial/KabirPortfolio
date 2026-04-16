import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import { experience } from "../data/experience";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-24 md:pt-32 pb-20">
      <SEO title="About Me" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-black pb-8 mb-12"
        >
          <h1 className="text-6xl mb-2 text-wrap">
            The <br /> Philosophy.
          </h1>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block border-b border-black pb-12 mb-20"
        >
          <h1 className="text-huge mb-4">
            The Philosophy.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">

          
          <div className="lg:col-span-8 flex flex-col gap-12 md:gap-24">

            
            <div className="md:hidden flex flex-col gap-8 leading-[1.15] tracking-tight">
              <p className="text-3xl text-[#891A20]">
                Engineering intelligence.
              </p>
              <p className="opacity-80 text-xl">
                I am Kabir Thayani. An AI/ML Engineer focused on high-performance distributed systems and automated reasoning.
              </p>
              <p className="opacity-60 text-lg">
                My objective is simple: reduce complex problems to elegant code. I build at the intersection of production robustness and theoretical depth.
              </p>
            </div>

            
            <div className="hidden md:flex flex-col gap-8 uppercase font-black text-black leading-[1.1] tracking-tight max-w-none">
              <p className="text-5xl lg:text-6xl text-[#891A20]">
                Engineering intelligence.
              </p>
              <p className="opacity-80 text-3xl lg:text-4xl">
                I am Kabir Thayani. An AI/ML Engineer focused on high-performance distributed systems and automated reasoning.
              </p>
              <p className="opacity-60 text-2xl lg:text-3xl lg:w-4/5">
                My objective is simple: reduce complex problems to elegant code. I build at the intersection of production robustness and theoretical depth.
              </p>
            </div>

            
            <div className="border-t border-black pt-12 md:pt-20">
              <h2 className="text-2xl md:text-5xl tracking-tighter mb-8 md:mb-12 flex items-center gap-3 md:gap-4">
                <span className="w-3 h-3 md:w-4 md:h-4 bg-[#891A20]" />
                Experience Chronicle
              </h2>
              <Timeline items={experience} />
            </div>
          </div>

          
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12">

            
            <div className="border border-black overflow-hidden flex flex-col">
              <div className="h-64 md:h-80 w-full overflow-hidden border-b border-black">
                <img
                  src="/profile.jpg"
                  alt="Kabir Thayani"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl tracking-tighter">KABIR THAYANI</h3>
                <span className="text-xs md:text-sm opacity-60 normal-case">AI Researcher & Distributed Systems Engineer</span>
                <span className="text-xs opacity-40 mt-2 tracking-widest uppercase">📍 Gujarat, India / Remote</span>
              </div>
            </div>

            
            <div className="border border-black p-6 md:p-8">
              <h3 className="text-xs md:text-sm tracking-widest mb-6 md:mb-8 opacity-60">Status</h3>
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="w-3 h-3 bg-[#891A20] animate-pulse" />
                <span className="text-lg md:text-xl">Available for AI Roles</span>
              </div>

              <ul className="space-y-4 md:space-y-6">
                {["Deep Learning", "LLM Ops", "Full Stack", "n8n Automation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs tracking-widest border-b border-black/10 pb-3 md:pb-4">
                    <span className="text-[#891A20]">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            
            <a
              href="/KabirThayani.pdf"
              download="Kabir_Thayani_Resume.pdf"
              className="block border border-black p-6 md:p-8 group hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer"
            >
              <h3 className="text-md md:text-lg mb-2 md:mb-4">Resume.pdf</h3>
              <p className="text-[10px] md:text-xs tracking-widest opacity-60 mb-6 md:mb-8 font-medium">Updated April 2026</p>
              <div className="text-2xl md:text-3xl tracking-tighter group-hover:translate-y-1 transition-transform">Download ↓</div>
            </a>

            
            <div className="grid grid-cols-2 gap-4">
              <Link to="/contact" className="border border-black p-5 text-center hover:bg-[#891A20] hover:text-white hover:border-[#891A20] transition-all">
                <span className="text-[10px] md:text-xs tracking-widest">CONTACT</span>
              </Link>
              <Link to="/projects" className="border border-black p-5 text-center hover:bg-black hover:text-white transition-all">
                <span className="text-[10px] md:text-xs tracking-widest">WORK</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
