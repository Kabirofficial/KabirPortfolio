import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import SEO from '../components/SEO';

const CertificationsPage = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center relative px-6 md:px-24 py-24">
      <SEO title="Certifications" description="Verified credentials and certifications." />
      <div className="max-w-6xl w-full z-10 flex flex-col gap-12 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-4"
        >
          <h3 className="terminal-text text-os-cyan">CERTIFICATIONS</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Verified Credentials</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {certifications.map((cert, index) => {
            const isPending = cert.url === '#';
            const Wrapper = isPending ? motion.div : motion.a;

            return (
              <Wrapper
                {...(!isPending && { href: cert.url, target: "_blank", rel: "noopener noreferrer" })}
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`os-glass p-6 border transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isPending ? 'border-os-border/30 opacity-70' : 'border-os-border/50 hover:border-os-cyan/50 group cursor-pointer'
                  }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-os-text-secondary font-mono text-xs">{cert.date}</span>
                    <span className="text-os-border">|</span>
                    <span className="text-os-cyan font-mono text-xs font-bold">{cert.issuer}</span>
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${isPending ? 'text-white' : 'text-white group-hover:text-os-cyan'}`}>
                    {cert.title}
                  </h3>
                  {cert.credentialId && (
                    <span className="font-mono text-[10px] text-os-text-muted">ID: {cert.credentialId}</span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CertificationsPage;
