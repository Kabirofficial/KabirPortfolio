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
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 60 },
    },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#133B63] mb-4">
            Education
          </h1>
          <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#133B63]">
                    {item.degree}
                  </h3>
                  <h4 className="text-xl font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                    {item.institution}
                  </h4>
                </div>
                <span className="inline-flex px-4 py-1.5 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed text-lg border-t border-slate-50 pt-4 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;
