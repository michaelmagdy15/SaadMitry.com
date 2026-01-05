import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const artwork = [
    { id: 1, title: 'Sacred Art', category: 'Paintings', src: '/assets/images/port1_32.jpg' },
    { id: 2, title: 'Presidential Sculpture', category: 'Sculptures', src: '/assets/images/port2_32.jpg' },
    { id: 3, title: 'Divine Mural', category: 'Paintings', src: '/assets/images/port3_32.jpg' },
    { id: 4, title: 'Historical Figure', category: 'Sculptures', src: '/assets/images/port4_32.jpg' },
    { id: 5, title: 'The Last Supper', category: 'Paintings', src: '/assets/images/port5_32.jpg' },
    { id: 6, title: 'Angel Statue', category: 'Sculptures', src: '/assets/images/port6_32.jpg' },
    { id: 7, title: 'Eternal Moment', category: 'Paintings', src: '/assets/images/port7_32.jpg' },
    { id: 8, title: 'Bronze Legacy', category: 'Sculptures', src: '/assets/images/port8_32.jpg' },
    { id: 9, title: 'Church Interior', category: 'Paintings', src: '/assets/images/porta1_32.jpg' },
];

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const filteredArt = filter === 'All' ? artwork : artwork.filter(item => item.category === filter);

    return (
        <section className="py-20 px-4 bg-memorial-dark relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-memorial-sand mb-4">
                        Masterpieces
                    </h2>
                    <div className="flex justify-center gap-6 text-sm tracking-widest uppercase font-serif">
                        {['All', 'Sculptures', 'Paintings'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`pb-2 border-b-2 transition-colors ${filter === category
                                    ? 'border-memorial-gold text-memorial-gold'
                                    : 'border-transparent text-memorial-sand/50 hover:text-memorial-sand'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredArt.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-memorial-brown/20"
                            >
                                <div className="absolute inset-0 bg-memorial-gold/0 group-hover:bg-memorial-gold/10 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark/95 via-memorial-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 z-20">
                                    <div className="h-0.5 w-0 group-hover:w-12 bg-memorial-gold mb-4 transition-all duration-700 delay-100"></div>
                                    <p className="text-memorial-gold text-xs uppercase tracking-[0.2em] mb-2 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">{item.category}</p>
                                    <h3 className="text-2xl font-display text-memorial-sand italic opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">"{item.title}"</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 border border-memorial-gold text-memorial-gold hover:bg-memorial-gold hover:text-memorial-dark transition-all duration-300 font-serif tracking-widest uppercase text-sm">
                        View Full Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
