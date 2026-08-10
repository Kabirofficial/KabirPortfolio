import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 origin-left z-60"
            style={{ scaleX, background: "linear-gradient(90deg, #6366F1, #06B6D4)" }}
        />
    );
};

export default ScrollProgress;
