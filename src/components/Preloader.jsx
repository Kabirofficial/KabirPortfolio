import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 15) + 5;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 500); 
                    return 100;
                }
                return next;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-white flex flex-col justify-between p-6 md:p-12 font-black uppercase"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="flex justify-between items-start">
                <div className="text-xs md:text-sm tracking-[0.3em] opacity-60">System Init</div>
                <div className="text-xs md:text-sm tracking-[0.3em] opacity-60 animate-pulse">Loading {progress}%</div>
            </div>
            
            <div className="overflow-hidden">
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-[12vw] leading-none tracking-tighter"
                >
                    KABIR <br className="md:hidden"/> THAYANI
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
