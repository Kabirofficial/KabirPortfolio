import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SEO from "../components/SEO";

const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO title="Skills" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-10 mb-14">
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">Technical Skills</p>
          <h1 className="text-huge font-bold text-[#0F172A] dark:text-white leading-none">
            My <span className="gradient-text">toolkit.</span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl font-medium">
            Tools, frameworks, and languages I actually use and know well.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}>
              <div className="card p-7 h-full flex flex-col gap-5">
                <div>
                  <span className="text-[10px] font-mono font-semibold text-indigo-400 uppercase tracking-widest">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mt-1">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span key={i} className="pill">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 card p-10 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3">Want to see these in action?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">Browse my projects to see how I apply these skills to real problems.</p>
          <a href="/projects" className="btn-primary inline-flex">View Projects</a>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
