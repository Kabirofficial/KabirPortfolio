import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex items-center relative px-6 md:px-24 py-24">
      <SEO title="Contact" description="Establish connection and schedule a meeting." />
      <div className="max-w-2xl w-full z-10 flex flex-col gap-12 mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="os-glass p-12 border border-os-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border border-os-cyan flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-os-cyan rounded-full" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">ESTABLISH CONNECTION</h2>
          <p className="text-os-text-secondary font-mono text-sm mb-8">
            AWAITING HANDSHAKE PROTOCOL
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 flex-wrap">
            <a href="https://calendly.com/thayanikabir-official" target="_blank" rel="noreferrer" className="btn-os btn-os-primary justify-center">
              [ SCHEDULE_MEETING ]
            </a>
            <a href="mailto:thayanikabir.official@gmail.com" className="btn-os justify-center">
              [ INITIATE EMAIL ]
            </a>
            <a href="https://github.com/Kabirofficial" target="_blank" rel="noreferrer" className="btn-os justify-center">
              [ GITHUB.DB ]
            </a>
            <a href="https://linkedin.com/in/kabirthayani" target="_blank" rel="noreferrer" className="btn-os justify-center">
              [ LINKEDIN.NET ]
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs font-mono text-os-text-muted mt-24"
        >
          <p>KABIR.OS v2.0 // KABIR THAYANI &copy; {new Date().getFullYear()}</p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactPage;
