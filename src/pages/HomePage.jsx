import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ROLES } from "../utils/constants";
import { projectsData } from "../data/projectsData";

const RoleTypewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={roleIndex}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="text-zinc-900 dark:text-zinc-100 font-bold font-serif"
    >
      {ROLES[roleIndex]}
    </motion.span>
  );
};

const HomePage = () => {
  
  // Showcase a selection of premium projects on the home page
  const selectedProjects = projectsData.filter(p => 
    p.id === "anisystem" || p.id === "rag-bot" || p.id === "nanoray-v2"
  );

  return (
    <div className="min-h-screen bg-transparent pt-24 md:pt-36 pb-20 relative">
      <SEO title="AI/ML Engineer" />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mb-24 md:mb-36">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] uppercase tracking-wider font-semibold text-zinc-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities // Gujarat, India & Remote
          </div>

          {/* Heading */}
          <h1 className="text-huge font-bold tracking-tight mb-8 text-zinc-900 dark:text-zinc-100">
            Engineering intelligence <br className="hidden md:block" />
            and high-performance systems.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl mb-10">
            Hi, I&apos;m Kabir Thayani — <RoleTypewriter />
            <br />
            Architecting the leverage of tomorrow through mathematical reasoning, optimized compilers, and distributed architectures.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded"
            >
              Explore Works
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Selected Works Showcase */}
      <section className="px-6 md:px-12 lg:px-20 mb-24 md:mb-36">
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 pb-10 flex justify-between items-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-zinc-400 dark:text-zinc-500">Selected Works</span>
          <Link to="/projects" className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase tracking-wider">
            View All ({projectsData.length}) →
          </Link>
        </div>

        {/* Asymmetric Alternating Layout */}
        <div className="flex flex-col gap-12 md:gap-20">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start border-b border-zinc-100 dark:border-zinc-900/50 pb-12 md:pb-20`}
            >
              {/* Index Column */}
              <div className="lg:col-span-1 text-xs font-mono font-bold text-zinc-300 dark:text-zinc-700">
                0{index + 1}
              </div>

              {/* Title & Tags */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="pill" style={{ padding: '0.15rem 0.5rem', fontSize: '10px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-5 text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                {project.description}
              </div>

              {/* CTA Link */}
              <div className="lg:col-span-2 lg:text-right">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400 transition-colors inline-flex items-center gap-1.5"
                >
                  View Case <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Bio & Contact Cards */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-16">
          
          {/* Availability */}
          <div className="border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400 dark:text-zinc-500 block mb-6">
              Core Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "PyTorch", "Rust", "Transformers", "LLMOps", "FastAPI"].map((s, idx) => (
                <span key={idx} className="pill">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg flex flex-col justify-between min-h-[180px]">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400 dark:text-zinc-500 block mb-4">
                Let&apos;s talk
              </span>
              <a href="mailto:thayanikabir.official@gmail.com" className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:underline break-all block mb-4">
                thayanikabir.official@gmail.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/thayanikabir/" target="_blank" rel="noopener noreferrer"
                 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Kabirofficial" target="_blank" rel="noopener noreferrer"
                 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Watermark Logo */}
        <div className="mt-20 md:mt-28 w-full overflow-hidden">
          <div className="text-[10vw] md:text-[12vw] leading-none tracking-tighter select-none pointer-events-none text-center md:text-left font-bold opacity-[0.02] dark:opacity-[0.03] uppercase font-mono">
            Kabir Thayani
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
