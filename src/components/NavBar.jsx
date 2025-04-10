/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DownloadResumeButton from '../components/DownloadResumeBtn';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeClassName = "text-white underline underline-offset-4";
  const inactiveClassName =
    "text-red-500 hover:text-red-300 transition-colors duration-300";

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    },
  };

  return (
    <motion.nav
      className="bg-black text-red-500 py-4 px-4 sm:px-6 md:px-10 shadow-md sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/home" onClick={closeMobileMenu} className="text-2xl font-bold tracking-tight">
            <span className="text-white">Kabir's</span> Portfolio
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <ul className="flex space-x-4 lg:space-x-6 font-semibold">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <DownloadResumeButton pdfPath="/Kabir-CV.pdf" />
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-red-500 hover:text-white focus:outline-none text-2xl p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 border-t border-gray-800"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex flex-col items-center space-y-4 px-4">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <NavLink
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block py-2 text-lg ${isActive ? activeClassName : inactiveClassName}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-4 w-full flex justify-center">
                <DownloadResumeButton pdfPath="/Kabir-CV.pdf" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;