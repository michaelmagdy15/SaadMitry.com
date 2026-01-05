import React, { useState, useMemo } from 'react';
import { getAssetUrl } from '../utils/assetUtils';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<'all' | 'sculpture' | 'painting'>('all');
    const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

    const items = [
        { id: 'port1', category: 'sculpture', label: 'Presidential Portrait', img: getAssetUrl('/assets/images/port1_32.jpg') },
        { id: 'port2', category: 'sculpture', label: 'The Thinker', img: getAssetUrl('/assets/images/port2_32.jpg') },
        { id: 'port3', category: 'sculpture', label: 'Divine Figure', img: getAssetUrl('/assets/images/port3_32.jpg') },
        { id: 'port4', category: 'sculpture', label: 'Legacy Bust', img: getAssetUrl('/assets/images/port4_32.jpg') },
        { id: 'port5', category: 'sculpture', label: 'Historical Icon', img: getAssetUrl('/assets/images/port5_32.jpg') },
        { id: 'port6', category: 'sculpture', label: 'Eternal Gaze', img: getAssetUrl('/assets/images/port6_32.jpg') },
        { id: 'port7', category: 'sculpture', label: 'Noble Spirit', img: getAssetUrl('/assets/images/port7_32.jpg') },
        { id: 'port8', category: 'sculpture', label: 'Silent Strength', img: getAssetUrl('/assets/images/port8_32.jpg') },
        { id: 'porta1', category: 'painting', label: 'Sacred Sketch', img: getAssetUrl('/assets/images/porta1_32.jpg') },
        { id: 'porta2', category: 'painting', label: 'Drafting Forms', img: getAssetUrl('/assets/images/porta2_32.jpg') },
        { id: 'porta3', category: 'painting', label: 'Study of Light', img: getAssetUrl('/assets/images/porta3_32.jpg') },
    ];

    const filteredItems = useMemo(() => {
        return filter === 'all' ? items : items.filter(item => item.category === filter);
    }, [filter]);

    const categories = [
        { id: 'all', label: { en: 'All Works', ar: 'كل الأعمال' } },
        { id: 'sculpture', label: { en: 'Sculptures', ar: 'التماثيل' } },
        { id: 'painting', label: { en: 'Paintings & Sketches', ar: 'لوحات و رسومات' } },
    ];

    const selectedItem = items.find(i => i.id === selectedImageId);

    // Previous/Next Logic
    const handleNavigation = (direction: 'next' | 'prev', e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImageId) return;
        const currentIndex = filteredItems.findIndex(i => i.id === selectedImageId);
        if (currentIndex === -1) return;

        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % filteredItems.length;
        } else {
            newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        }
        setSelectedImageId(filteredItems[newIndex].id);
    };

    return (
        <div className="min-h-screen bg-memorial-dark text-memorial-sand py-20 px-4 md:px-12">

            {/* Header */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-display text-memorial-gold mb-4"
                >
                    {t('Our Collection', 'معرض الأعمال')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-memorial-sand/60 font-serif italic max-w-2xl mx-auto"
                >
                    {t('Discover the masterpieces that defined an era.', 'اكتشف الروائع التي شكلت حقبة من الزمن.')}
                </motion.p>
            </div>

            {/* Filter Tabs */}
            <ScrollReveal animation="fade-in" width="100%" delay={0.3}>
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id as any)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 font-serif ${filter === cat.id
                                ? 'bg-memorial-gold text-memorial-dark border-memorial-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                                : 'bg-transparent text-memorial-sand/60 border-white/10 hover:border-memorial-gold/50 hover:text-memorial-gold'
                                }`}
                        >
                            {t(cat.label.en, cat.label.ar)}
                        </button>
                    ))}
                </div>
            </ScrollReveal>

            {/* Masonry Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto"
            >
                <AnimatePresence>
                    {filteredItems.map((item, index) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="break-inside-avoid group cursor-zoom-in relative rounded-sm overflow-hidden border border-white/5 bg-black/20 hover:border-memorial-gold/30 transition-colors"
                            onClick={() => setSelectedImageId(item.id)}
                        >
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-memorial-gold text-xs tracking-widest uppercase mb-1">
                                    {item.category === 'sculpture' ? t('Sculpture', 'نحت') : t('Painting', 'رسم')}
                                </span>
                                <h3 className="text-xl font-display text-white">{item.label}</h3>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImageId(null)}
                    >
                        {/* Close Button */}
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[60]">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-colors z-[60] hidden md:block"
                            onClick={(e) => handleNavigation('prev', e)}
                        >
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-colors z-[60] hidden md:block"
                            onClick={(e) => handleNavigation('next', e)}
                        >
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
                        </button>

                        {/* Image Container */}
                        <motion.div
                            layoutId={selectedItem.id}
                            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedItem.img}
                                alt={selectedItem.label}
                                className="max-h-[80vh] max-w-full object-contain shadow-2xl border border-memorial-gold/10"
                            />
                            <div className="absolute -bottom-12 left-0 right-0 text-center">
                                <h3 className="text-2xl font-display text-memorial-gold">{selectedItem.label}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Portfolio;
