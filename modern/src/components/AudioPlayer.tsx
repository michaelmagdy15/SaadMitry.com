import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Using first track for now. Logic to cycle tracks can be added.
    const currentTrack = '/assets/audio/1.mp3';

    useEffect(() => {
        // Auto-play policy requires interaction. We'll try to play if state says so.
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(e => console.log('Autoplay prevented:', e));
        } else if (!isPlaying && audioRef.current) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={togglePlay}
                className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border ${isPlaying
                    ? 'bg-yellow-500/80 text-white border-yellow-400 animate-pulse-slow'
                    : 'bg-black/60 text-gray-400 border-white/20 hover:text-white'
                    }`}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </button>
            <audio ref={audioRef} src={currentTrack} loop />
        </div>
    );
};

export default AudioPlayer;
