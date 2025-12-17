import { motion } from "framer-motion";
import { skills } from "../data/skills.js";

const SkillsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8] flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#133B63] mb-6">
            Technical Arsenal
          </h1>
          <p className="text-xl text-slate-500">
            Technologies and tools I work with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border md:border-2 border-slate-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-default"
            >
              <span className="font-bold text-slate-700 text-lg group-hover:text-blue-600 transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
