import { motion } from "framer-motion";

const hoverVariant = { y: -5, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" };

const GlassCard = ({ children, className = "", hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? hoverVariant : undefined}
            className={`
        relative overflow-hidden
        bg-white/70 dark:bg-slate-900/60 
        backdrop-blur-xl 
        border border-white/20 dark:border-white/10
        shadow-lg dark:shadow-none
        rounded-2xl
        ${className}
      `}
            {...props}
        >
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 pointer-events-none" />

            
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
