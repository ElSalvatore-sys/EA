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
    
    // Footer
    'footer.description': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented levels of efficiency for your enterprise.',
    'footer.cta': 'Book a Call',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    
    // Legal Pages
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.subtitle': 'Your privacy and data protection are our highest priorities.',
    'legal.privacy.security': 'Data Security',
    'legal.privacy.security.desc': 'Enterprise-grade encryption and security measures protect your information.',
    'legal.privacy.transparency': 'Transparency',
    'legal.privacy.transparency.desc': 'Clear information about how we collect, use, and protect your data.',
    'legal.privacy.rights': 'Your Rights',
    'legal.privacy.rights.desc': 'Full control over your personal data with easy access and deletion options.',
    'legal.privacy.section1.title': 'Data Collection',
    'legal.privacy.section1.content': 'We collect only the necessary information to provide our services and improve your experience. This includes contact information, usage data, and technical information required for our AI solutions.',
    'legal.privacy.section2.title': 'Data Usage',
    'legal.privacy.section2.content': 'Your data is used exclusively to deliver our services, provide support, and improve our AI solutions. We never sell or share your personal information with third parties without your explicit consent.',
    'legal.privacy.section3.title': 'Data Protection',
    'legal.privacy.section3.content': 'We implement industry-leading security measures including encryption, access controls, and regular security audits to protect your information from unauthorized access or disclosure.',
    'legal.privacy.contact.title': 'Contact Us',
    'legal.privacy.contact.content': 'If you have any questions about our privacy practices or wish to exercise your data rights, please contact us:',
    
    'legal.impressum.title': 'Legal Notice',
    'legal.impressum.subtitle': 'Legal information and company details as required by German law.',
    'legal.impressum.company.title': 'Company Information',
    'legal.impressum.company.details': 'Company Details',
    'legal.impressum.contact.title': 'Contact Information',
    'legal.impressum.legal.title': 'Legal Information',
    'legal.impressum.legal.responsibility': 'Responsibility for Content',
    'legal.impressum.legal.responsibility.content': 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents\' accuracy, completeness, or topicality.',
    'legal.impressum.legal.liability': 'Liability for Links',
    'legal.impressum.legal.liability.content': 'Our offer includes links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents.',
    'legal.impressum.legal.copyright': 'Copyright',
    'legal.impressum.legal.copyright.content': 'The content and works on these pages created by the site operators are subject to German copyright law.',
    'legal.impressum.dispute.title': 'Dispute Resolution',
    'legal.impressum.dispute.content': 'The European Commission provides a platform for online dispute resolution (ODR). We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    
    // MIND Product Page
    'mind.title': 'The Universal AI Solution',
    'mind.subtitle': 'One intelligent system that adapts to every industry, every workflow, every challenge.',
    'mind.description': 'MIND is not just AI – it\'s the evolution of how businesses think, learn, and grow.',
    'mind.cta.start': 'Start Your AI Transformation',
    'mind.cta.demo': 'Watch Demo',
    'mind.trusted': 'Trusted by 4+ companies in Germany and 1 internationally',
    
    'mind.features.title': 'Why MIND Changes Everything',
    'mind.features.subtitle': 'Unlike traditional AI solutions that force you to adapt, MIND adapts to you with unprecedented intelligence and flexibility.',
    'mind.features.universal.title': 'Universal AI Intelligence',
    'mind.features.universal.desc': 'One AI system that adapts to any industry, any workflow, any challenge with unprecedented learning capabilities.',
    'mind.features.fast.title': 'Lightning-Fast Implementation',
    'mind.features.fast.desc': 'Deploy across your entire organization in weeks, not months, with zero disruption to existing workflows.',
    'mind.features.security.title': 'Enterprise-Grade Security',
    'mind.features.security.desc': 'Military-level encryption, zero-trust architecture, and compliance with all major international standards.',
    'mind.features.integration.title': 'Seamless Integration',
    'mind.features.integration.desc': 'Connects with 1000+ existing tools and platforms out of the box, with custom API development available.',
    
    'mind.architecture.title': 'Advanced AI Architecture',
    'mind.architecture.subtitle': 'Built on cutting-edge technology with enterprise-grade reliability and infinite scalability.',
    
    'mind.industries.title': 'One Solution, Every Industry',
    'mind.industries.subtitle': 'MIND automatically configures itself for your specific industry needs with specialized modules and optimizations.',
    
    'mind.pricing.title': 'Transparent Pricing',
    'mind.pricing.subtitle': 'Choose the plan that fits your organization\'s size and ambitions. All plans include 30-day free trial.',
    'mind.pricing.pilot': 'Perfect for small teams testing AI transformation',
    'mind.pricing.growth': 'Comprehensive AI transformation for growing companies',
    'mind.pricing.scale': 'Advanced AI capabilities for scaling organizations',
    'mind.pricing.enterprise': 'Unlimited AI power with complete sovereignty',
    'mind.pricing.popular': 'Most Popular',
    'mind.pricing.trial': 'Start Free Trial',
    'mind.pricing.contact': 'Contact Sales',
    'mind.pricing.features': 'All plans include 30-day free trial • No setup fees • Cancel anytime',
    
    'mind.testimonials.title': 'Trusted by Industry Leaders',
    'mind.testimonials.subtitle': 'Real results from real clients who chose MIND for their AI transformation.',
    
    'mind.roi.title': 'Calculate Your ROI',
    'mind.roi.subtitle': 'See how much MIND can save your organization with our intelligent ROI calculator.',
    'mind.roi.employees': 'Number of Employees',
    'mind.roi.revenue': 'Annual Revenue (€)',
    'mind.roi.industry': 'Industry',
    'mind.roi.plan': 'Selected Plan',
    'mind.roi.monthly': 'Monthly Net Savings',
    'mind.roi.annual': 'Annual Net Savings',
    'mind.roi.payback': 'Payback',
    'mind.roi.benefits': 'Projected Benefits',
    'mind.roi.report': 'Get Detailed ROI Report',
    
    'mind.cta.title': 'Ready to Unleash Your Organization\'s Mind?',
    'mind.cta.subtitle': 'Join the AI revolution. Transform your business. Unlock unlimited potential with MIND\'s universal intelligence.',
    'mind.cta.trial': 'Start Free Trial',
    'mind.cta.schedule': 'Schedule Demo',
    
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
    
    // Footer
    'footer.description': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit eliminieren, menschliches Potenzial verstärken und beispiellose Effizienz für Ihr Unternehmen freisetzen.',
    'footer.cta': 'Anruf buchen',
    'footer.quickLinks': 'Schnelllinks',
    'footer.contactInfo': 'Kontaktinformationen',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Impressum',
    
    // Legal Pages
    'legal.privacy.title': 'Datenschutzerklärung',
    'legal.privacy.subtitle': 'Ihr Datenschutz und Ihre Privatsphäre haben für uns höchste Priorität.',
    'legal.privacy.security': 'Datensicherheit',
    'legal.privacy.security.desc': 'Verschlüsselung und Sicherheitsmaßnahmen auf Unternehmensniveau schützen Ihre Informationen.',
    'legal.privacy.transparency': 'Transparenz',
    'legal.privacy.transparency.desc': 'Klare Informationen darüber, wie wir Ihre Daten sammeln, verwenden und schützen.',
    'legal.privacy.rights': 'Ihre Rechte',
    'legal.privacy.rights.desc': 'Vollständige Kontrolle über Ihre persönlichen Daten mit einfachem Zugang und Löschoptionen.',
    'legal.privacy.section1.title': 'Datenerhebung',
    'legal.privacy.section1.content': 'Wir sammeln nur die notwendigen Informationen, um unsere Dienstleistungen zu erbringen und Ihre Erfahrung zu verbessern. Dazu gehören Kontaktinformationen, Nutzungsdaten und technische Informationen, die für unsere KI-Lösungen erforderlich sind.',
    'legal.privacy.section2.title': 'Datenverwendung',
    'legal.privacy.section2.content': 'Ihre Daten werden ausschließlich zur Erbringung unserer Dienstleistungen, zur Bereitstellung von Support und zur Verbesserung unserer KI-Lösungen verwendet. Wir verkaufen oder teilen Ihre persönlichen Informationen niemals ohne Ihre ausdrückliche Zustimmung mit Dritten.',
    'legal.privacy.section3.title': 'Datenschutz',
    'legal.privacy.section3.content': 'Wir implementieren branchenführende Sicherheitsmaßnahmen einschließlich Verschlüsselung, Zugriffskontrollen und regelmäßige Sicherheitsaudits, um Ihre Informationen vor unbefugtem Zugriff oder Offenlegung zu schützen.',
    'legal.privacy.contact.title': 'Kontaktieren Sie uns',
    'legal.privacy.contact.content': 'Wenn Sie Fragen zu unseren Datenschutzpraktiken haben oder Ihre Datenrechte ausüben möchten, kontaktieren Sie uns bitte:',
    
    'legal.impressum.title': 'Impressum',
    'legal.impressum.subtitle': 'Rechtliche Informationen und Unternehmensdetails gemäß deutschem Recht.',
    'legal.impressum.company.title': 'Unternehmensinformationen',
    'legal.impressum.company.details': 'Unternehmensdetails',
    'legal.impressum.contact.title': 'Kontaktinformationen',
    'legal.impressum.legal.title': 'Rechtliche Informationen',
    'legal.impressum.legal.responsibility': 'Verantwortung für Inhalte',
    'legal.impressum.legal.responsibility.content': 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.',
    'legal.impressum.legal.liability': 'Haftung für Links',
    'legal.impressum.legal.liability.content': 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.',
    'legal.impressum.legal.copyright': 'Urheberrecht',
    'legal.impressum.legal.copyright.content': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
    'legal.impressum.dispute.title': 'Streitbeilegung',
    'legal.impressum.dispute.content': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    
    // MIND Product Page
    'mind.title': 'Die universelle KI-Lösung',
    'mind.subtitle': 'Ein intelligentes System, das sich an jede Branche, jeden Workflow, jede Herausforderung anpasst.',
    'mind.description': 'MIND ist nicht nur KI – es ist die Evolution, wie Unternehmen denken, lernen und wachsen.',
    'mind.cta.start': 'Starten Sie Ihre KI-Transformation',
    'mind.cta.demo': 'Demo ansehen',
    'mind.trusted': 'Vertraut von 4+ Unternehmen in Deutschland und 1 international',
    
    'mind.features.title': 'Warum MIND alles verändert',
    'mind.features.subtitle': 'Im Gegensatz zu traditionellen KI-Lösungen, die Sie zwingen sich anzupassen, passt sich MIND mit beispielloser Intelligenz und Flexibilität an Sie an.',
    'mind.features.universal.title': 'Universelle KI-Intelligenz',
    'mind.features.universal.desc': 'Ein KI-System, das sich an jede Branche, jeden Workflow, jede Herausforderung mit beispiellosen Lernfähigkeiten anpasst.',
    'mind.features.fast.title': 'Blitzschnelle Implementierung',
    'mind.features.fast.desc': 'Bereitstellung in Ihrer gesamten Organisation in Wochen, nicht Monaten, ohne Störung bestehender Arbeitsabläufe.',
    'mind.features.security.title': 'Sicherheit auf Unternehmensniveau',
    'mind.features.security.desc': 'Verschlüsselung auf militärischem Niveau, Zero-Trust-Architektur und Compliance mit allen wichtigen internationalen Standards.',
    'mind.features.integration.title': 'Nahtlose Integration',
    'mind.features.integration.desc': 'Verbindet sich sofort mit über 1000 bestehenden Tools und Plattformen, mit verfügbarer benutzerdefinierter API-Entwicklung.',
    
    'mind.architecture.title': 'Fortschrittliche KI-Architektur',
    'mind.architecture.subtitle': 'Aufgebaut auf modernster Technologie mit Zuverlässigkeit auf Unternehmensniveau und unendlicher Skalierbarkeit.',
    
    'mind.industries.title': 'Eine Lösung, jede Branche',
    'mind.industries.subtitle': 'MIND konfiguriert sich automatisch für Ihre spezifischen Branchenbedürfnisse mit spezialisierten Modulen und Optimierungen.',
    
    'mind.pricing.title': 'Transparente Preisgestaltung',
    'mind.pricing.subtitle': 'Wählen Sie den Plan, der zur Größe und den Ambitionen Ihrer Organisation passt. Alle Pläne beinhalten eine 30-tägige kostenlose Testversion.',
    'mind.pricing.pilot': 'Perfekt für kleine Teams, die KI-Transformation testen',
    'mind.pricing.growth': 'Umfassende KI-Transformation für wachsende Unternehmen',
    'mind.pricing.scale': 'Erweiterte KI-Fähigkeiten für skalierenden Organisationen',
    'mind.pricing.enterprise': 'Unbegrenzte KI-Power mit vollständiger Souveränität',
    'mind.pricing.popular': 'Am beliebtesten',
    'mind.pricing.trial': 'Kostenlose Testversion starten',
    'mind.pricing.contact': 'Vertrieb kontaktieren',
    'mind.pricing.features': 'Alle Pläne beinhalten 30-tägige kostenlose Testversion • Keine Einrichtungsgebühren • Jederzeit kündbar',
    
    'mind.testimonials.title': 'Vertraut von Branchenführern',
    'mind.testimonials.subtitle': 'Echte Ergebnisse von echten Kunden, die MIND für ihre KI-Transformation gewählt haben.',
    
    'mind.roi.title': 'Berechnen Sie Ihren ROI',
    'mind.roi.subtitle': 'Sehen Sie, wie viel MIND Ihrer Organisation mit unserem intelligenten ROI-Rechner sparen kann.',
    'mind.roi.employees': 'Anzahl der Mitarbeiter',
    'mind.roi.revenue': 'Jahresumsatz (€)',
    'mind.roi.industry': 'Branche',
    'mind.roi.plan': 'Ausgewählter Plan',
    'mind.roi.monthly': 'Monatliche Nettoeinsparungen',
    'mind.roi.annual': 'Jährliche Nettoeinsparungen',
    'mind.roi.payback': 'Amortisation',
    'mind.roi.benefits': 'Prognostizierte Vorteile',
    'mind.roi.report': 'Detaillierten ROI-Bericht erhalten',
    
    'mind.cta.title': 'Bereit, den Verstand Ihrer Organisation zu entfesseln?',
    'mind.cta.subtitle': 'Treten Sie der KI-Revolution bei. Transformieren Sie Ihr Unternehmen. Erschließen Sie unbegrenztes Potenzial mit MINDs universeller Intelligenz.',
    'mind.cta.trial': 'Kostenlose Testversion starten',
    'mind.cta.schedule': 'Demo planen',
    
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
    
    // Footer
    'footer.description': 'Nous concevons des infrastructures IA sur mesure qui éliminent le travail répétitif, amplifient le potentiel humain et libèrent des niveaux d\'efficacité sans précédent pour votre entreprise.',
    'footer.cta': 'Réserver un appel',
    'footer.quickLinks': 'Liens rapides',
    'footer.contactInfo': 'Informations de contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.legal': 'Mentions légales',
    
    // Legal Pages
    'legal.privacy.title': 'Politique de confidentialité',
    'legal.privacy.subtitle': 'Votre confidentialité et la protection de vos données sont nos priorités absolues.',
    'legal.privacy.security': 'Sécurité des données',
    'legal.privacy.security.desc': 'Chiffrement et mesures de sécurité de niveau entreprise protègent vos informations.',
    'legal.privacy.transparency': 'Transparence',
    'legal.privacy.transparency.desc': 'Informations claires sur la façon dont nous collectons, utilisons et protégeons vos données.',
    'legal.privacy.rights': 'Vos droits',
    'legal.privacy.rights.desc': 'Contrôle total sur vos données personnelles avec accès facile et options de suppression.',
    'legal.privacy.section1.title': 'Collecte de données',
    'legal.privacy.section1.content': 'Nous collectons uniquement les informations nécessaires pour fournir nos services et améliorer votre expérience. Cela inclut les informations de contact, les données d\'utilisation et les informations techniques requises pour nos solutions IA.',
    'legal.privacy.section2.title': 'Utilisation des données',
    'legal.privacy.section2.content': 'Vos données sont utilisées exclusivement pour fournir nos services, offrir un support et améliorer nos solutions IA. Nous ne vendons jamais ni ne partageons vos informations personnelles avec des tiers sans votre consentement explicite.',
    'legal.privacy.section3.title': 'Protection des données',
    'legal.privacy.section3.content': 'Nous mettons en œuvre des mesures de sécurité de pointe incluant le chiffrement, les contrôles d\'accès et des audits de sécurité réguliers pour protéger vos informations contre l\'accès non autorisé ou la divulgation.',
    'legal.privacy.contact.title': 'Nous contacter',
    'legal.privacy.contact.content': 'Si vous avez des questions sur nos pratiques de confidentialité ou souhaitez exercer vos droits sur les données, veuillez nous contacter:',
    
    'legal.impressum.title': 'Mentions légales',
    'legal.impressum.subtitle': 'Informations légales et détails de l\'entreprise selon la loi allemande.',
    'legal.impressum.company.title': 'Informations sur l\'entreprise',
    'legal.impressum.company.details': 'Détails de l\'entreprise',
    'legal.impressum.contact.title': 'Informations de contact',
    'legal.impressum.legal.title': 'Informations légales',
    'legal.impressum.legal.responsibility': 'Responsabilité du contenu',
    'legal.impressum.legal.responsibility.content': 'Le contenu de nos pages a été créé avec le plus grand soin. Cependant, nous ne pouvons garantir l\'exactitude, l\'exhaustivité ou l\'actualité du contenu.',
    'legal.impressum.legal.liability': 'Responsabilité pour les liens',
    'legal.impressum.legal.liability.content': 'Notre offre comprend des liens vers des sites web tiers externes. Nous n\'avons aucune influence sur le contenu de ces sites web, par conséquent nous ne pouvons garantir ce contenu.',
    'legal.impressum.legal.copyright': 'Droit d\'auteur',
    'legal.impressum.legal.copyright.content': 'Le contenu et les œuvres sur ces pages créés par les opérateurs du site sont soumis au droit d\'auteur allemand.',
    'legal.impressum.dispute.title': 'Résolution des litiges',
    'legal.impressum.dispute.content': 'La Commission européenne fournit une plateforme de résolution des litiges en ligne (RLL). Nous ne sommes pas disposés ou obligés de participer aux procédures de résolution des litiges devant un conseil d\'arbitrage des consommateurs.',
    
    // MIND Product Page
    'mind.title': 'La solution IA universelle',
    'mind.subtitle': 'Un système intelligent qui s\'adapte à chaque industrie, chaque flux de travail, chaque défi.',
    'mind.description': 'MIND n\'est pas seulement de l\'IA – c\'est l\'évolution de la façon dont les entreprises pensent, apprennent et grandissent.',
    'mind.cta.start': 'Commencez votre transformation IA',
    'mind.cta.demo': 'Regarder la démo',
    'mind.trusted': 'Fait confiance par 4+ entreprises en Allemagne et 1 à l\'international',
    
    'mind.features.title': 'Pourquoi MIND change tout',
    'mind.features.subtitle': 'Contrairement aux solutions IA traditionnelles qui vous forcent à vous adapter, MIND s\'adapte à vous avec une intelligence et une flexibilité sans précédent.',
    'mind.features.universal.title': 'Intelligence IA universelle',
    'mind.features.universal.desc': 'Un système IA qui s\'adapte à n\'importe quelle industrie, n\'importe quel flux de travail, n\'importe quel défi avec des capacités d\'apprentissage sans précédent.',
    'mind.features.fast.title': 'Implémentation ultra-rapide',
    'mind.features.fast.desc': 'Déploiement dans toute votre organisation en semaines, pas en mois, sans perturbation des flux de travail existants.',
    'mind.features.security.title': 'Sécurité de niveau entreprise',
    'mind.features.security.desc': 'Chiffrement de niveau militaire, architecture zéro confiance et conformité avec toutes les normes internationales majeures.',
    'mind.features.integration.title': 'Intégration transparente',
    'mind.features.integration.desc': 'Se connecte avec plus de 1000 outils et plateformes existants prêts à l\'emploi, avec développement d\'API personnalisé disponible.',
    
    'mind.architecture.title': 'Architecture IA avancée',
    'mind.architecture.subtitle': 'Construit sur une technologie de pointe avec une fiabilité de niveau entreprise et une évolutivité infinie.',
    
    'mind.industries.title': 'Une solution, chaque industrie',
    'mind.industries.subtitle': 'MIND se configure automatiquement pour les besoins spécifiques de votre industrie avec des modules spécialisés et des optimisations.',
    
    'mind.pricing.title': 'Tarification transparente',
    'mind.pricing.subtitle': 'Choisissez le plan qui correspond à la taille et aux ambitions de votre organisation. Tous les plans incluent un essai gratuit de 30 jours.',
    'mind.pricing.pilot': 'Parfait pour les petites équipes testant la transformation IA',
    'mind.pricing.growth': 'Transformation IA complète pour les entreprises en croissance',
    'mind.pricing.scale': 'Capacités IA avancées pour les organisations en expansion',
    'mind.pricing.enterprise': 'Puissance IA illimitée avec souveraineté complète',
    'mind.pricing.popular': 'Le plus populaire',
    'mind.pricing.trial': 'Commencer l\'essai gratuit',
    'mind.pricing.contact': 'Contacter les ventes',
    'mind.pricing.features': 'Tous les plans incluent un essai gratuit de 30 jours • Pas de frais d\'installation • Annulation à tout moment',
    
    'mind.testimonials.title': 'Fait confiance par les leaders de l\'industrie',
    'mind.testimonials.subtitle': 'Résultats réels de vrais clients qui ont choisi MIND pour leur transformation IA.',
    
    'mind.roi.title': 'Calculez votre ROI',
    'mind.roi.subtitle': 'Voyez combien MIND peut faire économiser à votre organisation avec notre calculateur ROI intelligent.',
    'mind.roi.employees': 'Nombre d\'employés',
    'mind.roi.revenue': 'Chiffre d\'affaires annuel (€)',
    'mind.roi.industry': 'Industrie',
    'mind.roi.plan': 'Plan sélectionné',
    'mind.roi.monthly': 'Économies nettes mensuelles',
    'mind.roi.annual': 'Économies nettes annuelles',
    'mind.roi.payback': 'Retour sur investissement',
    'mind.roi.benefits': 'Avantages projetés',
    'mind.roi.report': 'Obtenir un rapport ROI détaillé',
    
    'mind.cta.title': 'Prêt à libérer l\'esprit de votre organisation?',
    'mind.cta.subtitle': 'Rejoignez la révolution IA. Transformez votre entreprise. Débloquez un potentiel illimité avec l\'intelligence universelle de MIND.',
    'mind.cta.trial': 'Commencer l\'essai gratuit',
    'mind.cta.schedule': 'Planifier une démo',
    
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
    
    // Footer
    'footer.description': 'نحن نصمم بنى تحتية للذكاء الاصطناعي مخصصة تقضي على العمل المتكرر وتضخم الإمكانات البشرية وتطلق مستويات كفاءة لا مثيل لها لمؤسستك.',
    'footer.cta': 'احجز مكالمة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.legal': 'إشعار قانوني',
    
    // Legal Pages
    'legal.privacy.title': 'سياسة الخصوصية',
    'legal.privacy.subtitle': 'خصوصيتك وحماية البيانات هما أولوياتنا العليا.',
    'legal.privacy.security': 'أمان البيانات',
    'legal.privacy.security.desc': 'تشفير وتدابير أمنية على مستوى المؤسسة تحمي معلوماتك.',
    'legal.privacy.transparency': 'الشفافية',
    'legal.privacy.transparency.desc': 'معلومات واضحة حول كيفية جمع واستخدام وحماية بياناتك.',
    'legal.privacy.rights': 'حقوقك',
    'legal.privacy.rights.desc': 'تحكم كامل في بياناتك الشخصية مع خيارات وصول وحذف سهلة.',
    'legal.privacy.section1.title': 'جمع البيانات',
    'legal.privacy.section1.content': 'نحن نجمع فقط المعلومات الضرورية لتقديم خدماتنا وتحسين تجربتك. يشمل ذلك معلومات الاتصال وبيانات الاستخدام والمعلومات التقنية المطلوبة لحلول الذكاء الاصطناعي لدينا.',
    'legal.privacy.section2.title': 'استخدام البيانات',
    'legal.privacy.section2.content': 'تُستخدم بياناتك حصرياً لتقديم خدماتنا وتوفير الدعم وتحسين حلول الذكاء الاصطناعي لدينا. نحن لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة.',
    'legal.privacy.section3.title': 'حماية البيانات',
    'legal.privacy.section3.content': 'نحن ننفذ تدابير أمنية رائدة في الصناعة بما في ذلك التشفير وضوابط الوصول وعمليات تدقيق أمنية منتظمة لحماية معلوماتك من الوصول غير المصرح به أو الكشف.',
    'legal.privacy.contact.title': 'اتصل بنا',
    'legal.privacy.contact.content': 'إذا كان لديك أي أسئلة حول ممارسات الخصوصية لدينا أو ترغب في ممارسة حقوق البيانات الخاصة بك، يرجى الاتصال بنا:',
    
    'legal.impressum.title': 'إشعار قانوني',
    'legal.impressum.subtitle': 'معلومات قانونية وتفاصيل الشركة كما هو مطلوب بموجب القانون الألماني.',
    'legal.impressum.company.title': 'معلومات الشركة',
    'legal.impressum.company.details': 'تفاصيل الشركة',
    'legal.impressum.contact.title': 'معلومات الاتصال',
    'legal.impressum.legal.title': 'معلومات قانونية',
    'legal.impressum.legal.responsibility': 'المسؤولية عن المحتوى',
    'legal.impressum.legal.responsibility.content': 'تم إنشاء محتويات صفحاتنا بأقصى قدر من العناية. ومع ذلك، لا يمكننا ضمان دقة أو اكتمال أو حداثة المحتويات.',
    'legal.impressum.legal.liability': 'المسؤولية عن الروابط',
    'legal.impressum.legal.liability.content': 'يتضمن عرضنا روابط لمواقع ويب خارجية لأطراف ثالثة. ليس لدينا تأثير على محتويات تلك المواقع، لذلك لا يمكننا ضمان تلك المحتويات.',
    'legal.impressum.legal.copyright': 'حقوق الطبع والنشر',
    'legal.impressum.legal.copyright.content': 'المحتوى والأعمال على هذه الصفحات التي أنشأها مشغلو الموقع تخضع لقانون حقوق الطبع والنشر الألماني.',
    'legal.impressum.dispute.title': 'تسوية النزاعات',
    'legal.impressum.dispute.content': 'توفر المفوضية الأوروبية منصة لتسوية النزاعات عبر الإنترنت (ODR). نحن لسنا راغبين أو ملزمين بالمشاركة في إجراءات تسوية النزاعات أمام مجلس تحكيم المستهلكين.',
    
    // MIND Product Page
    'mind.title': 'حل الذكاء الاصطناعي العالمي',
    'mind.subtitle': 'نظام ذكي واحد يتكيف مع كل صناعة، كل سير عمل، كل تحدٍ.',
    'mind.description': 'MIND ليس مجرد ذكاء اصطناعي – إنه تطور كيفية تفكير الشركات وتعلمها ونموها.',
    'mind.cta.start': 'ابدأ تحولك للذكاء الاصطناعي',
    'mind.cta.demo': 'شاهد العرض التوضيحي',
    'mind.trusted': 'موثوق به من قبل 4+ شركات في ألمانيا و1 دولياً',
    
    'mind.features.title': 'لماذا MIND يغير كل شيء',
    'mind.features.subtitle': 'على عكس حلول الذكاء الاصطناعي التقليدية التي تجبرك على التكيف، يتكيف MIND معك بذكاء ومرونة لا مثيل لهما.',
    'mind.features.universal.title': 'ذكاء اصطناعي عالمي',
    'mind.features.universal.desc': 'نظام ذكاء اصطناعي واحد يتكيف مع أي صناعة، أي سير عمل، أي تحدٍ بقدرات تعلم لا مثيل لها.',
    'mind.features.fast.title': 'تنفيذ سريع البرق',
    'mind.features.fast.desc': 'نشر عبر مؤسستك بالكامل في أسابيع، وليس شهور، دون تعطيل سير العمل الحالي.',
    'mind.features.security.title': 'أمان على مستوى المؤسسة',
    'mind.features.security.desc': 'تشفير على المستوى العسكري، هندسة عدم الثقة، والامتثال لجميع المعايير الدولية الرئيسية.',
    'mind.features.integration.title': 'تكامل سلس',
    'mind.features.integration.desc': 'يتصل بأكثر من 1000 أداة ومنصة موجودة جاهزة للاستخدام، مع تطوير API مخصص متاح.',
    
    'mind.architecture.title': 'هندسة ذكاء اصطناعي متقدمة',
    'mind.architecture.subtitle': 'مبني على تكنولوجيا متطورة مع موثوقية على مستوى المؤسسة وقابلية توسع لا نهائية.',
    
    'mind.industries.title': 'حل واحد، كل صناعة',
    'mind.industries.subtitle': 'يقوم MIND بتكوين نفسه تلقائياً لاحتياجات صناعتك المحددة مع وحدات متخصصة وتحسينات.',
    
    'mind.pricing.title': 'تسعير شفاف',
    'mind.pricing.subtitle': 'اختر الخطة التي تناسب حجم وطموحات مؤسستك. جميع الخطط تشمل تجربة مجانية لمدة 30 يوماً.',
    'mind.pricing.pilot': 'مثالي للفرق الصغيرة التي تختبر تحول الذكاء الاصطناعي',
    'mind.pricing.growth': 'تحول شامل للذكاء الاصطناعي للشركات النامية',
    'mind.pricing.scale': 'قدرات ذكاء اصطناعي متقدمة للمؤسسات المتوسعة',
    'mind.pricing.enterprise': 'قوة ذكاء اصطناعي غير محدودة مع سيادة كاملة',
    'mind.pricing.popular': 'الأكثر شعبية',
    'mind.pricing.trial': 'ابدأ التجربة المجانية',
    'mind.pricing.contact': 'اتصل بالمبيعات',
    'mind.pricing.features': 'جميع الخطط تشمل تجربة مجانية لمدة 30 يوماً • لا توجد رسوم إعداد • إلغاء في أي وقت',
    
    'mind.testimonials.title': 'موثوق به من قبل قادة الصناعة',
    'mind.testimonials.subtitle': 'نتائج حقيقية من عملاء حقيقيين اختاروا MIND لتحولهم للذكاء الاصطناعي.',
    
    'mind.roi.title': 'احسب عائد الاستثمار الخاص بك',
    'mind.roi.subtitle': 'انظر كم يمكن لـ MIND أن يوفر لمؤسستك مع حاسبة عائد الاستثمار الذكية لدينا.',
    'mind.roi.employees': 'عدد الموظفين',
    'mind.roi.revenue': 'الإيرادات السنوية (€)',
    'mind.roi.industry': 'الصناعة',
    'mind.roi.plan': 'الخطة المختارة',
    'mind.roi.monthly': 'المدخرات الشهرية الصافية',
    'mind.roi.annual': 'المدخرات السنوية الصافية',
    'mind.roi.payback': 'فترة الاسترداد',
    'mind.roi.benefits': 'الفوائد المتوقعة',
    'mind.roi.report': 'احصل على تقرير عائد استثمار مفصل',
    
    'mind.cta.title': 'مستعد لإطلاق عقل مؤسستك؟',
    'mind.cta.subtitle': 'انضم إلى ثورة الذكاء الاصطناعي. حول عملك. اطلق إمكانات غير محدودة مع ذكاء MIND العالمي.',
    'mind.cta.trial': 'ابدأ التجربة المجانية',
    'mind.cta.schedule': 'جدول عرض توضيحي',
    
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
    
    // Footer
    'footer.description': 'Diseñamos infraestructuras de IA personalizadas que erradican el trabajo repetitivo, amplifican el potencial humano y desbloquean niveles de eficiencia sin precedentes para tu empresa.',
    'footer.cta': 'Reservar llamada',
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.contactInfo': 'Información de contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de privacidad',
    'footer.legal': 'Aviso legal',
    
    // Legal Pages
    'legal.privacy.title': 'Política de privacidad',
    'legal.privacy.subtitle': 'Tu privacidad y protección de datos son nuestras máximas prioridades.',
    'legal.privacy.security': 'Seguridad de datos',
    'legal.privacy.security.desc': 'Cifrado y medidas de seguridad de nivel empresarial protegen tu información.',
    'legal.privacy.transparency': 'Transparencia',
    'legal.privacy.transparency.desc': 'Información clara sobre cómo recopilamos, usamos y protegemos tus datos.',
    'legal.privacy.rights': 'Tus derechos',
    'legal.privacy.rights.desc': 'Control total sobre tus datos personales con opciones fáciles de acceso y eliminación.',
    'legal.privacy.section1.title': 'Recopilación de datos',
    'legal.privacy.section1.content': 'Recopilamos solo la información necesaria para proporcionar nuestros servicios y mejorar tu experiencia. Esto incluye información de contacto, datos de uso e información técnica requerida para nuestras soluciones de IA.',
    'legal.privacy.section2.title': 'Uso de datos',
    'legal.privacy.section2.content': 'Tus datos se utilizan exclusivamente para entregar nuestros servicios, proporcionar soporte y mejorar nuestras soluciones de IA. Nunca vendemos o compartimos tu información personal con terceros sin tu consentimiento explícito.',
    'legal.privacy.section3.title': 'Protección de datos',
    'legal.privacy.section3.content': 'Implementamos medidas de seguridad líderes en la industria incluyendo cifrado, controles de acceso y auditorías de seguridad regulares para proteger tu información del acceso no autorizado o divulgación.',
    'legal.privacy.contact.title': 'Contáctanos',
    'legal.privacy.contact.content': 'Si tienes preguntas sobre nuestras prácticas de privacidad o deseas ejercer tus derechos de datos, por favor contáctanos:',
    
    'legal.impressum.title': 'Aviso legal',
    'legal.impressum.subtitle': 'Información legal y detalles de la empresa según la ley alemana.',
    'legal.impressum.company.title': 'Información de la empresa',
    'legal.impressum.company.details': 'Detalles de la empresa',
    'legal.impressum.contact.title': 'Información de contacto',
    'legal.impressum.legal.title': 'Información legal',
    'legal.impressum.legal.responsibility': 'Responsabilidad del contenido',
    'legal.impressum.legal.responsibility.content': 'Los contenidos de nuestras páginas han sido creados con el máximo cuidado. Sin embargo, no podemos garantizar la exactitud, integridad o actualidad de los contenidos.',
    'legal.impressum.legal.liability': 'Responsabilidad por enlaces',
    'legal.impressum.legal.liability.content': 'Nuestra oferta incluye enlaces a sitios web externos de terceros. No tenemos influencia sobre los contenidos de esos sitios web, por lo tanto no podemos garantizar esos contenidos.',
    'legal.impressum.legal.copyright': 'Derechos de autor',
    'legal.impressum.legal.copyright.content': 'El contenido y obras en estas páginas creadas por los operadores del sitio están sujetos a la ley de derechos de autor alemana.',
    'legal.impressum.dispute.title': 'Resolución de disputas',
    'legal.impressum.dispute.content': 'La Comisión Europea proporciona una plataforma para la resolución de disputas en línea (ODR). No estamos dispuestos u obligados a participar en procedimientos de resolución de disputas ante una junta de arbitraje de consumidores.',
    
    // MIND Product Page
    'mind.title': 'La solución IA universal',
    'mind.subtitle': 'Un sistema inteligente que se adapta a cada industria, cada flujo de trabajo, cada desafío.',
    'mind.description': 'MIND no es solo IA – es la evolución de cómo las empresas piensan, aprenden y crecen.',
    'mind.cta.start': 'Comienza tu transformación IA',
    'mind.cta.demo': 'Ver demo',
    'mind.trusted': 'Confiado por 4+ empresas en Alemania y 1 internacionalmente',
    
    'mind.features.title': 'Por qué MIND lo cambia todo',
    'mind.features.subtitle': 'A diferencia de las soluciones IA tradicionales que te obligan a adaptarte, MIND se adapta a ti con inteligencia y flexibilidad sin precedentes.',
    'mind.features.universal.title': 'Inteligencia IA universal',
    'mind.features.universal.desc': 'Un sistema IA que se adapta a cualquier industria, cualquier flujo de trabajo, cualquier desafío con capacidades de aprendizaje sin precedentes.',
    'mind.features.fast.title': 'Implementación ultrarrápida',
    'mind.features.fast.desc': 'Despliega en toda tu organización en semanas, no meses, sin interrumpir los flujos de trabajo existentes.',
    'mind.features.security.title': 'Seguridad de nivel empresarial',
    'mind.features.security.desc': 'Cifrado de nivel militar, arquitectura de confianza cero y cumplimiento con todos los estándares internacionales principales.',
    'mind.features.integration.title': 'Integración perfecta',
    'mind.features.integration.desc': 'Se conecta con más de 1000 herramientas y plataformas existentes listas para usar, con desarrollo de API personalizado disponible.',
    
    'mind.architecture.title': 'Arquitectura IA avanzada',
    'mind.architecture.subtitle': 'Construido sobre tecnología de vanguardia con confiabilidad de nivel empresarial y escalabilidad infinita.',
    
    'mind.industries.title': 'Una solución, cada industria',
    'mind.industries.subtitle': 'MIND se configura automáticamente para las necesidades específicas de tu industria con módulos especializados y optimizaciones.',
    
    'mind.pricing.title': 'Precios transparentes',
    'mind.pricing.subtitle': 'Elige el plan que se ajuste al tamaño y ambiciones de tu organización. Todos los planes incluyen prueba gratuita de 30 días.',
    'mind.pricing.pilot': 'Perfecto para equipos pequeños probando la transformación IA',
    'mind.pricing.growth': 'Transformación IA integral para empresas en crecimiento',
    'mind.pricing.scale': 'Capacidades IA avanzadas para organizaciones en expansión',
    'mind.pricing.enterprise': 'Poder IA ilimitado con soberanía completa',
    'mind.pricing.popular': 'Más popular',
    'mind.pricing.trial': 'Comenzar prueba gratuita',
    'mind.pricing.contact': 'Contactar ventas',
    'mind.pricing.features': 'Todos los planes incluyen prueba gratuita de 30 días • Sin tarifas de configuración • Cancelar en cualquier momento',
    
    'mind.testimonials.title': 'Confiado por líderes de la industria',
    'mind.testimonials.subtitle': 'Resultados reales de clientes reales que eligieron MIND para su transformación IA.',
    
    'mind.roi.title': 'Calcula tu ROI',
    'mind.roi.subtitle': 'Ve cuánto puede ahorrar MIND a tu organización con nuestra calculadora ROI inteligente.',
    'mind.roi.employees': 'Número de empleados',
    'mind.roi.revenue': 'Ingresos anuales (€)',
    'mind.roi.industry': 'Industria',
    'mind.roi.plan': 'Plan seleccionado',
    'mind.roi.monthly': 'Ahorros netos mensuales',
    'mind.roi.annual': 'Ahorros netos anuales',
    'mind.roi.payback': 'Recuperación',
    'mind.roi.benefits': 'Beneficios proyectados',
    'mind.roi.report': 'Obtener reporte ROI detallado',
    
    'mind.cta.title': '¿Listo para liberar la mente de tu organización?',
    'mind.cta.subtitle': 'Únete a la revolución IA. Transforma tu negocio. Desbloquea potencial ilimitado con la inteligencia universal de MIND.',
    'mind.cta.trial': 'Comenzar prueba gratuita',
    'mind.cta.schedule': 'Programar demo',
    
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