import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <SmoothScroll>
      <div className={`relative min-h-screen flex flex-col transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#0D1117] text-[#E2E8F0]'
          : 'bg-white text-[#0F172A]'
      }`}>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <img src="/bg_visual.png" alt="" className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.15]" />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <CommandPalette />
        <ScrollProgress />

        <AnimatePresence mode="wait">
           {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
           <>
             <Navbar />
             <main className="grow flex flex-col relative w-full h-full">
               <AnimatePresence mode="wait">
                 <Outlet key={pathname} />
               </AnimatePresence>
             </main>
             <Footer />
              <ScrollToTopButton />
            </>
         )}
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
