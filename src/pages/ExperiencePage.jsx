import { motion } from "framer-motion";
import { experience } from "../data/experience";
import SEO from "../components/SEO";
import Timeline from "../components/Timeline";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO title="Experience" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-10 mb-14">
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">Work History</p>
          <h1 className="text-huge font-bold text-[#0F172A] dark:text-white leading-none">
            Where I&apos;ve <span className="gradient-text">worked.</span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl font-medium">
            My experience building real systems, from internships to independent research.
          </p>
        </motion.div>

        <div className="border-t border-[#E2E8F0] dark:border-[#21262D] pt-10">
          <Timeline items={experience} />
        </div>

        <div className="mt-16 card p-10 md:p-14 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3">Want to add me to your team?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">I&apos;m open to full-time roles, internships, and project-based contracts in AI/ML.</p>
          <a href="mailto:thayanikabir.official@gmail.com" className="btn-primary inline-flex">Get in touch →</a>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
