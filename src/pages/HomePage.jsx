import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/profile.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 bg-[#FDFCF8] relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000" />

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-6 border border-blue-200">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-[#133B63] tracking-tighter mb-4 leading-tight">
            Kabir <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Thayani.
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-500 mb-8">
            AI/ML Engineer & <br className="hidden md:block" /> Python Developer
          </h2>
          <p className="max-w-xl text-lg text-slate-600 mb-10 leading-relaxed mx-auto md:mx-0">
            Specializing in intelligent applications and scalable systems. I
            transform complex data problems into elegant, efficient, and
            production-ready code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-[#133B63] text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#133B63] font-bold rounded-xl border-2 border-[#133B63]/10 hover:border-[#133B63] hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-purple-600 rounded-4xl rotate-6 opacity-20 blur-2xl animate-pulse" />
            <img
              src={logo}
              alt="Kabir Thayani"
              className="relative w-full h-full rounded-4xl object-cover shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
