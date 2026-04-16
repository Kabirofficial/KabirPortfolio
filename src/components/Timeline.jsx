import { motion } from "framer-motion";

const Timeline = ({ items }) => {
    return (
        <div className="relative border-l border-black ml-3 md:ml-6 my-12 space-y-16">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="ml-8 relative group"
                >
                    
                    <span className="absolute -left-[41px] md:-left-[43px] top-1.5 h-6 w-6 border-2 border-black bg-white group-hover:bg-[#891A20] group-hover:scale-125 transition-all duration-300" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b border-black pb-4">
                        <h3 className="text-xl md:text-2xl font-black text-black group-hover:text-[#891A20] transition-colors">
                            {item.role}
                        </h3>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#891A20] mt-2 sm:mt-0">
                            {item.period}
                        </span>
                    </div>
                    <p className="text-base font-bold text-black mb-4">
                        {item.company}
                    </p>
                    <p className="text-black/60 leading-tight text-sm md:text-base max-w-2xl lowercase font-medium">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
