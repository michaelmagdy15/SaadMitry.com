import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface FavoriteItem {
    category: string;
    categoryAr: string;
    icon: string;
    items: Array<{
        en: string;
        ar: string;
    }>;
    color: string;
}

const favorites: FavoriteItem[] = [
    {
        category: "Colors",
        categoryAr: "الألوان",
        icon: "🎨",
        items: [
            { en: "Gold - the color of divinity", ar: "الذهبي - لون الألوهية" },
            { en: "Bronze - the tone of permanence", ar: "البرونزي - نغمة الخلود" },
            { en: "Deep blue - the shade of serenity", ar: "الأزرق العميق - ظل السكينة" }
        ],
        color: "from-amber-500/30 to-yellow-600/30"
    },
    {
        category: "Places",
        categoryAr: "الأماكن",
        icon: "🏛️",
        items: [
            { en: "His beloved studio", ar: "مرسمه الحبيب" },
            { en: "Ancient churches of Egypt", ar: "كنائس مصر القديمة" },
            { en: "The family home", ar: "بيت العائلة" }
        ],
        color: "from-emerald-500/30 to-teal-600/30"
    },
    {
        category: "Music",
        categoryAr: "الموسيقى",
        icon: "🎵",
        items: [
            { en: "Coptic hymns", ar: "الترانيم القبطية" },
            { en: "Classical compositions", ar: "المقطوعات الكلاسيكية" },
            { en: "His own spiritual melodies", ar: "ألحانه الروحية الخاصة" }
        ],
        color: "from-violet-500/30 to-purple-600/30"
    },
    {
        category: "Sayings",
        categoryAr: "الأقوال",
        icon: "💬",
        items: [
            { en: "\"Art is prayer made visible\"", ar: "\"الفن صلاة مرئية\"" },
            { en: "\"Patience creates masterpieces\"", ar: "\"الصبر يخلق التحف\"" },
            { en: "\"Every face tells God's story\"", ar: "\"كل وجه يروي قصة الله\"" }
        ],
        color: "from-rose-500/30 to-pink-600/30"
    },
    {
        category: "Traditions",
        categoryAr: "التقاليد",
        icon: "✝️",
        items: [
            { en: "Sunday morning prayers", ar: "صلوات صباح الأحد" },
            { en: "Family gatherings on holidays", ar: "تجمعات العائلة في الأعياد" },
            { en: "Teaching art to grandchildren", ar: "تعليم الفن للأحفاد" }
        ],
        color: "from-sky-500/30 to-blue-600/30"
    },
    {
        category: "Simple Joys",
        categoryAr: "الأفراح البسيطة",
        icon: "☕",
        items: [
            { en: "Morning coffee in the studio", ar: "قهوة الصباح في المرسم" },
            { en: "Watching grandchildren play", ar: "مشاهدة الأحفاد يلعبون" },
            { en: "The smell of fresh paint", ar: "رائحة الطلاء الطازج" }
        ],
        color: "from-orange-500/30 to-amber-600/30"
    }
];

const FavoriteThings: React.FC = () => {
    const { t, language } = useLanguage();

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-memorial-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-memorial-brown/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-memorial-gold mb-4">
                        {t('Things He Loved', 'أشياء أحبها')}
                    </h2>
                    <p className="text-memorial-sand/60 font-serif italic max-w-xl mx-auto">
                        {t(
                            'The colors, sounds, and simple pleasures that filled his life with joy.',
                            'الألوان والأصوات والمتع البسيطة التي ملأت حياته بالفرح.'
                        )}
                    </p>
                </motion.div>

                {/* Favorites Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((fav, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className={`relative p-6 rounded-xl bg-gradient-to-br ${fav.color} border border-white/10 backdrop-blur-sm h-full`}>
                                {/* Icon Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <motion.span
                                        whileHover={{ rotate: 15, scale: 1.2 }}
                                        className="text-3xl"
                                    >
                                        {fav.icon}
                                    </motion.span>
                                    <h3 className="text-xl font-display text-memorial-sand">
                                        {t(fav.category, fav.categoryAr)}
                                    </h3>
                                </div>

                                {/* Items List */}
                                <ul className={`space-y-3 ${language === 'ar' ? 'text-right' : ''}`}>
                                    {fav.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex items-start gap-2 text-memorial-sand/80 font-serif text-sm"
                                        >
                                            <span className="text-memorial-gold/60 mt-1">•</span>
                                            <span>{t(item.en, item.ar)}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Subtle Glow on Hover */}
                                <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-memorial-brown/20 rounded-full border border-memorial-gold/10">
                        <span className="text-xl">❤️</span>
                        <p className="text-memorial-sand/60 font-serif italic text-sm">
                            {t(
                                'The things we love reveal who we truly are.',
                                'الأشياء التي نحبها تكشف من نكون حقاً.'
                            )}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FavoriteThings;
