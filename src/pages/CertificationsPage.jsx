import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import SEO from "../components/SEO";

const CertificationsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO title="Certifications" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="border-b border-[#E2E8F0] dark:border-[#21262D] pb-10 mb-14">
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">Certifications</p>
          <h1 className="text-huge font-bold text-[#0F172A] dark:text-white leading-none">
            Things I&apos;ve <span className="gradient-text">learned.</span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl font-medium">
            Verified credentials from platforms and institutions I respect.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {certifications.map((cert, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500">{cert.date}</span>
                      <span className="text-[10px] text-slate-300 dark:text-slate-600">·</span>
                      <span className="text-[10px] font-mono font-bold text-indigo-500">{cert.issuer}</span>
                    </div>
                    <h2 className="text-base font-bold text-[#0F172A] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h2>
                    {cert.credentialId && (
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">ID: {cert.credentialId}</span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 whitespace-nowrap shrink-0">
                    Verify →
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
