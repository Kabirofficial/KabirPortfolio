import { motion } from "framer-motion";
import { experience } from "../data/experience";
import SEO from "../components/SEO";
import Timeline from "../components/Timeline";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-20 relative">
      <SEO title="Experience" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-16"
        >
          <h1 className="text-huge font-bold mb-4">
            The <span className="text-zinc-400 dark:text-zinc-500 font-serif">Chronicle.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
            A linear progression of systems, intelligence, and large-scale engineering.
          </p>
        </motion.div>

        {/* Timeline Component */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12 md:pt-16">
          <Timeline items={experience} />
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 md:mt-32">
          <div className="border border-zinc-200 dark:border-zinc-800 p-8 md:p-16 rounded-lg text-center bg-zinc-50/20 dark:bg-zinc-950/5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
              Looking for intelligence?
            </h2>
            <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-500 font-medium max-w-lg mx-auto mb-8">
              Interested in scheduling an interview, project scoping, or discussing contract AI roles?
            </p>
            <a
              href="mailto:thayanikabir.official@gmail.com"
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors rounded inline-block"
            >
              Hire Kabir
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperiencePage;
