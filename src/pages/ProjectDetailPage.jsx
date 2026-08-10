import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0D1117] p-6">
                <h1 className="text-2xl font-bold mb-6 text-[#0F172A] dark:text-white">Project not found</h1>
                <Link to="/projects" className="btn-primary">← Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            <SEO title={project.title} />
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-10 mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <Link to="/projects" className="text-xs font-semibold text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
                            ← Back to Projects
                        </Link>
                        <span className="text-slate-200 dark:text-slate-700">·</span>
                        <span className="pill" style={{ fontSize: "10px", padding: "0.15rem 0.5rem" }}>{project.tags[0]}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0F172A] dark:text-white tracking-tight">
                        {project.title}
                    </h1>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                            {project.description}
                        </p>
                        <div className="text-base text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                            {project.longDescription}
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E2E8F0] dark:border-[#21262D] pt-8">
                            {project.githubUrl && project.githubUrl !== "#" && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group block">
                                    <div className="card p-6 flex flex-col gap-3 min-h-[120px]">
                                        <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest">Source Code</span>
                                        <div className="text-base font-bold text-[#0F172A] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                                            GitHub Repository →
                                        </div>
                                    </div>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group block">
                                    <div className="card p-6 flex flex-col gap-3 min-h-[120px] bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-800/30">
                                        <span className="text-[10px] font-mono font-semibold text-indigo-400 uppercase tracking-widest">Live / Published</span>
                                        <div className="text-base font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                                            Open Project →
                                        </div>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="card p-6 sticky top-24">
                            <h3 className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">Tech Stack</h3>
                            <div className="flex flex-col gap-3">
                                {project.tags.map((tag, i) => (
                                    <div key={i} className="flex items-center justify-between text-sm border-b border-[#E2E8F0] dark:border-[#21262D] pb-3 last:border-b-0 last:pb-0">
                                        <span className="font-semibold text-[#0F172A] dark:text-white">{tag}</span>
                                        <span className="text-xs font-mono text-slate-300 dark:text-slate-600">{String(i + 1).padStart(2, "0")}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
