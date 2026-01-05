import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
    id: number;
    name: string;
    message: {
        en: string;
        ar: string;
    };
    date: string;
}

const messages: Message[] = [
    {
        id: 1,
        name: "Michael Magdy",
        message: {
            en: "Your art will forever inspire generations. Thank you for leaving such a beautiful legacy.",
            ar: "فنك سيلهم الأجيال إلى الأبد. شكراً لترك إرث جميل كهذا."
        },
        date: "January 2026"
    },
    {
        id: 2,
        name: "The Mitry Family",
        message: {
            en: "Dad, your hands shaped history, and your heart shaped us. We carry your light forward.",
            ar: "أبي، شكّلت يداك التاريخ، وشكّل قلبك في داخلنا. نحمل نورك للأمام."
        },
        date: "December 2025"
    },
    {
        id: 3,
        name: "Cairo Art Museum",
        message: {
            en: "A master craftsman whose work adorns our collection. His legacy lives on in bronze and stone.",
            ar: "حرفي ماهر تزين أعماله مجموعتنا. إرثه يعيش في البرونز والحجر."
        },
        date: "November 2025"
    },
    {
        id: 4,
        name: "Fr. Antonios",
        message: {
            en: "His sacred art brought heaven closer to earth. May his soul rest in the peace he portrayed.",
            ar: "فنه المقدس قرّب السماء من الأرض. لترقد روحه في السلام الذي صوّره."
        },
        date: "October 2025"
    }
];

const Guestbook: React.FC = () => {
    const { t, language } = useLanguage();

    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-memorial-gold mb-4">
                        {t('Words of Remembrance', 'كلمات الذكرى')}
                    </h2>
                    <p className="text-memorial-sand/60 font-serif italic max-w-xl mx-auto">
                        {t(
                            'Messages from those whose lives were touched by his art and spirit.',
                            'رسائل ممن تأثرت حياتهم بفنه وروحه.'
                        )}
                    </p>
                </motion.div>

                {/* Messages Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {messages.map((msg, index) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative group"
                        >
                            {/* Parchment-style card */}
                            <div
                                className="p-6 rounded-lg border border-memorial-gold/20 bg-gradient-to-br from-[#2a2010] to-[#1a1508] relative overflow-hidden"
                                style={{
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                                }}
                            >
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-memorial-gold/10 rounded-bl-3xl" />

                                {/* Quote mark */}
                                <span className="text-4xl text-memorial-gold/20 font-serif absolute top-2 left-4">"</span>

                                {/* Message */}
                                <p className={`text-memorial-sand/80 font-serif leading-relaxed mb-6 mt-4 ${language === 'ar' ? 'text-right' : ''}`}>
                                    {t(msg.message.en, msg.message.ar)}
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-between border-t border-memorial-gold/10 pt-4">
                                    <div>
                                        <p className="text-memorial-gold font-medium">{msg.name}</p>
                                        <p className="text-memorial-sand/40 text-sm">{msg.date}</p>
                                    </div>
                                    <div className="text-memorial-gold/30 text-2xl">✝</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex items-center justify-center gap-4"
                >
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-memorial-gold/30" />
                    <span className="text-memorial-gold/40 text-xl">✝</span>
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-memorial-gold/30" />
                </motion.div>
            </div>
        </section>
    );
};

export default Guestbook;
