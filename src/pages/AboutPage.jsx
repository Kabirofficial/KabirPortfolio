/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
      color: "border-slate-200 hover:border-slate-300 text-slate-700",
    },
    {
      to: "/education",
      label: "Education",
      color: "border-slate-200 hover:border-slate-300 text-slate-700",
    },
    {
      to: "/skills",
      label: "Skills",
      color: "border-slate-200 hover:border-slate-300 text-slate-700",
    },
    {
      to: "/certifications",
      label: "Certifications",
      color: "border-slate-200 hover:border-slate-300 text-slate-700",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-6 transition-colors duration-300">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About Me.
          </h1>
          <div className="h-1 w-20 bg-slate-900 dark:bg-white rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            {/* Smart Summary */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-xl p-6 mb-8"
            >
              <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Quick Summary
              </h3>
              <ul className="space-y-2">
                {[
                  "AI/ML Engineer specializing in Deep Learning & NLP",
                  "Full Stack Developer (React, Python, Node.js)",
                  "Published Researcher (IJERT)",
                  "Open Source Contributor & Tech Writer",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="prose prose-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              <p className="text-xl text-slate-900 dark:text-white font-medium">
                Hello! I'm Kabir.
              </p>
              <p>
                A passionate{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  AI/ML Engineer
                </span>{" "}
                and Python Developer crafting intelligent, scalable solutions.
                My journey is fueled by a desire to turn raw data into
                compelling stories and actionable insights.
              </p>
              <p>
                From data preprocessing to model deployment, I thrive on the
                end-to-end ML lifecycle. Whether it's building deep learning
                models or optimizing classical algorithms, I love transforming
                complex theory into production-grade systems.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                I'm always open to discussing new projects, creative ideas, or
                opportunities.
              </p>
              <a
                href="mailto:thayanikabir.official@gmail.com"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-md hover:bg-black dark:hover:bg-slate-200 transition-colors shadow-sm"
              >
                Get in Touch
              </a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {links.map((link) => (
                <motion.div key={link.to} variants={itemVariants}>
                  <Link
                    to={link.to}
                    className={`block p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${link.color} dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white bg-white`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">
                        {link.label}
                      </span>
                      <svg
                        className="w-4 h-4 opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
