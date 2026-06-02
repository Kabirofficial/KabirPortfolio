import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import SEO from "../components/SEO";

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 relative">
      <SEO title="Certifications" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-16"
        >
          <h1 className="text-5xl md:text-huge font-bold leading-none mb-4 tracking-tight">
            The <span className="text-zinc-400 dark:text-zinc-500 font-serif">Accolades.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
            Validation of technical mastery from industry-standard authorities.
          </p>
        </motion.div>

        {/* Certifications List */}
        <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-200 dark:border-zinc-800 py-8 md:py-12 hover:bg-zinc-500/5 transition-colors gap-4"
              >
                <div className="flex flex-col gap-2 max-w-3xl relative z-10">
                  <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                    {cert.date}{" // "}<span className="text-zinc-900 dark:text-zinc-100 font-bold">{cert.issuer}</span>
                  </span>
                  <h2 className="text-lg md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {cert.title}
                  </h2>
                  {cert.credentialId && (
                    <span className="text-[11px] font-mono font-semibold text-zinc-400 dark:text-zinc-500">
                      Credential ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1.5 transition-transform flex items-center gap-1.5 whitespace-nowrap self-start md:self-auto">
                  View Credential <span>→</span>
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
