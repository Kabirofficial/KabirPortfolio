import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
};

const menuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.28, when: 'beforeChildren' } },
};

const btnTap = { scale: 0.97 };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#133B63] font-semibold' : 'text-[#0b1220] hover:text-[#133B63] transition-colors';

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/education', label: 'Education' },
    { to: '/skills', label: 'Skills' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleScrollToTop = () => {
    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-[#EFECE3]/75 border-b border-[#8FABD4] shadow-[0_1px_18px_rgba(20,30,60,0.04)]">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-[#133B63] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8FABD4] rounded"
              aria-label="Kabir Thayani — Home"
            >
              <span className="bg-linear-to-r from-[#3B6EA6] to-[#7FA6D6] bg-clip-text text-transparent">Kabir</span>
              <span className="text-[#133B63] opacity-80 text-lg font-medium">Portfolio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-base">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.to}
                  custom={idx}
                  initial={prefersReduced ? 'visible' : 'hidden'}
                  animate={prefersReduced ? 'visible' : 'visible'}
                  variants={navItemVariants}
                >
                  <NavLink to={item.to} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.a
                whileTap={btnTap}
                href="/KabirThayani.pdf"
                download="Kabir-Thayani-Resume.pdf"
                className="ml-4 inline-flex items-center gap-2 bg-[#133B63] text-[#EFECE3] font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-[#0f2f52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FABD4] transition-all"
              >
                Resume
              </motion.a>
            </nav>

            <div className="md:hidden">
              <button
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                className="p-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-[#8FABD4]"
              >
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.18 }}>
                  <svg className="w-7 h-7 text-[#0b1220]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false} mode="wait">
            {isOpen && (
              <motion.nav
                id="mobile-menu"
                key="mobile"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="md:hidden overflow-hidden mt-3 rounded-lg"
              >
                <div className="bg-[#EFECE3]/95 p-4 flex flex-col gap-3">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={item.to}
                      custom={idx}
                      initial={prefersReduced ? 'visible' : 'hidden'}
                      animate={prefersReduced ? 'visible' : 'visible'}
                      variants={navItemVariants}
                      onClick={closeMenu}
                    >
                      <NavLink to={item.to} className={navLinkClass}>
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  <motion.a
                    whileTap={btnTap}
                    href="/KabirThayani.pdf"
                    download
                    className="mt-2 w-full text-center bg-[#133B63] text-[#EFECE3] font-semibold py-3 px-4 rounded-lg shadow-sm hover:bg-[#0f2f52] transition-all"
                    onClick={closeMenu}
                  >
                    Download Resume
                  </motion.a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="fixed right-5 bottom-6 z-40 rounded-full p-3 shadow-lg bg-linear-to-tr from-[#3B6EA6] to-[#7FA6D6] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8FABD4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M3.293 10.707a1 1 0 010-1.414L9.293 3.293a1 1 0 011.414 0l6 6a1 1 0 11-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L4.707 10.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
