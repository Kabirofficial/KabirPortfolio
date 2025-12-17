import { motion } from "framer-motion";
import { experience } from "../data/experience.js";

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8] relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#133B63] mb-4">
            Work Experience
          </h1>
          <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-12"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform duration-300" />

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#133B63]">
                      {item.role}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-500">
                      {item.company}
                    </h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
