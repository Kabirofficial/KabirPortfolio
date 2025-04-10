/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import profilePic from "../assets/kabir.jpg";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-black flex flex-col items-center justify-center text-center min-h-[calc(100vh-theme(spacing.32))] px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.img
        src={profilePic}
        alt="Kabir - Profile Picture"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-8 border-2 border-red-600 shadow-lg shadow-red-500/30" // Size, shape, cover, margin, border, shadow
        variants={itemVariants}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        variants={itemVariants}
      >
        <span className="text-white">Welcome to My</span>{" "}
        <span className="text-red-500">Digital Space</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-red-400 max-w-3xl mb-8"
        variants={itemVariants}
      >
        I'm Kabir, a passionate{" "}
        <span className="text-white font-medium">Full-Stack Developer</span>{" "}
        crafting seamless and engaging web experiences. Explore my portfolio to
        see my journey and work.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        variants={itemVariants}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/projects"
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-block"
          >
            View My Projects
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/about"
            className="bg-transparent border-2 border-red-500 text-red-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-500 hover:text-black transition-colors duration-300 inline-block"
          >
            Learn More About Me
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
