import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
    return (
        <main className="bg-memorial-dark min-h-screen">
            <Hero />

            {/* Introduction / Bio Teaser */}
            <ScrollReveal animation="fade-up" className="mx-auto">
                <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                    <p className="text-2xl md:text-3xl font-display leading-relaxed text-memorial-sand/90">
                        "Art is not just what you see, but what you make others see.
                        From the sanctity of churches to the halls of presidents,
                        my hands have shaped the silent stories of our time."
                    </p>
                    <div className="mt-8">
                        <span className="block w-16 h-1 bg-memorial-gold mx-auto mb-4"></span>
                        <p className="font-serif text-memorial-gold uppercase tracking-widest text-sm">Saad Mitry</p>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-in" width="100%">
                <Gallery />
            </ScrollReveal>

            {/* Memorial/Tribute Section */}
            <ScrollReveal animation="slide-in-right" width="100%">
                <section className="py-24 bg-memorial-brown/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/images/index_01.gif')] opacity-5 mix-blend-overlay"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl font-display text-memorial-gold mb-6">A Life in Stone & Color</h2>
                        <p className="text-lg text-memorial-sand/80 mb-8 font-serif">
                            Explore the complete journey of a man who dedicated his life to eternalizing moments in bronze and oil.
                        </p>
                        <a href="/bio" className="inline-block px-8 py-3 bg-memorial-gold text-memorial-dark font-bold tracking-wider hover:bg-memorial-gold-light transition-colors hover:scale-105 duration-300">
                            Read Biography
                        </a>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
};

export default Home;
