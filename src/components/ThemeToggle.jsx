import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="relative w-8 h-8 flex items-center justify-center rounded-lg border border-[#E2E8F0] dark:border-[#21262D] bg-white dark:bg-[#161B22] hover:border-indigo-400 dark:hover:border-indigo-500 transition-all"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 40 : 0, opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -40, opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
