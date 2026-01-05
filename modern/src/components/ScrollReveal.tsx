import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "scale-up";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = "fit-content",
    delay = 0,
    className = "",
    animation = "fade-up"
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const getVariants = () => {
        switch (animation) {
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
            case "slide-in-right":
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "slide-in-left":
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "scale-up":
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                };
            case "fade-up":
            default:
                return {
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
