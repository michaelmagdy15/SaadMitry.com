import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface StatItem {
    value: number;
    suffix: string;
    labelEn: string;
    labelAr: string;
    icon: string;
}

const stats: StatItem[] = [
    {
        value: 60,
        suffix: '+',
        labelEn: 'Years of Artistry',
        labelAr: 'عاماً من الفن',
        icon: '🎨'
    },
    {
        value: 500,
        suffix: '+',
        labelEn: 'Works of Art',
        labelAr: 'عمل فني',
        icon: '🏛️'
    },
    {
        value: 10,
        suffix: '',
        labelEn: 'Spiritual Hymns',
        labelAr: 'ترنيمة روحية',
        icon: '🎵'
    },
    {
        value: 3,
        suffix: '',
        labelEn: 'Generations Inspired',
        labelAr: 'أجيال مُلهَمة',
        icon: '✨'
    }
];

// Calculate days since a specific date (customize this date)
const calculateDaysSince = (dateString: string): number => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

const AnimatedCounter: React.FC<{ target: number; suffix: string; inView: boolean }> = ({
    target,
    suffix,
    inView
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const MemorialStats: React.FC = () => {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Days since passing (update this date to the actual date)
    const daysSince = calculateDaysSince('2020-01-01');

    return (
        <section ref={ref} className="py-20 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-memorial-gold/5 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-memorial-gold mb-4">
                        {t('A Legacy in Numbers', 'إرث بالأرقام')}
                    </h2>
                    <p className="text-memorial-sand/60 font-serif italic max-w-xl mx-auto">
                        {t(
                            'Decades of dedication to art, faith, and family.',
                            'عقود من التفاني في الفن والإيمان والعائلة.'
                        )}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="text-4xl mb-4 inline-block"
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Number */}
                            <div className="text-4xl md:text-5xl font-display text-memorial-gold mb-2">
                                <AnimatedCounter
                                    target={stat.value}
                                    suffix={stat.suffix}
                                    inView={isInView}
                                />
                            </div>

                            {/* Label */}
                            <p className="text-memorial-sand/70 text-sm md:text-base font-serif">
                                {t(stat.labelEn, stat.labelAr)}
                            </p>

                            {/* Decorative underline */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                                className="w-12 h-px bg-memorial-gold/30 mx-auto mt-4"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Memorial Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-memorial-brown/20 rounded-full border border-memorial-gold/20">
                        <span className="text-2xl">🕯️</span>
                        <div>
                            <p className="text-memorial-gold font-display text-xl">
                                {daysSince.toLocaleString()} {t('days', 'يوماً')}
                            </p>
                            <p className="text-memorial-sand/50 text-sm font-serif">
                                {t('Remembered with love', 'نتذكره بحب')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MemorialStats;
