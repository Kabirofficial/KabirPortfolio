import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Clock from "./Clock";
import ThemeToggle from "./ThemeToggle";
import { NAV_ITEMS } from "../utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 md:h-20 bg-[#fafaf9] dark:bg-[#0e0e11] border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="h-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-4 group z-50"
        >
          <div className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Kabir <span className="text-zinc-400 dark:text-zinc-500 font-medium">Thayani</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  isActive 
                    ? "text-zinc-900 dark:text-zinc-100" 
                    : "text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />
          <ThemeToggle />
        </nav>

        {/* Right Info & Toggle */}
        <div className="flex items-center gap-6 md:gap-8 z-50">
          <div className="hidden sm:block lg:hidden">
            <ThemeToggle />
          </div>
          <div className="hidden sm:block text-xs font-mono text-zinc-400 dark:text-zinc-500">
            <Clock />
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-[#fafaf9] dark:bg-[#0e0e11] text-zinc-900 dark:text-zinc-100 z-40 flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 transition-colors duration-300"
          >
            <div className="flex flex-col gap-4 mt-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block text-4xl md:text-5xl font-bold tracking-tight py-2 border-b border-zinc-100 dark:border-zinc-900/50 ${
                        isActive 
                          ? "text-zinc-900 dark:text-zinc-100" 
                          : "text-zinc-300 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 font-bold">Connect</span>
                  <a href="mailto:thayanikabir.official@gmail.com" className="text-base font-semibold hover:underline">thayanikabir.official@gmail.com</a>
                </div>
                <div className="flex gap-4 items-center">
                  <a href="https://www.linkedin.com/in/thayanikabir/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">LinkedIn</a>
                  <a href="https://github.com/Kabirofficial" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
