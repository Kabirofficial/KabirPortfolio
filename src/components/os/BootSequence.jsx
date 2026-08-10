import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  "KABIR.OS v2.0",
  "INITIALIZING RESEARCH ENVIRONMENT...",
  "VISION ENGINE .... ONLINE",
  "MODEL ENGINE ..... ONLINE",
  "RESEARCH CORE .... ONLINE",
  "SYSTEM READY"
];

const BootSequence = ({ onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setDisplayedLines(prev => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinishing(true);
          setTimeout(onComplete, 800); // Wait for fade out
        }, 1000);
      }
    }, 400); // Speed of boot sequence

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinishing && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-os-bg"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full max-w-2xl px-6 flex flex-col gap-2">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`terminal-text ${index === bootLines.length - 1 ? 'text-os-green mt-4' : 'text-os-text-primary'}`}
              >
                {index === 0 ? <span className="text-os-cyan font-bold">{line}</span> : `> ${line}`}
              </motion.div>
            ))}
            
            {/* Blinking cursor */}
            {displayedLines.length < bootLines.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-4 bg-os-cyan mt-1"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
