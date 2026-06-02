import { motion } from "framer-motion";

const Timeline = ({ items }) => {
    return (
        <div className="relative ml-3 md:ml-6 my-12 space-y-12">
            {/* Minimal solid timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="ml-8 relative group"
                >
                    {/* Minimal timeline indicator dot */}
                    <span className="absolute -left-9 top-3 w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors" />

                    <div className="border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-lg hover:bg-zinc-500/5 transition-all duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                {item.role}
                            </h3>
                            <span className="pill self-start sm:self-auto">
                                {item.period}
                            </span>
                        </div>
                        <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-3">
                            {item.company}
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-xs md:text-sm font-semibold max-w-2xl">
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
