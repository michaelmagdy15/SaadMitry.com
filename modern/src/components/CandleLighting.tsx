import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const CandleLighting: React.FC = () => {
    const { t } = useLanguage();
    const [isLit, setIsLit] = useState(false);

    const handleLightCandle = () => {
        if (!isLit) {
            setIsLit(true);
        }
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Ambient glow when candle is lit */}
            <AnimatePresence>
                {isLit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 60%, rgba(255, 180, 50, 0.15) 0%, transparent 60%)'
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="max-w-2xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-display text-memorial-gold mb-4"
                >
                    {t('Light a Candle', 'أضئ شمعة')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-memorial-sand/60 font-serif italic mb-12"
                >
                    {t('In loving memory of Saad Mitry', 'في ذكرى سعد متري الحبيبة')}
                </motion.p>

                {/* Candle Container */}
                <div
                    className="relative mx-auto cursor-pointer group"
                    style={{ width: '120px', height: '280px' }}
                    onClick={handleLightCandle}
                >
                    {/* Candle Body */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-48 rounded-t-lg"
                        style={{
                            background: 'linear-gradient(180deg, #f5e6c8 0%, #e8d4a8 50%, #d4c090 100%)',
                            boxShadow: 'inset -4px 0 8px rgba(0,0,0,0.1), inset 4px 0 8px rgba(255,255,255,0.3)'
                        }}
                    >
                        {/* Wax drippings */}
                        <div className="absolute -left-1 top-4 w-2 h-8 bg-[#f5e6c8] rounded-full" />
                        <div className="absolute -right-1 top-8 w-2 h-6 bg-[#f5e6c8] rounded-full" />
                        <div className="absolute -left-1 top-16 w-2 h-4 bg-[#e8d4a8] rounded-full" />
                    </div>

                    {/* Wick */}
                    <div className="absolute bottom-48 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-800 rounded-t-full" />

                    {/* Flame */}
                    <AnimatePresence>
                        {isLit && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="absolute bottom-52 left-1/2 -translate-x-1/2"
                            >
                                {/* Outer flame glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1, 1.05, 1],
                                        opacity: [0.6, 0.8, 0.6, 0.7, 0.6]
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 w-12 h-16 -translate-x-1/2 blur-md"
                                    style={{
                                        background: 'radial-gradient(ellipse, rgba(255,180,50,0.8) 0%, transparent 70%)'
                                    }}
                                />

                                {/* Main flame */}
                                <motion.div
                                    animate={{
                                        scaleY: [1, 1.15, 1, 1.08, 1],
                                        scaleX: [1, 0.95, 1, 1.02, 1],
                                        rotate: [0, 2, -2, 1, 0]
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-6 h-12 rounded-full origin-bottom"
                                    style={{
                                        background: 'linear-gradient(0deg, #fff 0%, #ffcc00 30%, #ff8800 60%, #ff4400 100%)',
                                        filter: 'blur(1px)'
                                    }}
                                />

                                {/* Inner white core */}
                                <motion.div
                                    animate={{
                                        scaleY: [1, 1.2, 1],
                                        opacity: [0.9, 1, 0.9]
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 rounded-full bg-white"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Click hint */}
                    {!isLit && (
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-memorial-gold/60 font-serif"
                        >
                            {t('Click to light', 'اضغط للإضاءة')}
                        </motion.div>
                    )}
                </div>

                {/* Message after lighting */}
                <AnimatePresence>
                    {isLit && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16"
                        >
                            <p className="text-memorial-sand/80 font-serif text-lg">
                                {t(
                                    '"May your light continue to shine through your art."',
                                    '"ليستمر نورك مُشعًّا من خلال فنك."'
                                )}
                            </p>
                            <div className="mt-4 text-memorial-gold/60 text-sm">
                                ✝ {t('Rest in Peace', 'ارقد بسلام')}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CandleLighting;
