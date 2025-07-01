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

// Comprehensive translation dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.method': 'The EA Method',
    'nav.why': 'Why EA Solutions?',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Business Has a Body. We Build Its Mind.',
    'hero.subtitle': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented efficiency.',
    'cta.book': 'Book Your AI Strategy Call',
    'cta.explore': 'Explore Solutions',
    
    // Sections
    'section.transforming': 'Transforming Businesses Worldwide',
    'section.method': 'The EA Method',
    'section.advantage': 'The EA Solutions Advantage',
    'section.powered': 'Powered by Leading Technology',
    'section.ready': 'Ready to Transform Your Business?',
    
    // Features
    'feature.bespoke': 'Radically Bespoke',
    'feature.expertise': 'Elite Expertise',
    'feature.impact': 'Measurable Impact',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.bookCall': 'Book Your Call'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'Die EA-Methode',
    'nav.why': 'Warum EA Solutions?',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Ihr Unternehmen hat einen Körper. Wir bauen seinen Verstand.',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit eliminieren, menschliches Potenzial verstärken und beispiellose Effizienz freisetzen.',
    'cta.book': 'Buchen Sie Ihr KI-Strategiegespräch',
    'cta.explore': 'Lösungen erkunden',
    
    // Sections
    'section.transforming': 'Unternehmen weltweit transformieren',
    'section.method': 'Die EA-Methode',
    'section.advantage': 'Der EA Solutions Vorteil',
    'section.powered': 'Angetrieben von führender Technologie',
    'section.ready': 'Bereit, Ihr Unternehmen zu transformieren?',
    
    // Features
    'feature.bespoke': 'Radikal maßgeschneidert',
    'feature.expertise': 'Elite-Expertise',
    'feature.impact': 'Messbare Auswirkungen',
    
    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Loslegen',
    'common.bookCall': 'Ihren Anruf buchen'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.solutions': 'Solutions',
    'nav.method': 'La Méthode EA',
    'nav.why': 'Pourquoi EA Solutions?',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Votre entreprise a un corps. Nous construisons son esprit.',
    'hero.subtitle': 'Nous concevons des infrastructures IA sur mesure qui éliminent le travail répétitif, amplifient le potentiel humain et libèrent une efficacité sans précédent.',
    'cta.book': 'Réservez votre appel stratégique IA',
    'cta.explore': 'Explorer les solutions',
    
    // Sections
    'section.transforming': 'Transformer les entreprises dans le monde entier',
    'section.method': 'La Méthode EA',
    'section.advantage': 'L\'avantage EA Solutions',
    'section.powered': 'Alimenté par une technologie de pointe',
    'section.ready': 'Prêt à transformer votre entreprise?',
    
    // Features
    'feature.bespoke': 'Radicalement sur mesure',
    'feature.expertise': 'Expertise d\'élite',
    'feature.impact': 'Impact mesurable',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.bookCall': 'Réserver votre appel'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.method': 'طريقة EA',
    'nav.why': 'لماذا EA Solutions؟',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'عملك له جسد. نحن نبني عقله.',
    'hero.subtitle': 'نحن نصمم بنى تحتية للذكاء الاصطناعي مخصصة تقضي على العمل المتكرر وتضخم الإمكانات البشرية وتطلق كفاءة لا مثيل لها.',
    'cta.book': 'احجز مكالمة استراتيجية الذكاء الاصطناعي',
    'cta.explore': 'استكشف الحلول',
    
    // Sections
    'section.transforming': 'تحويل الأعمال في جميع أنحاء العالم',
    'section.method': 'طريقة EA',
    'section.advantage': 'ميزة EA Solutions',
    'section.powered': 'مدعوم بتكنولوجيا رائدة',
    'section.ready': 'مستعد لتحويل عملك؟',
    
    // Features
    'feature.bespoke': 'مخصص بشكل جذري',
    'feature.expertise': 'خبرة النخبة',
    'feature.impact': 'تأثير قابل للقياس',
    
    // Common
    'common.learnMore': 'تعلم المزيد',
    'common.getStarted': 'ابدأ',
    'common.bookCall': 'احجز مكالمتك'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.solutions': 'Soluciones',
    'nav.method': 'El Método EA',
    'nav.why': '¿Por qué EA Solutions?',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Tu negocio tiene un cuerpo. Nosotros construimos su mente.',
    'hero.subtitle': 'Diseñamos infraestructuras de IA personalizadas que erradican el trabajo repetitivo, amplifican el potencial humano y desbloquean una eficiencia sin precedentes.',
    'cta.book': 'Reserva tu llamada estratégica de IA',
    'cta.explore': 'Explorar soluciones',
    
    // Sections
    'section.transforming': 'Transformando negocios en todo el mundo',
    'section.method': 'El Método EA',
    'section.advantage': 'La ventaja de EA Solutions',
    'section.powered': 'Impulsado por tecnología líder',
    'section.ready': '¿Listo para transformar tu negocio?',
    
    // Features
    'feature.bespoke': 'Radicalmente personalizado',
    'feature.expertise': 'Experiencia de élite',
    'feature.impact': 'Impacto medible',
    
    // Common
    'common.learnMore': 'Aprende más',
    'common.getStarted': 'Empezar',
    'common.bookCall': 'Reserva tu llamada'
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
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved ? languages.find(lang => lang.code === saved) || languages[0] : languages[0];
  });

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language.code);
    
    // Apply RTL for Arabic
    if (language.code === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language.code;
    }
  };

  const translate = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations['en']?.[key] || key;
  };

  // Set initial language direction
  React.useEffect(() => {
    if (currentLanguage.code === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = currentLanguage.code;
    }
  }, [currentLanguage]);

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
    
    // Force page refresh to apply translations
    setTimeout(() => {
      window.location.reload();
    }, 100);
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