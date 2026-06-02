import { motion } from "framer-motion";

const hoverVariant = { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } };

const GlassCard = ({ children, className = "", hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? hoverVariant : undefined}
            className={`glass-card glow-border transition-all duration-300 ${className}`}
            {...props}
        >
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
