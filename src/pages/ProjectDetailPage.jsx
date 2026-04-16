import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
                <h1 className="text-4xl mb-8 tracking-tighter">Sector Not Found.</h1>
                <Link to="/projects" className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all uppercase text-xs tracking-widest">
                    Return to Works
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black font-black uppercase pt-32 pb-20 overflow-x-hidden">
            <SEO title={project.title} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-black pb-12 mb-20"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Link to="/projects" className="text-xs tracking-widest hover:text-[#891A20] transition-colors">← Back to Works</Link>
                        <div className="w-8 h-px bg-black opacity-20" />
                        <span className="text-xs tracking-widest opacity-60">{project.tags[0]}</span>
                    </div>
                    <h1 className="text-huge mb-4">
                        {project.title}
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    
                    <div className="lg:col-span-8 space-y-24">
                        <div className="prose prose-2xl uppercase font-black text-black leading-[1.1] tracking-tight max-w-none">
                            <p className="text-3xl md:text-5xl opacity-80 mb-12">
                                {project.description}
                            </p>
                            <div className="text-lg md:text-xl font-medium lowercase opacity-60 leading-normal normal-case">
                                {project.longDescription}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black pt-12">
                            {project.githubUrl && project.githubUrl !== "#" && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-black p-8 hover:bg-black hover:text-white transition-all group"
                                >
                                    <span className="text-xs tracking-widest mb-12 block opacity-60">Source Code</span>
                                    <div className="text-3xl tracking-tighter">GITHUB_ REPO →</div>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-black p-8 hover:bg-[#891A20] hover:text-white hover:border-[#891A20] transition-all group"
                                >
                                    <span className="text-xs tracking-widest mb-12 block opacity-60">Live Experience</span>
                                    <div className="text-3xl tracking-tighter">LAUNCH_ APP →</div>
                                </a>
                            )}
                        </div>
                    </div>

                    
                    <div className="lg:col-span-4 flex flex-col gap-12">
                        <div className="border border-black p-8">
                            <h3 className="text-sm tracking-widest mb-12 opacity-60">Stack / Intelligence</h3>
                            <ul className="space-y-6">
                                {project.tags.map((tag, i) => (
                                    <li key={i} className="flex items-center justify-between text-xs tracking-widest border-b border-black/10 pb-4">
                                        <span>{tag}</span>
                                        <span className="text-[#891A20]">0{i + 1}</span>
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
