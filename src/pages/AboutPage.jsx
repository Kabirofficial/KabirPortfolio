import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import { experience } from "../data/experience";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO title="About Me" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-12 mb-16">
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">About me</p>
          <h1 className="text-huge font-bold leading-none mb-4 text-[#0F172A] dark:text-white">
            A bit about <span className="gradient-text">who I am.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="flex flex-col gap-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight">
                I&apos;m Kabir. I build AI systems.
              </p>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                I&apos;m a Computer Engineering student from Gujarat, India with a deep interest in machine learning, distributed systems, and AI research. I&apos;ve been building and shipping projects since 2023, ranging from personal tools to published research.
              </p>
              <p className="text-base">
                My work spans the full spectrum: training models, building APIs that serve them, and writing research that pushes the boundaries of what&apos;s possible on constrained hardware. I care a lot about code that actually works in production, not just in notebooks.
              </p>
              <p className="text-base">
                When I&apos;m not coding, I&apos;m reading papers, exploring new ML techniques, or occasionally forgetting what day it is because I got too deep into a debugging session.
              </p>
            </div>

            <div className="border-t border-[#E2E8F0] dark:border-[#21262D] pt-12">
              <h2 className="text-xl font-bold tracking-tight mb-8 flex items-center gap-2 text-[#0F172A] dark:text-white">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                Work Experience
              </h2>
              <Timeline items={experience} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-5">

            {/* Photo card */}
            <div className="card overflow-hidden">
              <div className="h-64 w-full overflow-hidden">
                <img src="/profile.jpg" alt="Kabir Thayani" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0F172A] dark:text-white mb-1">Kabir Thayani</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">AI Researcher · Backend Developer</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">📍 Gujarat, India · Remote</p>
              </div>
            </div>

            {/* Status */}
            <div className="card p-5">
              <p className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Current Status</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
                <span className="text-sm font-semibold text-[#0F172A] dark:text-white">Available for AI Roles</span>
              </div>
              <div className="flex flex-col gap-2">
                {["Deep Learning / PyTorch", "LLMOps / RAG", "Research & Publishing", "Agentic Systems"].map(item => (
                  <div key={item} className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="text-indigo-400">→</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Resume */}
            <a href="/KabirThayani.pdf" download className="block">
              <div className="card p-5 group">
                <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Resume</p>
                <p className="text-sm font-bold text-[#0F172A] dark:text-white mb-1">KabirThayani.pdf</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">Updated April 2026</p>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline inline-flex items-center gap-1">
                  Download CV →
                </span>
              </div>
            </a>

            {/* Links */}
            <div className="grid grid-cols-2 gap-3">
              <Link to="/contact">
                <div className="card p-3.5 text-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">Contact</div>
              </Link>
              <Link to="/projects">
                <div className="card p-3.5 text-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">Projects</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
