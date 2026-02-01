import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
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

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Research") return project.tags.includes("Research Paper");
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

  return (
    <div className="min-h-screen relative bg-white dark:bg-slate-950 transition-colors duration-300 pb-20">
      <SEO
        title="Projects"
        description="A curated collection of my work in AI, Machine Learning, and Web Engineering."
      />

      {/* Decorative Background - Standard CSS for safety */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">

        {/* Headings - Using simple motion div with direct props to bypass variant propagation issues */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging the gap between theoretical AI research and practical, scalable engineering solutions.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === category.id
                    ? "text-white dark:text-slate-900 bg-slate-900 dark:bg-white ring-2 ring-slate-900 dark:ring-white ring-offset-2 dark:ring-offset-slate-950"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - No "layout" prop on container to prevent measurement bugs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-full"
            >
              <Link to={`/projects/${project.id}`} className="block h-full group focus:outline-none">
                <GlassCard className="h-full flex flex-col p-0 overflow-hidden border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="p-8 flex flex-col h-full relative">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">
                          {project.tags[0]}
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5 mt-auto">
                      {project.tags.slice(1, 4).map((tag) => (
                        <span key={tag} className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No projects found for this category.</p>
            <button onClick={() => setActiveCategory("All")} className="text-blue-500 mt-2 hover:underline">Clear Filters</button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-32 text-center pb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Interested in working together?</h2>
          <Button to="/contact" size="lg" className="rounded-full">Get in touch</Button>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
