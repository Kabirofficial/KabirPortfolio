
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-32 pb-20 overflow-hidden">
      <SEO title="Contact" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col min-h-[70vh] justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-[#891A20]" />
            <span className="text-xs tracking-widest text-[#891A20]">Initiate Connection</span>
          </div>
          <h1 className="text-massive mb-12">
            Let&apos;s Build <br />
            Something.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black mt-20">
          <a
            href="mailto:thayanikabir.official@gmail.com"
            className="group border-r border-b border-black p-12 hover:bg-[#891A20] hover:text-white transition-all duration-500"
          >
            <span className="text-xs tracking-widest mb-12 block opacity-60">01 / Email</span>
            <div className="text-2xl md:text-3xl tracking-tighter break-all">
                THAYANIKABIR.OFFICIAL@GMAIL.COM
            </div>
          </a>

          <a
            href="https://linkedin.com/in/thayanikabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-r border-b border-black p-12 hover:bg-black hover:text-white transition-all duration-500"
          >
            <span className="text-xs tracking-widest mb-12 block opacity-60">02 / LinkedIn</span>
            <div className="text-2xl md:text-3xl tracking-tighter">
                CONNECT_
            </div>
          </a>

          <div className="group border-r border-b border-black p-12 md:col-span-2 lg:col-span-1">
            <span className="text-xs tracking-widest mb-12 block opacity-60">03 / Status</span>
            <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#891A20] animate-pulse" />
                <div className="text-2xl md:text-3xl tracking-tighter">
                    REMOTE_READY
                </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-[20vw] leading-[0.6] opacity-5 select-none pointer-events-none -ml-4">
            INBOX
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
