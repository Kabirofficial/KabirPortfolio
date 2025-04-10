/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const DownloadResumeButton = ({ pdfPath = "/Kabir-CV.pdf" }) => { 
  return (
    <motion.a
      href={pdfPath}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Download Resume"
    >
      <FaDownload className="mr-2" />
      Download Resume
    </motion.a>
  );
};

export default DownloadResumeButton;