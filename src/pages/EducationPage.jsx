/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { education } from "../data/education.js";

const EducationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Education
          </h1>
          <div className="h-1 w-20 bg-slate-900 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l border-slate-200 group"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-900 ring-4 ring-white" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.school}
                  </h3>
                  <p className="text-lg text-slate-500 font-medium">
                    {item.degree}
                  </p>
                </div>
                <span className="inline-flex mt-2 sm:mt-0 items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-sm font-medium text-slate-700 whitespace-nowrap self-start">
                  {item.period}
                </span>
              </div>

              <div className="text-slate-600 leading-relaxed max-w-2xl">
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;
