import React, { useState, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SmoothScroll from "./components/SmoothScroll";
import BootSequence from "./components/os/BootSequence";
import OSNavigation from "./components/os/OSNavigation";
import NeuralNetwork from "./components/canvas/NeuralNetwork";
import SystemMonitor from "./components/os/SystemMonitor";

function App() {
  const [booted, setBooted] = useState(() => {
    return sessionStorage.getItem('kabir_os_booted') === 'true';
  });
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const handleBootComplete = () => {
    setBooted(true);
    sessionStorage.setItem('kabir_os_booted', 'true');
  };

  const transitionProps = prefersReducedMotion 
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.1 } }
    : { initial: { opacity: 0, scale: 0.98, filter: "blur(4px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { opacity: 0, scale: 1.02, filter: "blur(4px)" }, transition: { duration: 0.3, ease: "easeInOut" } };

  return (
    <div className="bg-os-bg text-os-text-primary min-h-screen font-sans selection:bg-os-cyan/20 selection:text-os-cyan relative overflow-hidden">
      {!booted ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <SmoothScroll>
          {/* Global OS CRT Effects */}
          <div className="crt-vignette" />
          <div className="crt-overlay" />

          {/* Fixed Background 3D Canvas */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <NeuralNetwork />
          </div>

          {/* OS UI Layer */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <OSNavigation />
            <SystemMonitor />
            
            <main className="relative w-full grow flex flex-col pt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  {...transitionProps}
                  className="w-full grow flex flex-col"
                >
                  <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center text-os-cyan terminal-text animate-pulse">LOADING_MODULE...</div>}>
                    <Outlet />
                  </Suspense>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </SmoothScroll>
      )}
    </div>
  );
}

export default App;
