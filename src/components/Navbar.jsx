import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Clock from "./Clock";
import ThemeToggle from "./ThemeToggle";
import { NAV_ITEMS } from "../utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 h-16 md:h-[70px] transition-all duration-300 ${
      scrolled
        ? "bg-white/90 dark:bg-[#0D1117]/90 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#21262D] shadow-sm"
        : "bg-white dark:bg-[#0D1117] border-b border-[#E2E8F0] dark:border-[#21262D]"
    }`}>
      <div className="h-full px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 z-50 group">
          <img src="/icon.png" alt="Kabir Logo" className="w-7 h-7 rounded-lg object-cover shadow-sm" />
          <span className="text-sm font-bold text-[#0F172A] dark:text-[#E2E8F0] tracking-tight">
            Kabir <span className="text-indigo-500">Thayani</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 z-50">
          <div className="hidden sm:block text-xs text-slate-400 dark:text-slate-500 font-mono">
            <Clock />
          </div>
          <div className="hidden sm:block lg:block">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-[#E2E8F0] dark:border-[#21262D] text-slate-600 dark:text-slate-300 hover:border-indigo-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white dark:bg-[#0D1117] z-40 flex flex-col pt-20 pb-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-1 mt-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-4 py-3.5 rounded-xl text-lg font-semibold transition-all ${
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-[#E2E8F0] dark:border-[#21262D]">
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 font-mono">Get in touch</p>
              <a href="mailto:thayanikabir.official@gmail.com" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline block mb-4">
                thayanikabir.official@gmail.com
              </a>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/thayanikabir/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
                <a href="https://github.com/Kabirofficial" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">GitHub</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
