import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
                <h1 className="text-2xl font-bold mb-8 tracking-tight">Sector Not Found.</h1>
                <Link
                    to="/projects"
                    className="px-5 py-3 bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 font-semibold text-xs tracking-wider uppercase rounded"
                >
                    Return to Works
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent pt-32 pb-20 relative">
            <SEO title={project.title} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                
                {/* Back Link & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Link
                            to="/projects"
                            className="text-xs font-semibold tracking-wide text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
                        >
                            <span>←</span> Back to Works
                        </Link>
                        <div className="w-6 h-px bg-zinc-200 dark:bg-zinc-800" />
                        <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">{project.tags[0]}</span>
                    </div>
                    <h1 className="text-4xl md:text-huge font-bold leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
                        {project.title}
                    </h1>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
                    
                    {/* Left Details */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <p className="text-2xl font-bold leading-snug text-zinc-800 dark:text-zinc-200">
                                {project.description}
                            </p>
                            <div className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl whitespace-pre-line font-medium">
                                {project.longDescription}
                            </div>
                        </div>

                        {/* CTA Links Outline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-4">
                            {project.githubUrl && project.githubUrl !== "#" && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <div className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-900/25 transition-all h-full flex flex-col justify-between min-h-[140px]">
                                        <span className="text-[10px] tracking-wider font-bold text-zinc-400 dark:text-zinc-500 block mb-6 uppercase">Source Code</span>
                                        <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                                            GitHub Repository <span>→</span>
                                        </div>
                                    </div>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <div className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-900/25 transition-all h-full flex flex-col justify-between min-h-[140px] bg-zinc-50/50 dark:bg-zinc-950/20">
                                        <span className="text-[10px] tracking-wider font-bold text-zinc-400 dark:text-zinc-500 block mb-6 uppercase">Live Experience</span>
                                        <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                                            Launch Application <span>→</span>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Info Stack */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg bg-zinc-50/30 dark:bg-zinc-950/10">
                            <h3 className="text-[10px] tracking-[0.2em] uppercase mb-6 opacity-50 font-bold">Stack / Intelligence</h3>
                            <ul className="space-y-3">
                                {project.tags.map((tag, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs font-semibold border-b border-zinc-100 dark:border-zinc-900/50 pb-3 last:border-b-0 last:pb-0 text-zinc-700 dark:text-zinc-300">
                                        <span>{tag}</span>
                                        <span className="text-zinc-400 dark:text-zinc-600 font-bold font-mono">0{i + 1}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
