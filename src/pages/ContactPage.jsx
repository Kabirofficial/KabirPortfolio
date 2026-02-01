/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";
import { Icons } from "../components/ui/Icons";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-24 px-6 relative bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center">
      <SEO title="Contact" description="Get in touch with Kabir Thayani for collaborations and opportunities." />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center text-center">

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 border border-blue-100 dark:border-blue-800">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for hire
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6">
            Let's work together.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            I’m always open to discussing collaborations, AI/ML research, or
            creative project ideas. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:thayanikabir.official@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-slate-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all text-left min-w-[280px]">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icons.Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</div>
                <div className="text-slate-900 dark:text-white font-bold">thayanikabir.official@gmail.com</div>
              </div>
            </a>

            <a href="https://linkedin.com/in/kabir-thayani" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-slate-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all text-left min-w-[280px]">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icons.Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">LinkedIn</div>
                <div className="text-slate-900 dark:text-white font-bold">Connect with me</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
