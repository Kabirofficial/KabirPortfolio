import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData.js";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#133B63] mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A selection of my work in AI, Machine Learning, and Software
            Development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                to={`/projects/${project.id}`}
                className="block h-full group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 h-full flex flex-col relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#133B63]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-[#133B63] group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h2>
                      <span className="bg-slate-50 p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                        <svg
                          className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50/50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
