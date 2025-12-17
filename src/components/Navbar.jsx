import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
};

const menuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.28, when: "beforeChildren" },
  },
};

const btnTap = { scale: 0.97 };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#133B63] font-bold relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
      : "text-slate-600 hover:text-[#133B63] transition-colors font-medium";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
    { to: "/skills", label: "Skills" },
    { to: "/certifications", label: "Certifications" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FDFCF8]/80 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-[#133B63] focus:outline-none"
            aria-label="Kabir Thayani — Home"
          >
            Kabir<span className="text-blue-600">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.to}
                custom={idx}
                initial={prefersReduced ? "visible" : "hidden"}
                animate="visible"
                variants={navItemVariants}
              >
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={btnTap}
              href="/KabirThayani.pdf"
              download="Kabir-Thayani-Resume.pdf"
              className="ml-4 inline-flex items-center gap-2 bg-[#133B63] text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-blue-800 transition-all hover:shadow-lg"
            >
              Resume
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </motion.a>
          </nav>

          <div className="lg:hidden">
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="p-2 text-[#133B63] rounded-md hover:bg-slate-100"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {isOpen && (
            <motion.nav
              key="mobile"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-slate-100">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.to}
                    custom={idx}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariants}
                    onClick={closeMenu}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "block text-lg font-bold text-[#133B63] pl-2 border-l-4 border-blue-600"
                          : "block text-lg font-medium text-slate-600 hover:text-blue-600 pl-2 border-l-4 border-transparent"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.a
                  whileTap={btnTap}
                  href="/KabirThayani.pdf"
                  download
                  className="mt-4 w-full text-center bg-[#133B63] text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                  onClick={closeMenu}
                >
                  Download Resume
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
