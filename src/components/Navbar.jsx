import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Clock from "./Clock";
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
    <header className="fixed top-0 inset-x-0 z-[100] bg-white border-b border-black h-16 md:h-20 transition-colors duration-300">
      <div className="h-full px-6 md:px-12 flex items-center justify-between pointer-events-none">
        
        <Link
          to="/"
          className="pointer-events-auto flex items-center gap-4 group relative z-[101]"
        >
          <div className={`text-xl md:text-3xl font-black tracking-tighter uppercase leading-none transition-colors ${isOpen ? 'text-white' : 'text-black'}`}>
            Kabir <span className={isOpen ? "text-[#891A20]" : "group-hover:text-[#891A20] transition-colors"}>Thayani</span>
          </div>
        </Link>

        
        <nav className="hidden lg:flex items-center gap-10 pointer-events-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs font-black uppercase tracking-[0.2em] transition-colors hover:text-[#891A20] ${isActive ? "text-[#891A20]" : "text-black"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        
        <div className="flex items-center gap-8 md:gap-12 pointer-events-auto relative z-[101]">
          <div className="hidden sm:block">
            <Clock />
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:text-[#891A20] transition-colors leading-none pt-1 ${isOpen ? 'text-white' : 'text-black'}`}
          >
            {isOpen ? "CLOSE_" : "MENU_"}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] text-white z-[90] flex flex-col justify-start pt-24 pb-12 px-6 md:px-12 overflow-y-auto min-h-screen"
          >
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[#891A20] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

            
            <div className="flex flex-col gap-4 md:gap-8 mt-4 md:mt-12 relative z-10">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter transition-all hover:text-[#891A20] ${isActive ? "text-[#891A20]" : "text-white"}`
                    }
                  >
                    {item.label}.
                  </NavLink>
                </motion.div>
              ))}
            </div>

            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="flex flex-col gap-8 border-t border-white/20 pt-8 mt-auto md:mt-12 relative z-10"
            >
               <div className="flex justify-between items-end">
                   <div className="flex flex-col gap-3">
                      <span className="text-[10px] tracking-[0.3em] opacity-40 uppercase">Connect</span>
                      <a href="mailto:thayanikabir.official@gmail.com" className="text-xl md:text-3xl font-black hover:text-[#891A20] transition-colors text-white break-all">EMAIL_</a>
                      <div className="flex gap-6 mt-2">
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest border-b border-white/30 hover:border-[#891A20] transition-all text-white">LINKEDIN</a>
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest border-b border-white/30 hover:border-[#891A20] transition-all text-white">GITHUB</a>
                      </div>
                   </div>
                   <div className="sm:hidden text-white/50 text-xs tracking-widest whitespace-nowrap">
                      <Clock />
                   </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
