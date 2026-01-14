/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/profile.jpg";

const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = [
      "AI/ML Engineer",
      "Full Stack Developer",
      "Researcher",
      "Python Developer",
    ];

    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[14px_24px]"></div>

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
            className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 mb-8 hover:scale-105"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
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

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Kabir Thayani.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-8 max-w-lg min-h-[60px] md:min-h-auto">
            I am a{" "}
            <span className="text-slate-900 dark:text-white font-semibold">
              {text}
            </span>
            <span className="inline-block w-0.5 h-6 ml-1 bg-slate-900 dark:bg-white animate-pulse align-middle"></span>
            <br />
            Building intelligent systems with precision.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 px-8 text-base font-bold text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-blue-900/10 transition-all hover:bg-black dark:hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-8 text-base font-medium text-slate-900 dark:text-slate-100 shadow-sm transition-colors hover:bg-white dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]"
          >
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl scale-110 animate-pulse-slow"></div>
            <img
              src={logo}
              alt="Kabir Thayani"
              className="relative h-full w-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
            />
            {/* Decorative Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-slate-200/50 dark:border-white/5 scale-110 border-dashed"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
