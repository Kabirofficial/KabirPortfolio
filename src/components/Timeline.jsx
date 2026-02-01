import { motion } from "framer-motion";

const Timeline = ({ items }) => {
    return (
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 my-8">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-10 ml-8 relative group"
                >
                    {/* Dot */}
                    <span className="absolute -left-[41px] md:-left-[43px] top-1 h-6 w-6 rounded-full border-4 border-white dark:border-slate-950 bg-blue-500 shadow-md group-hover:scale-125 transition-transform duration-300" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.role}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded self-start sm:self-auto mt-2 sm:mt-0">
                            {item.period}
                        </span>
                    </div>
                    <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {item.company}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm max-w-2xl">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
