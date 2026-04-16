import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useIsMobile from "../utils/useIsMobile";

const CustomCursor = () => {
    const isMobile = useIsMobile();
    const [cursorType, setCursorType] = useState("default");
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (isMobile) return;

        const mouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.hover-target')) {
                setCursorType("hover");
            } else {
                setCursorType("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY, isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-[#891A20] rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: x,
                y: y,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: cursorType === "hover" ? 4 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
};

export default CustomCursor;
