import React, { useState, useContext, createContext } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

// Translation dictionary (simplified for demo)
const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.method': 'The EA Method',
    'nav.why': 'Why EA Solutions?',
    'nav.contact': 'Contact',
    'hero.title': 'Your Business Has a Body. We Build Its Mind.',
    'hero.subtitle': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented efficiency.',
    'cta.book': 'Book Your AI Strategy Call',
    'cta.explore': 'Explore Solutions'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'Die EA-Methode',
    'nav.why': 'Warum EA Solutions?',
    'nav.contact': 'Kontakt',
    'hero.title': 'Ihr Unternehmen hat einen Körper. Wir bauen seinen Verstand.',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit eliminieren, menschliches Potenzial verstärken und beispiellose Effizienz freisetzen.',
    'cta.book': 'Buchen Sie Ihr KI-Strategiegespräch',
    'cta.explore': 'Lösungen erkunden'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.solutions': 'Solutions',
    'nav.method': 'La Méthode EA',
    'nav.why': 'Pourquoi EA Solutions?',
    'nav.contact': 'Contact',
    'hero.title': 'Votre entreprise a un corps. Nous construisons son esprit.',
    'hero.subtitle': 'Nous concevons des infrastructures IA sur mesure qui éliminent le travail répétitif, amplifient le potentiel humain et libèrent une efficacité sans précédent.',
    'cta.book': 'Réservez votre appel stratégique IA',
    'cta.explore': 'Explorer les solutions'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.method': 'طريقة EA',
    'nav.why': 'لماذا EA Solutions؟',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'عملك له جسد. نحن نبني عقله.',
    'hero.subtitle': 'نحن نصمم بنى تحتية للذكاء الاصطناعي مخصصة تقضي على العمل المتكرر وتضخم الإمكانات البشرية وتطلق كفاءة لا مثيل لها.',
    'cta.book': 'احجز مكالمة استراتيجية الذكاء الاصطناعي',
    'cta.explore': 'استكشف الحلول'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.solutions': 'Soluciones',
    'nav.method': 'El Método EA',
    'nav.why': '¿Por qué EA Solutions?',
    'nav.contact': 'Contacto',
    'hero.title': 'Tu negocio tiene un cuerpo. Nosotros construimos su mente.',
    'hero.subtitle': 'Diseñamos infraestructuras de IA personalizadas que erradican el trabajo repetitivo, amplifican el potencial humano y desbloquean una eficiencia sin precedentes.',
    'cta.book': 'Reserva tu llamada estratégica de IA',
    'cta.explore': 'Explorar soluciones'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Here you would implement actual language switching logic
    // For now, we'll just update the state
  };

  const translate = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
          {currentLanguage.name}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLanguage.code === language.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;