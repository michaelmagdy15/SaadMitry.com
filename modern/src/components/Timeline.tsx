import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineEvent {
    id: number;
    year: string;
    title: string;
    description: string;
    image: string;
    category: 'Life' | 'Art' | 'Music';
}

const timelineData: TimelineEvent[] = [
    {
        id: 1,
        year: '1930s',
        title: 'Early Beginnings',
        description: 'Born into a world of tradition, Saad Mitry showed an early aptitude for the arts, sketching the world around him with remarkable detail.',
        image: '/assets/images/bio_15.jpg', // Using existing BIO image as placeholder
        category: 'Life'
    },
    {
        id: 2,
        year: '1950s',
        title: 'Mastering the Form',
        description: 'Dedicating himself to sculpture, he began to master the human form, blending classical techniques with his unique emotive style.',
        image: '/assets/images/port2_32.jpg',
        category: 'Art'
    },
    {
        id: 3,
        year: '1960s',
        title: 'The Golden Era',
        description: 'A period of prolific creation. His sculptures of presidential figures and historical icons gained him nationwide recognition.',
        image: '/assets/images/port4_32.jpg',
        category: 'Art'
    },
    {
        id: 4,
        year: '1979-1983',
        title: 'Divine Melodies',
        description: 'Expanding his artistic expression, he recorded a series of spiritual hymns, leaving a legacy of music that touches the soul.',
        image: '/assets/images/port3_32.jpg', // Placeholder
        category: 'Music'
    },
    {
        id: 5,
        year: 'Legacy',
        title: 'Eternal Inspiration',
        description: 'His work continues to inspire new generations of artists. A true visionary whose spirit lives on through his creations.',
        image: '/assets/images/saad_logo.png',
        category: 'Life'
    }
];

const Timeline = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-memorial-dark">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-24">
                    {/* Intro Card */}
                    <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center">
                        <h2 className="text-6xl md:text-8xl font-display text-memorial-sand mb-8">
                            A Life of <br /> <span className="text-memorial-gold">Artistry</span>
                        </h2>
                        <p className="text-xl text-memorial-sand/70 font-serif italic max-w-lg">
                            Scroll to journey through the defining moments of Saad Mitry's legacy.
                        </p>
                        <div className="mt-12 flex items-center gap-4 text-memorial-gold/50 animate-pulse">
                            <span className="uppercase tracking-widest text-sm">Scroll Down</span>
                            <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Timeline Events */}
                    {timelineData.map((event) => (
                        <div key={event.id} className="group relative h-[55vh] w-[35vw] md:w-[25vw] flex flex-col">
                            {/* Year Marker */}
                            <div className="border-b border-memorial-gold/30 pb-4 mb-8">
                                <span className="text-6xl md:text-8xl font-display text-memorial-gold/20 group-hover:text-memorial-gold/80 transition-colors duration-500">
                                    {event.year}
                                </span>
                            </div>

                            {/* Image Card */}
                            <div className="relative flex-grow overflow-hidden rounded-sm bg-memorial-brown/10 mb-6">
                                <div className="absolute inset-0 bg-memorial-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out grayscale-[50%] group-hover:grayscale-0 block"
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-auto">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-[1px] bg-memorial-gold"></span>
                                    <span className="text-memorial-gold text-xs uppercase tracking-[0.2em]">{event.category}</span>
                                </div>
                                <h3 className="text-3xl font-display text-memorial-sand mb-4">{event.title}</h3>
                                <p className="text-memorial-sand/70 font-serif leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* End Card */}
                    <div className="flex-shrink-0 w-[30vw] flex items-center justify-center">
                        <div className="text-center">
                            <img src="/assets/images/saad_logo.png" alt="Logo" className="w-32 h-32 mx-auto mb-6 opacity-50" />
                            <p className="text-memorial-gold text-sm tracking-[0.3em] uppercase">The Legend Lives On</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
