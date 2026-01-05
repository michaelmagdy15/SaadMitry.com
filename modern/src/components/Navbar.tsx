import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { path: '/', label: t('HOME', 'الرئيسية') },
        { path: '/bio', label: t('BIOGRAPHY', 'السيرة الذاتية') },
        { path: '/portfolio', label: t('PORTFOLIO', 'معرض الصور') },
        { path: '/music', label: t('MUSIC', 'ألحان') },
    ];

    const isAr = language === 'ar';

    return (
        <nav className="bg-memorial-dark/90 backdrop-blur-md sticky top-0 z-50 border-b border-memorial-gold/20 shadow-2xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between h-24 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img
                            src="/assets/images/saad_logo.png"
                            alt="Saad Mitry"
                            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-memorial-gold/50 shadow-lg"
                        />
                        <Link to="/" className="text-2xl md:text-3xl tracking-[0.2em] font-serif text-memorial-gold hover:text-white transition-colors uppercase">
                            Saad Mitry
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className={`flex items-center space-x-12 ${isAr ? 'space-x-reverse flex-row-reverse' : ''}`}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-xs tracking-[0.15em] uppercase font-sans transition-all duration-300 relative group py-2 ${isActive(item.path)
                                        ? 'text-memorial-gold'
                                        : 'text-memorial-sand/70 hover:text-memorial-gold'
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-memorial-gold transform origin-left transition-transform duration-300 ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Language Toggle */}
                    <div>
                        <button
                            onClick={toggleLanguage}
                            className="text-[10px] font-bold text-memorial-gold hover:text-white border border-memorial-gold/30 hover:border-memorial-gold rounded-none px-4 py-2 transition-all tracking-widest uppercase"
                        >
                            {language === 'en' ? 'ARABIC' : 'ENGLISH'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex justify-center py-4 space-x-6 bg-memorial-dark border-t border-memorial-gold/10">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`text-[10px] uppercase tracking-widest ${isActive(item.path) ? 'text-memorial-gold' : 'text-memorial-sand/70'}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
