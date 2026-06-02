import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SEO from "../components/SEO";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 relative">
      <SEO title="Skills" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-16"
        >
          <h1 className="text-5xl md:text-huge font-bold leading-none mb-4 tracking-tight">
            Intelligence.
          </h1>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
             A matrix of technical proficiencies across the stack.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="border border-zinc-200 dark:border-zinc-800 p-8 h-full flex flex-col justify-between hover:bg-zinc-500/5 transition-all duration-200 rounded-lg">
                <div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-600 mb-6 block uppercase tracking-wider">
                     ID // 0{index + 1} 
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <span
                        key={i}
                        className="pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 border border-zinc-200 dark:border-zinc-800 p-8 md:p-16 rounded-lg text-center bg-zinc-50/20 dark:bg-zinc-950/5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
            Ready to view these in action?
          </h2>
          <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-500 font-medium max-w-lg mx-auto mb-8">
            Explore the source code and implementations of these skills in my project portfolio.
          </p>
          <a
            href="/projects"
            className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors rounded inline-block font-mono"
          >
            View Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
