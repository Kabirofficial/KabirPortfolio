/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projectsData } from "../data/projectsData.js";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: "All Work" },
    { id: "AI & ML", label: "AI & Machine Learning" },
    { id: "Web Dev", label: "Web Development" },
    { id: "Research", label: "Research" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Research")
      return project.tags.includes("Research Paper");
    if (activeCategory === "Web Dev")
      return (
        project.tags.includes("React") ||
        project.tags.includes("Web App") ||
        project.tags.includes("Portfolio")
      );
    // Default to AI/ML for everything else
    return (
      project.tags.includes("AI") ||
      project.tags.includes("ML") ||
      project.tags.includes("Data Science")
    );
  });

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl">
            A collection of my work in AI, Machine Learning, and Software
            Development.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-white dark:text-slate-900"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {activeCategory === "All" && filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Link
                to={`/projects/${
                  filteredProjects[filteredProjects.length - 1].id
                }`}
                className="group relative block overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20">
                      Featured Project
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                      {filteredProjects[filteredProjects.length - 1].title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {
                        filteredProjects[filteredProjects.length - 1]
                          .description
                      }
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[filteredProjects.length - 1].tags.map(
                        (tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-500 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-slate-900 dark:text-white group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Show all projects if not 'All', otherwise skip the first one since it's featured */}
            {(activeCategory === "All"
              ? filteredProjects.slice(1)
              : filteredProjects
            ).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="h-full"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block h-full group"
                >
                  <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md rounded-lg border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h2>
                        <svg
                          className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsPage;
