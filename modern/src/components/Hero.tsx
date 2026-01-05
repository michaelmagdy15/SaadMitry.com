import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Staggered text animation variants
    const letterContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    const letterAnimation: Variants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-memorial-dark">
            {/* Background Parallax Layer */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-memorial-brown/20 via-memorial-dark to-memorial-dark opacity-60"></div>

                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]"></div>

                {/* Breathing Spotlight effect */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-memorial-gold/5 blur-[100px] rounded-full"
                ></motion.div>
            </motion.div>

            {/* Content Layer */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    <h2 className="text-memorial-gold text-sm md:text-xl tracking-[0.4em] uppercase font-sans mb-6 opacity-80">
                        The Legacy of
                    </h2>
                </motion.div>

                {/* Cinematic Title Reveal */}
                <motion.h1
                    variants={letterContainer}
                    initial="hidden"
                    animate="show"
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-memorial-sand mb-8 tracking-tight leading-none"
                >
                    <motion.span variants={letterAnimation} className="inline-block">S</motion.span>
                    <motion.span variants={letterAnimation} className="inline-block">a</motion.span>
                    <motion.span variants={letterAnimation} className="inline-block">a</motion.span>
                    <motion.span variants={letterAnimation} className="inline-block mr-4 md:mr-8">d</motion.span>
                    <span className="text-memorial-gold inline-block">
                        <motion.span variants={letterAnimation} className="inline-block">M</motion.span>
                        <motion.span variants={letterAnimation} className="inline-block">i</motion.span>
                        <motion.span variants={letterAnimation} className="inline-block">t</motion.span>
                        <motion.span variants={letterAnimation} className="inline-block">r</motion.span>
                        <motion.span variants={letterAnimation} className="inline-block">y</motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-memorial-gold/50 to-transparent"></div>
                    <p className="text-xl md:text-3xl font-serif text-memorial-sand/90 italic max-w-3xl leading-relaxed">
                        "Sculpting History, Painting Divinity."
                    </p>
                    <div className="flex gap-4 text-xs md:text-sm text-memorial-gold-light tracking-[0.2em] uppercase opacity-70">
                        <span>Artist</span>
                        <span>&bull;</span>
                        <span>Sculptor</span>
                        <span>&bull;</span>
                        <span>Visionary</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 3.5 }}
                    className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-memorial-gold/40 hover:text-memorial-gold transition-colors"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
