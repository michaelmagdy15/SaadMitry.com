import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
    };

    const t = (en: string, ar: string) => {
        return language === 'en' ? en : ar;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
