import { motion } from "framer-motion";

const Timeline = ({ items }) => {
    return (
        <div className="relative ml-3 md:ml-5 my-8 space-y-8">
            {/* Spine */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500 via-indigo-200 to-transparent dark:via-indigo-800" />

            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="ml-8 relative group"
                >
                    {/* Dot */}
                    <span className="absolute -left-9 top-4 w-2.5 h-2.5 rounded-full bg-white dark:bg-[#0D1117] border-2 border-indigo-400 dark:border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

                    <div className="card p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{item.role}</h3>
                            <span className="pill shrink-0 self-start">{item.period}</span>
                        </div>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{item.company}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
