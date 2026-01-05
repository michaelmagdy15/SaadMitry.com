import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Show text after cross animation
        const textTimer = setTimeout(() => setShowText(true), 1200);

        // Simulate loading time or wait for window load
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 3500); // Extended for full animation
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(textTimer);
            };
        }

        return () => clearTimeout(textTimer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-memorial-dark"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Ambient glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.5, duration: 2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-[300px] h-[300px] bg-memorial-gold/20 blur-[100px] rounded-full" />
                    </motion.div>

                    <div className="text-center relative z-10">
                        {/* Animated Cross Symbol */}
                        <motion.div
                            className="mb-8 flex justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg
                                width="60"
                                height="80"
                                viewBox="0 0 60 80"
                                fill="none"
                                className="text-memorial-gold"
                            >
                                {/* Vertical line - draws first */}
                                <motion.line
                                    x1="30"
                                    y1="0"
                                    x2="30"
                                    y2="80"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                                {/* Horizontal line - draws second */}
                                <motion.line
                                    x1="10"
                                    y1="20"
                                    x2="50"
                                    y2="20"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                />
                            </svg>
                        </motion.div>

                        {/* Name reveal */}
                        <AnimatePresence>
                            {showText && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        className="mb-4"
                                    >
                                        <h1 className="font-display text-4xl md:text-6xl text-memorial-gold tracking-wider">
                                            SAAD MITRY
                                        </h1>
                                    </motion.div>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100px" }}
                                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                        className="h-0.5 bg-memorial-sand/50 mx-auto mb-4"
                                    />

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="font-serif text-memorial-sand/70 text-sm tracking-[0.2em] uppercase"
                                    >
                                        In Memoriam
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1, duration: 1 }}
                                        className="font-serif text-memorial-gold/50 text-xs mt-4 tracking-[0.15em]"
                                    >
                                        1945 — 2024
                                    </motion.p>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroLoader;
