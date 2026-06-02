import { motion } from "framer-motion";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 relative overflow-hidden">
      <SEO title="Contact" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col min-h-[70vh] justify-between">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Initiate Connection</span>
          </div>
          <h1 className="text-huge font-bold leading-none mb-12 tracking-tight">
            Let&apos;s Build <br />
            Something <span className="text-zinc-400 dark:text-zinc-500 font-serif">Authentic.</span>
          </h1>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          
          {/* Email */}
          <a
            href="mailto:thayanikabir.official@gmail.com"
            className="group block"
          >
            <div className="border border-zinc-200 dark:border-zinc-800 p-8 hover:bg-zinc-500/5 transition-all duration-200 rounded-lg h-full flex flex-col justify-between min-h-40">
              <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider block mb-8">01 / Email</span>
              <div className="text-base md:text-lg font-bold tracking-tight break-all text-zinc-900 dark:text-zinc-100 group-hover:underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
                  thayanikabir.official@gmail.com
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/thayanikabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="border border-zinc-200 dark:border-zinc-800 p-8 hover:bg-zinc-500/5 transition-all duration-200 rounded-lg h-full flex flex-col justify-between min-h-40">
              <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider block mb-8">02 / LinkedIn</span>
              <div className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1.5 transition-transform flex items-center gap-1.5">
                  Connect on LinkedIn <span>→</span>
              </div>
            </div>
          </a>

          {/* Status */}
          <div className="border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg h-full flex flex-col justify-between min-h-40 md:col-span-2 lg:col-span-1 bg-zinc-50/50 dark:bg-zinc-950/20">
            <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider block mb-8">03 / Status</span>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-lg md:text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                    Remote Ready
                </div>
            </div>
          </div>

        </div>

        {/* Large Watermark */}
        <div className="mt-24 text-[12vw] font-bold tracking-tighter leading-none opacity-[0.015] dark:opacity-[0.02] select-none pointer-events-none -ml-4 uppercase font-mono">
            Inbox
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
