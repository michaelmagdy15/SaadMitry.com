import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 2500); // Minimum presentation time
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-memorial-dark"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="mb-4"
                        >
                            <h1 className="font-display text-4xl md:text-6xl text-memorial-gold tracking-wider">
                                SAAD MITRY
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                            className="h-0.5 bg-memorial-sand/50 mx-auto mb-4"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="font-serif text-memorial-sand/70 text-sm tracking-[0.2em] uppercase"
                        >
                            In Memoriam
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroLoader;
