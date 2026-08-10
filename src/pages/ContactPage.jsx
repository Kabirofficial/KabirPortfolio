import { motion } from "framer-motion";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO title="Contact" />
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-20">

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-huge font-bold text-[#0F172A] dark:text-white leading-none mb-5">
            Let&apos;s <span className="gradient-text">talk.</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-14 max-w-lg leading-relaxed">
            Whether it&apos;s a job, a collab, or just a question about AI. My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <a href="mailto:thayanikabir.official@gmail.com" className="group block">
            <div className="card p-7 h-full flex flex-col gap-3 min-h-36">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email</span>
              <div className="text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                thayanikabir.official@gmail.com
              </div>
            </div>
          </a>

          <a href="https://linkedin.com/in/thayanikabir/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="card p-7 h-full flex flex-col gap-3 min-h-36">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">LinkedIn</span>
              <div className="text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                Connect on LinkedIn <span>→</span>
              </div>
            </div>
          </a>

          <div className="card p-7 flex flex-col gap-3 min-h-36">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"/>
            </div>
            <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Availability</span>
            <div>
              <div className="text-sm font-semibold text-[#0F172A] dark:text-white">Open to work</div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">Remote or Gujarat, India</div>
            </div>
          </div>
        </div>

        {/* Simple message prompt */}
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3">Prefer a direct message?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Just email me. I respond to every message personally.</p>
          <a href="mailto:thayanikabir.official@gmail.com" className="btn-primary inline-flex">
            Send an email →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
