/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { certifications } from "../data/certifications.js";

const CertificationsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
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
            Certifications
          </h1>
          <div className="h-1 w-20 bg-slate-900 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="block group relative bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="absolute top-6 right-6 text-slate-300 group-hover:text-slate-900 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pr-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                {cert.date && (
                  <span className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                    Issued: {cert.date}
                  </span>
                )}
                {cert.credentialId && (
                  <span className="text-xs text-slate-400 font-mono">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsPage;
