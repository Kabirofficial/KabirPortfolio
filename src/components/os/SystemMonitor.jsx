import React, { useState, useEffect } from 'react';

const SystemMonitor = () => {
  const [time, setTime] = useState(new Date());
  const [memory, setMemory] = useState(14.2);
  const [threads, setThreads] = useState(128);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      
      // Simulate slight fluctuations in system metrics
      if (Math.random() > 0.7) {
        setMemory(prev => {
          const newMem = prev + (Math.random() * 0.4 - 0.2);
          return Math.max(12.1, Math.min(62.5, newMem));
        });
        
        setThreads(prev => {
          const newThreads = prev + Math.floor(Math.random() * 5 - 2);
          return Math.max(90, Math.min(250, newThreads));
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none hidden md:flex flex-col items-end gap-1 font-mono text-[10px] text-os-text-secondary opacity-60">
      <div className="flex gap-4">
        <span>SYS.TIME:</span>
        <span className="text-os-cyan w-20 text-right">{time.toISOString().split('T')[1].split('.')[0]}</span>
      </div>
      <div className="flex gap-4">
        <span>MEM.ALLOC:</span>
        <span className="text-os-cyan w-20 text-right">{memory.toFixed(1)}GB / 64GB</span>
      </div>
      <div className="flex gap-4">
        <span>PROC.THREADS:</span>
        <span className="text-os-cyan w-20 text-right">{threads}</span>
      </div>
      <div className="flex gap-4 mt-1 border-t border-os-border/50 pt-1">
        <span>SECURE_ENV:</span>
        <span className="text-os-green w-20 text-right animate-pulse">ACTIVE</span>
      </div>
    </div>
  );
};

export default SystemMonitor;
