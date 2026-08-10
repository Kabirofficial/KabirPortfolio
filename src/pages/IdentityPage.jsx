import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const IdentityPage = () => {
  return (
    <section id="identity" className="min-h-screen flex items-center relative px-6 md:px-24 py-24">
      <SEO title="Identity" description="Who am I and what do I build." />
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mx-auto">
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="lg:col-span-8 os-glass p-8 md:p-12 border-l-2 border-l-os-cyan flex flex-col gap-8"
        >
          <h3 className="terminal-text flex items-center gap-2">
            <span className="text-os-cyan">&gt;</span> WHOAMI.txt
          </h3>
          
          <div className="space-y-6 text-base text-os-text-primary leading-relaxed font-mono">
            <p className="text-2xl font-bold text-white font-sans tracking-tight">
              I&apos;m Kabir. I build AI systems.
            </p>
            <p>
              I&apos;m a Computer Engineering student from Gujarat, India with a deep interest in machine learning, distributed systems, and AI research. I&apos;ve been building and shipping projects since 2023, ranging from personal tools to published research.
            </p>
            <p>
              My work spans the full spectrum: training models, building APIs that serve them, and writing research that pushes the boundaries of what&apos;s possible on constrained hardware. I care a lot about code that actually works in production, not just in notebooks.
            </p>
            <p className="text-os-text-secondary">
              When I&apos;m not coding, I&apos;m reading papers, exploring new ML techniques, or occasionally forgetting what day it is because I got too deep into a debugging session.
            </p>
          </div>
        </motion.div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="os-glass overflow-hidden border border-os-border/50"
          >
            <div className="h-48 w-full overflow-hidden border-b border-os-border/50">
              <img src="/profile.jpg" alt="Kabir Thayani" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-white mb-1">Kabir Thayani</h3>
              <p className="text-xs text-os-text-secondary font-mono">AI Researcher · Backend Developer</p>
              <p className="text-xs text-os-text-muted mt-2">📍 Gujarat, India · Remote</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="os-glass p-6 border border-os-border/50"
          >
            <p className="terminal-text text-[10px] text-os-text-muted mb-4">CURRENT_STATUS</p>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-os-green animate-pulse" />
              <span className="text-sm font-bold text-white tracking-wide">Available for AI Roles</span>
            </div>
            <div className="flex flex-col gap-3">
              {["Deep Learning / PyTorch", "LLMOps / RAG", "Research & Publishing", "Agentic Systems"].map((item, i) => (
                <div key={i} className="text-xs font-mono text-os-text-secondary flex items-center gap-2">
                  <span className="text-os-cyan">&gt;</span> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.a 
            href="/KabirThayani.pdf" 
            download
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="os-glass p-6 border border-os-border/50 hover:border-os-cyan transition-colors group cursor-pointer block"
          >
            <p className="terminal-text text-[10px] text-os-text-muted mb-2">DOWNLOAD_CV</p>
            <p className="text-sm font-bold text-white mb-1">KabirThayani.pdf</p>
            <p className="text-xs text-os-text-secondary mb-4">Updated April 2026</p>
            <span className="terminal-text text-os-cyan group-hover:pl-2 transition-all">
              [ INITIATE DOWNLOAD ]
            </span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default IdentityPage;
