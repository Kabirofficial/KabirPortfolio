import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All",      label: "All" },
    { id: "AI & ML",  label: "AI & ML" },
    { id: "Web Dev",  label: "Web / Systems" },
    { id: "Research", label: "Research" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Research") return project.tags.includes("Research Paper");
    if (activeCategory === "Web Dev") return project.tags.includes("React") || project.tags.includes("Web App") || project.tags.includes("Portfolio");
    return project.tags.includes("AI") || project.tags.includes("ML") || project.tags.includes("Data Science");
  });

  return (
    <div className="min-h-screen pt-20">
      <SEO title="Projects" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

        {/* Header */}
        <div className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-10 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-huge font-bold leading-none text-[#0F172A] dark:text-white">
              Things I&apos;ve <span className="gradient-text">built.</span>
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium mt-4 max-w-xl">
              From AI models to web apps and published research. Here&apos;s everything I&apos;ve worked on.
            </p>
          </div>
          {/* Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20"
                    : "border-[#E2E8F0] dark:border-[#21262D] text-slate-500 dark:text-slate-400 hover:border-indigo-400 dark:hover:border-indigo-500"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}>
              <Link to={`/projects/${project.id}`} className="block h-full">
                <div className="card p-7 h-full flex flex-col gap-4 group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                        {project.title}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="pill" style={{ fontSize: "10px", padding: "0.15rem 0.5rem" }}>{tag}</span>
                    ))}
                  </div>
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#21262D]">
                      <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400">View on GitHub →</span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">Nothing in this category yet.</p>
            <button onClick={() => setActiveCategory("All")} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Reset filter</button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 card p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-3">Got a project in mind?</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6 text-sm">I&apos;m open to collaborations, freelance projects, and full-time roles. Let&apos;s talk.</p>
          <Link to="/contact" className="btn-primary">Start a conversation</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
