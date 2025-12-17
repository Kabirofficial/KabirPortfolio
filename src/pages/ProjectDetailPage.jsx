import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData.js";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8]">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#133B63] mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="text-lg text-blue-600 hover:underline"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8] relative">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#133B63] mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-600 text-sm font-bold px-3 py-1 rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none text-center px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
              >
                GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none text-center px-6 py-3 bg-[#133B63] text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
            {project.longDescription.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
