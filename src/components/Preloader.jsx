import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const { theme } = useTheme();
    const isDark = theme === "dark";

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 12) + 6;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                return next;
            });
        }, 80);
        return () => clearInterval(interval);
    }, [onComplete]);

    const bg       = isDark ? "#0D1117" : "#FFFFFF";
    const textMain = isDark ? "#E2E8F0" : "#0F172A";
    const textSub  = isDark ? "#64748B" : "#94A3B8";
    const accent   = "#6366F1";

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col justify-between p-10 md:p-20 select-none"
            style={{ backgroundColor: bg }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
            {/* Top label */}
            <div className="flex justify-between items-center">
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: textSub }}>
                    kabirthayani.dev
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: accent, letterSpacing: "0.1em" }}>
                    {progress}%
                </span>
            </div>

            {/* Center name */}
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: "'Outfit', serif", fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", color: textMain, lineHeight: 1 }}
                >
                    Kabir Thayani
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "0.15em", color: accent, marginTop: "1rem", textTransform: "uppercase" }}
                >
                    AI / ML Engineer
                </motion.p>
            </div>

            {/* Bottom progress */}
            <div className="flex flex-col gap-3">
                <div className="w-full h-0.5 rounded-full overflow-hidden" style={{ background: isDark ? "#21262D" : "#E2E8F0" }}>
                    <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #6366F1, #06B6D4)", width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: textSub, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Loading portfolio...
                </span>
            </div>
        </motion.div>
    );
};

export default Preloader;
