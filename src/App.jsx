import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col bg-white text-black selection:bg-[#891A20] selection:text-white">
        <CustomCursor />
        
        <AnimatePresence mode="wait">
           {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
           <>
             <Navbar />
             <main className="flex-grow flex flex-col relative w-full h-full">
               <AnimatePresence mode="wait">
                 <Outlet key={pathname} />
               </AnimatePresence>
             </main>
           </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;
