import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { NAV_ITEMS } from "../utils/constants";
import Button from "./ui/Button";
import { Icons } from "./ui/Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  // Elite mobile menu variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 shadow-sm"
        : "h-20 bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50 flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-900 dark:text-white group"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:rotate-3 transition-transform">
            K
          </div>
          <span className="font-display">Kabir</span>
          <span className="text-blue-500 animate-pulse">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-1.5 rounded-full border border-slate-200/50 dark:border-white/5 shadow-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-4 py-1.5 text-sm font-medium transition-all rounded-full ${isActive
                  ? "text-slate-900 dark:text-white bg-white dark:bg-slate-800 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button
            href="/KabirThayani.pdf"
            download="Kabir-Thayani-Resume.pdf"
            variant="primary"
            size="sm"
            className="rounded-full"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Search"
          >
            <Icons.Search className="w-5 h-5" />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-current rounded-full block transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-current rounded-full block transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-current rounded-full block transition-all"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      < AnimatePresence >
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl p-4 lg:hidden rounded-b-2xl mx-2"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.to} variants={itemVariants}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center p-3 rounded-xl text-lg font-medium transition-colors ${pathname === item.to
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-4 mt-2 border-t border-slate-200/50 dark:border-white/10">
                <Button
                  href="/KabirThayani.pdf"
                  download="Kabir-Thayani-Resume.pdf"
                  variant="primary"
                  size="md"
                  className="w-full rounded-xl"
                >
                  Download Resume
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence >
    </header >
  );
};

export default Navbar;
