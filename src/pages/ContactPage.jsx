/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 mb-6 border border-slate-200">
          Contact Me
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Let's Work Together.
        </h1>

        <p className="text-lg text-slate-600 mb-12 max-w-lg mx-auto leading-relaxed">
          I’m always open to discussing collaborations, AI/ML research, or
          creative project ideas.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-50 p-10 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors duration-200"
        >
          <p className="text-slate-500 font-medium mb-4 text-sm uppercase tracking-wide">
            Email Me Directly
          </p>
          <a
            href="mailto:thayanikabir.official@gmail.com"
            className="text-2xl md:text-3xl font-bold text-slate-900 hover:text-slate-700 transition-colors break-all"
          >
            thayanikabir.official@gmail.com
          </a>

          <div className="mt-8 pt-8 border-t border-slate-200 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/thayanikabir/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-md flex items-center justify-center text-slate-500 group-hover:text-slate-900 group-hover:border-slate-400 transition-all shadow-sm">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-900">
                LinkedIn
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
