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
    
    // Header
    'header.cta': 'Book AI Strategy Call',
    
    // Sections
    'section.transforming': 'Transforming Businesses Worldwide',
    'section.method': 'The EA Method',
    'section.advantage': 'The EA Solutions Advantage',
    'section.powered': 'Powered by Leading Technology',
    'section.ready': 'Ready to Transform Your Business?',
    
    // Features
    'feature.bespoke': 'Radically Bespoke',
    'feature.bespoke.desc': 'Every solution is custom-architected for your specific needs and industry requirements.',
    'feature.expertise': 'Elite Expertise',
    'feature.expertise.desc': 'World-class AI engineers and strategists with deep industry knowledge and proven results.',
    'feature.impact': 'Measurable Impact',
    'feature.impact.desc': 'Guaranteed improvements in efficiency, cost reduction, and operational excellence.',
    
    // Industries
    'industry.title': 'Sector-Specific Solutions',
    'industry.subtitle': 'Intelligent systems engineered for your industry\'s unique requirements.',
    'industry.gastronomy': 'Gastronomy & Hospitality',
    'industry.gastronomy.desc': 'Intelligent systems for seamless guest experiences',
    'industry.industrial': 'Industrial & Manufacturing',
    'industry.industrial.desc': 'Smart automation for operational excellence',
    'industry.finance': 'Finance & Security',
    'industry.finance.desc': 'Advanced protection and compliance systems',
    'industry.finance.status': 'Under Research',
    'industry.smart': 'Smart Living & Personal AI',
    'industry.smart.desc': 'Intelligent environments that adapt to you',
    'industry.healthcare': 'Healthcare',
    'industry.healthcare.desc': 'Precision care through intelligent systems',
    'industry.retail': 'Retail & E-commerce',
    'industry.retail.desc': 'Personalized experiences that drive growth',
    'industry.retail.status': 'Under Research',
    'industry.explore': 'Explore',
    'industry.coming': 'Coming Soon',
    
    // Hotel Showcase
    'hotel.title': 'Hotel am Kochbrunnen: Complete AI Transformation',
    'hotel.subtitle': 'Our flagship hospitality project showcasing 8 integrated AI pillars that transformed traditional operations into an intelligent ecosystem.',
    'hotel.visit': 'Visit Hotel am Kochbrunnen',
    
    // Pillars
    'pillar.journey.title': 'Friction-Free Guest Journey',
    'pillar.journey.desc': 'Keyless check-in/out via QR & NFC, AI-concierge available everywhere',
    'pillar.journey.metric': '99.9% uptime',
    'pillar.backoffice.title': 'Automated Back Office',
    'pillar.backoffice.desc': 'e-Invoice generator, real-time PMS & OTA sync, dynamic pricing',
    'pillar.backoffice.metric': '40hrs/month saved',
    'pillar.building.title': 'Smart Building Control',
    'pillar.building.desc': 'IoT occupancy-based HVAC, voice + mobile app control',
    'pillar.building.metric': '25% energy savings',
    'pillar.security.title': 'Security & Compliance',
    'pillar.security.desc': 'Zero-trust network, GDPR-proof data lake with PII masking',
    'pillar.security.metric': '99 Lighthouse score',
    'pillar.revenue.title': 'Revenue-Driving AI',
    'pillar.revenue.desc': 'Context-aware RAG system, upsell engine, sentiment analysis',
    'pillar.revenue.metric': 'Increased revenue',
    'pillar.booking.title': 'Seamless Booking',
    'pillar.booking.desc': 'Mobile-first website, one-tap booking with Apple/Google Pay',
    'pillar.booking.metric': 'Direct bookings up',
    'pillar.staff.title': 'Staff Orchestration',
    'pillar.staff.desc': 'AI-driven housekeeping routes, automated maintenance tickets',
    'pillar.staff.metric': 'Optimized workflows',
    'pillar.architecture.title': 'Scalable Architecture',
    'pillar.architecture.desc': 'Containerized microservices, GitOps CI/CD, disaster recovery',
    'pillar.architecture.metric': 'Future-proof',
    
    // Websites Section
    'websites.title': 'AI-Powered Websites & Apps',
    'websites.subtitle': 'We build intelligent websites and applications with 40-60% cost savings compared to big companies, without compromising on quality or innovation.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'AI-Integrated Piano School Platform',
    'websites.piano.desc': 'Complete website with AI-powered booking system, intelligent schedule creator, and automated student management. Features smart lesson planning and personalized learning paths.',
    'websites.piano.visit': 'Visit Website',
    'websites.development.title': 'Smart Development',
    'websites.development.desc': 'AI-assisted development process that reduces costs while maintaining enterprise-grade quality.',
    'websites.design.title': 'Intelligent Design',
    'websites.design.desc': 'AI-powered design systems that create beautiful, user-centric interfaces automatically.',
    
    // Method
    'method.subtitle': 'Our proven methodology ensures seamless AI transformation.',
    'method.step1.title': 'Deep Dive & Discovery',
    'method.step1.desc': 'We embed with your team to map every process and identify transformation opportunities.',
    'method.step1.duration': '2-4 weeks',
    'method.step2.title': 'Architectural Design',
    'method.step2.desc': 'Custom AI blueprint creation with optimal technology selection for your specific needs.',
    'method.step2.duration': '3-5 weeks',
    'method.step3.title': 'Seamless Implementation',
    'method.step3.desc': 'Precise deployment with minimal disruption and comprehensive team training.',
    'method.step3.duration': '6-12 weeks',
    'method.step4.title': 'Evolution & Enhancement',
    'method.step4.desc': 'Continuous optimization and enhancement as your AI systems grow with your business.',
    'method.step4.duration': 'Ongoing',
    'method.learn': 'Learn More About Our Process',
    
    // Metrics
    'metrics.projects': 'Projects Delivered',
    'metrics.satisfaction': 'Client Satisfaction',
    'metrics.cost': 'Cost Reduction vs Big Companies',
    
    // Final CTA
    'final.title': 'Ready to Transform Your Business?',
    'final.subtitle': 'Schedule a personalized consultation and discover how AI can revolutionize your operations.',
    'final.cta': 'Book Your AI Strategy Call Now',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.bookCall': 'Book Your Call',
    'common.visitWebsite': 'Visit Website'
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
    
    // Header
    'header.cta': 'KI-Strategiegespräch buchen',
    
    // Sections
    'section.transforming': 'Unternehmen weltweit transformieren',
    'section.method': 'Die EA-Methode',
    'section.advantage': 'Der EA Solutions Vorteil',
    'section.powered': 'Angetrieben von führender Technologie',
    'section.ready': 'Bereit, Ihr Unternehmen zu transformieren?',
    
    // Features
    'feature.bespoke': 'Radikal maßgeschneidert',
    'feature.bespoke.desc': 'Jede Lösung ist speziell für Ihre Bedürfnisse und Branchenanforderungen entwickelt.',
    'feature.expertise': 'Elite-Expertise',
    'feature.expertise.desc': 'Weltklasse-KI-Ingenieure und Strategen mit tiefem Branchenwissen und bewährten Ergebnissen.',
    'feature.impact': 'Messbare Auswirkungen',
    'feature.impact.desc': 'Garantierte Verbesserungen in Effizienz, Kostenreduzierung und operativer Exzellenz.',
    
    // Industries
    'industry.title': 'Branchenspezifische Lösungen',
    'industry.subtitle': 'Intelligente Systeme, die für die einzigartigen Anforderungen Ihrer Branche entwickelt wurden.',
    'industry.gastronomy': 'Gastronomie & Gastgewerbe',
    'industry.gastronomy.desc': 'Intelligente Systeme für nahtlose Gästeerlebnisse',
    'industry.industrial': 'Industrie & Fertigung',
    'industry.industrial.desc': 'Intelligente Automatisierung für operative Exzellenz',
    'industry.finance': 'Finanzen & Sicherheit',
    'industry.finance.desc': 'Erweiterte Schutz- und Compliance-Systeme',
    'industry.finance.status': 'In Forschung',
    'industry.smart': 'Smart Living & Persönliche KI',
    'industry.smart.desc': 'Intelligente Umgebungen, die sich an Sie anpassen',
    'industry.healthcare': 'Gesundheitswesen',
    'industry.healthcare.desc': 'Präzisionsversorgung durch intelligente Systeme',
    'industry.retail': 'Einzelhandel & E-Commerce',
    'industry.retail.desc': 'Personalisierte Erlebnisse, die Wachstum fördern',
    'industry.retail.status': 'In Forschung',
    'industry.explore': 'Erkunden',
    'industry.coming': 'Demnächst',
    
    // Hotel Showcase
    'hotel.title': 'Hotel am Kochbrunnen: Komplette KI-Transformation',
    'hotel.subtitle': 'Unser Flaggschiff-Gastgewerbeprojekt zeigt 8 integrierte KI-Säulen, die traditionelle Abläufe in ein intelligentes Ökosystem verwandelt haben.',
    'hotel.visit': 'Hotel am Kochbrunnen besuchen',
    
    // Pillars
    'pillar.journey.title': 'Reibungslose Gäste-Journey',
    'pillar.journey.desc': 'Schlüsselloser Check-in/out via QR & NFC, KI-Concierge überall verfügbar',
    'pillar.journey.metric': '99,9% Verfügbarkeit',
    'pillar.backoffice.title': 'Automatisiertes Back Office',
    'pillar.backoffice.desc': 'e-Rechnungsgenerator, Echtzeit-PMS & OTA-Sync, dynamische Preisgestaltung',
    'pillar.backoffice.metric': '40 Std./Monat gespart',
    'pillar.building.title': 'Intelligente Gebäudesteuerung',
    'pillar.building.desc': 'IoT-belegungsbasierte HVAC, Sprach- + Mobile-App-Steuerung',
    'pillar.building.metric': '25% Energieeinsparung',
    'pillar.security.title': 'Sicherheit & Compliance',
    'pillar.security.desc': 'Zero-Trust-Netzwerk, DSGVO-konforme Datenbank mit PII-Maskierung',
    'pillar.security.metric': '99 Lighthouse-Score',
    'pillar.revenue.title': 'Umsatzsteigernde KI',
    'pillar.revenue.desc': 'Kontextbewusstes RAG-System, Upsell-Engine, Sentiment-Analyse',
    'pillar.revenue.metric': 'Erhöhter Umsatz',
    'pillar.booking.title': 'Nahtlose Buchung',
    'pillar.booking.desc': 'Mobile-First-Website, Ein-Tap-Buchung mit Apple/Google Pay',
    'pillar.booking.metric': 'Direktbuchungen gestiegen',
    'pillar.staff.title': 'Personal-Orchestrierung',
    'pillar.staff.desc': 'KI-gesteuerte Housekeeping-Routen, automatisierte Wartungstickets',
    'pillar.staff.metric': 'Optimierte Arbeitsabläufe',
    'pillar.architecture.title': 'Skalierbare Architektur',
    'pillar.architecture.desc': 'Containerisierte Microservices, GitOps CI/CD, Disaster Recovery',
    'pillar.architecture.metric': 'Zukunftssicher',
    
    // Websites Section
    'websites.title': 'KI-gestützte Websites & Apps',
    'websites.subtitle': 'Wir entwickeln intelligente Websites und Anwendungen mit 40-60% Kosteneinsparungen gegenüber großen Unternehmen, ohne Kompromisse bei Qualität oder Innovation.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'KI-integrierte Klavierschul-Plattform',
    'websites.piano.desc': 'Komplette Website mit KI-gestütztem Buchungssystem, intelligentem Terminplaner und automatisierter Schülerverwaltung. Bietet intelligente Unterrichtsplanung und personalisierte Lernpfade.',
    'websites.piano.visit': 'Website besuchen',
    'websites.development.title': 'Intelligente Entwicklung',
    'websites.development.desc': 'KI-unterstützter Entwicklungsprozess, der Kosten reduziert und gleichzeitig Unternehmensqualität beibehält.',
    'websites.design.title': 'Intelligentes Design',
    'websites.design.desc': 'KI-gestützte Designsysteme, die automatisch schöne, benutzerzentrierte Oberflächen erstellen.',
    
    // Method
    'method.subtitle': 'Unsere bewährte Methodik gewährleistet nahtlose KI-Transformation.',
    'method.step1.title': 'Tiefgreifende Analyse & Entdeckung',
    'method.step1.desc': 'Wir arbeiten mit Ihrem Team zusammen, um jeden Prozess zu kartieren und Transformationsmöglichkeiten zu identifizieren.',
    'method.step1.duration': '2-4 Wochen',
    'method.step2.title': 'Architektonisches Design',
    'method.step2.desc': 'Maßgeschneiderte KI-Blueprint-Erstellung mit optimaler Technologieauswahl für Ihre spezifischen Bedürfnisse.',
    'method.step2.duration': '3-5 Wochen',
    'method.step3.title': 'Nahtlose Implementierung',
    'method.step3.desc': 'Präzise Bereitstellung mit minimaler Störung und umfassender Teamschulung.',
    'method.step3.duration': '6-12 Wochen',
    'method.step4.title': 'Evolution & Verbesserung',
    'method.step4.desc': 'Kontinuierliche Optimierung und Verbesserung, während Ihre KI-Systeme mit Ihrem Unternehmen wachsen.',
    'method.step4.duration': 'Laufend',
    'method.learn': 'Mehr über unseren Prozess erfahren',
    
    // Metrics
    'metrics.projects': 'Projekte geliefert',
    'metrics.satisfaction': 'Kundenzufriedenheit',
    'metrics.cost': 'Kostenreduzierung vs. große Unternehmen',
    
    // Final CTA
    'final.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'final.subtitle': 'Vereinbaren Sie eine personalisierte Beratung und entdecken Sie, wie KI Ihre Abläufe revolutionieren kann.',
    'final.cta': 'Buchen Sie jetzt Ihr KI-Strategiegespräch',
    
    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Loslegen',
    'common.bookCall': 'Ihren Anruf buchen',
    'common.visitWebsite': 'Website besuchen'
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
    
    // Header
    'header.cta': 'Réserver appel stratégique IA',
    
    // Sections
    'section.transforming': 'Transformer les entreprises dans le monde entier',
    'section.method': 'La Méthode EA',
    'section.advantage': 'L\'avantage EA Solutions',
    'section.powered': 'Alimenté par une technologie de pointe',
    'section.ready': 'Prêt à transformer votre entreprise?',
    
    // Features
    'feature.bespoke': 'Radicalement sur mesure',
    'feature.bespoke.desc': 'Chaque solution est conçue sur mesure pour vos besoins spécifiques et les exigences de votre secteur.',
    'feature.expertise': 'Expertise d\'élite',
    'feature.expertise.desc': 'Ingénieurs IA de classe mondiale et stratèges avec une connaissance approfondie de l\'industrie et des résultats prouvés.',
    'feature.impact': 'Impact mesurable',
    'feature.impact.desc': 'Améliorations garanties en efficacité, réduction des coûts et excellence opérationnelle.',
    
    // Industries
    'industry.title': 'Solutions spécifiques au secteur',
    'industry.subtitle': 'Systèmes intelligents conçus pour les exigences uniques de votre industrie.',
    'industry.gastronomy': 'Gastronomie & Hôtellerie',
    'industry.gastronomy.desc': 'Systèmes intelligents pour des expériences client fluides',
    'industry.industrial': 'Industrie & Fabrication',
    'industry.industrial.desc': 'Automatisation intelligente pour l\'excellence opérationnelle',
    'industry.finance': 'Finance & Sécurité',
    'industry.finance.desc': 'Systèmes avancés de protection et de conformité',
    'industry.finance.status': 'En recherche',
    'industry.smart': 'Vie intelligente & IA personnelle',
    'industry.smart.desc': 'Environnements intelligents qui s\'adaptent à vous',
    'industry.healthcare': 'Santé',
    'industry.healthcare.desc': 'Soins de précision grâce à des systèmes intelligents',
    'industry.retail': 'Commerce de détail & E-commerce',
    'industry.retail.desc': 'Expériences personnalisées qui stimulent la croissance',
    'industry.retail.status': 'En recherche',
    'industry.explore': 'Explorer',
    'industry.coming': 'Bientôt disponible',
    
    // Hotel Showcase
    'hotel.title': 'Hotel am Kochbrunnen: Transformation IA complète',
    'hotel.subtitle': 'Notre projet phare d\'hôtellerie présentant 8 piliers IA intégrés qui ont transformé les opérations traditionnelles en un écosystème intelligent.',
    'hotel.visit': 'Visiter Hotel am Kochbrunnen',
    
    // Pillars
    'pillar.journey.title': 'Parcours client sans friction',
    'pillar.journey.desc': 'Enregistrement/départ sans clé via QR & NFC, concierge IA disponible partout',
    'pillar.journey.metric': '99,9% de disponibilité',
    'pillar.backoffice.title': 'Back office automatisé',
    'pillar.backoffice.desc': 'Générateur de factures électroniques, synchronisation PMS & OTA en temps réel, tarification dynamique',
    'pillar.backoffice.metric': '40h/mois économisées',
    'pillar.building.title': 'Contrôle intelligent du bâtiment',
    'pillar.building.desc': 'CVC basé sur l\'occupation IoT, contrôle vocal + application mobile',
    'pillar.building.metric': '25% d\'économies d\'énergie',
    'pillar.security.title': 'Sécurité & Conformité',
    'pillar.security.desc': 'Réseau zéro confiance, lac de données conforme RGPD avec masquage PII',
    'pillar.security.metric': 'Score Lighthouse 99',
    'pillar.revenue.title': 'IA génératrice de revenus',
    'pillar.revenue.desc': 'Système RAG contextuel, moteur de vente incitative, analyse de sentiment',
    'pillar.revenue.metric': 'Revenus augmentés',
    'pillar.booking.title': 'Réservation fluide',
    'pillar.booking.desc': 'Site web mobile-first, réservation en un clic avec Apple/Google Pay',
    'pillar.booking.metric': 'Réservations directes en hausse',
    'pillar.staff.title': 'Orchestration du personnel',
    'pillar.staff.desc': 'Itinéraires de ménage pilotés par IA, tickets de maintenance automatisés',
    'pillar.staff.metric': 'Flux de travail optimisés',
    'pillar.architecture.title': 'Architecture évolutive',
    'pillar.architecture.desc': 'Microservices conteneurisés, GitOps CI/CD, récupération après sinistre',
    'pillar.architecture.metric': 'À l\'épreuve du futur',
    
    // Websites Section
    'websites.title': 'Sites Web et applications alimentés par l\'IA',
    'websites.subtitle': 'Nous construisons des sites web et applications intelligents avec 40-60% d\'économies par rapport aux grandes entreprises, sans compromettre la qualité ou l\'innovation.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'Plateforme d\'école de piano intégrée à l\'IA',
    'websites.piano.desc': 'Site web complet avec système de réservation alimenté par l\'IA, créateur d\'horaires intelligent et gestion automatisée des étudiants. Propose une planification intelligente des cours et des parcours d\'apprentissage personnalisés.',
    'websites.piano.visit': 'Visiter le site web',
    'websites.development.title': 'Développement intelligent',
    'websites.development.desc': 'Processus de développement assisté par IA qui réduit les coûts tout en maintenant une qualité de niveau entreprise.',
    'websites.design.title': 'Design intelligent',
    'websites.design.desc': 'Systèmes de design alimentés par l\'IA qui créent automatiquement de belles interfaces centrées sur l\'utilisateur.',
    
    // Method
    'method.subtitle': 'Notre méthodologie éprouvée assure une transformation IA fluide.',
    'method.step1.title': 'Plongée profonde et découverte',
    'method.step1.desc': 'Nous nous intégrons à votre équipe pour cartographier chaque processus et identifier les opportunités de transformation.',
    'method.step1.duration': '2-4 semaines',
    'method.step2.title': 'Conception architecturale',
    'method.step2.desc': 'Création de plan directeur IA personnalisé avec sélection technologique optimale pour vos besoins spécifiques.',
    'method.step2.duration': '3-5 semaines',
    'method.step3.title': 'Implémentation fluide',
    'method.step3.desc': 'Déploiement précis avec perturbation minimale et formation complète de l\'équipe.',
    'method.step3.duration': '6-12 semaines',
    'method.step4.title': 'Évolution et amélioration',
    'method.step4.desc': 'Optimisation continue et amélioration à mesure que vos systèmes IA évoluent avec votre entreprise.',
    'method.step4.duration': 'En cours',
    'method.learn': 'En savoir plus sur notre processus',
    
    // Metrics
    'metrics.projects': 'Projets livrés',
    'metrics.satisfaction': 'Satisfaction client',
    'metrics.cost': 'Réduction des coûts vs grandes entreprises',
    
    // Final CTA
    'final.title': 'Prêt à transformer votre entreprise?',
    'final.subtitle': 'Planifiez une consultation personnalisée et découvrez comment l\'IA peut révolutionner vos opérations.',
    'final.cta': 'Réservez votre appel stratégique IA maintenant',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.bookCall': 'Réserver votre appel',
    'common.visitWebsite': 'Visiter le site web'
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
    
    // Header
    'header.cta': 'احجز مكالمة استراتيجية الذكاء الاصطناعي',
    
    // Sections
    'section.transforming': 'تحويل الأعمال في جميع أنحاء العالم',
    'section.method': 'طريقة EA',
    'section.advantage': 'ميزة EA Solutions',
    'section.powered': 'مدعوم بتكنولوجيا رائدة',
    'section.ready': 'مستعد لتحويل عملك؟',
    
    // Features
    'feature.bespoke': 'مخصص بشكل جذري',
    'feature.bespoke.desc': 'كل حل مصمم خصيصاً لاحتياجاتك المحددة ومتطلبات صناعتك.',
    'feature.expertise': 'خبرة النخبة',
    'feature.expertise.desc': 'مهندسو ذكاء اصطناعي من الطراز العالمي واستراتيجيون بمعرفة عميقة بالصناعة ونتائج مثبتة.',
    'feature.impact': 'تأثير قابل للقياس',
    'feature.impact.desc': 'تحسينات مضمونة في الكفاءة وتقليل التكاليف والتميز التشغيلي.',
    
    // Industries
    'industry.title': 'حلول خاصة بالقطاع',
    'industry.subtitle': 'أنظمة ذكية مصممة لمتطلبات صناعتك الفريدة.',
    'industry.gastronomy': 'فن الطهي والضيافة',
    'industry.gastronomy.desc': 'أنظمة ذكية لتجارب ضيوف سلسة',
    'industry.industrial': 'الصناعة والتصنيع',
    'industry.industrial.desc': 'أتمتة ذكية للتميز التشغيلي',
    'industry.finance': 'المالية والأمان',
    'industry.finance.desc': 'أنظمة حماية وامتثال متقدمة',
    'industry.finance.status': 'قيد البحث',
    'industry.smart': 'الحياة الذكية والذكاء الاصطناعي الشخصي',
    'industry.smart.desc': 'بيئات ذكية تتكيف معك',
    'industry.healthcare': 'الرعاية الصحية',
    'industry.healthcare.desc': 'رعاية دقيقة من خلال أنظمة ذكية',
    'industry.retail': 'التجارة الإلكترونية والتجزئة',
    'industry.retail.desc': 'تجارب شخصية تدفع النمو',
    'industry.retail.status': 'قيد البحث',
    'industry.explore': 'استكشف',
    'industry.coming': 'قريباً',
    
    // Hotel Showcase
    'hotel.title': 'Hotel am Kochbrunnen: تحول كامل للذكاء الاصطناعي',
    'hotel.subtitle': 'مشروعنا الرائد في الضيافة يعرض 8 أعمدة ذكاء اصطناعي متكاملة حولت العمليات التقليدية إلى نظام بيئي ذكي.',
    'hotel.visit': 'زيارة Hotel am Kochbrunnen',
    
    // Pillars
    'pillar.journey.title': 'رحلة ضيف بلا احتكاك',
    'pillar.journey.desc': 'تسجيل دخول/خروج بدون مفاتيح عبر QR و NFC، كونسيرج ذكي متاح في كل مكان',
    'pillar.journey.metric': '99.9% وقت تشغيل',
    'pillar.backoffice.title': 'مكتب خلفي آلي',
    'pillar.backoffice.desc': 'مولد فواتير إلكترونية، مزامنة PMS و OTA في الوقت الفعلي، تسعير ديناميكي',
    'pillar.backoffice.metric': '40 ساعة/شهر موفرة',
    'pillar.building.title': 'تحكم ذكي في المبنى',
    'pillar.building.desc': 'HVAC قائم على إشغال IoT، تحكم صوتي + تطبيق محمول',
    'pillar.building.metric': '25% توفير في الطاقة',
    'pillar.security.title': 'الأمان والامتثال',
    'pillar.security.desc': 'شبكة عدم الثقة، بحيرة بيانات متوافقة مع GDPR مع إخفاء PII',
    'pillar.security.metric': 'نقاط Lighthouse 99',
    'pillar.revenue.title': 'ذكاء اصطناعي مدر للإيرادات',
    'pillar.revenue.desc': 'نظام RAG واعي بالسياق، محرك بيع إضافي، تحليل المشاعر',
    'pillar.revenue.metric': 'إيرادات متزايدة',
    'pillar.booking.title': 'حجز سلس',
    'pillar.booking.desc': 'موقع ويب محمول أولاً، حجز بنقرة واحدة مع Apple/Google Pay',
    'pillar.booking.metric': 'الحجوزات المباشرة ارتفعت',
    'pillar.staff.title': 'تنسيق الموظفين',
    'pillar.staff.desc': 'مسارات تنظيف مدفوعة بالذكاء الاصطناعي، تذاكر صيانة آلية',
    'pillar.staff.metric': 'تدفقات عمل محسنة',
    'pillar.architecture.title': 'هندسة قابلة للتوسع',
    'pillar.architecture.desc': 'خدمات مصغرة محتواة، GitOps CI/CD، استعادة الكوارث',
    'pillar.architecture.metric': 'مقاوم للمستقبل',
    
    // Websites Section
    'websites.title': 'مواقع ويب وتطبيقات مدعومة بالذكاء الاصطناعي',
    'websites.subtitle': 'نحن نبني مواقع ويب وتطبيقات ذكية بتوفير 40-60% في التكاليف مقارنة بالشركات الكبيرة، دون التنازل عن الجودة أو الابتكار.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'منصة مدرسة بيانو متكاملة مع الذكاء الاصطناعي',
    'websites.piano.desc': 'موقع ويب كامل مع نظام حجز مدعوم بالذكاء الاصطناعي، منشئ جدولة ذكي، وإدارة طلاب آلية. يتميز بتخطيط دروس ذكي ومسارات تعلم شخصية.',
    'websites.piano.visit': 'زيارة الموقع',
    'websites.development.title': 'تطوير ذكي',
    'websites.development.desc': 'عملية تطوير بمساعدة الذكاء الاصطناعي تقلل التكاليف مع الحفاظ على جودة مستوى المؤسسة.',
    'websites.design.title': 'تصميم ذكي',
    'websites.design.desc': 'أنظمة تصميم مدعومة بالذكاء الاصطناعي تنشئ واجهات جميلة ومتمركزة حول المستخدم تلقائياً.',
    
    // Method
    'method.subtitle': 'منهجيتنا المثبتة تضمن تحولاً سلساً للذكاء الاصطناعي.',
    'method.step1.title': 'غوص عميق واكتشاف',
    'method.step1.desc': 'نحن ندمج مع فريقك لرسم كل عملية وتحديد فرص التحول.',
    'method.step1.duration': '2-4 أسابيع',
    'method.step2.title': 'التصميم المعماري',
    'method.step2.desc': 'إنشاء مخطط ذكاء اصطناعي مخصص مع اختيار تكنولوجي مثالي لاحتياجاتك المحددة.',
    'method.step2.duration': '3-5 أسابيع',
    'method.step3.title': 'تنفيذ سلس',
    'method.step3.desc': 'نشر دقيق مع أقل قدر من الاضطراب وتدريب شامل للفريق.',
    'method.step3.duration': '6-12 أسبوع',
    'method.step4.title': 'التطور والتحسين',
    'method.step4.desc': 'تحسين مستمر وتعزيز مع نمو أنظمة الذكاء الاصطناعي مع عملك.',
    'method.step4.duration': 'مستمر',
    'method.learn': 'تعلم المزيد عن عمليتنا',
    
    // Metrics
    'metrics.projects': 'المشاريع المسلمة',
    'metrics.satisfaction': 'رضا العملاء',
    'metrics.cost': 'تقليل التكلفة مقابل الشركات الكبيرة',
    
    // Final CTA
    'final.title': 'مستعد لتحويل عملك؟',
    'final.subtitle': 'جدولة استشارة شخصية واكتشف كيف يمكن للذكاء الاصطناعي أن يثور عملياتك.',
    'final.cta': 'احجز مكالمة استراتيجية الذكاء الاصطناعي الآن',
    
    // Common
    'common.learnMore': 'تعلم المزيد',
    'common.getStarted': 'ابدأ',
    'common.bookCall': 'احجز مكالمتك',
    'common.visitWebsite': 'زيارة الموقع'
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
    
    // Header
    'header.cta': 'Reservar llamada estratégica IA',
    
    // Sections
    'section.transforming': 'Transformando negocios en todo el mundo',
    'section.method': 'El Método EA',
    'section.advantage': 'La ventaja de EA Solutions',
    'section.powered': 'Impulsado por tecnología líder',
    'section.ready': '¿Listo para transformar tu negocio?',
    
    // Features
    'feature.bespoke': 'Radicalmente personalizado',
    'feature.bespoke.desc': 'Cada solución está diseñada a medida para tus necesidades específicas y requisitos de la industria.',
    'feature.expertise': 'Experiencia de élite',
    'feature.expertise.desc': 'Ingenieros de IA de clase mundial y estrategas con conocimiento profundo de la industria y resultados probados.',
    'feature.impact': 'Impacto medible',
    'feature.impact.desc': 'Mejoras garantizadas en eficiencia, reducción de costos y excelencia operacional.',
    
    // Industries
    'industry.title': 'Soluciones específicas del sector',
    'industry.subtitle': 'Sistemas inteligentes diseñados para los requisitos únicos de tu industria.',
    'industry.gastronomy': 'Gastronomía y Hospitalidad',
    'industry.gastronomy.desc': 'Sistemas inteligentes para experiencias de huéspedes fluidas',
    'industry.industrial': 'Industrial y Manufactura',
    'industry.industrial.desc': 'Automatización inteligente para excelencia operacional',
    'industry.finance': 'Finanzas y Seguridad',
    'industry.finance.desc': 'Sistemas avanzados de protección y cumplimiento',
    'industry.finance.status': 'En investigación',
    'industry.smart': 'Vida inteligente e IA personal',
    'industry.smart.desc': 'Entornos inteligentes que se adaptan a ti',
    'industry.healthcare': 'Salud',
    'industry.healthcare.desc': 'Atención de precisión a través de sistemas inteligentes',
    'industry.retail': 'Retail y E-commerce',
    'industry.retail.desc': 'Experiencias personalizadas que impulsan el crecimiento',
    'industry.retail.status': 'En investigación',
    'industry.explore': 'Explorar',
    'industry.coming': 'Próximamente',
    
    // Hotel Showcase
    'hotel.title': 'Hotel am Kochbrunnen: Transformación IA completa',
    'hotel.subtitle': 'Nuestro proyecto insignia de hospitalidad mostrando 8 pilares de IA integrados que transformaron las operaciones tradicionales en un ecosistema inteligente.',
    'hotel.visit': 'Visitar Hotel am Kochbrunnen',
    
    // Pillars
    'pillar.journey.title': 'Viaje del huésped sin fricción',
    'pillar.journey.desc': 'Check-in/out sin llaves vía QR y NFC, conserje IA disponible en todas partes',
    'pillar.journey.metric': '99.9% tiempo de actividad',
    'pillar.backoffice.title': 'Back office automatizado',
    'pillar.backoffice.desc': 'Generador de facturas electrónicas, sincronización PMS y OTA en tiempo real, precios dinámicos',
    'pillar.backoffice.metric': '40h/mes ahorradas',
    'pillar.building.title': 'Control inteligente del edificio',
    'pillar.building.desc': 'HVAC basado en ocupación IoT, control de voz + aplicación móvil',
    'pillar.building.metric': '25% ahorro de energía',
    'pillar.security.title': 'Seguridad y cumplimiento',
    'pillar.security.desc': 'Red de confianza cero, lago de datos compatible con GDPR con enmascaramiento PII',
    'pillar.security.metric': 'Puntuación Lighthouse 99',
    'pillar.revenue.title': 'IA generadora de ingresos',
    'pillar.revenue.desc': 'Sistema RAG consciente del contexto, motor de venta adicional, análisis de sentimientos',
    'pillar.revenue.metric': 'Ingresos aumentados',
    'pillar.booking.title': 'Reserva fluida',
    'pillar.booking.desc': 'Sitio web móvil primero, reserva de un toque con Apple/Google Pay',
    'pillar.booking.metric': 'Reservas directas subieron',
    'pillar.staff.title': 'Orquestación del personal',
    'pillar.staff.desc': 'Rutas de limpieza impulsadas por IA, tickets de mantenimiento automatizados',
    'pillar.staff.metric': 'Flujos de trabajo optimizados',
    'pillar.architecture.title': 'Arquitectura escalable',
    'pillar.architecture.desc': 'Microservicios en contenedores, GitOps CI/CD, recuperación de desastres',
    'pillar.architecture.metric': 'A prueba de futuro',
    
    // Websites Section
    'websites.title': 'Sitios web y aplicaciones impulsados por IA',
    'websites.subtitle': 'Construimos sitios web y aplicaciones inteligentes con 40-60% de ahorro en costos comparado con grandes empresas, sin comprometer calidad o innovación.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'Plataforma de escuela de piano integrada con IA',
    'websites.piano.desc': 'Sitio web completo con sistema de reservas impulsado por IA, creador de horarios inteligente y gestión automatizada de estudiantes. Presenta planificación inteligente de lecciones y rutas de aprendizaje personalizadas.',
    'websites.piano.visit': 'Visitar sitio web',
    'websites.development.title': 'Desarrollo inteligente',
    'websites.development.desc': 'Proceso de desarrollo asistido por IA que reduce costos mientras mantiene calidad de nivel empresarial.',
    'websites.design.title': 'Diseño inteligente',
    'websites.design.desc': 'Sistemas de diseño impulsados por IA que crean automáticamente interfaces hermosas y centradas en el usuario.',
    
    // Method
    'method.subtitle': 'Nuestra metodología probada asegura una transformación IA fluida.',
    'method.step1.title': 'Inmersión profunda y descubrimiento',
    'method.step1.desc': 'Nos integramos con tu equipo para mapear cada proceso e identificar oportunidades de transformación.',
    'method.step1.duration': '2-4 semanas',
    'method.step2.title': 'Diseño arquitectónico',
    'method.step2.desc': 'Creación de plano de IA personalizado con selección tecnológica óptima para tus necesidades específicas.',
    'method.step2.duration': '3-5 semanas',
    'method.step3.title': 'Implementación fluida',
    'method.step3.desc': 'Despliegue preciso con mínima interrupción y entrenamiento integral del equipo.',
    'method.step3.duration': '6-12 semanas',
    'method.step4.title': 'Evolución y mejora',
    'method.step4.desc': 'Optimización continua y mejora mientras tus sistemas de IA crecen con tu negocio.',
    'method.step4.duration': 'Continuo',
    'method.learn': 'Aprende más sobre nuestro proceso',
    
    // Metrics
    'metrics.projects': 'Proyectos entregados',
    'metrics.satisfaction': 'Satisfacción del cliente',
    'metrics.cost': 'Reducción de costos vs grandes empresas',
    
    // Final CTA
    'final.title': '¿Listo para transformar tu negocio?',
    'final.subtitle': 'Programa una consulta personalizada y descubre cómo la IA puede revolucionar tus operaciones.',
    'final.cta': 'Reserva tu llamada estratégica de IA ahora',
    
    // Common
    'common.learnMore': 'Aprende más',
    'common.getStarted': 'Empezar',
    'common.bookCall': 'Reserva tu llamada',
    'common.visitWebsite': 'Visitar sitio web'
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
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <Globe className="h-3 w-3 text-gray-600 dark:text-gray-400" />
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown className={`h-3 w-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full flex items-center space-x-2 px-3 py-1.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLanguage.code === language.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-sm">{language.flag}</span>
              <span className="text-xs font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;