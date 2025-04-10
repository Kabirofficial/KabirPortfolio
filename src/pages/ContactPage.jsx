/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const contactDetails = {
  email: "thayanikabir.business@gmail.com",
  linkedin: "https://www.linkedin.com/in/thayanikabir/",
  instagram: "https://www.instagram.com/thayanikabir_01/",
  github: "https://github.com/Kabirofficial",
};

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-black text-white min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-red-500 mb-6"
        variants={itemVariants}
      >
        Get In <span className="text-white">Touch</span>
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-300 max-w-xl mb-12"
        variants={itemVariants}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out through
        email or connect with me on social media!
      </motion.p>

      <motion.div
        className="flex flex-col items-center space-y-6 w-full max-w-sm"
        variants={itemVariants}
      >
        <motion.a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactDetails.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-red-400 hover:text-white transition-colors duration-200 text-lg w-full justify-center p-3 border border-gray-700 rounded-lg hover:border-red-600"
          whileHover={{ scale: 1.03, y: -3 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Email ${contactDetails.email}`}
        >
          <FaEnvelope className="mr-3 text-xl" />
          <span>{contactDetails.email}</span>
        </motion.a>

        <div className="flex justify-center space-x-6 pt-4">
          {contactDetails.linkedin && (
            <motion.a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white transition-colors duration-200 text-3xl"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
          )}

          {contactDetails.instagram && (
            <motion.a
              href={contactDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white transition-colors duration-200 text-3xl"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </motion.a>
          )}

          {contactDetails.github && (
            <motion.a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white transition-colors duration-200 text-3xl"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
