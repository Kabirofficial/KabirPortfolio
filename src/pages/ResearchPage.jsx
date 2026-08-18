import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

const ResearchPage = () => {
  const researchProjects = projectsData.filter(p => p.id === 'nanoray-v2' || p.id === 'breaking-geometric-bottleneck');

  return (
    <section id="research" className="min-h-screen flex flex-col items-center relative px-6 md:px-24 py-24 gap-24">
      <SEO title="Research" description="Publications and AI/ML papers by Kabir Thayani." />

      {/* Header */}
      <div className="max-w-6xl w-full z-10 flex flex-col gap-2">
        <h3 className="terminal-text text-os-cyan">RESEARCH</h3>
        <h2 className="text-4xl md:text-5xl font-bold">Publications & Papers</h2>
      </div>

      <div className="max-w-6xl w-full z-10 flex flex-col gap-16 mx-auto">
        {researchProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-os-cyan text-sm font-mono opacity-80">ID: {project.id}</p>
            </div>

            <div className="os-glass p-8 border-l-2 border-l-os-cyan">
              <p className="text-lg font-bold text-white mb-4">Abstract / Overview</p>
              <p className="text-sm text-os-text-primary leading-relaxed font-mono">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-os-border/50 text-[10px] font-mono text-os-cyan rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-os btn-os-primary">
                    [ READ PAPER ]
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-os">
                    [ VIEW CODE ]
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPage;
