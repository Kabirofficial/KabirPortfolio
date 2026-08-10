import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ErrorPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative px-6 md:px-24 py-24">
      <SEO title="404 - Not Found" description="System Directory Not Found." />
      <div className="max-w-2xl w-full z-10 flex flex-col items-center text-center gap-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="os-glass p-12 border border-os-red/30 shadow-[0_0_30px_rgba(255,0,0,0.05)] w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border border-os-red flex items-center justify-center animate-pulse">
              <span className="text-os-red font-bold text-xl">!</span>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">FATAL ERROR 404</h2>
          <p className="text-os-text-secondary font-mono text-sm mb-8">
            SYSTEM DIRECTORY NOT FOUND
          </p>

          <div className="flex justify-center">
            <Link to="/" className="btn-os btn-os-primary border-os-red text-os-red hover:bg-os-red/20 hover:border-os-red hover:shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              [ REBOOT SYSTEM ]
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ErrorPage;
