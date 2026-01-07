import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ImportantDate {
    dateEn: string;
    dateAr: string;
    titleEn: string;
    titleAr: string;
    descriptionEn: string;
    descriptionAr: string;
    icon: string;
    type: 'birth' | 'wedding' | 'celebration' | 'memorial';
}

const importantDates: ImportantDate[] = [
    {
        dateEn: "January 15",
        dateAr: "١٥ يناير",
        titleEn: "Birthday",
        titleAr: "عيد الميلاد",
        descriptionEn: "Celebrating the day a great artist was born",
        descriptionAr: "نحتفل بيوم ميلاد فنان عظيم",
        icon: "🎂",
        type: "birth"
    },
    {
        dateEn: "June 20",
        dateAr: "٢٠ يونيو",
        titleEn: "Wedding Anniversary",
        titleAr: "ذكرى الزواج",
        descriptionEn: "A love story that inspired generations",
        descriptionAr: "قصة حب ألهمت أجيالاً",
        icon: "💒",
        type: "wedding"
    },
    {
        dateEn: "Easter Season",
        dateAr: "موسم عيد القيامة",
        titleEn: "Spiritual Celebrations",
        titleAr: "الاحتفالات الروحية",
        descriptionEn: "Faith was the cornerstone of his art and life",
        descriptionAr: "الإيمان كان حجر الزاوية في فنه وحياته",
        icon: "✝️",
        type: "celebration"
    },
    {
        dateEn: "Annual Memorial",
        dateAr: "الذكرى السنوية",
        titleEn: "Day of Remembrance",
        titleAr: "يوم الذكرى",
        descriptionEn: "We gather to honor his memory and legacy",
        descriptionAr: "نجتمع لتكريم ذكراه وإرثه",
        icon: "🕯️",
        type: "memorial"
    }
];

const typeColors: Record<string, string> = {
    birth: 'from-amber-500/20 to-orange-500/20',
    wedding: 'from-rose-500/20 to-pink-500/20',
    celebration: 'from-violet-500/20 to-purple-500/20',
    memorial: 'from-memorial-gold/20 to-amber-500/20'
};

const ImportantDates: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-6 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-memorial-gold via-transparent to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-memorial-gold mb-4">
                        {t('Dates to Remember', 'تواريخ للذكرى')}
                    </h2>
                    <p className="text-memorial-sand/60 font-serif italic max-w-xl mx-auto">
                        {t(
                            'Special moments that marked his journey through life.',
                            'لحظات خاصة ميّزت رحلته في الحياة.'
                        )}
                    </p>
                </motion.div>

                {/* Dates Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {importantDates.map((date, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group cursor-pointer"
                        >
                            <div className={`relative p-6 rounded-xl bg-gradient-to-br ${typeColors[date.type]} border border-memorial-gold/20 backdrop-blur-sm overflow-hidden`}>
                                {/* Decorative corner glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-memorial-gold/10 rounded-full blur-2xl group-hover:bg-memorial-gold/20 transition-all duration-500" />

                                <div className="relative z-10 flex items-start gap-4">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        className="flex-shrink-0 w-16 h-16 rounded-full bg-memorial-brown/40 flex items-center justify-center text-3xl"
                                    >
                                        {date.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        {/* Date Badge */}
                                        <span className="inline-block px-3 py-1 bg-memorial-gold/20 text-memorial-gold text-sm rounded-full mb-2 font-serif">
                                            {t(date.dateEn, date.dateAr)}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-xl font-display text-memorial-sand mb-2 group-hover:text-memorial-gold transition-colors">
                                            {t(date.titleEn, date.titleAr)}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-memorial-sand/60 font-serif text-sm leading-relaxed">
                                            {t(date.descriptionEn, date.descriptionAr)}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated border on hover */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-memorial-gold to-transparent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Calendar Reminder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-memorial-sand/40 text-sm font-serif italic">
                        {t(
                            '"Every date is a chance to remember, every memory a gift to cherish."',
                            '"كل تاريخ فرصة للتذكر، وكل ذكرى هدية نعتز بها."'
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ImportantDates;
