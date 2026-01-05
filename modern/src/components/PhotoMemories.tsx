import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../utils/assetUtils';
import { useLanguage } from '../contexts/LanguageContext';

interface Photo {
    src: string;
    caption: {
        en: string;
        ar: string;
    };
}

const photos: Photo[] = [
    {
        src: getAssetUrl('/assets/images/port1_32.jpg'),
        caption: { en: 'Presidential Portrait', ar: 'بورتريه رئاسي' }
    },
    {
        src: getAssetUrl('/assets/images/port2_32.jpg'),
        caption: { en: 'The Thinker', ar: 'المفكر' }
    },
    {
        src: getAssetUrl('/assets/images/port3_32.jpg'),
        caption: { en: 'Divine Figure', ar: 'شخصية إلهية' }
    },
    {
        src: getAssetUrl('/assets/images/port4_32.jpg'),
        caption: { en: 'Legacy Bust', ar: 'تمثال نصفي للإرث' }
    },
    {
        src: getAssetUrl('/assets/images/port5_32.jpg'),
        caption: { en: 'Historical Icon', ar: 'أيقونة تاريخية' }
    }
];

const PhotoMemories: React.FC = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-black/30">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-display text-memorial-gold text-center mb-12"
                >
                    {t('Memories in Bronze & Stone', 'ذكريات في البرونز والحجر')}
                </motion.h2>

                {/* Ken Burns Slideshow Container */}
                <div
                    className="relative aspect-[16/9] max-h-[70vh] mx-auto overflow-hidden rounded-lg border border-memorial-gold/20"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0"
                        >
                            {/* Ken Burns Effect - Pan and Zoom */}
                            <motion.img
                                src={photos[currentIndex].src}
                                alt={photos[currentIndex].caption.en}
                                initial={{
                                    scale: 1.2,
                                    x: currentIndex % 2 === 0 ? 50 : -50,
                                    y: currentIndex % 3 === 0 ? 30 : -30
                                }}
                                animate={{
                                    scale: 1,
                                    x: currentIndex % 2 === 0 ? -50 : 50,
                                    y: currentIndex % 3 === 0 ? -30 : 30
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "linear"
                                }}
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                            {/* Caption */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-8 left-8 right-8"
                            >
                                <h3 className="text-2xl md:text-3xl font-display text-white mb-2">
                                    {t(photos[currentIndex].caption.en, photos[currentIndex].caption.ar)}
                                </h3>
                                <div className="flex items-center gap-2 text-memorial-gold/60 text-sm">
                                    <span className="w-8 h-px bg-memorial-gold/40"></span>
                                    <span className="font-serif italic">Saad Mitry Collection</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white/50 hover:text-white hover:bg-black/70 transition-all z-10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white/50 hover:text-white hover:bg-black/70 transition-all z-10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                        <motion.div
                            key={currentIndex}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 6, ease: "linear" }}
                            className="h-full bg-memorial-gold/60"
                        />
                    </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center gap-3 mt-6 flex-wrap">
                    {photos.map((photo, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-16 h-12 rounded overflow-hidden transition-all duration-300 ${index === currentIndex
                                    ? 'ring-2 ring-memorial-gold opacity-100 scale-110'
                                    : 'opacity-40 hover:opacity-70'
                                }`}
                        >
                            <img
                                src={photo.src}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoMemories;
