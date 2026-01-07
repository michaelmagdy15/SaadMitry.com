import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getAssetUrl } from '../utils/assetUtils';

interface FamilyMember {
    id: string;
    nameEn: string;
    nameAr: string;
    relationEn: string;
    relationAr: string;
    image?: string;
    generation: number;
    position: 'left' | 'center' | 'right';
}

const familyTree: FamilyMember[] = [
    // Generation 1 - Saad Mitry
    {
        id: 'saad',
        nameEn: 'Saad Mitry',
        nameAr: 'سعد متري',
        relationEn: 'The Artist',
        relationAr: 'الفنان',
        image: getAssetUrl('/assets/images/saad_logo.png'),
        generation: 1,
        position: 'center'
    },
    // Generation 2 - Children
    {
        id: 'son1',
        nameEn: 'Son',
        nameAr: 'الابن',
        relationEn: 'Son',
        relationAr: 'ابن',
        generation: 2,
        position: 'left'
    },
    {
        id: 'daughter1',
        nameEn: 'Daughter',
        nameAr: 'الابنة',
        relationEn: 'Daughter',
        relationAr: 'ابنة',
        generation: 2,
        position: 'right'
    },
    // Generation 3 - Grandchildren
    {
        id: 'michael',
        nameEn: 'Michael',
        nameAr: 'مايكل',
        relationEn: 'Grandson',
        relationAr: 'حفيد',
        generation: 3,
        position: 'center'
    }
];

const FamilyTree: React.FC = () => {
    const { t } = useLanguage();

    // Group by generation
    const generations = [1, 2, 3].map(gen =>
        familyTree.filter(m => m.generation === gen)
    );

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-memorial-brown/10 to-transparent" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-memorial-gold mb-4">
                        {t('Family Tree', 'شجرة العائلة')}
                    </h2>
                    <p className="text-memorial-sand/60 font-serif italic max-w-xl mx-auto">
                        {t(
                            'The roots that ground him, the branches that carry his legacy forward.',
                            'الجذور التي ثبتته، والأغصان التي تحمل إرثه للأمام.'
                        )}
                    </p>
                </motion.div>

                {/* Tree Visualization */}
                <div className="relative">
                    {/* Connecting Lines */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ zIndex: 0 }}
                    >
                        {/* Line from Saad to children */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            d="M 50% 120 L 50% 180 L 25% 180 L 25% 220 M 50% 180 L 75% 180 L 75% 220"
                            fill="none"
                            stroke="rgba(212, 175, 55, 0.3)"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                        />
                    </svg>

                    {/* Generation Rows */}
                    {generations.map((gen, genIndex) => (
                        <motion.div
                            key={genIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: genIndex * 0.2 }}
                            className={`flex justify-center gap-8 mb-12 ${genIndex === 0 ? '' : 'mt-8'
                                }`}
                        >
                            {gen.map((member) => (
                                <motion.div
                                    key={member.id}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="group"
                                >
                                    <div className={`relative p-4 rounded-xl bg-gradient-to-br from-[#2a2010] to-[#1a1508] border border-memorial-gold/20 text-center min-w-[120px] ${member.id === 'saad'
                                        ? 'ring-2 ring-memorial-gold/50 scale-110'
                                        : ''
                                        }`}
                                    >
                                        {/* Avatar */}
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-memorial-brown/30 border-2 border-memorial-gold/30 flex items-center justify-center overflow-hidden">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.nameEn}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                            ) : (
                                                <span className="text-2xl text-memorial-gold/50">
                                                    {member.generation === 2 ? '👤' : '✨'}
                                                </span>
                                            )}
                                        </div>

                                        {/* Name */}
                                        <h4 className={`font-display text-sm md:text-base ${member.id === 'saad'
                                            ? 'text-memorial-gold'
                                            : 'text-memorial-sand'
                                            }`}>
                                            {t(member.nameEn, member.nameAr)}
                                        </h4>

                                        {/* Relation */}
                                        <p className="text-memorial-sand/50 text-xs font-serif mt-1">
                                            {t(member.relationEn, member.relationAr)}
                                        </p>

                                        {/* Special Glow for Saad */}
                                        {member.id === 'saad' && (
                                            <motion.div
                                                animate={{
                                                    opacity: [0.3, 0.6, 0.3],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute -inset-4 bg-memorial-gold/10 rounded-xl blur-xl -z-10"
                                            />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}

                    {/* Generation Labels */}
                    <div className="flex justify-between text-xs text-memorial-sand/30 uppercase tracking-widest mt-8">
                        <span>{t('Past', 'الماضي')}</span>
                        <span>{t('Present', 'الحاضر')}</span>
                        <span>{t('Future', 'المستقبل')}</span>
                    </div>
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-memorial-sand/40 font-serif italic text-sm">
                        {t(
                            'A family is a circle of love, not broken by death but strengthened by it.',
                            'العائلة دائرة من الحب، لا يكسرها الموت بل يقويها.'
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FamilyTree;
