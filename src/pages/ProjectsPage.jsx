import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  const projects = projectsData;

  return (
    <section id="projects" className="min-h-screen flex flex-col relative px-6 md:px-24 py-24">
      <SEO title="Projects" description="Case studies and software projects." />
      <div className="max-w-7xl w-full z-10 flex flex-col mx-auto grow">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-12"
        >
          <h3 className="terminal-text text-os-blue">PROJECTS</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Case Studies</h2>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row gap-8 grow h-full">
          {/* Project List */}
          <div className="w-full md:w-1/3 flex flex-col gap-2 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar" data-lenis-prevent="true">
            {projects.map((project, i) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setActiveProject(project);
                  if (window.innerWidth < 768) {
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }
                }}
                className={`text-left p-4 border transition-all ${activeProject.id === project.id
                    ? 'border-os-blue bg-os-blue/10 text-os-cyan'
                    : 'border-os-border/50 hover:border-os-border text-os-text-secondary hover:text-os-text-primary'
                  }`}
              >
                <div className="font-mono text-xs mb-1 opacity-50">TYPE: {project.category || 'PROJECT'}</div>
                <div className="font-bold text-sm truncate">{project.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Project Details */}
          <div className="w-full md:w-2/3 os-glass border border-os-border/50 p-6 md:p-12 relative overflow-hidden flex flex-col">
            <div className="tech-grid absolute inset-0 opacity-20 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex flex-col h-full"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-os-border/50 text-[10px] font-mono text-os-cyan rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-os-text-primary leading-relaxed font-mono grow">
                  {activeProject.longDescription}
                </p>

                <div className="mt-8 pt-8 border-t border-os-border/50 flex gap-4">
                  {activeProject.githubUrl && activeProject.githubUrl !== '#' && (
                    <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="btn-os btn-os-primary">
                      [ SOURCE_CODE ]
                    </a>
                  )}
                  {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                    <a href={activeProject.liveUrl} target="_blank" rel="noreferrer" className="btn-os">
                      [ DEPLOYMENT ]
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsPage;
