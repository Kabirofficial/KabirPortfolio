import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: "All Work" },
    { id: "AI & ML", label: "AI & ML" },
    { id: "Web Dev", label: "Systems" },
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
    <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-20 relative">
      <SEO title="Projects" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="text-huge font-bold leading-none mb-4">
              The <span className="text-zinc-400 dark:text-zinc-500 font-serif">Works.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium">
              A comprehensive archive of models, tools, and technical research papers.
            </p>
          </div>

          {/* Outlined Filter Pills */}
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200
                  ${activeCategory === category.id
                    ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 border-transparent"
                    : "border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial List Showcase */}
        <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border-b border-zinc-200 dark:border-zinc-800 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-zinc-500/5 transition-colors"
            >
              {/* Row Index */}
              <div className="lg:col-span-1 text-xs font-mono font-bold text-zinc-300 dark:text-zinc-700">
                0{index + 1}
              </div>

              {/* Title & Tags */}
              <div className="lg:col-span-4">
                <Link to={`/projects/${project.id}`} className="inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
                    {project.title}
                  </h2>
                </Link>
                <div className="flex flex-wrap gap-1.5 mt-4">
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

              {/* Links Column */}
              <div className="lg:col-span-2 lg:text-right flex lg:flex-col items-center lg:items-end gap-4 justify-start lg:justify-center h-full">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
                >
                  Details ↗
                </Link>
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    Source
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border-b border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-400 dark:text-zinc-500 font-bold mb-4">
              Nothing found in this sector.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Reset System
            </button>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-20 md:mt-32 border border-zinc-200 dark:border-zinc-800 p-8 md:p-16 rounded-lg text-center bg-zinc-50/20 dark:bg-zinc-950/5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
            Ready to initiate a collaboration?
          </h2>
          <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-500 font-medium max-w-lg mx-auto mb-8">
            Have an open role or a distributed system concept you want to discuss? Let&apos;s talk details.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors rounded"
          >
            Start Conversation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
