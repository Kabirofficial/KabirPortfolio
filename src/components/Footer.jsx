import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = {
    github: 'https://github.com/Kabirofficial',
    linkedin: 'https://www.linkedin.com/in/thayanikabir/',
  };
  const reduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.32 } },
  };

  return (
    <AnimatePresence>
      <motion.footer
        initial={reduce ? false : 'hidden'}
        animate={reduce ? false : 'show'}
        exit={{ opacity: 0 }}
        variants={container}
        className="bg-[#EFECE3] text-[#133B63] p-6 mt-auto border-t border-[#8FABD4]"
        aria-label="Site footer"
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <motion.div variants={item} className="text-sm">
            <p className="opacity-90">© {currentYear} Kabir Thayani. All rights reserved.</p>
          </motion.div>

          <motion.div variants={item} className="flex gap-6 mt-2 sm:mt-0">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              whileHover={reduce ? {} : { scale: 1.07 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8FABD4]"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="false">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </motion.a>

            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              whileHover={reduce ? {} : { scale: 1.07 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8FABD4]"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="false">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
