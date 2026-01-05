import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const quotes = [
    {
        en: "Art is not just what you see, but what you make others see.",
        ar: "الفن ليس ما تراه فحسب، بل ما تجعل الآخرين يرونه."
    },
    {
        en: "From the sanctity of churches to the halls of presidents, my hands have shaped the silent stories of our time.",
        ar: "من قدسية الكنائس إلى قاعات الرؤساء، شكّلت يداي القصص الصامتة لعصرنا."
    },
    {
        en: "Every stroke of the brush is a prayer, every chisel mark a testament to faith.",
        ar: "كل ضربة فرشاة هي صلاة، وكل علامة إزميل شهادة على الإيمان."
    },
    {
        en: "Bronze remembers what words forget.",
        ar: "البرونز يتذكر ما تنساه الكلمات."
    },
    {
        en: "In art, we find the fingerprints of the divine.",
        ar: "في الفن، نجد بصمات الإله."
    }
];

const QuoteCarousel: React.FC = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, 8000); // Change quote every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-memorial-gold/20 font-serif">
                "
            </div>

            <div className="min-h-[180px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <p className="text-2xl md:text-3xl font-display leading-relaxed text-memorial-sand/90">
                            {t(quotes[currentIndex].en, quotes[currentIndex].ar)}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Attribution */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
            >
                <span className="block w-16 h-1 bg-memorial-gold mx-auto mb-4"></span>
                <p className="font-serif text-memorial-gold uppercase tracking-widest text-sm">
                    Saad Mitry
                </p>
            </motion.div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {quotes.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                ? 'bg-memorial-gold w-8'
                                : 'bg-memorial-sand/30 hover:bg-memorial-sand/50'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default QuoteCarousel;
