/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { projectsData } from "../data/projectsData.js";
import SEO from "../components/SEO";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: "All Work" },
    { id: "AI & ML", label: "AI & Machine Learning" },
    { id: "Web Dev", label: "Web Development" },
    { id: "Research", label: "Research" },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Research")
        return project.tags.includes("Research Paper");
      if (activeCategory === "Web Dev")
        return (
          project.tags.includes("React") ||
          project.tags.includes("Web App") ||
          project.tags.includes("Portfolio")
        );
      return (
        project.tags.includes("AI") ||
        project.tags.includes("ML") ||
        project.tags.includes("Data Science")
      );
    });
  }, [activeCategory]);

  return (
    <div className="min-h-screen py-24 px-6 relative bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="Projects" description="Explore my latest projects in AI, Machine Learning, and Web Development." />

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A curated collection of projects bridging theoretical AI with practical engineering.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "text-white dark:text-slate-900"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 mix-blend-exclusion dark:mix-blend-screen">{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${project.id}`} className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
                  <GlassCard className="h-full flex flex-col p-0 group border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-400/30">
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-mono text-blue-500 uppercase tracking-wider">
                            {project.tags[0]}
                          </span>
                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h2>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all transform group-hover:-rotate-45">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5">
                        {project.tags.slice(1, 4).map((tag) => (
                          <span key={tag} className="text-xs text-slate-500 dark:text-slate-500 px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
