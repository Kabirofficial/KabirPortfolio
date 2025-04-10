/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import DownloadResumeButton from '../components/DownloadResumeBtn';

const Navbar = () => {
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

  return (
    <motion.nav
      className="bg-black text-red-500 py-4 px-6 md:px-10 shadow-md sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/home" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Kabir's</span> Portfolio
          </Link>
        </motion.div>

        <div className="flex items-center space-x-6 md:space-x-8">
          <ul className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8 font-semibold">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;