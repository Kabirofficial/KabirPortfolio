import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  const statItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const stats = [
    { label: "Years Experience", value: "1<" },
    { label: "Projects Completed", value: "15+" },
    { label: "Tech Stack", value: "Modern" },
  ];

  const links = [
    {
      to: "/experience",
      label: "Experience",
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      to: "/education",
      label: "Education",
      color: "bg-emerald-100 hover:bg-emerald-200",
    },
    {
      to: "/skills",
      label: "Skills",
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      to: "/certifications",
      label: "Certifications",
      color: "bg-amber-100 hover:bg-amber-200",
    },
  ];

  return (
    <motion.section
      className="min-h-screen bg-[#FDFCF8] text-[#133B63] overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={itemVariants}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#133B63] mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Me.
            </span>
          </h1>
          <div className="h-2 w-24 bg-linear-to-r from-blue-600 to-purple-600 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              variants={itemVariants}
              className="prose prose-lg text-slate-700 leading-relaxed"
            >
              <p className="text-xl md:text-2xl font-light">
                Hello! I'm{" "}
                <span className="font-bold text-[#133B63]">Kabir</span>.
              </p>
              <p>
                A passionate{" "}
                <span className="font-semibold text-blue-700">
                  AI/ML Engineer
                </span>{" "}
                and Python Developer crafting intelligent, scalable solutions.
                My journey is fueled by a desire to turn raw data into
                compelling stories and actionable insights.
              </p>
              <p>
                From data preprocessing to model deployment, I thrive on the
                end-to-end ML lifecycle. Whether it's building deep learning
                models with <span className="font-semibold">PyTorch</span> or
                optimizing classical algorithms with{" "}
                <span className="font-semibold">Scikit-learn</span>, I love
                transforming complex theory into production-grade systems.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statItemVariants}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-black text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-purple-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-slate-600 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
                <a
                  href="mailto:thayanikabir.official@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#133B63] rounded-xl hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link) => (
                <motion.div key={link.to} variants={itemVariants}>
                  <Link
                    to={link.to}
                    className={`block p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${link.color}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg text-[#133B63]">
                        {link.label}
                      </span>
                      <svg
                        className="w-5 h-5 text-[#133B63] opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
