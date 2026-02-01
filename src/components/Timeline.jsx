import { motion } from "framer-motion";

const Timeline = ({ items }) => {
    return (
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-6 my-12 space-y-16">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="ml-8 relative group"
                >
                    {/* Dot */}
                    <span className="absolute -left-[41px] md:-left-[43px] top-1.5 h-6 w-6 rounded-full border-[3px] border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 shadow-sm" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.role}
                        </h3>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-100 dark:border-white/5 self-start sm:self-auto mt-2 sm:mt-0">
                            {item.period}
                        </span>
                    </div>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        {item.company}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-2xl text-pretty">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
