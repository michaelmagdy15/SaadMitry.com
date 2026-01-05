import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Memo: React.FC = () => {
    const { t } = useLanguage();

    // Placeholder data to simulate gallery items
    const placeholders = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        src: '/assets/images/port1_32.jpg' // Using a generic image for now
    }));

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif font-bold text-yellow-500 mb-8 tracking-wider"
            >
                {t('MEMO', 'ذكريات')}
            </motion.h2>

            <div className="max-w-4xl w-full">
                <div className="bg-zinc-900/80 backdrop-blur rounded-xl p-8 border border-white/10 shadow-xl mb-12 text-center">
                    <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                        {t(
                            'This section is dedicated to cherished memories. We are currently restoring the original photo collection.',
                            'هذا القسم مخصص للذكريات الغالية. نحن نعمل حالياً على استعادة مجموعة الصور الأصلية.'
                        )}
                    </p>
                </div>

                {/* Simulated Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {placeholders.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square bg-black/50 rounded-lg overflow-hidden border border-white/5 relative group cursor-pointer"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-zinc-800">
                                <span className="text-sm">{t('Photo Placeholder', 'صورة مؤقتة')}</span>
                            </div>
                            {/* In a real scenario, the image would be here: */}
                            {/* <img src={item.src} alt="Memory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-50 group-hover:opacity-100" /> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Memo;
