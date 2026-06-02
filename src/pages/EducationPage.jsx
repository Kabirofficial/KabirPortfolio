import { motion } from "framer-motion";
import { education } from "../data/education";
import SEO from "../components/SEO";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 relative">
      <SEO title="Education" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-16"
        >
          <h1 className="text-huge font-bold mb-4">
            The <span className="text-zinc-400 dark:text-zinc-500 font-serif">Foundation.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
             Scholastic milestones in computer engineering and quantitative logic.
          </p>
        </motion.div>

        {/* Education List */}
        <div className="flex flex-col gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-lg hover:bg-zinc-500/5 transition-all duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Number Indicator */}
                  <div className="lg:col-span-1 text-base font-mono font-bold text-zinc-400 dark:text-zinc-600">
                    0{index + 1}
                  </div>

                  {/* School & Degree */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      {item.school}
                    </h2>
                    <h3 className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-semibold">
                       {item.degree}
                    </h3>
                    <p className="mt-4 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                        {item.description}
                    </p>
                  </div>

                  {/* Date & Decorative Label */}
                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full min-h-[60px] lg:text-right gap-6">
                     <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 tracking-wider">
                       {item.period}
                     </span>
                     <div className="hidden lg:block text-3xl font-extrabold tracking-tighter opacity-[0.03] dark:opacity-[0.05] select-none font-mono">
                        EDU_0{index + 1}
                     </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
