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
    
    // Header CTA
    'header.cta': 'Book Your AI Strategy Call',
    
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
    
    // Metrics
    'metrics.projects': 'Projects Delivered',
    'metrics.satisfaction': 'Client Satisfaction',
    'metrics.cost': 'Cost Reduction vs Big Companies',
    
    // Hotel am Kochbrunnen Section
    'hotel.title': 'Hotel am Kochbrunnen: Complete AI Transformation',
    'hotel.subtitle': 'Our flagship hospitality project showcasing 8 integrated AI pillars that transformed traditional operations into an intelligent ecosystem.',
    'hotel.visit': 'Visit Hotel am Kochbrunnen',
    
    // Hotel Pillars
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
    
    // AI Websites Section
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
    
    // Industry Solutions
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
    
    // EA Method
    'method.title': 'Four Stages to AI Excellence',
    'method.subtitle': 'Our comprehensive approach ensures every aspect of your AI implementation is carefully planned, expertly executed, and continuously optimized for maximum impact.',
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
    
    // Features
    'feature.bespoke': 'Radically Bespoke',
    'feature.bespoke.desc': 'Every solution is custom-architected for your specific needs and industry requirements.',
    'feature.expertise': 'Elite Expertise',
    'feature.expertise.desc': 'World-class AI engineers and strategists with deep industry knowledge and proven results.',
    'feature.impact': 'Measurable Impact',
    'feature.impact.desc': 'Guaranteed improvements in efficiency, cost reduction, and operational excellence.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.bookCall': 'Book Your Call',
    'common.visitWebsite': 'Visit Website',
    'common.scheduleDemo': 'Schedule Demo',
    'common.downloadGuide': 'Download Guide',
    
    // Final CTA
    'final.title': 'Ready to Transform Your Business?',
    'final.subtitle': 'Schedule a personalized consultation and discover how AI can revolutionize your operations.',
    'final.cta': 'Book Your AI Strategy Call Now'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'Die EA-Methode',
    'nav.why': 'Warum EA Solutions?',
    'nav.contact': 'Kontakt',
    
    // Header CTA
    'header.cta': 'Buchen Sie Ihr KI-Strategiegespräch',
    
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
    
    // Metrics
    'metrics.projects': 'Projekte Abgeschlossen',
    'metrics.satisfaction': 'Kundenzufriedenheit',
    'metrics.cost': 'Kosteneinsparung vs. Große Unternehmen',
    
    // Hotel am Kochbrunnen Section
    'hotel.title': 'Hotel am Kochbrunnen: Komplette KI-Transformation',
    'hotel.subtitle': 'Unser Flaggschiff-Hospitality-Projekt mit 8 integrierten KI-Säulen, das traditionelle Abläufe in ein intelligentes Ökosystem verwandelt hat.',
    'hotel.visit': 'Hotel am Kochbrunnen besuchen',
    
    // Hotel Pillars
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
    
    // AI Websites Section
    'websites.title': 'KI-gestützte Websites & Apps',
    'websites.subtitle': 'Wir entwickeln intelligente Websites und Anwendungen mit 40-60% Kosteneinsparungen gegenüber großen Unternehmen, ohne Kompromisse bei Qualität oder Innovation.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'KI-integrierte Klavierschul-Plattform',
    'websites.piano.desc': 'Komplette Website mit KI-gestütztem Buchungssystem, intelligentem Stundenplan-Ersteller und automatisiertem Schülermanagement. Mit intelligenter Unterrichtsplanung und personalisierten Lernpfaden.',
    'websites.piano.visit': 'Website besuchen',
    'websites.development.title': 'Intelligente Entwicklung',
    'websites.development.desc': 'KI-unterstützter Entwicklungsprozess, der Kosten reduziert und gleichzeitig Enterprise-Qualität beibehält.',
    'websites.design.title': 'Intelligentes Design',
    'websites.design.desc': 'KI-gestützte Design-Systeme, die automatisch schöne, benutzerzentrierte Interfaces erstellen.',
    
    // Industry Solutions
    'industry.title': 'Branchenspezifische Lösungen',
    'industry.subtitle': 'Intelligente Systeme, die für die einzigartigen Anforderungen Ihrer Branche entwickelt wurden.',
    'industry.gastronomy': 'Gastronomie & Gastgewerbe',
    'industry.gastronomy.desc': 'Intelligente Systeme für nahtlose Gästeerlebnisse',
    'industry.industrial': 'Industrie & Fertigung',
    'industry.industrial.desc': 'Intelligente Automatisierung für operative Exzellenz',
    'industry.finance': 'Finanzen & Sicherheit',
    'industry.finance.desc': 'Fortschrittliche Schutz- und Compliance-Systeme',
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
    
    // EA Method
    'method.title': 'Vier Stufen zur KI-Exzellenz',
    'method.subtitle': 'Unser umfassender Ansatz stellt sicher, dass jeder Aspekt Ihrer KI-Implementierung sorgfältig geplant, fachmännisch ausgeführt und kontinuierlich für maximale Wirkung optimiert wird.',
    'method.step1.title': 'Tiefgreifende Analyse & Entdeckung',
    'method.step1.desc': 'Wir arbeiten mit Ihrem Team zusammen, um jeden Prozess zu kartieren und Transformationsmöglichkeiten zu identifizieren.',
    'method.step1.duration': '2-4 Wochen',
    'method.step2.title': 'Architektonisches Design',
    'method.step2.desc': 'Maßgeschneiderte KI-Blueprint-Erstellung mit optimaler Technologieauswahl für Ihre spezifischen Bedürfnisse.',
    'method.step2.duration': '3-5 Wochen',
    'method.step3.title': 'Nahtlose Implementierung',
    'method.step3.desc': 'Präzise Bereitstellung mit minimaler Störung und umfassendem Team-Training.',
    'method.step3.duration': '6-12 Wochen',
    'method.step4.title': 'Evolution & Verbesserung',
    'method.step4.desc': 'Kontinuierliche Optimierung und Verbesserung, während Ihre KI-Systeme mit Ihrem Unternehmen wachsen.',
    'method.step4.duration': 'Laufend',
    'method.learn': 'Mehr über unseren Prozess erfahren',
    
    // Features
    'feature.bespoke': 'Radikal maßgeschneidert',
    'feature.bespoke.desc': 'Jede Lösung wird speziell für Ihre spezifischen Bedürfnisse und Branchenanforderungen entwickelt.',
    'feature.expertise': 'Elite-Expertise',
    'feature.expertise.desc': 'Weltklasse-KI-Ingenieure und Strategen mit tiefem Branchenwissen und bewährten Ergebnissen.',
    'feature.impact': 'Messbare Auswirkungen',
    'feature.impact.desc': 'Garantierte Verbesserungen in Effizienz, Kostensenkung und operativer Exzellenz.',
    
    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Loslegen',
    'common.bookCall': 'Ihren Anruf buchen',
    'common.visitWebsite': 'Website besuchen',
    'common.scheduleDemo': 'Demo planen',
    'common.downloadGuide': 'Leitfaden herunterladen',
    
    // Final CTA
    'final.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'final.subtitle': 'Planen Sie eine personalisierte Beratung und entdecken Sie, wie KI Ihre Abläufe revolutionieren kann.',
    'final.cta': 'Buchen Sie jetzt Ihr KI-Strategiegespräch'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.solutions': 'Solutions',
    'nav.method': 'La Méthode EA',
    'nav.why': 'Pourquoi EA Solutions?',
    'nav.contact': 'Contact',
    
    // Header CTA
    'header.cta': 'Réservez votre appel stratégique IA',
    
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
    
    // Metrics
    'metrics.projects': 'Projets Livrés',
    'metrics.satisfaction': 'Satisfaction Client',
    'metrics.cost': 'Réduction des Coûts vs Grandes Entreprises',
    
    // Hotel am Kochbrunnen Section
    'hotel.title': 'Hotel am Kochbrunnen: Transformation IA Complète',
    'hotel.subtitle': 'Notre projet phare d\'hospitalité présentant 8 piliers IA intégrés qui ont transformé les opérations traditionnelles en un écosystème intelligent.',
    'hotel.visit': 'Visiter Hotel am Kochbrunnen',
    
    // Hotel Pillars
    'pillar.journey.title': 'Parcours Client Sans Friction',
    'pillar.journey.desc': 'Enregistrement/départ sans clé via QR & NFC, concierge IA disponible partout',
    'pillar.journey.metric': '99,9% de disponibilité',
    
    'pillar.backoffice.title': 'Back Office Automatisé',
    'pillar.backoffice.desc': 'Générateur e-factures, sync PMS & OTA en temps réel, tarification dynamique',
    'pillar.backoffice.metric': '40h/mois économisées',
    
    'pillar.building.title': 'Contrôle Intelligent du Bâtiment',
    'pillar.building.desc': 'CVC basé sur l\'occupation IoT, contrôle vocal + app mobile',
    'pillar.building.metric': '25% d\'économies d\'énergie',
    
    'pillar.security.title': 'Sécurité & Conformité',
    'pillar.security.desc': 'Réseau zéro confiance, lac de données conforme RGPD avec masquage PII',
    'pillar.security.metric': 'Score Lighthouse 99',
    
    'pillar.revenue.title': 'IA Génératrice de Revenus',
    'pillar.revenue.desc': 'Système RAG contextuel, moteur de vente incitative, analyse de sentiment',
    'pillar.revenue.metric': 'Revenus augmentés',
    
    'pillar.booking.title': 'Réservation Transparente',
    'pillar.booking.desc': 'Site web mobile-first, réservation en un clic avec Apple/Google Pay',
    'pillar.booking.metric': 'Réservations directes en hausse',
    
    'pillar.staff.title': 'Orchestration du Personnel',
    'pillar.staff.desc': 'Routes de ménage pilotées par IA, tickets de maintenance automatisés',
    'pillar.staff.metric': 'Flux de travail optimisés',
    
    'pillar.architecture.title': 'Architecture Évolutive',
    'pillar.architecture.desc': 'Microservices conteneurisés, GitOps CI/CD, récupération après sinistre',
    'pillar.architecture.metric': 'À l\'épreuve du futur',
    
    // AI Websites Section
    'websites.title': 'Sites Web et Apps Alimentés par IA',
    'websites.subtitle': 'Nous construisons des sites web et applications intelligents avec 40-60% d\'économies par rapport aux grandes entreprises, sans compromettre la qualité ou l\'innovation.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'Plateforme d\'École de Piano Intégrée IA',
    'websites.piano.desc': 'Site web complet avec système de réservation alimenté par IA, créateur d\'horaires intelligent et gestion automatisée des étudiants. Avec planification de cours intelligente et parcours d\'apprentissage personnalisés.',
    'websites.piano.visit': 'Visiter le site web',
    'websites.development.title': 'Développement Intelligent',
    'websites.development.desc': 'Processus de développement assisté par IA qui réduit les coûts tout en maintenant une qualité de niveau entreprise.',
    'websites.design.title': 'Design Intelligent',
    'websites.design.desc': 'Systèmes de design alimentés par IA qui créent automatiquement de belles interfaces centrées sur l\'utilisateur.',
    
    // Industry Solutions
    'industry.title': 'Solutions Spécifiques par Secteur',
    'industry.subtitle': 'Systèmes intelligents conçus pour les exigences uniques de votre industrie.',
    'industry.gastronomy': 'Gastronomie & Hôtellerie',
    'industry.gastronomy.desc': 'Systèmes intelligents pour des expériences client transparentes',
    'industry.industrial': 'Industrie & Fabrication',
    'industry.industrial.desc': 'Automatisation intelligente pour l\'excellence opérationnelle',
    'industry.finance': 'Finance & Sécurité',
    'industry.finance.desc': 'Systèmes avancés de protection et conformité',
    'industry.finance.status': 'En Recherche',
    'industry.smart': 'Vie Intelligente & IA Personnelle',
    'industry.smart.desc': 'Environnements intelligents qui s\'adaptent à vous',
    'industry.healthcare': 'Santé',
    'industry.healthcare.desc': 'Soins de précision grâce aux systèmes intelligents',
    'industry.retail': 'Commerce de Détail & E-commerce',
    'industry.retail.desc': 'Expériences personnalisées qui stimulent la croissance',
    'industry.retail.status': 'En Recherche',
    'industry.explore': 'Explorer',
    'industry.coming': 'Bientôt Disponible',
    
    // EA Method
    'method.title': 'Quatre Étapes vers l\'Excellence IA',
    'method.subtitle': 'Notre approche complète garantit que chaque aspect de votre implémentation IA est soigneusement planifié, expertement exécuté et continuellement optimisé pour un impact maximum.',
    'method.step1.title': 'Plongée Profonde & Découverte',
    'method.step1.desc': 'Nous nous intégrons à votre équipe pour cartographier chaque processus et identifier les opportunités de transformation.',
    'method.step1.duration': '2-4 semaines',
    'method.step2.title': 'Conception Architecturale',
    'method.step2.desc': 'Création de blueprint IA personnalisé avec sélection technologique optimale pour vos besoins spécifiques.',
    'method.step2.duration': '3-5 semaines',
    'method.step3.title': 'Implémentation Transparente',
    'method.step3.desc': 'Déploiement précis avec perturbation minimale et formation complète de l\'équipe.',
    'method.step3.duration': '6-12 semaines',
    'method.step4.title': 'Évolution & Amélioration',
    'method.step4.desc': 'Optimisation continue et amélioration à mesure que vos systèmes IA évoluent avec votre entreprise.',
    'method.step4.duration': 'En cours',
    'method.learn': 'En savoir plus sur notre processus',
    
    // Features
    'feature.bespoke': 'Radicalement sur mesure',
    'feature.bespoke.desc': 'Chaque solution est conçue sur mesure pour vos besoins spécifiques et exigences sectorielles.',
    'feature.expertise': 'Expertise d\'élite',
    'feature.expertise.desc': 'Ingénieurs IA et stratèges de classe mondiale avec une connaissance approfondie de l\'industrie et des résultats prouvés.',
    'feature.impact': 'Impact mesurable',
    'feature.impact.desc': 'Améliorations garanties en efficacité, réduction des coûts et excellence opérationnelle.',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.bookCall': 'Réserver votre appel',
    'common.visitWebsite': 'Visiter le site web',
    'common.scheduleDemo': 'Planifier une démo',
    'common.downloadGuide': 'Télécharger le guide',
    
    // Final CTA
    'final.title': 'Prêt à transformer votre entreprise?',
    'final.subtitle': 'Planifiez une consultation personnalisée et découvrez comment l\'IA peut révolutionner vos opérations.',
    'final.cta': 'Réservez votre appel stratégique IA maintenant'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.method': 'طريقة EA',
    'nav.why': 'لماذا EA Solutions؟',
    'nav.contact': 'اتصل بنا',
    
    // Header CTA
    'header.cta': 'احجز مكالمة استراتيجية الذكاء الاصطناعي',
    
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
    
    // Metrics
    'metrics.projects': 'المشاريع المنجزة',
    'metrics.satisfaction': 'رضا العملاء',
    'metrics.cost': 'تقليل التكاليف مقابل الشركات الكبيرة',
    
    // Hotel am Kochbrunnen Section
    'hotel.title': 'فندق أم كوخبرونين: تحول كامل بالذكاء الاصطناعي',
    'hotel.subtitle': 'مشروعنا الرائد في الضيافة يعرض 8 أعمدة ذكاء اصطناعي متكاملة حولت العمليات التقليدية إلى نظام بيئي ذكي.',
    'hotel.visit': 'زيارة فندق أم كوخبرونين',
    
    // Hotel Pillars
    'pillar.journey.title': 'رحلة ضيوف بلا احتكاك',
    'pillar.journey.desc': 'تسجيل دخول/خروج بدون مفاتيح عبر QR و NFC، كونسيرج ذكي متاح في كل مكان',
    'pillar.journey.metric': '99.9% وقت تشغيل',
    
    'pillar.backoffice.title': 'مكتب خلفي آلي',
    'pillar.backoffice.desc': 'مولد فواتير إلكترونية، مزامنة PMS و OTA في الوقت الفعلي، تسعير ديناميكي',
    'pillar.backoffice.metric': '40 ساعة/شهر موفرة',
    
    'pillar.building.title': 'تحكم ذكي في المبنى',
    'pillar.building.desc': 'تكييف قائم على الإشغال IoT، تحكم صوتي + تطبيق محمول',
    'pillar.building.metric': '25% توفير في الطاقة',
    
    'pillar.security.title': 'الأمان والامتثال',
    'pillar.security.desc': 'شبكة عدم الثقة، بحيرة بيانات متوافقة مع GDPR مع إخفاء PII',
    'pillar.security.metric': 'نقاط Lighthouse 99',
    
    'pillar.revenue.title': 'ذكاء اصطناعي مدر للإيرادات',
    'pillar.revenue.desc': 'نظام RAG واعي بالسياق، محرك البيع الإضافي، تحليل المشاعر',
    'pillar.revenue.metric': 'إيرادات متزايدة',
    
    'pillar.booking.title': 'حجز سلس',
    'pillar.booking.desc': 'موقع ويب محمول أولاً، حجز بنقرة واحدة مع Apple/Google Pay',
    'pillar.booking.metric': 'الحجوزات المباشرة في ارتفاع',
    
    'pillar.staff.title': 'تنسيق الموظفين',
    'pillar.staff.desc': 'طرق تنظيف مدفوعة بالذكاء الاصطناعي، تذاكر صيانة آلية',
    'pillar.staff.metric': 'تدفقات عمل محسنة',
    
    'pillar.architecture.title': 'هندسة قابلة للتوسع',
    'pillar.architecture.desc': 'خدمات مصغرة محتواة، GitOps CI/CD، استعادة الكوارث',
    'pillar.architecture.metric': 'مقاوم للمستقبل',
    
    // AI Websites Section
    'websites.title': 'مواقع ويب وتطبيقات مدعومة بالذكاء الاصطناعي',
    'websites.subtitle': 'نحن نبني مواقع ويب وتطبيقات ذكية مع توفير 40-60% في التكاليف مقارنة بالشركات الكبيرة، دون التنازل عن الجودة أو الابتكار.',
    'websites.piano.title': 'مدرسة البيانو غلين ميلر',
    'websites.piano.subtitle': 'منصة مدرسة بيانو متكاملة بالذكاء الاصطناعي',
    'websites.piano.desc': 'موقع ويب كامل مع نظام حجز مدعوم بالذكاء الاصطناعي، منشئ جدولة ذكي، وإدارة طلاب آلية. مع تخطيط دروس ذكي ومسارات تعلم شخصية.',
    'websites.piano.visit': 'زيارة الموقع',
    'websites.development.title': 'تطوير ذكي',
    'websites.development.desc': 'عملية تطوير مساعدة بالذكاء الاصطناعي تقلل التكاليف مع الحفاظ على جودة مستوى المؤسسة.',
    'websites.design.title': 'تصميم ذكي',
    'websites.design.desc': 'أنظمة تصميم مدعومة بالذكاء الاصطناعي تنشئ واجهات جميلة ومتمركزة حول المستخدم تلقائياً.',
    
    // Industry Solutions
    'industry.title': 'حلول خاصة بالقطاع',
    'industry.subtitle': 'أنظمة ذكية مصممة لمتطلبات صناعتك الفريدة.',
    'industry.gastronomy': 'فن الطبخ والضيافة',
    'industry.gastronomy.desc': 'أنظمة ذكية لتجارب ضيوف سلسة',
    'industry.industrial': 'الصناعة والتصنيع',
    'industry.industrial.desc': 'أتمتة ذكية للتميز التشغيلي',
    'industry.finance': 'المالية والأمان',
    'industry.finance.desc': 'أنظمة حماية وامتثال متقدمة',
    'industry.finance.status': 'قيد البحث',
    'industry.smart': 'المعيشة الذكية والذكاء الاصطناعي الشخصي',
    'industry.smart.desc': 'بيئات ذكية تتكيف معك',
    'industry.healthcare': 'الرعاية الصحية',
    'industry.healthcare.desc': 'رعاية دقيقة من خلال الأنظمة الذكية',
    'industry.retail': 'التجارة الإلكترونية والتجزئة',
    'industry.retail.desc': 'تجارب شخصية تدفع النمو',
    'industry.retail.status': 'قيد البحث',
    'industry.explore': 'استكشف',
    'industry.coming': 'قريباً',
    
    // EA Method
    'method.title': 'أربع مراحل للتميز في الذكاء الاصطناعي',
    'method.subtitle': 'نهجنا الشامل يضمن أن كل جانب من جوانب تنفيذ الذكاء الاصطناعي مخطط بعناية، منفذ بخبرة، ومحسن باستمرار للحصول على أقصى تأثير.',
    'method.step1.title': 'غوص عميق واكتشاف',
    'method.step1.desc': 'نحن ندمج مع فريقك لرسم كل عملية وتحديد فرص التحول.',
    'method.step1.duration': '2-4 أسابيع',
    'method.step2.title': 'التصميم المعماري',
    'method.step2.desc': 'إنشاء مخطط ذكاء اصطناعي مخصص مع اختيار التكنولوجيا الأمثل لاحتياجاتك المحددة.',
    'method.step2.duration': '3-5 أسابيع',
    'method.step3.title': 'التنفيذ السلس',
    'method.step3.desc': 'نشر دقيق مع الحد الأدنى من الاضطراب وتدريب شامل للفريق.',
    'method.step3.duration': '6-12 أسبوع',
    'method.step4.title': 'التطور والتحسين',
    'method.step4.desc': 'التحسين المستمر والتعزيز مع نمو أنظمة الذكاء الاصطناعي مع عملك.',
    'method.step4.duration': 'مستمر',
    'method.learn': 'تعلم المزيد عن عمليتنا',
    
    // Features
    'feature.bespoke': 'مخصص بشكل جذري',
    'feature.bespoke.desc': 'كل حل مصمم خصيصاً لاحتياجاتك المحددة ومتطلبات الصناعة.',
    'feature.expertise': 'خبرة النخبة',
    'feature.expertise.desc': 'مهندسو ذكاء اصطناعي واستراتيجيون عالميون مع معرفة عميقة بالصناعة ونتائج مثبتة.',
    'feature.impact': 'تأثير قابل للقياس',
    'feature.impact.desc': 'تحسينات مضمونة في الكفاءة، تقليل التكاليف، والتميز التشغيلي.',
    
    // Common
    'common.learnMore': 'تعلم المزيد',
    'common.getStarted': 'ابدأ',
    'common.bookCall': 'احجز مكالمتك',
    'common.visitWebsite': 'زيارة الموقع',
    'common.scheduleDemo': 'جدولة عرض توضيحي',
    'common.downloadGuide': 'تحميل الدليل',
    
    // Final CTA
    'final.title': 'مستعد لتحويل عملك؟',
    'final.subtitle': 'جدول استشارة شخصية واكتشف كيف يمكن للذكاء الاصطناعي أن يثور عملياتك.',
    'final.cta': 'احجز مكالمة استراتيجية الذكاء الاصطناعي الآن'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.solutions': 'Soluciones',
    'nav.method': 'El Método EA',
    'nav.why': '¿Por qué EA Solutions?',
    'nav.contact': 'Contacto',
    
    // Header CTA
    'header.cta': 'Reserva tu llamada estratégica de IA',
    
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
    
    // Metrics
    'metrics.projects': 'Proyectos Entregados',
    'metrics.satisfaction': 'Satisfacción del Cliente',
    'metrics.cost': 'Reducción de Costos vs Grandes Empresas',
    
    // Hotel am Kochbrunnen Section
    'hotel.title': 'Hotel am Kochbrunnen: Transformación IA Completa',
    'hotel.subtitle': 'Nuestro proyecto insignia de hospitalidad que muestra 8 pilares de IA integrados que transformaron las operaciones tradicionales en un ecosistema inteligente.',
    'hotel.visit': 'Visitar Hotel am Kochbrunnen',
    
    // Hotel Pillars
    'pillar.journey.title': 'Viaje de Huéspedes Sin Fricción',
    'pillar.journey.desc': 'Check-in/out sin llaves vía QR y NFC, conserje IA disponible en todas partes',
    'pillar.journey.metric': '99.9% tiempo de actividad',
    
    'pillar.backoffice.title': 'Back Office Automatizado',
    'pillar.backoffice.desc': 'Generador de e-facturas, sincronización PMS y OTA en tiempo real, precios dinámicos',
    'pillar.backoffice.metric': '40h/mes ahorradas',
    
    'pillar.building.title': 'Control Inteligente del Edificio',
    'pillar.building.desc': 'HVAC basado en ocupación IoT, control por voz + app móvil',
    'pillar.building.metric': '25% ahorro de energía',
    
    'pillar.security.title': 'Seguridad y Cumplimiento',
    'pillar.security.desc': 'Red de confianza cero, lago de datos conforme GDPR con enmascaramiento PII',
    'pillar.security.metric': 'Puntuación Lighthouse 99',
    
    'pillar.revenue.title': 'IA Generadora de Ingresos',
    'pillar.revenue.desc': 'Sistema RAG consciente del contexto, motor de venta adicional, análisis de sentimientos',
    'pillar.revenue.metric': 'Ingresos aumentados',
    
    'pillar.booking.title': 'Reserva Perfecta',
    'pillar.booking.desc': 'Sitio web móvil primero, reserva de un toque con Apple/Google Pay',
    'pillar.booking.metric': 'Reservas directas en alza',
    
    'pillar.staff.title': 'Orquestación del Personal',
    'pillar.staff.desc': 'Rutas de limpieza impulsadas por IA, tickets de mantenimiento automatizados',
    'pillar.staff.metric': 'Flujos de trabajo optimizados',
    
    'pillar.architecture.title': 'Arquitectura Escalable',
    'pillar.architecture.desc': 'Microservicios en contenedores, GitOps CI/CD, recuperación ante desastres',
    'pillar.architecture.metric': 'A prueba de futuro',
    
    // AI Websites Section
    'websites.title': 'Sitios Web y Apps Impulsados por IA',
    'websites.subtitle': 'Construimos sitios web y aplicaciones inteligentes con 40-60% de ahorro en costos comparado con grandes empresas, sin comprometer calidad o innovación.',
    'websites.piano.title': 'Klavierschule Glenn Miller',
    'websites.piano.subtitle': 'Plataforma de Escuela de Piano Integrada con IA',
    'websites.piano.desc': 'Sitio web completo con sistema de reservas impulsado por IA, creador de horarios inteligente y gestión automatizada de estudiantes. Con planificación de lecciones inteligente y rutas de aprendizaje personalizadas.',
    'websites.piano.visit': 'Visitar sitio web',
    'websites.development.title': 'Desarrollo Inteligente',
    'websites.development.desc': 'Proceso de desarrollo asistido por IA que reduce costos mientras mantiene calidad de nivel empresarial.',
    'websites.design.title': 'Diseño Inteligente',
    'websites.design.desc': 'Sistemas de diseño impulsados por IA que crean automáticamente interfaces hermosas y centradas en el usuario.',
    
    // Industry Solutions
    'industry.title': 'Soluciones Específicas por Sector',
    'industry.subtitle': 'Sistemas inteligentes diseñados para los requisitos únicos de tu industria.',
    'industry.gastronomy': 'Gastronomía y Hospitalidad',
    'industry.gastronomy.desc': 'Sistemas inteligentes para experiencias de huéspedes perfectas',
    'industry.industrial': 'Industrial y Manufactura',
    'industry.industrial.desc': 'Automatización inteligente para excelencia operacional',
    'industry.finance': 'Finanzas y Seguridad',
    'industry.finance.desc': 'Sistemas avanzados de protección y cumplimiento',
    'industry.finance.status': 'En Investigación',
    'industry.smart': 'Vida Inteligente e IA Personal',
    'industry.smart.desc': 'Entornos inteligentes que se adaptan a ti',
    'industry.healthcare': 'Salud',
    'industry.healthcare.desc': 'Atención de precisión a través de sistemas inteligentes',
    'industry.retail': 'Retail y E-commerce',
    'industry.retail.desc': 'Experiencias personalizadas que impulsan el crecimiento',
    'industry.retail.status': 'En Investigación',
    'industry.explore': 'Explorar',
    'industry.coming': 'Próximamente',
    
    // EA Method
    'method.title': 'Cuatro Etapas hacia la Excelencia en IA',
    'method.subtitle': 'Nuestro enfoque integral asegura que cada aspecto de tu implementación de IA sea cuidadosamente planificado, expertamente ejecutado y continuamente optimizado para máximo impacto.',
    'method.step1.title': 'Inmersión Profunda y Descubrimiento',
    'method.step1.desc': 'Nos integramos con tu equipo para mapear cada proceso e identificar oportunidades de transformación.',
    'method.step1.duration': '2-4 semanas',
    'method.step2.title': 'Diseño Arquitectónico',
    'method.step2.desc': 'Creación de blueprint de IA personalizado con selección tecnológica óptima para tus necesidades específicas.',
    'method.step2.duration': '3-5 semanas',
    'method.step3.title': 'Implementación Perfecta',
    'method.step3.desc': 'Despliegue preciso con mínima disrupción y entrenamiento integral del equipo.',
    'method.step3.duration': '6-12 semanas',
    'method.step4.title': 'Evolución y Mejora',
    'method.step4.desc': 'Optimización continua y mejora mientras tus sistemas de IA crecen con tu negocio.',
    'method.step4.duration': 'Continuo',
    'method.learn': 'Aprende más sobre nuestro proceso',
    
    // Features
    'feature.bespoke': 'Radicalmente personalizado',
    'feature.bespoke.desc': 'Cada solución está diseñada a medida para tus necesidades específicas y requisitos de la industria.',
    'feature.expertise': 'Experiencia de élite',
    'feature.expertise.desc': 'Ingenieros de IA y estrategas de clase mundial con conocimiento profundo de la industria y resultados probados.',
    'feature.impact': 'Impacto medible',
    'feature.impact.desc': 'Mejoras garantizadas en eficiencia, reducción de costos y excelencia operacional.',
    
    // Common
    'common.learnMore': 'Aprende más',
    'common.getStarted': 'Empezar',
    'common.bookCall': 'Reserva tu llamada',
    'common.visitWebsite': 'Visitar sitio web',
    'common.scheduleDemo': 'Programar demo',
    'common.downloadGuide': 'Descargar guía',
    
    // Final CTA
    'final.title': '¿Listo para transformar tu negocio?',
    'final.subtitle': 'Programa una consulta personalizada y descubre cómo la IA puede revolucionar tus operaciones.',
    'final.cta': 'Reserva tu llamada estratégica de IA ahora'
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