import { motion } from "framer-motion";
import { education } from "../data/education";
import SEO from "../components/SEO";

const EducationPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO title="Education" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-10 mb-14">
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">Education</p>
          <h1 className="text-huge font-bold text-[#0F172A] dark:text-white leading-none">
            Where I <span className="gradient-text">studied.</span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl font-medium">
            My academic background in computer engineering and quantitative thinking.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {education.map((item, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}>
              <div className="card p-7 md:p-9">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-xs font-mono font-bold text-indigo-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="lg:col-span-8 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] dark:text-white">{item.school}</h2>
                    <h3 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold">{item.degree}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{item.description}</p>
                  </div>
                  <div className="lg:col-span-3 lg:text-right">
                    <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">{item.period}</span>
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
