import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-[#FDFCF8] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-full max-w-2xl text-center"
      >
        <span className="text-blue-600 font-bold tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full text-sm mb-6 inline-block">
          Contact Me
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-[#133B63] mb-8">
          Let's Work{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
            Together.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
          I’m always open to discussing collaborations, AI/ML research, or
          creative project ideas.
        </p>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 mx-4 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none" />

          <p className="text-slate-500 font-medium mb-4">
            Send me an email directly:
          </p>
          <a
            href="mailto:thayanikabir.official@gmail.com"
            className="text-2xl md:text-4xl font-bold text-[#133B63] hover:text-blue-600 transition-colors wrap-break-word"
          >
            thayanikabir.official@gmail.com
          </a>

          <div className="mt-8 flex justify-center gap-6">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
