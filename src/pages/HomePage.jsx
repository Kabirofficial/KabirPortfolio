import { motion, useSpring, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import useIsMobile from "../utils/useIsMobile";

const projects = [
  {
    title: "RAG & LLM Automation",
    subtitle: "AI / ML Architecture",
    image: "/redesign/rag.png",
  },
  {
    title: "FastAPI Backend Architecture",
    subtitle: "High Performance API",
    image: "/redesign/fastapi.png",
  },
  {
    title: "n8n Lead Routing System",
    subtitle: "Workflow Automation",
    image: "/redesign/n8n.png",
  },
];

const HomePage = () => {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    
    if (isMobile) return;
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  return (
    <div className="flex flex-col w-full bg-white text-black font-black uppercase overflow-hidden">
      <SEO title="Home" />

      
      
      <section className="md:hidden flex flex-col justify-start p-6 border-b border-black pt-32 pb-20">
         <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
         >
            <h1 className="text-5xl leading-[1.1] mb-6 mt-12">
              Engineering <br />
              Intelligence.
            </h1>
            <p className="text-[#891A20] text-xl leading-tight">
              Architecting the leverage of the future.
            </p>
         </motion.div>
      </section>

      
      <section className="hidden md:flex h-screen flex-col justify-end p-12 lg:p-20 border-b border-black pt-32">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[90vw]"
        >
          <h1 className="text-7xl lg:text-massive mb-12">
            Engineering <br />
            Intelligence. <br />
            <span className="text-[#891A20]">Architecting the leverage of the future.</span>
          </h1>
        </motion.div>
      </section>

      
      <section className="flex flex-col border-b border-black relative z-10">
        <div className="px-6 md:px-12 lg:px-20 py-6 md:py-8 border-b border-black flex justify-between items-center bg-white sticky top-16 md:top-20 z-20">
            <span className="text-xs md:text-sm tracking-widest leading-none">Selected Works</span>
            <span className="text-xs md:text-sm tracking-widest leading-none">2024 — 2026</span>
        </div>

        {projects.map((project, index) => (
          <Link
            to="/projects"
            key={index}
            className="group relative border-b border-black overflow-hidden bg-white block"
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            
            <div className="md:hidden px-6 py-10 flex flex-col relative z-10">
              <span className="text-xs mb-3 tracking-widest opacity-60">0{index + 1} / {project.subtitle}</span>
              <h2 className="text-4xl tracking-tighter mb-6">{project.title}</h2>
              <div className="w-full h-[30vh] bg-gray-100 border border-black overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="text-xl mt-6 tracking-tighter text-[#891A20]">
                 Explore Project →
              </div>
            </div>

            
            <div className="hidden md:flex px-12 lg:px-20 py-20 flex-row items-center justify-between transition-colors duration-300 group-hover:text-[#891A20] relative z-10">
              <div className="flex flex-col">
                <span className="text-sm mb-4 tracking-widest opacity-60">0{index + 1} / {project.subtitle}</span>
                <h2 className="text-6xl lg:text-8xl tracking-tighter">{project.title}</h2>
              </div>
              <div className="text-4xl lg:text-5xl mt-0 tracking-tighter group-hover:translate-x-6 transition-transform duration-500">
                 →
              </div>
            </div>
            
            
            {!isMobile && (
               <div className="absolute inset-0 bg-[#891A20]/0 group-hover:bg-[#891A20]/5 transition-colors duration-500" />
            )}
          </Link>
        ))}
      </section>

      
      {!isMobile && (
         <motion.div
            className="fixed pointer-events-none z-[50] w-[45vh] h-[60vh] overflow-hidden border border-black bg-white shadow-2xl"
            style={{
               left: springX,
               top: springY,
               x: "-50%",
               y: "-50%",
               scale: hoveredIndex !== null ? 1 : 0,
               rotate: hoveredIndex !== null ? 2 : 0,
            }}
            transition={{ scale: { type: "spring", stiffness: 200, damping: 25 } }}
         >
            {projects.map((project, index) => (
               <motion.img
                  key={index}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
               />
            ))}
         </motion.div>
      )}

      
      <footer className="p-6 md:p-12 lg:p-20 mb-16 md:mb-32">
        
        <div className="md:hidden flex flex-col gap-12">
            <div className="flex flex-col gap-4">
                <span className="text-[10px] tracking-[0.3em] font-medium opacity-60">Availability</span>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#891A20] animate-pulse" />
                    <span className="text-xl tracking-tighter">Remote Roles Open</span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-[10px] tracking-[0.3em] font-medium opacity-60">Contact</span>
                <a href="mailto:thayanikabir.official@gmail.com" className="text-md tracking-tighter text-[#891A20] break-all">THAYANIKABIR.OFFICIAL@GMAIL.COM</a>
                <div className="flex gap-6 mt-2">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest border-b border-black transition-all">LINKEDIN</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest border-b border-black transition-all">GITHUB</a>
                </div>
            </div>
        </div>

        
        <div className="hidden md:grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-8">
                <span className="text-xs tracking-[0.3em] font-medium opacity-60">Availability</span>
                <div className="group flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#891A20] animate-pulse" />
                    <span className="text-3xl lg:text-4xl tracking-tighter hover:text-[#891A20] transition-colors cursor-pointer">Remote AI/ML Roles Open</span>
                </div>
            </div>
            <div className="flex flex-col gap-8 text-right overflow-hidden">
                <span className="text-xs tracking-[0.3em] font-medium opacity-60">Contact</span>
                <a href="mailto:thayanikabir.official@gmail.com" className="text-3xl lg:text-4xl tracking-tighter hover:text-[#891A20] transition-colors break-all">THAYANIKABIR.OFFICIAL@GMAIL.COM</a>
                <div className="flex gap-12 justify-end mt-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest border-b border-black hover:border-[#891A20] hover:text-[#891A20] transition-all">LINKEDIN</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest border-b border-black hover:border-[#891A20] hover:text-[#891A20] transition-all">GITHUB</a>
                </div>
            </div>
        </div>
        
        <div className="mt-24 md:mt-40 w-full overflow-hidden flex justify-center md:justify-start">
            <div className="text-[13vw] md:text-[18vw] leading-[0.8] tracking-tighter select-none pointer-events-none opacity-5 whitespace-nowrap">
                KABIR THAYANI
            </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
