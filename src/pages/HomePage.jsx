/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/profile.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <a
            href="https://www.ijert.org/nanoray-v2-bridging-the-gap-between-transformers-and-edge-ai-via-cross-architecture-distillation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-slate-900 mr-2"></span>
            New Research Published: NanoRay-v2
            <svg
              className="ml-1 h-3.5 w-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Kabir Thayani.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-500 mb-8 max-w-lg">
            AI/ML Engineer &{" "}
            <span className="text-slate-900">Python Developer</span>. Building
            intelligent systems with precision.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-white shadow-sm transition-transform active:scale-95 hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
            <div className="absolute top-0 right-0 h-full w-full bg-slate-100 rounded-full scale-90 translate-x-4 translate-y-4"></div>
            <img
              src={logo}
              alt="Kabir Thayani"
              className="relative h-full w-full rounded-full object-cover border border-slate-200 shadow-2xl bg-white p-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
