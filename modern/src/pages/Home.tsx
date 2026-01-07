import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ScrollReveal from '../components/ScrollReveal';
import QuoteCarousel from '../components/QuoteCarousel';
import PhotoMemories from '../components/PhotoMemories';
import CandleLighting from '../components/CandleLighting';
import Guestbook from '../components/Guestbook';
import MemorialStats from '../components/MemorialStats';
import PersonalStories from '../components/PersonalStories';
import FavoriteThings from '../components/FavoriteThings';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetUtils';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
    const { t } = useLanguage();

    return (
        <main className="bg-memorial-dark min-h-screen">
            <Hero />

            {/* Quote Carousel Section */}
            <ScrollReveal animation="fade-up" className="mx-auto">
                <QuoteCarousel />
            </ScrollReveal>

            {/* Memorial Statistics - Legacy Numbers */}
            <ScrollReveal animation="fade-up" width="100%">
                <MemorialStats />
            </ScrollReveal>

            {/* Photo Memories with Ken Burns Effect */}
            <ScrollReveal animation="fade-in" width="100%">
                <PhotoMemories />
            </ScrollReveal>

            {/* Personal Stories & Anecdotes */}
            <ScrollReveal animation="fade-up" width="100%">
                <PersonalStories />
            </ScrollReveal>

            {/* Original Gallery Preview */}
            <ScrollReveal animation="fade-in" width="100%">
                <Gallery />
            </ScrollReveal>

            {/* Favorite Things Section */}
            <ScrollReveal animation="fade-up" width="100%">
                <FavoriteThings />
            </ScrollReveal>

            {/* Candle Lighting Ceremony */}
            <ScrollReveal animation="scale-up" width="100%">
                <div className="bg-gradient-to-b from-transparent via-memorial-brown/5 to-transparent">
                    <CandleLighting />
                </div>
            </ScrollReveal>

            {/* Memorial/Tribute Section */}
            <ScrollReveal animation="slide-in-right" width="100%">
                <section className="py-24 bg-memorial-brown/10 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-5 mix-blend-overlay bg-cover bg-center"
                        style={{ backgroundImage: `url(${getAssetUrl('/assets/images/index_01.gif')})` }}
                    ></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl font-display text-memorial-gold mb-6">
                            {t('A Life in Stone & Color', 'حياة في الحجر واللون')}
                        </h2>
                        <p className="text-lg text-memorial-sand/80 mb-8 font-serif">
                            {t(
                                'Explore the complete journey of a man who dedicated his life to eternalizing moments in bronze and oil.',
                                'اكتشف الرحلة الكاملة لرجل كرّس حياته لتخليد اللحظات في البرونز والزيت.'
                            )}
                        </p>
                        <Link to="/bio" className="inline-block px-8 py-3 bg-memorial-gold text-memorial-dark font-bold tracking-wider hover:bg-memorial-gold-light transition-colors hover:scale-105 duration-300">
                            {t('Read Biography', 'اقرأ السيرة الذاتية')}
                        </Link>
                    </div>
                </section>
            </ScrollReveal>

            {/* Guestbook / Remembrance Messages */}
            <ScrollReveal animation="fade-up" width="100%">
                <Guestbook />
            </ScrollReveal>
        </main>
    );
};

export default Home;
