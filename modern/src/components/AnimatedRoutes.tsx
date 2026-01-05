import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from '../pages/Home';
import Bio from '../pages/Bio';
import Portfolio from '../pages/Portfolio';
import Music from '../pages/Music';
import Memo from '../pages/Memo';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/bio" element={<PageWrapper><Bio /></PageWrapper>} />
                <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
                <Route path="/music" element={<PageWrapper><Music /></PageWrapper>} />
                <Route path="/memo" element={<PageWrapper><Memo /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
