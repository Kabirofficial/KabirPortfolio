import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 12) + 6;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 400); 
                    return 100;
                }
                return next;
            });
        }, 80);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-50 bg-[#0e0e11] text-[#f4f4f5] flex flex-col justify-between p-8 md:p-16 select-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Top Info */}
            <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <div>Init // Portfolio Redesign</div>
                <div className="tabular-nums">Progress // {progress}%</div>
            </div>

            {/* Middle Logo */}
            <div className="overflow-hidden">
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100"
                >
                    Kabir Thayani
                </motion.div>
                <div className="text-xs font-mono tracking-widest text-zinc-500 mt-2 uppercase">
                    AI/ML & Distributed Systems
                </div>
            </div>

            {/* Bottom Progress Line */}
            <div className="w-full h-px bg-zinc-800 relative overflow-hidden">
                <motion.div 
                    className="h-full bg-zinc-400 absolute left-0 top-0"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
