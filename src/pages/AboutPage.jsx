import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import { experience } from "../data/experience";
import SEO from "../components/SEO";
import { useTheme } from "../context/ThemeContext";

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-20 relative">
      <SEO title="About Me" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-16 md:mb-20"
        >
          <h1 className="text-huge font-bold leading-none mb-4">
            The <span className="text-zinc-400 dark:text-zinc-500 font-serif">Philosophy.</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">
            Biography // Objective Chronicle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* Main Info */}
          <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">
            
            {/* Lead Text */}
            <div className="flex flex-col gap-6 leading-relaxed max-w-none">
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Engineering intelligence.
              </p>
              <p className={`text-xl md:text-2xl font-semibold leading-snug ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                I am Kabir Thayani. An AI/ML Engineer focused on high-performance distributed systems, optimized inference engines, and automated workflows.
              </p>
              <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed font-medium`}>
                My objective is simple: reduce complex, multi-modal problems to elegant, scalable, and testable code. I build at the intersection of production robustness and deep learning depth, ensuring models are not just trained, but reliably served at scale.
              </p>
            </div>

            {/* Experience Section */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12 md:pt-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
                Experience Chronicle
              </h2>
              <Timeline items={experience} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            
            {/* Profile Image & Metadata Card */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden flex flex-col">
              <div className="h-64 md:h-80 w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                <img
                  src="/profile.jpg"
                  alt="Kabir Thayani"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-6 flex flex-col gap-2 bg-zinc-50/50 dark:bg-zinc-950/20">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Kabir Thayani</h3>
                <span className="text-xs font-semibold text-zinc-500">AI Researcher & Backend Developer</span>
                <span className="text-xs opacity-50 mt-1 font-semibold tracking-wide">📍 Gujarat, India // Remote</span>
              </div>
            </div>

            {/* Status Card */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg bg-zinc-50/30 dark:bg-zinc-950/10">
              <h3 className="text-[10px] tracking-[0.2em] uppercase mb-4 opacity-50 font-bold">Status</h3>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Available for AI Roles</span>
              </div>

              <ul className="space-y-3">
                {["Deep Learning / PyTorch", "LLMOps / FAISS", "Distributed Training", "Agentic Systems"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs font-semibold border-b border-zinc-100 dark:border-zinc-900/50 pb-2.5 last:border-b-0 last:pb-0 text-zinc-600 dark:text-zinc-400">
                    <span className="text-zinc-300 dark:text-zinc-700">{"/*"}</span> {item} <span className="text-zinc-300 dark:text-zinc-700">{"*/"}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume Download */}
            <a
              href="/KabirThayani.pdf"
              download="Kabir_Thayani_Resume.pdf"
              className="block cursor-pointer group"
            >
              <div className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-900/25 transition-all">
                <h3 className="text-sm font-bold mb-1 text-zinc-900 dark:text-zinc-100">Resume.pdf</h3>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mb-6 font-semibold">Updated April 2026</p>
                <div className="text-xs font-bold tracking-wider uppercase text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  Download resume <span>→</span>
                </div>
              </div>
            </a>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/contact" className="w-full">
                <div className="border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-lg text-center hover:bg-zinc-900 hover:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all font-bold text-[10px] tracking-wider uppercase">
                  Contact
                </div>
              </Link>
              <Link to="/projects" className="w-full">
                <div className="border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-lg text-center hover:bg-zinc-900 hover:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all font-bold text-[10px] tracking-wider uppercase">
                  Work
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
