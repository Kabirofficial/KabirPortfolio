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
          ? 'bg-[#0e0e11] text-zinc-100' 
          : 'bg-[#fafaf9] text-zinc-900'
      }`}>
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
    </SmoothScroll>
  );
}

export default App;
