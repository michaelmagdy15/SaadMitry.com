import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Story {
    id: number;
    titleEn: string;
    titleAr: string;
    contentEn: string;
    contentAr: string;
    authorEn: string;
    authorAr: string;
    category: 'family' | 'art' | 'faith' | 'wisdom';
    icon: string;
}

const stories: Story[] = [
    {
        id: 1,
        titleEn: "The First Sculpture",
        titleAr: "النحت الأول",
        contentEn: "When grandfather was just 12 years old, he carved his first figure from a piece of discarded wood. It was a small angel, no bigger than a hand. He kept it by his bedside until his last days, a reminder of where the journey began.",
        contentAr: "عندما كان جدي في الثانية عشرة من عمره، نحت أول تمثال له من قطعة خشب مهملة. كان ملاكاً صغيراً، لا يتجاوز حجم اليد. احتفظ به بجانب سريره حتى آخر أيامه، تذكيراً بمكان بداية الرحلة.",
        authorEn: "The Mitry Family",
        authorAr: "عائلة متري",
        category: 'art',
        icon: "🎨"
    },
    {
        id: 2,
        titleEn: "Sunday Morning Hymns",
        titleAr: "ترانيم صباح الأحد",
        contentEn: "Every Sunday morning, before dawn, grandfather would sit in his studio and sing hymns while preparing his brushes. He believed that art created in prayer carried a piece of heaven within it. Those melodies still echo in our hearts.",
        contentAr: "كل صباح أحد، قبل الفجر، كان جدي يجلس في مرسمه ويرنم الترانيم بينما يحضر فرشاته. كان يؤمن أن الفن المخلوق بالصلاة يحمل قطعة من السماء. تلك الألحان لا تزال تتردد في قلوبنا.",
        authorEn: "Grandson Michael",
        authorAr: "الحفيد مايكل",
        category: 'faith',
        icon: "🎵"
    },
    {
        id: 3,
        titleEn: "Patience of Bronze",
        titleAr: "صبر البرونز",
        contentEn: "\"Bronze doesn't rush, and neither should we,\" grandfather used to say. He taught us that masterpieces take time, that every detail matters, and that the beauty is in the attention we give to what we love.",
        contentAr: "\"البرونز لا يتعجل، ولا ينبغي لنا أيضاً،\" كان جدي يقول. علمنا أن التحف تحتاج وقتاً، وأن كل تفصيل مهم، وأن الجمال في الاهتمام الذي نوليه لما نحب.",
        authorEn: "Family Wisdom",
        authorAr: "حكمة العائلة",
        category: 'wisdom',
        icon: "💎"
    },
    {
        id: 4,
        titleEn: "The Children's Sculptor",
        titleAr: "نحات الأطفال",
        contentEn: "Whenever we visited as children, grandfather would let us play with the clay in his studio. No work was too important, no sculpture too precious. 'Create,' he would say, 'creation is joy.' Those afternoons shaped more than just clay.",
        contentAr: "كلما زرناه ونحن أطفال، كان جدي يسمح لنا باللعب بالطين في مرسمه. لا عمل كان مهماً جداً، ولا نحت كان ثميناً جداً. 'اخلقوا،' كان يقول، 'الخلق فرح.' تلك الظهيرات شكّلت أكثر من مجرد طين.",
        authorEn: "The Grandchildren",
        authorAr: "الأحفاد",
        category: 'family',
        icon: "👨‍👩‍👧‍👦"
    }
];

const categoryColors: Record<string, string> = {
    family: 'bg-rose-500/20 text-rose-300',
    art: 'bg-amber-500/20 text-amber-300',
    faith: 'bg-violet-500/20 text-violet-300',
    wisdom: 'bg-emerald-500/20 text-emerald-300'
};

const categoryLabels: Record<string, { en: string; ar: string }> = {
    family: { en: 'Family', ar: 'العائلة' },
    art: { en: 'Art', ar: 'الفن' },
    faith: { en: 'Faith', ar: 'الإيمان' },
    wisdom: { en: 'Wisdom', ar: 'الحكمة' }
};

const PersonalStories: React.FC = () => {
    const { t, language } = useLanguage();
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-memorial-brown/10 via-transparent to-memorial-brown/10" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-memorial-gold mb-4">
                        {t('Stories to Remember', 'قصص للذكرى')}
                    </h2>
                    <p className="text-memorial-sand/60 font-serif italic max-w-xl mx-auto">
                        {t(
                            'Personal anecdotes and treasured memories from those who knew him best.',
                            'حكايات شخصية وذكريات عزيزة ممن عرفوه أفضل معرفة.'
                        )}
                    </p>
                </motion.div>

                {/* Stories Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedStory(story)}
                            className="cursor-pointer group"
                        >
                            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#2a2010] to-[#1a1508] border border-memorial-gold/20 hover:border-memorial-gold/40 transition-all duration-300 h-full">
                                {/* Story Icon */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-memorial-dark border border-memorial-gold/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {story.icon}
                                </div>

                                {/* Category Badge */}
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ml-6 ${categoryColors[story.category]}`}>
                                    {t(categoryLabels[story.category].en, categoryLabels[story.category].ar)}
                                </span>

                                {/* Title */}
                                <h3 className={`text-xl font-display text-memorial-sand mb-3 group-hover:text-memorial-gold transition-colors ${language === 'ar' ? 'text-right' : ''}`}>
                                    {t(story.titleEn, story.titleAr)}
                                </h3>

                                {/* Preview */}
                                <p className={`text-memorial-sand/60 font-serif text-sm leading-relaxed line-clamp-3 ${language === 'ar' ? 'text-right' : ''}`}>
                                    {t(story.contentEn, story.contentAr)}
                                </p>

                                {/* Read More */}
                                <div className="mt-4 flex items-center gap-2 text-memorial-gold/60 group-hover:text-memorial-gold transition-colors">
                                    <span className="text-sm font-serif">
                                        {t('Read full story', 'اقرأ القصة كاملة')}
                                    </span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                </div>

                                {/* Author */}
                                <div className="mt-4 pt-4 border-t border-memorial-gold/10 flex items-center gap-2">
                                    <span className="text-memorial-sand/40 text-xs">—</span>
                                    <span className="text-memorial-sand/50 text-sm font-serif italic">
                                        {t(story.authorEn, story.authorAr)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for Full Story */}
                <AnimatePresence>
                    {selectedStory && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedStory(null)}
                            className="fixed inset-0 bg-memorial-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-gradient-to-br from-[#2a2010] to-[#1a1508] border border-memorial-gold/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedStory(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-memorial-dark/50 text-memorial-sand/60 hover:text-memorial-gold transition-colors flex items-center justify-center"
                                >
                                    ✕
                                </button>

                                {/* Icon */}
                                <div className="text-4xl mb-4">{selectedStory.icon}</div>

                                {/* Category */}
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[selectedStory.category]}`}>
                                    {t(categoryLabels[selectedStory.category].en, categoryLabels[selectedStory.category].ar)}
                                </span>

                                {/* Title */}
                                <h3 className={`text-2xl md:text-3xl font-display text-memorial-gold mb-6 ${language === 'ar' ? 'text-right' : ''}`}>
                                    {t(selectedStory.titleEn, selectedStory.titleAr)}
                                </h3>

                                {/* Full Content */}
                                <p className={`text-memorial-sand/80 font-serif text-lg leading-relaxed mb-8 ${language === 'ar' ? 'text-right' : ''}`}>
                                    {t(selectedStory.contentEn, selectedStory.contentAr)}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-6 border-t border-memorial-gold/20">
                                    <div className="w-10 h-10 rounded-full bg-memorial-gold/20 flex items-center justify-center text-memorial-gold">
                                        ✝
                                    </div>
                                    <div>
                                        <p className="text-memorial-sand font-medium">
                                            {t(selectedStory.authorEn, selectedStory.authorAr)}
                                        </p>
                                        <p className="text-memorial-sand/50 text-sm">
                                            {t('Shared with love', 'شُوركت بحب')}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PersonalStories;
