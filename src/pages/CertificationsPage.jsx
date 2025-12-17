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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8]">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-[#133B63] text-center mb-16"
        >
          Licenses & Certifications
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>

              <div className="grow">
                <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-1">
                  {cert.issuer}
                </p>
                <h3 className="text-2xl font-bold text-[#133B63] mb-2">
                  {cert.title}
                </h3>
                <p className="text-slate-500">Issued {cert.date}</p>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#133B63] text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10 whitespace-nowrap self-start sm:self-center"
              >
                Show Credential
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsPage;
