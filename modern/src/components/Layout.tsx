import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AudioPlayer from './AudioPlayer';
import IntroLoader from './IntroLoader';
import DustBackground from './DustBackground';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-memorial-dark text-memorial-sand font-sans selection:bg-memorial-gold/30 bg-gradient-radial from-[#1a1105] to-memorial-dark bg-fixed relative">
            <IntroLoader />
            <DustBackground />
            <Navbar />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <Footer />
            <AudioPlayer />
        </div>
    );
};

export default Layout;
