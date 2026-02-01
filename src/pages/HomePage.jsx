/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "/profile.jpg";
import { ROLES } from "../utils/constants";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";

const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);



  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % ROLES.length;
      const fullText = ROLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <SEO title="Home" />

      {/* Dynamic Background */}
      <div className="absolute inset-0 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <a
              href="https://www.ijert.org/nanoray-v2-bridging-the-gap-between-transformers-and-edge-ai-via-cross-architecture-distillation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-medium mb-8 hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              New Research: NanoRay-v2
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </a>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.05]">
            Kabir <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              Thayani
            </span>
            <span className="text-blue-500">.</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="h-20 mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              I am a{" "}
              <span className="text-slate-900 dark:text-white font-semibold border-b-2 border-blue-500 pb-1">
                {text}
              </span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-blue-500 animate-pulse align-middle"></span>
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Building intelligent systems with precision. bridging the gap between theoretical AI and production engineering.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button to="/projects" variant="primary" size="lg" className="rounded-full shadow-blue-500/20 shadow-2xl">
              View Projects
            </Button>
            <Button to="/contact" variant="glass" size="lg" className="rounded-full">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
            {/* Abstract Shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-slate-200 dark:border-white/5"
            />

            {/* Image Container */}
            <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10"></div>
              <img
                src={logo}
                alt="Kabir Thayani"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Focus</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">AI & ML</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-2xl">💻</div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Stack</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Full Stack</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
