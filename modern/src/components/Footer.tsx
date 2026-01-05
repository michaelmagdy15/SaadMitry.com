import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/30 backdrop-blur-sm text-brand-cream/60 py-6 mt-auto border-t border-brand-gold/10">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                <p>
                    &copy; {currentYear} Saad Mitry. {t('All Rights Reserved.', 'جميع الحقوق محفوظة.')}
                </p>
                <p className="mt-1 text-xs text-brand-gold/50">
                    {t('Built By Michael Mitry', 'تم التطوير بواسطة مايكل متري')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
