import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import SEO from "../components/SEO";

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-32 pb-20">
      <SEO title="Certifications" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-black pb-12 mb-20"
        >
          <h1 className="text-[12vw] md:text-[8vw] leading-none tracking-tighter mb-4">
            The Accolades.
          </h1>
          <p className="text-xl md:text-2xl opacity-60 lowercase font-medium tracking-tight">
            Validation of technical mastery from industry-standard authorities.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-black">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-b border-black py-12 md:py-16 hover:bg-[#891A20] hover:text-white transition-all duration-500 relative flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="flex flex-col gap-4 max-w-4xl relative z-10">
                <span className="text-xs md:text-sm tracking-[0.3em] font-black opacity-60 group-hover:text-white">
                  {cert.date} / {cert.issuer}
                </span>
                <h2 className="text-3xl md:text-5xl tracking-tighter">
                  {cert.title}
                </h2>
                {cert.credentialId && (
                  <span className="text-[10px] tracking-widest opacity-40 lowercase group-hover:text-white group-hover:opacity-80">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
              <div className="text-4xl md:text-6xl tracking-tighter mt-8 md:mt-0 transition-transform duration-500 group-hover:translate-x-8">
                OPEN_CERT_ 
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
