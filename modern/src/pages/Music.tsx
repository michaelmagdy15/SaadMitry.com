import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Music: React.FC = () => {
    const { t } = useLanguage();
    const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const tracks = [
        { id: '1', ar: 'أم الشهداء جميلة', en: 'Om El Shohada Jamila', duration: '3:45' },
        { id: '2', ar: 'يا نعيمس بالحنان', en: 'Ya Na\'emes Bel Hanan', duration: '4:12' },
        { id: '3', ar: 'قلت لي يوم التقينا', en: 'Qolta Le Yawm El Taqeena', duration: '3:20' },
        { id: '4', ar: 'طال انتظارنا', en: 'Tal Entezarna', duration: '5:01' },
        { id: '5', ar: 'دق باب القلب يوماً', en: 'Daq Bab El Qalb Yawman', duration: '4:30' },
        { id: '6', ar: 'ادعوك ربي', en: 'Ad\'ouk Rabbi', duration: '3:55' },
        { id: '7', ar: 'أنا لحبيبي وحبيبي لي', en: 'Ana Le Habibi Wa Habibi Li', duration: '4:18' },
        { id: '8', ar: 'حبك يا مريم', en: 'Hobek Ya Mariam', duration: '3:40' },
        { id: '9', ar: 'مجد مريم', en: 'Majd Mariam', duration: '4:05' },
        { id: '10', ar: 'لحن المجمرة الذهب', en: 'Lahn El Majmara El Zahab', duration: '3:15' },
    ];

    const currentTrack = tracks.find(t => t.id === currentTrackId) || tracks[0];

    useEffect(() => {
        if (currentTrackId && audioRef.current) {
            audioRef.current.src = `/assets/audio/${currentTrackId}.mp3`;
            if (isPlaying) {
                audioRef.current.play().catch(e => console.log('Playback error:', e));
            }
        }
    }, [currentTrackId]);

    const handlePlayPause = () => {
        if (!currentTrackId) {
            setCurrentTrackId(tracks[0].id);
            setIsPlaying(true);
            return;
        }

        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play().catch(e => console.log('Playback error:', e));
        }
        setIsPlaying(!isPlaying);
    };

    const handleTrackSelect = (id: string) => {
        if (currentTrackId === id) {
            handlePlayPause();
        } else {
            setCurrentTrackId(id);
            setIsPlaying(true);
        }
    };

    const handleNext = () => {
        const currentIndex = tracks.findIndex(t => t.id === (currentTrackId || '1'));
        const nextIndex = (currentIndex + 1) % tracks.length;
        setCurrentTrackId(tracks[nextIndex].id);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        const currentIndex = tracks.findIndex(t => t.id === (currentTrackId || '1'));
        const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackId(tracks[prevIndex].id);
        setIsPlaying(true);
    };

    return (
        <div className="min-h-screen bg-memorial-dark text-memorial-sand py-20 px-4 md:px-12 flex flex-col md:flex-row gap-12 items-center justify-center overflow-hidden relative">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-memorial-gold/5 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-memorial-brown/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            <audio ref={audioRef} onEnded={handleNext} />

            {/* Left Column: Vinyl Player */}
            <ScrollReveal animation="slide-in-left" className="w-full md:w-1/2 flex flex-col items-center z-10">
                <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                    {/* Vinyl Record */}
                    <motion.div
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                        className="w-full h-full rounded-full bg-black shadow-2xl relative border-4 border-gray-900 flex items-center justify-center"
                        style={{
                            boxShadow: '0 0 50px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.05)'
                        }}
                    >
                        {/* Vinyl Grooves */}
                        <div className="absolute inset-2 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-4 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-8 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-12 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-16 rounded-full border border-gray-800/50"></div>

                        {/* Label */}
                        <div className="absolute w-[35%] h-[35%] bg-memorial-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-memorial-gold/30">
                            <div className="w-[90%] h-[90%] rounded-full overflow-hidden relative">
                                <img
                                    src="/assets/images/saad_logo.png"
                                    alt="Album Art"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Stylus Arm (Decorative) */}
                    <motion.div
                        animate={{ rotate: isPlaying ? 25 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -top-10 -right-10 w-32 h-48 origin-top-right pointer-events-none hidden md:block"
                    >
                        <div className="w-2 h-40 bg-gray-400/80 rounded-full absolute right-4 top-0 rotate-12 shadow-lg"></div>
                        <div className="w-8 h-12 bg-gray-300 rounded-md absolute bottom-0 left-0 shadow-md"></div>
                    </motion.div>
                </div>

                {/* Now Playing Info (Mobile/Desktop) */}
                <div className="mt-12 text-center">
                    <motion.h2
                        key={currentTrack.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-display text-memorial-gold mb-2"
                    >
                        {t(currentTrack.en, currentTrack.ar)}
                    </motion.h2>
                    <p className="text-memorial-sand/60 font-serif italic">
                        {t('Original Recording', 'تسجيل أصلي')} • 1979-1983
                    </p>
                </div>

                {/* Player Controls */}
                <div className="flex items-center gap-8 mt-8">
                    <button onClick={handlePrev} className="text-memorial-sand/50 hover:text-memorial-gold transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                    </button>

                    <button
                        onClick={handlePlayPause}
                        className="w-16 h-16 rounded-full bg-memorial-gold text-memorial-dark flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                    >
                        {isPlaying ? (
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        ) : (
                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        )}
                    </button>

                    <button onClick={handleNext} className="text-memorial-sand/50 hover:text-memorial-gold transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                    </button>
                </div>
            </ScrollReveal>

            {/* Right Column: Playlist */}
            <ScrollReveal animation="slide-in-right" className="w-full md:w-1/2 h-[60vh] overflow-y-auto pr-4 custom-scrollbar bg-black/20 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-display text-memorial-sand mb-6 border-b border-white/10 pb-4">
                    {t('The Collection', 'المجموعة الكاملة')}
                </h3>
                <div className="space-y-3">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleTrackSelect(track.id)}
                            className={`group p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300 border ${currentTrackId === track.id
                                ? 'bg-memorial-gold/10 border-memorial-gold/30'
                                : 'bg-transparent border-transparent hover:bg-white/5'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${currentTrackId === track.id ? 'bg-memorial-gold text-memorial-dark' : 'bg-white/5 text-gray-400'
                                    }`}>
                                    {currentTrackId === track.id && isPlaying ? (
                                        <div className="flex gap-[2px] h-3 items-end">
                                            <span className="w-[2px] bg-memorial-dark animate-[music-bar_0.5s_ease-in-out_infinite]"></span>
                                            <span className="w-[2px] bg-memorial-dark animate-[music-bar_0.7s_ease-in-out_infinite_0.1s]"></span>
                                            <span className="w-[2px] bg-memorial-dark animate-[music-bar_0.4s_ease-in-out_infinite_0.2s]"></span>
                                        </div>
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <div>
                                    <h4 className={`font-medium text-lg leading-tight transition-colors ${currentTrackId === track.id ? 'text-memorial-gold' : 'text-memorial-sand group-hover:text-white'
                                        }`}>
                                        {t(track.en, track.ar)}
                                    </h4>
                                    <p className="text-xs text-white/40 mt-1">{t(track.ar, track.en)}</p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-white/30">{track.duration}</span>
                        </motion.div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Global Keyframe for Music Bars */}
            <style>{`
                @keyframes music-bar {
                    0%, 100% { height: 20%; }
                    50% { height: 100%; }
                }
            `}</style>
        </div>
    );
};

export default Music;
