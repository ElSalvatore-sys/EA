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

// Comprehensive translation dictionary with all solution pages
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
    'final.cta': 'Book Your AI Strategy Call Now',

    // Solution Pages - Gastronomy & Hospitality
    'gastronomy.hero.title': 'Gastronomy & Hospitality',
    'gastronomy.hero.subtitle': 'Transform guest experiences with intelligent reservation systems, automated customer service, and predictive analytics that elevate every touchpoint of your hospitality business.',
    'gastronomy.hero.cta': 'Book Your Hospitality AI Demo',
    'gastronomy.solutions.title': 'Intelligent Solutions for Modern Hospitality',
    'gastronomy.solutions.subtitle': 'From boutique hotels to restaurant chains, our AI solutions streamline operations and create memorable experiences that keep guests coming back.',
    'gastronomy.reservation.title': 'Smart Reservation Management',
    'gastronomy.reservation.desc': 'AI-powered booking system that optimizes table allocation, predicts no-shows, and maximizes seating efficiency.',
    'gastronomy.analytics.title': 'Guest Experience Analytics',
    'gastronomy.analytics.desc': 'Comprehensive insights into guest preferences, satisfaction patterns, and service optimization opportunities.',
    'gastronomy.service.title': 'Automated Customer Service',
    'gastronomy.service.desc': 'Intelligent chatbots and voice assistants that handle inquiries, bookings, and guest requests 24/7.',
    'gastronomy.inventory.title': 'Inventory Intelligence',
    'gastronomy.inventory.desc': 'Predictive inventory management that reduces waste, prevents stockouts, and optimizes food costs.',
    'gastronomy.revenue.title': 'Revenue Optimization',
    'gastronomy.revenue.desc': 'Dynamic pricing and yield management to maximize revenue per guest and optimize occupancy rates.',
    'gastronomy.staff.title': 'Staff Optimization',
    'gastronomy.staff.desc': 'Intelligent scheduling and task management that ensures optimal staffing levels and service quality.',
    'gastronomy.success.title': 'Client Success Story',
    'gastronomy.success.hotel': 'Hotel am Kochbrunnen Wiesbaden',
    'gastronomy.success.quote': 'EA Solutions transformed our guest experience with their intelligent booking system. We\'ve seen a 40% reduction in no-shows and 25% increase in customer satisfaction scores.',
    'gastronomy.process.title': 'Implementation Process',
    'gastronomy.process.subtitle': 'Our proven methodology ensures seamless integration with your existing hospitality operations.',
    'gastronomy.cta.title': 'Ready to Transform Your Guest Experience?',
    'gastronomy.cta.subtitle': 'Join leading hospitality brands that have revolutionized their operations with EA Solutions\' AI technology.',

    // Solution Pages - Industrial & Manufacturing
    'industrial.hero.title': 'Industrial & Manufacturing',
    'industrial.hero.subtitle': 'Optimize production efficiency with predictive maintenance, quality control automation, and intelligent supply chain management that transforms your manufacturing operations.',
    'industrial.hero.cta': 'Book Your Manufacturing AI Demo',
    'industrial.solutions.title': 'Smart Manufacturing Solutions',
    'industrial.solutions.subtitle': 'From predictive maintenance to quality assurance, our AI solutions optimize every aspect of your manufacturing process for maximum efficiency and minimal downtime.',
    'industrial.maintenance.title': 'Predictive Maintenance',
    'industrial.maintenance.desc': 'AI-powered monitoring systems that predict equipment failures before they occur, reducing downtime by up to 70%.',
    'industrial.quality.title': 'Quality Control Automation',
    'industrial.quality.desc': 'Computer vision and ML algorithms that detect defects and ensure consistent product quality at scale.',
    'industrial.production.title': 'Production Optimization',
    'industrial.production.desc': 'Intelligent systems that optimize production schedules, resource allocation, and workflow efficiency.',
    'industrial.supply.title': 'Supply Chain Intelligence',
    'industrial.supply.desc': 'Smart logistics and inventory management that optimizes your entire supply chain ecosystem.',
    'industrial.workforce.title': 'Workforce Management',
    'industrial.workforce.desc': 'AI-driven systems that optimize staff allocation, safety protocols, and skill development programs.',
    'industrial.energy.title': 'Energy Management',
    'industrial.energy.desc': 'Smart energy systems that reduce consumption while maintaining optimal production levels.',
    'industrial.metrics.title': 'Measurable Impact on Your Bottom Line',
    'industrial.metrics.subtitle': 'Our manufacturing AI solutions deliver quantifiable results that directly impact your operational efficiency and profitability.',
    'industrial.approach.title': 'Our Manufacturing Implementation Approach',
    'industrial.approach.subtitle': 'We understand that manufacturing operations can\'t afford disruption. Our phased approach ensures seamless integration.',
    'industrial.cta.title': 'Ready to Optimize Your Manufacturing Operations?',
    'industrial.cta.subtitle': 'Join industry leaders who have transformed their production efficiency with EA Solutions\' manufacturing AI.',

    // Solution Pages - Healthcare
    'healthcare.hero.title': 'Healthcare & Life Sciences',
    'healthcare.hero.subtitle': 'Improve patient outcomes with diagnostic assistance, automated administrative tasks, and intelligent patient management systems that enhance care quality and efficiency.',
    'healthcare.hero.cta': 'Book Your Healthcare AI Demo',
    'healthcare.solutions.title': 'Advanced Healthcare AI Solutions',
    'healthcare.solutions.subtitle': 'Transform patient care with intelligent systems that support clinical decision-making, streamline operations, and improve health outcomes.',
    'healthcare.diagnostic.title': 'Diagnostic Support Systems',
    'healthcare.diagnostic.desc': 'AI-powered diagnostic assistance that analyzes medical images, lab results, and patient data for accurate diagnoses.',
    'healthcare.patient.title': 'Patient Management',
    'healthcare.patient.desc': 'Comprehensive patient management systems that optimize care pathways and improve patient engagement.',
    'healthcare.documentation.title': 'Clinical Documentation',
    'healthcare.documentation.desc': 'Automated clinical documentation that reduces administrative burden and improves accuracy.',
    'healthcare.monitoring.title': 'Remote Monitoring',
    'healthcare.monitoring.desc': 'Continuous patient monitoring systems that track vital signs and health metrics remotely.',
    'healthcare.research.title': 'Drug Discovery & Research',
    'healthcare.research.desc': 'AI-accelerated research and drug discovery processes that reduce development time and costs.',
    'healthcare.personalized.title': 'Personalized Medicine',
    'healthcare.personalized.desc': 'Tailored treatment plans based on individual patient characteristics and genetic profiles.',
    'healthcare.impact.title': 'Measurable Healthcare Impact',
    'healthcare.impact.subtitle': 'Our healthcare AI solutions deliver quantifiable improvements in patient outcomes, operational efficiency, and cost reduction.',
    'healthcare.success.title': 'Client Success Story',
    'healthcare.success.clinic': 'Falchi Dental Wiesbaden',
    'healthcare.success.quote': 'EA Solutions\' AI diagnostic tools have revolutionized our practice. We\'ve seen significant improvements in treatment accuracy and patient satisfaction, while reducing diagnostic time by 40%.',
    'healthcare.compliance.title': 'Healthcare Compliance & Security',
    'healthcare.compliance.subtitle': 'Our solutions are built with healthcare-specific compliance and security requirements in mind, ensuring patient data protection and regulatory adherence.',
    'healthcare.cta.title': 'Transform Patient Care with AI',
    'healthcare.cta.subtitle': 'Join leading healthcare providers who are improving patient outcomes and operational efficiency with EA Solutions\' healthcare AI.',

    // Solution Pages - Smart Living
    'smart.hero.title': 'Smart Living & Personal AI',
    'smart.hero.subtitle': 'Create intelligent living spaces with adaptive home automation, personal AI assistants, and energy optimization that transforms your daily life experience.',
    'smart.hero.cta': 'Book Your Smart Home Demo',
    'smart.solutions.title': 'Intelligent Home Solutions',
    'smart.solutions.subtitle': 'Transform your living space into an intelligent ecosystem that learns your preferences, optimizes comfort, and enhances your daily routines.',
    'smart.assistant.title': 'Personal AI Assistant',
    'smart.assistant.desc': 'Voice-activated AI that manages your schedule, controls smart devices, and provides personalized assistance.',
    'smart.climate.title': 'Climate Intelligence',
    'smart.climate.desc': 'Adaptive climate control that learns your preferences and optimizes temperature for comfort and efficiency.',
    'smart.lighting.title': 'Intelligent Lighting',
    'smart.lighting.desc': 'Smart lighting systems that adjust automatically based on time, activity, and natural light conditions.',
    'smart.security.title': 'Advanced Security',
    'smart.security.desc': 'AI-powered security systems with facial recognition, anomaly detection, and intelligent monitoring.',
    'smart.energy.title': 'Energy Management',
    'smart.energy.desc': 'Intelligent energy systems that optimize usage, reduce costs, and integrate renewable energy sources.',
    'smart.automation.title': 'Whole-Home Automation',
    'smart.automation.desc': 'Centralized control system that orchestrates all smart devices for seamless home management.',
    'smart.benefits.title': 'Smart Living Benefits',
    'smart.benefits.subtitle': 'Experience the tangible benefits of intelligent home automation that adapts to your lifestyle.',
    'smart.installation.title': 'Simple Installation Process',
    'smart.installation.subtitle': 'Our expert team handles everything from initial consultation to final optimization, ensuring a seamless smart home transformation.',
    'smart.features.title': 'Advanced Smart Home Features',
    'smart.features.subtitle': 'Discover the cutting-edge features that make our smart home solutions stand out from the competition.',
    'smart.cta.title': 'Ready to Transform Your Home?',
    'smart.cta.subtitle': 'Join thousands of homeowners who have created intelligent living spaces with EA Solutions\' smart home technology.',

    // Solution Pages - Finance & Security
    'finance.hero.title': 'Finance & Security',
    'finance.hero.subtitle': 'Enhance security and compliance with advanced fraud detection, risk assessment, and automated regulatory reporting that protects your financial operations.',
    'finance.hero.cta': 'Book Your FinTech AI Demo',
    'finance.solutions.title': 'Advanced Financial AI Solutions',
    'finance.solutions.subtitle': 'From fraud detection to regulatory compliance, our AI solutions provide comprehensive protection and optimization for your financial operations.',
    'finance.fraud.title': 'Advanced Fraud Detection',
    'finance.fraud.desc': 'Real-time transaction monitoring with machine learning algorithms that identify suspicious patterns and prevent fraud.',
    'finance.risk.title': 'Risk Assessment & Management',
    'finance.risk.desc': 'Comprehensive risk evaluation systems that assess credit, market, and operational risks with unprecedented accuracy.',
    'finance.compliance.title': 'Regulatory Compliance',
    'finance.compliance.desc': 'Automated compliance monitoring and reporting systems that ensure adherence to financial regulations.',
    'finance.cyber.title': 'Cybersecurity Intelligence',
    'finance.cyber.desc': 'AI-powered security systems that detect and respond to cyber threats before they impact your operations.',
    'finance.aml.title': 'Anti-Money Laundering',
    'finance.aml.desc': 'Sophisticated AML systems that identify complex money laundering schemes and suspicious activities.',
    'finance.privacy.title': 'Data Protection & Privacy',
    'finance.privacy.desc': 'Comprehensive data protection solutions that ensure customer privacy and regulatory compliance.',
    'finance.metrics.title': 'Proven Security Results',
    'finance.metrics.subtitle': 'Our financial AI solutions deliver measurable improvements in security, compliance, and operational efficiency.',
    'finance.standards.title': 'Regulatory Compliance Excellence',
    'finance.standards.subtitle': 'Our solutions are designed to meet the highest regulatory standards and industry requirements.',
    'finance.case.title': 'Case Study: Major Bank Transforms Fraud Detection',
    'finance.case.desc': 'A leading European bank partnered with EA Solutions to implement advanced fraud detection systems that reduced fraud losses by 90% while improving customer experience.',
    'finance.cta.title': 'Secure Your Financial Future with AI',
    'finance.cta.subtitle': 'Join leading financial institutions that have transformed their security and compliance with EA Solutions.',

    // Solution Pages - Retail
    'retail.hero.title': 'Retail & E-commerce',
    'retail.hero.subtitle': 'Boost sales with personalized recommendations, inventory optimization, and intelligent customer service automation that transforms your retail operations and customer experiences.',
    'retail.hero.cta': 'Book Your Retail AI Demo',
    'retail.solutions.title': 'Intelligent Retail Solutions',
    'retail.solutions.subtitle': 'From personalized shopping experiences to optimized inventory management, our AI solutions drive sales and improve customer satisfaction across all retail channels.',
    'retail.recommendations.title': 'Personalized Recommendations',
    'retail.recommendations.desc': 'AI-powered recommendation engines that analyze customer behavior to suggest relevant products and increase sales.',
    'retail.inventory.title': 'Inventory Intelligence',
    'retail.inventory.desc': 'Smart inventory management that predicts demand, optimizes stock levels, and reduces waste.',
    'retail.service.title': 'Customer Service Automation',
    'retail.service.desc': 'Intelligent chatbots and virtual assistants that provide 24/7 customer support and order assistance.',
    'retail.analytics.title': 'Sales Analytics & Insights',
    'retail.analytics.desc': 'Advanced analytics that provide deep insights into customer behavior, sales trends, and market opportunities.',
    'retail.omnichannel.title': 'Omnichannel Experience',
    'retail.omnichannel.desc': 'Seamless integration across all sales channels for a unified customer experience.',
    'retail.pricing.title': 'Dynamic Pricing',
    'retail.pricing.desc': 'AI-driven pricing strategies that optimize revenue while maintaining competitiveness.',
    'retail.metrics.title': 'Proven Retail Results',
    'retail.metrics.subtitle': 'Our retail AI solutions deliver measurable improvements in sales performance, customer satisfaction, and operational efficiency.',
    'retail.cases.title': 'Retail AI Use Cases',
    'retail.cases.subtitle': 'Discover how our AI solutions can be applied across different retail scenarios to drive growth and efficiency.',
    'retail.integration.title': 'Seamless Platform Integration',
    'retail.integration.subtitle': 'Our retail AI solutions integrate seamlessly with leading e-commerce platforms and retail management systems.',
    'retail.cta.title': 'Ready to Revolutionize Your Retail Business?',
    'retail.cta.subtitle': 'Join successful retailers who have transformed their operations and boosted sales with EA Solutions\' retail AI technology.'
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
    'final.cta': 'Buchen Sie jetzt Ihr KI-Strategiegespräch',

    // Solution Pages - Gastronomy & Hospitality (German)
    'gastronomy.hero.title': 'Gastronomie & Gastgewerbe',
    'gastronomy.hero.subtitle': 'Transformieren Sie Gästeerlebnisse mit intelligenten Reservierungssystemen, automatisiertem Kundenservice und prädiktiver Analytik, die jeden Berührungspunkt Ihres Gastgewerbes verbessert.',
    'gastronomy.hero.cta': 'Buchen Sie Ihre Gastgewerbe-KI-Demo',
    'gastronomy.solutions.title': 'Intelligente Lösungen für modernes Gastgewerbe',
    'gastronomy.solutions.subtitle': 'Von Boutique-Hotels bis zu Restaurantketten - unsere KI-Lösungen optimieren Abläufe und schaffen unvergessliche Erlebnisse, die Gäste zurückkehren lassen.',
    'gastronomy.reservation.title': 'Intelligentes Reservierungsmanagement',
    'gastronomy.reservation.desc': 'KI-gestütztes Buchungssystem, das Tischzuteilung optimiert, No-Shows vorhersagt und Sitzplatzeffizienz maximiert.',
    'gastronomy.analytics.title': 'Gästeerlebnis-Analytik',
    'gastronomy.analytics.desc': 'Umfassende Einblicke in Gästepräferenzen, Zufriedenheitsmuster und Service-Optimierungsmöglichkeiten.',
    'gastronomy.service.title': 'Automatisierter Kundenservice',
    'gastronomy.service.desc': 'Intelligente Chatbots und Sprachassistenten, die Anfragen, Buchungen und Gästewünsche 24/7 bearbeiten.',
    'gastronomy.inventory.title': 'Inventar-Intelligenz',
    'gastronomy.inventory.desc': 'Prädiktives Inventarmanagement, das Verschwendung reduziert, Lagerausfälle verhindert und Lebensmittelkosten optimiert.',
    'gastronomy.revenue.title': 'Umsatzoptimierung',
    'gastronomy.revenue.desc': 'Dynamische Preisgestaltung und Yield-Management zur Maximierung des Umsatzes pro Gast und Optimierung der Auslastung.',
    'gastronomy.staff.title': 'Personaloptimierung',
    'gastronomy.staff.desc': 'Intelligente Planung und Aufgabenverwaltung, die optimale Personalbesetzung und Servicequalität gewährleistet.',
    'gastronomy.success.title': 'Kunden-Erfolgsgeschichte',
    'gastronomy.success.hotel': 'Hotel am Kochbrunnen Wiesbaden',
    'gastronomy.success.quote': 'EA Solutions hat unser Gästeerlebnis mit ihrem intelligenten Buchungssystem transformiert. Wir haben eine 40%ige Reduzierung der No-Shows und 25%ige Steigerung der Kundenzufriedenheit erreicht.',
    'gastronomy.process.title': 'Implementierungsprozess',
    'gastronomy.process.subtitle': 'Unsere bewährte Methodik gewährleistet nahtlose Integration in Ihre bestehenden Gastgewerbe-Abläufe.',
    'gastronomy.cta.title': 'Bereit, Ihr Gästeerlebnis zu transformieren?',
    'gastronomy.cta.subtitle': 'Schließen Sie sich führenden Gastgewerbe-Marken an, die ihre Abläufe mit EA Solutions\' KI-Technologie revolutioniert haben.',

    // Solution Pages - Industrial & Manufacturing (German)
    'industrial.hero.title': 'Industrie & Fertigung',
    'industrial.hero.subtitle': 'Optimieren Sie die Produktionseffizienz mit prädiktiver Wartung, Qualitätskontroll-Automatisierung und intelligentem Supply-Chain-Management, das Ihre Fertigungsabläufe transformiert.',
    'industrial.hero.cta': 'Buchen Sie Ihre Fertigungs-KI-Demo',
    'industrial.solutions.title': 'Intelligente Fertigungslösungen',
    'industrial.solutions.subtitle': 'Von prädiktiver Wartung bis zur Qualitätssicherung - unsere KI-Lösungen optimieren jeden Aspekt Ihres Fertigungsprozesses für maximale Effizienz und minimale Ausfallzeiten.',
    'industrial.maintenance.title': 'Prädiktive Wartung',
    'industrial.maintenance.desc': 'KI-gestützte Überwachungssysteme, die Geräteausfälle vorhersagen, bevor sie auftreten, und Ausfallzeiten um bis zu 70% reduzieren.',
    'industrial.quality.title': 'Qualitätskontroll-Automatisierung',
    'industrial.quality.desc': 'Computer Vision und ML-Algorithmen, die Defekte erkennen und konsistente Produktqualität im großen Maßstab gewährleisten.',
    'industrial.production.title': 'Produktionsoptimierung',
    'industrial.production.desc': 'Intelligente Systeme, die Produktionspläne, Ressourcenzuteilung und Workflow-Effizienz optimieren.',
    'industrial.supply.title': 'Supply-Chain-Intelligenz',
    'industrial.supply.desc': 'Intelligente Logistik und Inventarmanagement, das Ihr gesamtes Supply-Chain-Ökosystem optimiert.',
    'industrial.workforce.title': 'Personalmanagement',
    'industrial.workforce.desc': 'KI-gesteuerte Systeme, die Personalzuteilung, Sicherheitsprotokolle und Kompetenzentwicklungsprogramme optimieren.',
    'industrial.energy.title': 'Energiemanagement',
    'industrial.energy.desc': 'Intelligente Energiesysteme, die den Verbrauch reduzieren und gleichzeitig optimale Produktionsniveaus aufrechterhalten.',
    'industrial.metrics.title': 'Messbare Auswirkungen auf Ihr Geschäftsergebnis',
    'industrial.metrics.subtitle': 'Unsere Fertigungs-KI-Lösungen liefern quantifizierbare Ergebnisse, die sich direkt auf Ihre operative Effizienz und Rentabilität auswirken.',
    'industrial.approach.title': 'Unser Fertigungs-Implementierungsansatz',
    'industrial.approach.subtitle': 'Wir verstehen, dass Fertigungsabläufe keine Störungen verkraften können. Unser phasenweiser Ansatz gewährleistet nahtlose Integration.',
    'industrial.cta.title': 'Bereit, Ihre Fertigungsabläufe zu optimieren?',
    'industrial.cta.subtitle': 'Schließen Sie sich Branchenführern an, die ihre Produktionseffizienz mit EA Solutions\' Fertigungs-KI transformiert haben.',

    // Solution Pages - Healthcare (German)
    'healthcare.hero.title': 'Gesundheitswesen & Lebenswissenschaften',
    'healthcare.hero.subtitle': 'Verbessern Sie Patientenergebnisse mit Diagnoseunterstützung, automatisierten Verwaltungsaufgaben und intelligenten Patientenmanagement-Systemen, die Pflegequalität und Effizienz steigern.',
    'healthcare.hero.cta': 'Buchen Sie Ihre Gesundheitswesen-KI-Demo',
    'healthcare.solutions.title': 'Fortschrittliche Gesundheitswesen-KI-Lösungen',
    'healthcare.solutions.subtitle': 'Transformieren Sie die Patientenversorgung mit intelligenten Systemen, die klinische Entscheidungsfindung unterstützen, Abläufe optimieren und Gesundheitsergebnisse verbessern.',
    'healthcare.diagnostic.title': 'Diagnoseunterstützungssysteme',
    'healthcare.diagnostic.desc': 'KI-gestützte Diagnoseunterstützung, die medizinische Bilder, Laborergebnisse und Patientendaten für genaue Diagnosen analysiert.',
    'healthcare.patient.title': 'Patientenmanagement',
    'healthcare.patient.desc': 'Umfassende Patientenmanagement-Systeme, die Behandlungspfade optimieren und Patientenengagement verbessern.',
    'healthcare.documentation.title': 'Klinische Dokumentation',
    'healthcare.documentation.desc': 'Automatisierte klinische Dokumentation, die administrative Belastung reduziert und Genauigkeit verbessert.',
    'healthcare.monitoring.title': 'Fernüberwachung',
    'healthcare.monitoring.desc': 'Kontinuierliche Patientenüberwachungssysteme, die Vitalzeichen und Gesundheitsmetriken aus der Ferne verfolgen.',
    'healthcare.research.title': 'Arzneimittelentdeckung & Forschung',
    'healthcare.research.desc': 'KI-beschleunigte Forschung und Arzneimittelentdeckungsprozesse, die Entwicklungszeit und -kosten reduzieren.',
    'healthcare.personalized.title': 'Personalisierte Medizin',
    'healthcare.personalized.desc': 'Maßgeschneiderte Behandlungspläne basierend auf individuellen Patientenmerkmalen und genetischen Profilen.',
    'healthcare.impact.title': 'Messbare Gesundheitswesen-Auswirkungen',
    'healthcare.impact.subtitle': 'Unsere Gesundheitswesen-KI-Lösungen liefern quantifizierbare Verbesserungen bei Patientenergebnissen, operativer Effizienz und Kostensenkung.',
    'healthcare.success.title': 'Kunden-Erfolgsgeschichte',
    'healthcare.success.clinic': 'Falchi Dental Wiesbaden',
    'healthcare.success.quote': 'EA Solutions\' KI-Diagnosewerkzeuge haben unsere Praxis revolutioniert. Wir haben signifikante Verbesserungen in der Behandlungsgenauigkeit und Patientenzufriedenheit erreicht, während die Diagnosezeit um 40% reduziert wurde.',
    'healthcare.compliance.title': 'Gesundheitswesen-Compliance & Sicherheit',
    'healthcare.compliance.subtitle': 'Unsere Lösungen sind mit gesundheitsspezifischen Compliance- und Sicherheitsanforderungen entwickelt und gewährleisten Patientendatenschutz und regulatorische Einhaltung.',
    'healthcare.cta.title': 'Transformieren Sie die Patientenversorgung mit KI',
    'healthcare.cta.subtitle': 'Schließen Sie sich führenden Gesundheitsdienstleistern an, die Patientenergebnisse und operative Effizienz mit EA Solutions\' Gesundheitswesen-KI verbessern.',

    // Solution Pages - Smart Living (German)
    'smart.hero.title': 'Smart Living & Persönliche KI',
    'smart.hero.subtitle': 'Schaffen Sie intelligente Wohnräume mit adaptiver Hausautomatisierung, persönlichen KI-Assistenten und Energieoptimierung, die Ihr tägliches Lebenserlebnis transformiert.',
    'smart.hero.cta': 'Buchen Sie Ihre Smart-Home-Demo',
    'smart.solutions.title': 'Intelligente Wohnlösungen',
    'smart.solutions.subtitle': 'Verwandeln Sie Ihren Wohnraum in ein intelligentes Ökosystem, das Ihre Präferenzen lernt, Komfort optimiert und Ihre täglichen Routinen verbessert.',
    'smart.assistant.title': 'Persönlicher KI-Assistent',
    'smart.assistant.desc': 'Sprachaktivierte KI, die Ihren Zeitplan verwaltet, intelligente Geräte steuert und personalisierte Unterstützung bietet.',
    'smart.climate.title': 'Klima-Intelligenz',
    'smart.climate.desc': 'Adaptive Klimasteuerung, die Ihre Präferenzen lernt und Temperatur für Komfort und Effizienz optimiert.',
    'smart.lighting.title': 'Intelligente Beleuchtung',
    'smart.lighting.desc': 'Intelligente Beleuchtungssysteme, die sich automatisch basierend auf Zeit, Aktivität und natürlichen Lichtverhältnissen anpassen.',
    'smart.security.title': 'Erweiterte Sicherheit',
    'smart.security.desc': 'KI-gestützte Sicherheitssysteme mit Gesichtserkennung, Anomalieerkennung und intelligenter Überwachung.',
    'smart.energy.title': 'Energiemanagement',
    'smart.energy.desc': 'Intelligente Energiesysteme, die Nutzung optimieren, Kosten reduzieren und erneuerbare Energiequellen integrieren.',
    'smart.automation.title': 'Ganzhaus-Automatisierung',
    'smart.automation.desc': 'Zentralisiertes Steuerungssystem, das alle intelligenten Geräte für nahtloses Hausmanagement orchestriert.',
    'smart.benefits.title': 'Smart-Living-Vorteile',
    'smart.benefits.subtitle': 'Erleben Sie die greifbaren Vorteile intelligenter Hausautomatisierung, die sich an Ihren Lebensstil anpasst.',
    'smart.installation.title': 'Einfacher Installationsprozess',
    'smart.installation.subtitle': 'Unser Expertenteam kümmert sich um alles von der ersten Beratung bis zur finalen Optimierung und gewährleistet eine nahtlose Smart-Home-Transformation.',
    'smart.features.title': 'Erweiterte Smart-Home-Features',
    'smart.features.subtitle': 'Entdecken Sie die hochmodernen Features, die unsere Smart-Home-Lösungen von der Konkurrenz abheben.',
    'smart.cta.title': 'Bereit, Ihr Zuhause zu transformieren?',
    'smart.cta.subtitle': 'Schließen Sie sich Tausenden von Hausbesitzern an, die intelligente Wohnräume mit EA Solutions\' Smart-Home-Technologie geschaffen haben.',

    // Solution Pages - Finance & Security (German)
    'finance.hero.title': 'Finanzen & Sicherheit',
    'finance.hero.subtitle': 'Verbessern Sie Sicherheit und Compliance mit fortschrittlicher Betrugserkennung, Risikobewertung und automatisierter regulatorischer Berichterstattung, die Ihre Finanzoperationen schützt.',
    'finance.hero.cta': 'Buchen Sie Ihre FinTech-KI-Demo',
    'finance.solutions.title': 'Fortschrittliche Finanz-KI-Lösungen',
    'finance.solutions.subtitle': 'Von Betrugserkennung bis zur regulatorischen Compliance - unsere KI-Lösungen bieten umfassenden Schutz und Optimierung für Ihre Finanzoperationen.',
    'finance.fraud.title': 'Fortschrittliche Betrugserkennung',
    'finance.fraud.desc': 'Echtzeit-Transaktionsüberwachung mit Machine-Learning-Algorithmen, die verdächtige Muster identifizieren und Betrug verhindern.',
    'finance.risk.title': 'Risikobewertung & -management',
    'finance.risk.desc': 'Umfassende Risikobewertungssysteme, die Kredit-, Markt- und operative Risiken mit beispielloser Genauigkeit bewerten.',
    'finance.compliance.title': 'Regulatorische Compliance',
    'finance.compliance.desc': 'Automatisierte Compliance-Überwachung und Berichtssysteme, die Einhaltung von Finanzvorschriften gewährleisten.',
    'finance.cyber.title': 'Cybersicherheits-Intelligenz',
    'finance.cyber.desc': 'KI-gestützte Sicherheitssysteme, die Cyber-Bedrohungen erkennen und darauf reagieren, bevor sie Ihre Operationen beeinträchtigen.',
    'finance.aml.title': 'Anti-Geldwäsche',
    'finance.aml.desc': 'Ausgeklügelte AML-Systeme, die komplexe Geldwäscheschemata und verdächtige Aktivitäten identifizieren.',
    'finance.privacy.title': 'Datenschutz & Privatsphäre',
    'finance.privacy.desc': 'Umfassende Datenschutzlösungen, die Kundenprivatsphäre und regulatorische Compliance gewährleisten.',
    'finance.metrics.title': 'Bewährte Sicherheitsergebnisse',
    'finance.metrics.subtitle': 'Unsere Finanz-KI-Lösungen liefern messbare Verbesserungen in Sicherheit, Compliance und operativer Effizienz.',
    'finance.standards.title': 'Regulatorische Compliance-Exzellenz',
    'finance.standards.subtitle': 'Unsere Lösungen sind darauf ausgelegt, die höchsten regulatorischen Standards und Branchenanforderungen zu erfüllen.',
    'finance.case.title': 'Fallstudie: Großbank transformiert Betrugserkennung',
    'finance.case.desc': 'Eine führende europäische Bank arbeitete mit EA Solutions zusammen, um fortschrittliche Betrugserkennungssysteme zu implementieren, die Betrugsverluste um 90% reduzierten und gleichzeitig die Kundenerfahrung verbesserten.',
    'finance.cta.title': 'Sichern Sie Ihre finanzielle Zukunft mit KI',
    'finance.cta.subtitle': 'Schließen Sie sich führenden Finanzinstitutionen an, die ihre Sicherheit und Compliance mit EA Solutions transformiert haben.',

    // Solution Pages - Retail (German)
    'retail.hero.title': 'Einzelhandel & E-Commerce',
    'retail.hero.subtitle': 'Steigern Sie Verkäufe mit personalisierten Empfehlungen, Inventaroptimierung und intelligenter Kundenservice-Automatisierung, die Ihre Einzelhandelsoperationen und Kundenerfahrungen transformiert.',
    'retail.hero.cta': 'Buchen Sie Ihre Einzelhandel-KI-Demo',
    'retail.solutions.title': 'Intelligente Einzelhandelslösungen',
    'retail.solutions.subtitle': 'Von personalisierten Einkaufserlebnissen bis zur optimierten Inventarverwaltung - unsere KI-Lösungen steigern Verkäufe und verbessern Kundenzufriedenheit über alle Einzelhandelskanäle.',
    'retail.recommendations.title': 'Personalisierte Empfehlungen',
    'retail.recommendations.desc': 'KI-gestützte Empfehlungsengines, die Kundenverhalten analysieren, um relevante Produkte vorzuschlagen und Verkäufe zu steigern.',
    'retail.inventory.title': 'Inventar-Intelligenz',
    'retail.inventory.desc': 'Intelligentes Inventarmanagement, das Nachfrage vorhersagt, Lagerbestände optimiert und Verschwendung reduziert.',
    'retail.service.title': 'Kundenservice-Automatisierung',
    'retail.service.desc': 'Intelligente Chatbots und virtuelle Assistenten, die 24/7 Kundensupport und Bestellhilfe bieten.',
    'retail.analytics.title': 'Verkaufsanalytik & Einblicke',
    'retail.analytics.desc': 'Fortschrittliche Analytik, die tiefe Einblicke in Kundenverhalten, Verkaufstrends und Marktchancen bietet.',
    'retail.omnichannel.title': 'Omnichannel-Erlebnis',
    'retail.omnichannel.desc': 'Nahtlose Integration über alle Verkaufskanäle für ein einheitliches Kundenerlebnis.',
    'retail.pricing.title': 'Dynamische Preisgestaltung',
    'retail.pricing.desc': 'KI-gesteuerte Preisstrategien, die Umsatz optimieren und gleichzeitig Wettbewerbsfähigkeit aufrechterhalten.',
    'retail.metrics.title': 'Bewährte Einzelhandelsergebnisse',
    'retail.metrics.subtitle': 'Unsere Einzelhandel-KI-Lösungen liefern messbare Verbesserungen in Verkaufsleistung, Kundenzufriedenheit und operativer Effizienz.',
    'retail.cases.title': 'Einzelhandel-KI-Anwendungsfälle',
    'retail.cases.subtitle': 'Entdecken Sie, wie unsere KI-Lösungen in verschiedenen Einzelhandelsszenarien angewendet werden können, um Wachstum und Effizienz zu fördern.',
    'retail.integration.title': 'Nahtlose Plattform-Integration',
    'retail.integration.subtitle': 'Unsere Einzelhandel-KI-Lösungen integrieren sich nahtlos mit führenden E-Commerce-Plattformen und Einzelhandels-Management-Systemen.',
    'retail.cta.title': 'Bereit, Ihr Einzelhandelsgeschäft zu revolutionieren?',
    'retail.cta.subtitle': 'Schließen Sie sich erfolgreichen Einzelhändlern an, die ihre Operationen transformiert und Verkäufe mit EA Solutions\' Einzelhandel-KI-Technologie gesteigert haben.'
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
    'final.cta': 'Réservez votre appel stratégique IA maintenant',

    // Solution Pages - Gastronomy & Hospitality (French)
    'gastronomy.hero.title': 'Gastronomie & Hôtellerie',
    'gastronomy.hero.subtitle': 'Transformez les expériences clients avec des systèmes de réservation intelligents, un service client automatisé et des analyses prédictives qui élèvent chaque point de contact de votre entreprise hôtelière.',
    'gastronomy.hero.cta': 'Réservez votre démo IA hôtellerie',
    'gastronomy.solutions.title': 'Solutions Intelligentes pour l\'Hôtellerie Moderne',
    'gastronomy.solutions.subtitle': 'Des hôtels-boutiques aux chaînes de restaurants, nos solutions IA rationalisent les opérations et créent des expériences mémorables qui fidélisent les clients.',
    'gastronomy.reservation.title': 'Gestion Intelligente des Réservations',
    'gastronomy.reservation.desc': 'Système de réservation alimenté par IA qui optimise l\'allocation des tables, prédit les non-présentations et maximise l\'efficacité des places.',
    'gastronomy.analytics.title': 'Analytique de l\'Expérience Client',
    'gastronomy.analytics.desc': 'Aperçus complets des préférences clients, modèles de satisfaction et opportunités d\'optimisation du service.',
    'gastronomy.service.title': 'Service Client Automatisé',
    'gastronomy.service.desc': 'Chatbots intelligents et assistants vocaux qui gèrent les demandes, réservations et requêtes clients 24/7.',
    'gastronomy.inventory.title': 'Intelligence d\'Inventaire',
    'gastronomy.inventory.desc': 'Gestion d\'inventaire prédictive qui réduit le gaspillage, prévient les ruptures de stock et optimise les coûts alimentaires.',
    'gastronomy.revenue.title': 'Optimisation des Revenus',
    'gastronomy.revenue.desc': 'Tarification dynamique et gestion du rendement pour maximiser les revenus par client et optimiser les taux d\'occupation.',
    'gastronomy.staff.title': 'Optimisation du Personnel',
    'gastronomy.staff.desc': 'Planification intelligente et gestion des tâches qui assure des niveaux de personnel optimaux et une qualité de service.',
    'gastronomy.success.title': 'Histoire de Succès Client',
    'gastronomy.success.hotel': 'Hotel am Kochbrunnen Wiesbaden',
    'gastronomy.success.quote': 'EA Solutions a transformé notre expérience client avec leur système de réservation intelligent. Nous avons vu une réduction de 40% des non-présentations et une augmentation de 25% des scores de satisfaction client.',
    'gastronomy.process.title': 'Processus d\'Implémentation',
    'gastronomy.process.subtitle': 'Notre méthodologie éprouvée assure une intégration transparente avec vos opérations hôtelières existantes.',
    'gastronomy.cta.title': 'Prêt à Transformer Votre Expérience Client?',
    'gastronomy.cta.subtitle': 'Rejoignez les marques hôtelières leaders qui ont révolutionné leurs opérations avec la technologie IA d\'EA Solutions.',

    // Solution Pages - Industrial & Manufacturing (French)
    'industrial.hero.title': 'Industrie & Fabrication',
    'industrial.hero.subtitle': 'Optimisez l\'efficacité de production avec la maintenance prédictive, l\'automatisation du contrôle qualité et la gestion intelligente de la chaîne d\'approvisionnement qui transforme vos opérations de fabrication.',
    'industrial.hero.cta': 'Réservez votre démo IA fabrication',
    'industrial.solutions.title': 'Solutions de Fabrication Intelligente',
    'industrial.solutions.subtitle': 'De la maintenance prédictive à l\'assurance qualité, nos solutions IA optimisent chaque aspect de votre processus de fabrication pour une efficacité maximale et un temps d\'arrêt minimal.',
    'industrial.maintenance.title': 'Maintenance Prédictive',
    'industrial.maintenance.desc': 'Systèmes de surveillance alimentés par IA qui prédisent les pannes d\'équipement avant qu\'elles ne se produisent, réduisant les temps d\'arrêt jusqu\'à 70%.',
    'industrial.quality.title': 'Automatisation du Contrôle Qualité',
    'industrial.quality.desc': 'Vision par ordinateur et algorithmes ML qui détectent les défauts et assurent une qualité de produit cohérente à grande échelle.',
    'industrial.production.title': 'Optimisation de la Production',
    'industrial.production.desc': 'Systèmes intelligents qui optimisent les horaires de production, l\'allocation des ressources et l\'efficacité du flux de travail.',
    'industrial.supply.title': 'Intelligence de la Chaîne d\'Approvisionnement',
    'industrial.supply.desc': 'Logistique intelligente et gestion d\'inventaire qui optimise tout votre écosystème de chaîne d\'approvisionnement.',
    'industrial.workforce.title': 'Gestion de la Main-d\'œuvre',
    'industrial.workforce.desc': 'Systèmes pilotés par IA qui optimisent l\'allocation du personnel, les protocoles de sécurité et les programmes de développement des compétences.',
    'industrial.energy.title': 'Gestion de l\'Énergie',
    'industrial.energy.desc': 'Systèmes énergétiques intelligents qui réduisent la consommation tout en maintenant des niveaux de production optimaux.',
    'industrial.metrics.title': 'Impact Mesurable sur Votre Résultat',
    'industrial.metrics.subtitle': 'Nos solutions IA de fabrication livrent des résultats quantifiables qui impactent directement votre efficacité opérationnelle et rentabilité.',
    'industrial.approach.title': 'Notre Approche d\'Implémentation Manufacturière',
    'industrial.approach.subtitle': 'Nous comprenons que les opérations de fabrication ne peuvent pas se permettre de perturbations. Notre approche par phases assure une intégration transparente.',
    'industrial.cta.title': 'Prêt à Optimiser Vos Opérations de Fabrication?',
    'industrial.cta.subtitle': 'Rejoignez les leaders de l\'industrie qui ont transformé leur efficacité de production avec l\'IA de fabrication d\'EA Solutions.',

    // Solution Pages - Healthcare (French)
    'healthcare.hero.title': 'Santé & Sciences de la Vie',
    'healthcare.hero.subtitle': 'Améliorez les résultats patients avec l\'assistance diagnostique, les tâches administratives automatisées et les systèmes intelligents de gestion des patients qui améliorent la qualité des soins et l\'efficacité.',
    'healthcare.hero.cta': 'Réservez votre démo IA santé',
    'healthcare.solutions.title': 'Solutions IA Santé Avancées',
    'healthcare.solutions.subtitle': 'Transformez les soins aux patients avec des systèmes intelligents qui soutiennent la prise de décision clinique, rationalisent les opérations et améliorent les résultats de santé.',
    'healthcare.diagnostic.title': 'Systèmes de Support Diagnostique',
    'healthcare.diagnostic.desc': 'Assistance diagnostique alimentée par IA qui analyse les images médicales, résultats de laboratoire et données patients pour des diagnostics précis.',
    'healthcare.patient.title': 'Gestion des Patients',
    'healthcare.patient.desc': 'Systèmes complets de gestion des patients qui optimisent les parcours de soins et améliorent l\'engagement des patients.',
    'healthcare.documentation.title': 'Documentation Clinique',
    'healthcare.documentation.desc': 'Documentation clinique automatisée qui réduit la charge administrative et améliore la précision.',
    'healthcare.monitoring.title': 'Surveillance à Distance',
    'healthcare.monitoring.desc': 'Systèmes de surveillance continue des patients qui suivent les signes vitaux et métriques de santé à distance.',
    'healthcare.research.title': 'Découverte de Médicaments & Recherche',
    'healthcare.research.desc': 'Processus de recherche et découverte de médicaments accélérés par IA qui réduisent le temps et les coûts de développement.',
    'healthcare.personalized.title': 'Médecine Personnalisée',
    'healthcare.personalized.desc': 'Plans de traitement sur mesure basés sur les caractéristiques individuelles des patients et profils génétiques.',
    'healthcare.impact.title': 'Impact Santé Mesurable',
    'healthcare.impact.subtitle': 'Nos solutions IA santé livrent des améliorations quantifiables des résultats patients, efficacité opérationnelle et réduction des coûts.',
    'healthcare.success.title': 'Histoire de Succès Client',
    'healthcare.success.clinic': 'Falchi Dental Wiesbaden',
    'healthcare.success.quote': 'Les outils de diagnostic IA d\'EA Solutions ont révolutionné notre pratique. Nous avons vu des améliorations significatives de la précision de traitement et satisfaction des patients, tout en réduisant le temps de diagnostic de 40%.',
    'healthcare.compliance.title': 'Conformité & Sécurité Santé',
    'healthcare.compliance.subtitle': 'Nos solutions sont construites avec les exigences de conformité et sécurité spécifiques à la santé à l\'esprit, assurant la protection des données patients et l\'adhérence réglementaire.',
    'healthcare.cta.title': 'Transformez les Soins aux Patients avec l\'IA',
    'healthcare.cta.subtitle': 'Rejoignez les fournisseurs de soins de santé leaders qui améliorent les résultats patients et l\'efficacité opérationnelle avec l\'IA santé d\'EA Solutions.',

    // Solution Pages - Smart Living (French)
    'smart.hero.title': 'Vie Intelligente & IA Personnelle',
    'smart.hero.subtitle': 'Créez des espaces de vie intelligents avec l\'automatisation domestique adaptative, les assistants IA personnels et l\'optimisation énergétique qui transforme votre expérience de vie quotidienne.',
    'smart.hero.cta': 'Réservez votre démo maison intelligente',
    'smart.solutions.title': 'Solutions Domestiques Intelligentes',
    'smart.solutions.subtitle': 'Transformez votre espace de vie en un écosystème intelligent qui apprend vos préférences, optimise le confort et améliore vos routines quotidiennes.',
    'smart.assistant.title': 'Assistant IA Personnel',
    'smart.assistant.desc': 'IA activée par la voix qui gère votre emploi du temps, contrôle les appareils intelligents et fournit une assistance personnalisée.',
    'smart.climate.title': 'Intelligence Climatique',
    'smart.climate.desc': 'Contrôle climatique adaptatif qui apprend vos préférences et optimise la température pour le confort et l\'efficacité.',
    'smart.lighting.title': 'Éclairage Intelligent',
    'smart.lighting.desc': 'Systèmes d\'éclairage intelligents qui s\'ajustent automatiquement selon l\'heure, l\'activité et les conditions de lumière naturelle.',
    'smart.security.title': 'Sécurité Avancée',
    'smart.security.desc': 'Systèmes de sécurité alimentés par IA avec reconnaissance faciale, détection d\'anomalies et surveillance intelligente.',
    'smart.energy.title': 'Gestion de l\'Énergie',
    'smart.energy.desc': 'Systèmes énergétiques intelligents qui optimisent l\'utilisation, réduisent les coûts et intègrent les sources d\'énergie renouvelable.',
    'smart.automation.title': 'Automatisation de Toute la Maison',
    'smart.automation.desc': 'Système de contrôle centralisé qui orchestre tous les appareils intelligents pour une gestion domestique transparente.',
    'smart.benefits.title': 'Avantages de la Vie Intelligente',
    'smart.benefits.subtitle': 'Découvrez les avantages tangibles de l\'automatisation domestique intelligente qui s\'adapte à votre style de vie.',
    'smart.installation.title': 'Processus d\'Installation Simple',
    'smart.installation.subtitle': 'Notre équipe d\'experts gère tout de la consultation initiale à l\'optimisation finale, assurant une transformation de maison intelligente transparente.',
    'smart.features.title': 'Fonctionnalités Avancées de Maison Intelligente',
    'smart.features.subtitle': 'Découvrez les fonctionnalités de pointe qui distinguent nos solutions de maison intelligente de la concurrence.',
    'smart.cta.title': 'Prêt à Transformer Votre Maison?',
    'smart.cta.subtitle': 'Rejoignez des milliers de propriétaires qui ont créé des espaces de vie intelligents avec la technologie de maison intelligente d\'EA Solutions.',

    // Solution Pages - Finance & Security (French)
    'finance.hero.title': 'Finance & Sécurité',
    'finance.hero.subtitle': 'Améliorez la sécurité et la conformité avec la détection de fraude avancée, l\'évaluation des risques et les rapports réglementaires automatisés qui protègent vos opérations financières.',
    'finance.hero.cta': 'Réservez votre démo IA FinTech',
    'finance.solutions.title': 'Solutions IA Financières Avancées',
    'finance.solutions.subtitle': 'De la détection de fraude à la conformité réglementaire, nos solutions IA fournissent une protection et optimisation complètes pour vos opérations financières.',
    'finance.fraud.title': 'Détection de Fraude Avancée',
    'finance.fraud.desc': 'Surveillance de transactions en temps réel avec des algorithmes d\'apprentissage automatique qui identifient les modèles suspects et préviennent la fraude.',
    'finance.risk.title': 'Évaluation & Gestion des Risques',
    'finance.risk.desc': 'Systèmes d\'évaluation des risques complets qui évaluent les risques de crédit, de marché et opérationnels avec une précision sans précédent.',
    'finance.compliance.title': 'Conformité Réglementaire',
    'finance.compliance.desc': 'Systèmes de surveillance et de rapport de conformité automatisés qui assurent l\'adhérence aux réglementations financières.',
    'finance.cyber.title': 'Intelligence de Cybersécurité',
    'finance.cyber.desc': 'Systèmes de sécurité alimentés par IA qui détectent et répondent aux menaces cyber avant qu\'elles n\'impactent vos opérations.',
    'finance.aml.title': 'Anti-Blanchiment d\'Argent',
    'finance.aml.desc': 'Systèmes AML sophistiqués qui identifient les schémas complexes de blanchiment d\'argent et activités suspectes.',
    'finance.privacy.title': 'Protection des Données & Confidentialité',
    'finance.privacy.desc': 'Solutions complètes de protection des données qui assurent la confidentialité des clients et la conformité réglementaire.',
    'finance.metrics.title': 'Résultats de Sécurité Prouvés',
    'finance.metrics.subtitle': 'Nos solutions IA financières livrent des améliorations mesurables en sécurité, conformité et efficacité opérationnelle.',
    'finance.standards.title': 'Excellence en Conformité Réglementaire',
    'finance.standards.subtitle': 'Nos solutions sont conçues pour répondre aux plus hauts standards réglementaires et exigences de l\'industrie.',
    'finance.case.title': 'Étude de Cas: Grande Banque Transforme la Détection de Fraude',
    'finance.case.desc': 'Une banque européenne leader s\'est associée à EA Solutions pour implémenter des systèmes avancés de détection de fraude qui ont réduit les pertes de fraude de 90% tout en améliorant l\'expérience client.',
    'finance.cta.title': 'Sécurisez Votre Avenir Financier avec l\'IA',
    'finance.cta.subtitle': 'Rejoignez les institutions financières leaders qui ont transformé leur sécurité et conformité avec EA Solutions.',

    // Solution Pages - Retail (French)
    'retail.hero.title': 'Commerce de Détail & E-commerce',
    'retail.hero.subtitle': 'Boostez les ventes avec des recommandations personnalisées, l\'optimisation d\'inventaire et l\'automatisation intelligente du service client qui transforme vos opérations de vente au détail et expériences clients.',
    'retail.hero.cta': 'Réservez votre démo IA commerce',
    'retail.solutions.title': 'Solutions de Commerce Intelligent',
    'retail.solutions.subtitle': 'Des expériences d\'achat personnalisées à la gestion d\'inventaire optimisée, nos solutions IA stimulent les ventes et améliorent la satisfaction client sur tous les canaux de vente.',
    'retail.recommendations.title': 'Recommandations Personnalisées',
    'retail.recommendations.desc': 'Moteurs de recommandation alimentés par IA qui analysent le comportement client pour suggérer des produits pertinents et augmenter les ventes.',
    'retail.inventory.title': 'Intelligence d\'Inventaire',
    'retail.inventory.desc': 'Gestion d\'inventaire intelligente qui prédit la demande, optimise les niveaux de stock et réduit le gaspillage.',
    'retail.service.title': 'Automatisation du Service Client',
    'retail.service.desc': 'Chatbots intelligents et assistants virtuels qui fournissent un support client 24/7 et une assistance aux commandes.',
    'retail.analytics.title': 'Analytique & Insights des Ventes',
    'retail.analytics.desc': 'Analytique avancée qui fournit des insights profonds sur le comportement client, tendances de vente et opportunités de marché.',
    'retail.omnichannel.title': 'Expérience Omnicanal',
    'retail.omnichannel.desc': 'Intégration transparente sur tous les canaux de vente pour une expérience client unifiée.',
    'retail.pricing.title': 'Tarification Dynamique',
    'retail.pricing.desc': 'Stratégies de tarification pilotées par IA qui optimisent les revenus tout en maintenant la compétitivité.',
    'retail.metrics.title': 'Résultats Commerce Prouvés',
    'retail.metrics.subtitle': 'Nos solutions IA commerce livrent des améliorations mesurables en performance des ventes, satisfaction client et efficacité opérationnelle.',
    'retail.cases.title': 'Cas d\'Usage IA Commerce',
    'retail.cases.subtitle': 'Découvrez comment nos solutions IA peuvent être appliquées dans différents scénarios de commerce pour stimuler la croissance et l\'efficacité.',
    'retail.integration.title': 'Intégration Transparente de Plateforme',
    'retail.integration.subtitle': 'Nos solutions IA commerce s\'intègrent parfaitement avec les plateformes e-commerce leaders et systèmes de gestion de commerce.',
    'retail.cta.title': 'Prêt à Révolutionner Votre Commerce?',
    'retail.cta.subtitle': 'Rejoignez les commerçants prospères qui ont transformé leurs opérations et boosté les ventes avec la technologie IA commerce d\'EA Solutions.'
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
    'final.cta': 'احجز مكالمة استراتيجية الذكاء الاصطناعي الآن',

    // Solution Pages - Gastronomy & Hospitality (Arabic)
    'gastronomy.hero.title': 'فن الطبخ والضيافة',
    'gastronomy.hero.subtitle': 'حول تجارب الضيوف بأنظمة حجز ذكية وخدمة عملاء آلية وتحليلات تنبؤية ترفع كل نقطة تفاعل في أعمال الضيافة.',
    'gastronomy.hero.cta': 'احجز عرض الذكاء الاصطناعي للضيافة',
    'gastronomy.solutions.title': 'حلول ذكية للضيافة الحديثة',
    'gastronomy.solutions.subtitle': 'من الفنادق البوتيك إلى سلاسل المطاعم، حلولنا للذكاء الاصطناعي تبسط العمليات وتخلق تجارب لا تُنسى تجعل الضيوف يعودون.',
    'gastronomy.reservation.title': 'إدارة حجوزات ذكية',
    'gastronomy.reservation.desc': 'نظام حجز مدعوم بالذكاء الاصطناعي يحسن تخصيص الطاولات ويتنبأ بعدم الحضور ويزيد كفاءة المقاعد.',
    'gastronomy.analytics.title': 'تحليلات تجربة الضيوف',
    'gastronomy.analytics.desc': 'رؤى شاملة حول تفضيلات الضيوف وأنماط الرضا وفرص تحسين الخدمة.',
    'gastronomy.service.title': 'خدمة عملاء آلية',
    'gastronomy.service.desc': 'روبوتات محادثة ذكية ومساعدين صوتيين يتعاملون مع الاستفسارات والحجوزات وطلبات الضيوف 24/7.',
    'gastronomy.inventory.title': 'ذكاء المخزون',
    'gastronomy.inventory.desc': 'إدارة مخزون تنبؤية تقلل الهدر وتمنع نفاد المخزون وتحسن تكاليف الطعام.',
    'gastronomy.revenue.title': 'تحسين الإيرادات',
    'gastronomy.revenue.desc': 'تسعير ديناميكي وإدارة العائد لزيادة الإيرادات لكل ضيف وتحسين معدلات الإشغال.',
    'gastronomy.staff.title': 'تحسين الموظفين',
    'gastronomy.staff.desc': 'جدولة ذكية وإدارة مهام تضمن مستويات موظفين مثلى وجودة خدمة.',
    'gastronomy.success.title': 'قصة نجاح العميل',
    'gastronomy.success.hotel': 'فندق أم كوخبرونين فيسبادن',
    'gastronomy.success.quote': 'حولت EA Solutions تجربة ضيوفنا بنظام الحجز الذكي. شهدنا انخفاضاً بنسبة 40% في عدم الحضور وزيادة 25% في درجات رضا العملاء.',
    'gastronomy.process.title': 'عملية التنفيذ',
    'gastronomy.process.subtitle': 'منهجيتنا المثبتة تضمن التكامل السلس مع عمليات الضيافة الحالية.',
    'gastronomy.cta.title': 'مستعد لتحويل تجربة ضيوفك؟',
    'gastronomy.cta.subtitle': 'انضم إلى العلامات التجارية الرائدة في الضيافة التي ثورت عملياتها بتكنولوجيا الذكاء الاصطناعي من EA Solutions.',

    // Solution Pages - Industrial & Manufacturing (Arabic)
    'industrial.hero.title': 'الصناعة والتصنيع',
    'industrial.hero.subtitle': 'حسن كفاءة الإنتاج بالصيانة التنبؤية وأتمتة مراقبة الجودة وإدارة سلسلة التوريد الذكية التي تحول عمليات التصنيع.',
    'industrial.hero.cta': 'احجز عرض الذكاء الاصطناعي للتصنيع',
    'industrial.solutions.title': 'حلول تصنيع ذكية',
    'industrial.solutions.subtitle': 'من الصيانة التنبؤية إلى ضمان الجودة، حلولنا للذكاء الاصطناعي تحسن كل جانب من عملية التصنيع للحصول على أقصى كفاءة وأقل وقت توقف.',
    'industrial.maintenance.title': 'صيانة تنبؤية',
    'industrial.maintenance.desc': 'أنظمة مراقبة مدعومة بالذكاء الاصطناعي تتنبأ بأعطال المعدات قبل حدوثها، مما يقلل وقت التوقف بنسبة تصل إلى 70%.',
    'industrial.quality.title': 'أتمتة مراقبة الجودة',
    'industrial.quality.desc': 'رؤية حاسوبية وخوارزميات تعلم آلي تكتشف العيوب وتضمن جودة منتج متسقة على نطاق واسع.',
    'industrial.production.title': 'تحسين الإنتاج',
    'industrial.production.desc': 'أنظمة ذكية تحسن جداول الإنتاج وتخصيص الموارد وكفاءة سير العمل.',
    'industrial.supply.title': 'ذكاء سلسلة التوريد',
    'industrial.supply.desc': 'لوجستيات ذكية وإدارة مخزون تحسن نظام سلسلة التوريد بالكامل.',
    'industrial.workforce.title': 'إدارة القوى العاملة',
    'industrial.workforce.desc': 'أنظمة مدفوعة بالذكاء الاصطناعي تحسن تخصيص الموظفين وبروتوكولات السلامة وبرامج تطوير المهارات.',
    'industrial.energy.title': 'إدارة الطاقة',
    'industrial.energy.desc': 'أنظمة طاقة ذكية تقلل الاستهلاك مع الحفاظ على مستويات إنتاج مثلى.',
    'industrial.metrics.title': 'تأثير قابل للقياس على أرباحك',
    'industrial.metrics.subtitle': 'حلولنا للذكاء الاصطناعي في التصنيع تقدم نتائج قابلة للقياس تؤثر مباشرة على كفاءتك التشغيلية وربحيتك.',
    'industrial.approach.title': 'نهج التنفيذ التصنيعي',
    'industrial.approach.subtitle': 'نحن نفهم أن العمليات التصنيعية لا تستطيع تحمل الاضطراب. نهجنا المرحلي يضمن التكامل السلس.',
    'industrial.cta.title': 'مستعد لتحسين عمليات التصنيع؟',
    'industrial.cta.subtitle': 'انضم إلى قادة الصناعة الذين حولوا كفاءة إنتاجهم بالذكاء الاصطناعي التصنيعي من EA Solutions.',

    // Solution Pages - Healthcare (Arabic)
    'healthcare.hero.title': 'الرعاية الصحية وعلوم الحياة',
    'healthcare.hero.subtitle': 'حسن نتائج المرضى بمساعدة التشخيص والمهام الإدارية الآلية وأنظمة إدارة المرضى الذكية التي تعزز جودة الرعاية والكفاءة.',
    'healthcare.hero.cta': 'احجز عرض الذكاء الاصطناعي للرعاية الصحية',
    'healthcare.solutions.title': 'حلول ذكاء اصطناعي متقدمة للرعاية الصحية',
    'healthcare.solutions.subtitle': 'حول رعاية المرضى بأنظمة ذكية تدعم اتخاذ القرارات السريرية وتبسط العمليات وتحسن النتائج الصحية.',
    'healthcare.diagnostic.title': 'أنظمة دعم التشخيص',
    'healthcare.diagnostic.desc': 'مساعدة تشخيصية مدعومة بالذكاء الاصطناعي تحلل الصور الطبية ونتائج المختبر وبيانات المرضى للحصول على تشخيصات دقيقة.',
    'healthcare.patient.title': 'إدارة المرضى',
    'healthcare.patient.desc': 'أنظمة إدارة مرضى شاملة تحسن مسارات الرعاية وتحسن مشاركة المرضى.',
    'healthcare.documentation.title': 'التوثيق السريري',
    'healthcare.documentation.desc': 'توثيق سريري آلي يقلل العبء الإداري ويحسن الدقة.',
    'healthcare.monitoring.title': 'المراقبة عن بُعد',
    'healthcare.monitoring.desc': 'أنظمة مراقبة مستمرة للمرضى تتتبع العلامات الحيوية ومقاييس الصحة عن بُعد.',
    'healthcare.research.title': 'اكتشاف الأدوية والبحث',
    'healthcare.research.desc': 'عمليات بحث واكتشاف أدوية مسرعة بالذكاء الاصطناعي تقلل وقت وتكاليف التطوير.',
    'healthcare.personalized.title': 'الطب الشخصي',
    'healthcare.personalized.desc': 'خطط علاج مخصصة بناءً على خصائص المرضى الفردية والملفات الجينية.',
    'healthcare.impact.title': 'تأثير رعاية صحية قابل للقياس',
    'healthcare.impact.subtitle': 'حلولنا للذكاء الاصطناعي في الرعاية الصحية تقدم تحسينات قابلة للقياس في نتائج المرضى والكفاءة التشغيلية وتقليل التكاليف.',
    'healthcare.success.title': 'قصة نجاح العميل',
    'healthcare.success.clinic': 'فالشي دنتال فيسبادن',
    'healthcare.success.quote': 'أدوات التشخيص بالذكاء الاصطناعي من EA Solutions ثورت ممارستنا. شهدنا تحسينات كبيرة في دقة العلاج ورضا المرضى، مع تقليل وقت التشخيص بنسبة 40%.',
    'healthcare.compliance.title': 'امتثال وأمان الرعاية الصحية',
    'healthcare.compliance.subtitle': 'حلولنا مبنية مع متطلبات الامتثال والأمان الخاصة بالرعاية الصحية في الاعتبار، مما يضمن حماية بيانات المرضى والالتزام التنظيمي.',
    'healthcare.cta.title': 'حول رعاية المرضى بالذكاء الاصطناعي',
    'healthcare.cta.subtitle': 'انضم إلى مقدمي الرعاية الصحية الرائدين الذين يحسنون نتائج المرضى والكفاءة التشغيلية بالذكاء الاصطناعي للرعاية الصحية من EA Solutions.',

    // Solution Pages - Smart Living (Arabic)
    'smart.hero.title': 'المعيشة الذكية والذكاء الاصطناعي الشخصي',
    'smart.hero.subtitle': 'أنشئ مساحات معيشة ذكية بأتمتة منزلية تكيفية ومساعدين ذكاء اصطناعي شخصيين وتحسين طاقة يحول تجربة حياتك اليومية.',
    'smart.hero.cta': 'احجز عرض المنزل الذكي',
    'smart.solutions.title': 'حلول منزلية ذكية',
    'smart.solutions.subtitle': 'حول مساحة معيشتك إلى نظام بيئي ذكي يتعلم تفضيلاتك ويحسن الراحة ويعزز روتينك اليومي.',
    'smart.assistant.title': 'مساعد ذكاء اصطناعي شخصي',
    'smart.assistant.desc': 'ذكاء اصطناعي مفعل بالصوت يدير جدولك ويتحكم في الأجهزة الذكية ويقدم مساعدة شخصية.',
    'smart.climate.title': 'ذكاء المناخ',
    'smart.climate.desc': 'تحكم مناخي تكيفي يتعلم تفضيلاتك ويحسن درجة الحرارة للراحة والكفاءة.',
    'smart.lighting.title': 'إضاءة ذكية',
    'smart.lighting.desc': 'أنظمة إضاءة ذكية تتكيف تلقائياً بناءً على الوقت والنشاط وظروف الضوء الطبيعي.',
    'smart.security.title': 'أمان متقدم',
    'smart.security.desc': 'أنظمة أمان مدعومة بالذكاء الاصطناعي مع التعرف على الوجوه واكتشاف الشذوذ والمراقبة الذكية.',
    'smart.energy.title': 'إدارة الطاقة',
    'smart.energy.desc': 'أنظمة طاقة ذكية تحسن الاستخدام وتقلل التكاليف وتدمج مصادر الطاقة المتجددة.',
    'smart.automation.title': 'أتمتة المنزل بالكامل',
    'smart.automation.desc': 'نظام تحكم مركزي ينسق جميع الأجهزة الذكية لإدارة منزلية سلسة.',
    'smart.benefits.title': 'فوائد المعيشة الذكية',
    'smart.benefits.subtitle': 'اختبر الفوائد الملموسة لأتمتة المنزل الذكية التي تتكيف مع نمط حياتك.',
    'smart.installation.title': 'عملية تركيب بسيطة',
    'smart.installation.subtitle': 'فريق خبرائنا يتعامل مع كل شيء من الاستشارة الأولية إلى التحسين النهائي، مما يضمن تحول منزل ذكي سلس.',
    'smart.features.title': 'ميزات منزل ذكي متقدمة',
    'smart.features.subtitle': 'اكتشف الميزات المتطورة التي تجعل حلول منزلنا الذكي تتميز عن المنافسة.',
    'smart.cta.title': 'مستعد لتحويل منزلك؟',
    'smart.cta.subtitle': 'انضم إلى آلاف أصحاب المنازل الذين أنشأوا مساحات معيشة ذكية بتكنولوجيا المنزل الذكي من EA Solutions.',

    // Solution Pages - Finance & Security (Arabic)
    'finance.hero.title': 'المالية والأمان',
    'finance.hero.subtitle': 'عزز الأمان والامتثال بكشف الاحتيال المتقدم وتقييم المخاطر والتقارير التنظيمية الآلية التي تحمي عملياتك المالية.',
    'finance.hero.cta': 'احجز عرض الذكاء الاصطناعي للتكنولوجيا المالية',
    'finance.solutions.title': 'حلول ذكاء اصطناعي مالية متقدمة',
    'finance.solutions.subtitle': 'من كشف الاحتيال إلى الامتثال التنظيمي، حلولنا للذكاء الاصطناعي توفر حماية وتحسين شاملين لعملياتك المالية.',
    'finance.fraud.title': 'كشف احتيال متقدم',
    'finance.fraud.desc': 'مراقبة معاملات في الوقت الفعلي بخوارزميات تعلم آلي تحدد الأنماط المشبوهة وتمنع الاحتيال.',
    'finance.risk.title': 'تقييم وإدارة المخاطر',
    'finance.risk.desc': 'أنظمة تقييم مخاطر شاملة تقيم مخاطر الائتمان والسوق والتشغيل بدقة لا مثيل لها.',
    'finance.compliance.title': 'الامتثال التنظيمي',
    'finance.compliance.desc': 'أنظمة مراقبة وتقارير امتثال آلية تضمن الالتزام بالقوانين المالية.',
    'finance.cyber.title': 'ذكاء الأمن السيبراني',
    'finance.cyber.desc': 'أنظمة أمان مدعومة بالذكاء الاصطناعي تكتشف وتستجيب للتهديدات السيبرانية قبل أن تؤثر على عملياتك.',
    'finance.aml.title': 'مكافحة غسيل الأموال',
    'finance.aml.desc': 'أنظمة مكافحة غسيل أموال متطورة تحدد مخططات غسيل الأموال المعقدة والأنشطة المشبوهة.',
    'finance.privacy.title': 'حماية البيانات والخصوصية',
    'finance.privacy.desc': 'حلول حماية بيانات شاملة تضمن خصوصية العملاء والامتثال التنظيمي.',
    'finance.metrics.title': 'نتائج أمان مثبتة',
    'finance.metrics.subtitle': 'حلولنا للذكاء الاصطناعي المالي تقدم تحسينات قابلة للقياس في الأمان والامتثال والكفاءة التشغيلية.',
    'finance.standards.title': 'تميز الامتثال التنظيمي',
    'finance.standards.subtitle': 'حلولنا مصممة لتلبية أعلى المعايير التنظيمية ومتطلبات الصناعة.',
    'finance.case.title': 'دراسة حالة: بنك كبير يحول كشف الاحتيال',
    'finance.case.desc': 'شارك بنك أوروبي رائد مع EA Solutions لتنفيذ أنظمة كشف احتيال متقدمة قللت خسائر الاحتيال بنسبة 90% مع تحسين تجربة العملاء.',
    'finance.cta.title': 'أمن مستقبلك المالي بالذكاء الاصطناعي',
    'finance.cta.subtitle': 'انضم إلى المؤسسات المالية الرائدة التي حولت أمانها وامتثالها مع EA Solutions.',

    // Solution Pages - Retail (Arabic)
    'retail.hero.title': 'التجارة الإلكترونية والتجزئة',
    'retail.hero.subtitle': 'عزز المبيعات بتوصيات شخصية وتحسين المخزون وأتمتة خدمة العملاء الذكية التي تحول عمليات التجزئة وتجارب العملاء.',
    'retail.hero.cta': 'احجز عرض الذكاء الاصطناعي للتجزئة',
    'retail.solutions.title': 'حلول تجزئة ذكية',
    'retail.solutions.subtitle': 'من تجارب التسوق الشخصية إلى إدارة المخزون المحسنة، حلولنا للذكاء الاصطناعي تدفع المبيعات وتحسن رضا العملاء عبر جميع قنوات التجزئة.',
    'retail.recommendations.title': 'توصيات شخصية',
    'retail.recommendations.desc': 'محركات توصية مدعومة بالذكاء الاصطناعي تحلل سلوك العملاء لاقتراح منتجات ذات صلة وزيادة المبيعات.',
    'retail.inventory.title': 'ذكاء المخزون',
    'retail.inventory.desc': 'إدارة مخزون ذكية تتنبأ بالطلب وتحسن مستويات المخزون وتقلل الهدر.',
    'retail.service.title': 'أتمتة خدمة العملاء',
    'retail.service.desc': 'روبوتات محادثة ذكية ومساعدين افتراضيين يقدمون دعم عملاء 24/7 ومساعدة في الطلبات.',
    'retail.analytics.title': 'تحليلات ورؤى المبيعات',
    'retail.analytics.desc': 'تحليلات متقدمة توفر رؤى عميقة حول سلوك العملاء واتجاهات المبيعات وفرص السوق.',
    'retail.omnichannel.title': 'تجربة متعددة القنوات',
    'retail.omnichannel.desc': 'تكامل سلس عبر جميع قنوات المبيعات لتجربة عملاء موحدة.',
    'retail.pricing.title': 'تسعير ديناميكي',
    'retail.pricing.desc': 'استراتيجيات تسعير مدفوعة بالذكاء الاصطناعي تحسن الإيرادات مع الحفاظ على القدرة التنافسية.',
    'retail.metrics.title': 'نتائج تجزئة مثبتة',
    'retail.metrics.subtitle': 'حلولنا للذكاء الاصطناعي في التجزئة تقدم تحسينات قابلة للقياس في أداء المبيعات ورضا العملاء والكفاءة التشغيلية.',
    'retail.cases.title': 'حالات استخدام الذكاء الاصطناعي في التجزئة',
    'retail.cases.subtitle': 'اكتشف كيف يمكن تطبيق حلولنا للذكاء الاصطناعي في سيناريوهات تجزئة مختلفة لدفع النمو والكفاءة.',
    'retail.integration.title': 'تكامل منصة سلس',
    'retail.integration.subtitle': 'حلولنا للذكاء الاصطناعي في التجزئة تتكامل بسلاسة مع منصات التجارة الإلكترونية الرائدة وأنظمة إدارة التجزئة.',
    'retail.cta.title': 'مستعد لثورة أعمال التجزئة؟',
    'retail.cta.subtitle': 'انضم إلى تجار التجزئة الناجحين الذين حولوا عملياتهم وعززوا المبيعات بتكنولوجيا الذكاء الاصطناعي للتجزئة من EA Solutions.'
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
    'final.cta': 'Reserva tu llamada estratégica de IA ahora',

    // Solution Pages - Gastronomy & Hospitality (Spanish)
    'gastronomy.hero.title': 'Gastronomía y Hospitalidad',
    'gastronomy.hero.subtitle': 'Transforma las experiencias de huéspedes con sistemas de reserva inteligentes, servicio al cliente automatizado y análisis predictivo que elevan cada punto de contacto de tu negocio de hospitalidad.',
    'gastronomy.hero.cta': 'Reserva tu demo de IA para hospitalidad',
    'gastronomy.solutions.title': 'Soluciones Inteligentes para Hospitalidad Moderna',
    'gastronomy.solutions.subtitle': 'Desde hoteles boutique hasta cadenas de restaurantes, nuestras soluciones de IA optimizan operaciones y crean experiencias memorables que hacen que los huéspedes regresen.',
    'gastronomy.reservation.title': 'Gestión Inteligente de Reservas',
    'gastronomy.reservation.desc': 'Sistema de reservas impulsado por IA que optimiza la asignación de mesas, predice no-shows y maximiza la eficiencia de asientos.',
    'gastronomy.analytics.title': 'Análisis de Experiencia del Huésped',
    'gastronomy.analytics.desc': 'Insights comprensivos sobre preferencias de huéspedes, patrones de satisfacción y oportunidades de optimización del servicio.',
    'gastronomy.service.title': 'Servicio al Cliente Automatizado',
    'gastronomy.service.desc': 'Chatbots inteligentes y asistentes de voz que manejan consultas, reservas y solicitudes de huéspedes 24/7.',
    'gastronomy.inventory.title': 'Inteligencia de Inventario',
    'gastronomy.inventory.desc': 'Gestión de inventario predictiva que reduce desperdicios, previene desabastecimientos y optimiza costos de alimentos.',
    'gastronomy.revenue.title': 'Optimización de Ingresos',
    'gastronomy.revenue.desc': 'Precios dinámicos y gestión de rendimiento para maximizar ingresos por huésped y optimizar tasas de ocupación.',
    'gastronomy.staff.title': 'Optimización de Personal',
    'gastronomy.staff.desc': 'Programación inteligente y gestión de tareas que asegura niveles óptimos de personal y calidad de servicio.',
    'gastronomy.success.title': 'Historia de Éxito del Cliente',
    'gastronomy.success.hotel': 'Hotel am Kochbrunnen Wiesbaden',
    'gastronomy.success.quote': 'EA Solutions transformó nuestra experiencia de huéspedes con su sistema de reservas inteligente. Hemos visto una reducción del 40% en no-shows y un aumento del 25% en puntuaciones de satisfacción del cliente.',
    'gastronomy.process.title': 'Proceso de Implementación',
    'gastronomy.process.subtitle': 'Nuestra metodología probada asegura integración perfecta con tus operaciones de hospitalidad existentes.',
    'gastronomy.cta.title': '¿Listo para Transformar tu Experiencia de Huéspedes?',
    'gastronomy.cta.subtitle': 'Únete a marcas líderes de hospitalidad que han revolucionado sus operaciones con la tecnología de IA de EA Solutions.',

    // Solution Pages - Industrial & Manufacturing (Spanish)
    'industrial.hero.title': 'Industrial y Manufactura',
    'industrial.hero.subtitle': 'Optimiza la eficiencia de producción con mantenimiento predictivo, automatización de control de calidad y gestión inteligente de cadena de suministro que transforma tus operaciones de manufactura.',
    'industrial.hero.cta': 'Reserva tu demo de IA para manufactura',
    'industrial.solutions.title': 'Soluciones de Manufactura Inteligente',
    'industrial.solutions.subtitle': 'Desde mantenimiento predictivo hasta aseguramiento de calidad, nuestras soluciones de IA optimizan cada aspecto de tu proceso de manufactura para máxima eficiencia y mínimo tiempo de inactividad.',
    'industrial.maintenance.title': 'Mantenimiento Predictivo',
    'industrial.maintenance.desc': 'Sistemas de monitoreo impulsados por IA que predicen fallas de equipos antes de que ocurran, reduciendo tiempo de inactividad hasta en un 70%.',
    'industrial.quality.title': 'Automatización de Control de Calidad',
    'industrial.quality.desc': 'Visión por computadora y algoritmos de ML que detectan defectos y aseguran calidad de producto consistente a escala.',
    'industrial.production.title': 'Optimización de Producción',
    'industrial.production.desc': 'Sistemas inteligentes que optimizan horarios de producción, asignación de recursos y eficiencia de flujo de trabajo.',
    'industrial.supply.title': 'Inteligencia de Cadena de Suministro',
    'industrial.supply.desc': 'Logística inteligente y gestión de inventario que optimiza todo tu ecosistema de cadena de suministro.',
    'industrial.workforce.title': 'Gestión de Fuerza Laboral',
    'industrial.workforce.desc': 'Sistemas impulsados por IA que optimizan asignación de personal, protocolos de seguridad y programas de desarrollo de habilidades.',
    'industrial.energy.title': 'Gestión de Energía',
    'industrial.energy.desc': 'Sistemas de energía inteligentes que reducen el consumo mientras mantienen niveles de producción óptimos.',
    'industrial.metrics.title': 'Impacto Medible en tu Resultado Final',
    'industrial.metrics.subtitle': 'Nuestras soluciones de IA para manufactura entregan resultados cuantificables que impactan directamente tu eficiencia operacional y rentabilidad.',
    'industrial.approach.title': 'Nuestro Enfoque de Implementación en Manufactura',
    'industrial.approach.subtitle': 'Entendemos que las operaciones de manufactura no pueden permitirse disrupciones. Nuestro enfoque por fases asegura integración perfecta.',
    'industrial.cta.title': '¿Listo para Optimizar tus Operaciones de Manufactura?',
    'industrial.cta.subtitle': 'Únete a líderes de la industria que han transformado su eficiencia de producción con la IA de manufactura de EA Solutions.',

    // Solution Pages - Healthcare (Spanish)
    'healthcare.hero.title': 'Salud y Ciencias de la Vida',
    'healthcare.hero.subtitle': 'Mejora los resultados de pacientes con asistencia diagnóstica, tareas administrativas automatizadas y sistemas inteligentes de gestión de pacientes que mejoran la calidad de atención y eficiencia.',
    'healthcare.hero.cta': 'Reserva tu demo de IA para salud',
    'healthcare.solutions.title': 'Soluciones Avanzadas de IA para Salud',
    'healthcare.solutions.subtitle': 'Transforma la atención al paciente con sistemas inteligentes que apoyan la toma de decisiones clínicas, optimizan operaciones y mejoran resultados de salud.',
    'healthcare.diagnostic.title': 'Sistemas de Apoyo Diagnóstico',
    'healthcare.diagnostic.desc': 'Asistencia diagnóstica impulsada por IA que analiza imágenes médicas, resultados de laboratorio y datos de pacientes para diagnósticos precisos.',
    'healthcare.patient.title': 'Gestión de Pacientes',
    'healthcare.patient.desc': 'Sistemas comprensivos de gestión de pacientes que optimizan rutas de atención y mejoran el compromiso del paciente.',
    'healthcare.documentation.title': 'Documentación Clínica',
    'healthcare.documentation.desc': 'Documentación clínica automatizada que reduce la carga administrativa y mejora la precisión.',
    'healthcare.monitoring.title': 'Monitoreo Remoto',
    'healthcare.monitoring.desc': 'Sistemas de monitoreo continuo de pacientes que rastrean signos vitales y métricas de salud remotamente.',
    'healthcare.research.title': 'Descubrimiento de Medicamentos e Investigación',
    'healthcare.research.desc': 'Procesos de investigación y descubrimiento de medicamentos acelerados por IA que reducen tiempo y costos de desarrollo.',
    'healthcare.personalized.title': 'Medicina Personalizada',
    'healthcare.personalized.desc': 'Planes de tratamiento personalizados basados en características individuales del paciente y perfiles genéticos.',
    'healthcare.impact.title': 'Impacto Medible en Salud',
    'healthcare.impact.subtitle': 'Nuestras soluciones de IA para salud entregan mejoras cuantificables en resultados de pacientes, eficiencia operacional y reducción de costos.',
    'healthcare.success.title': 'Historia de Éxito del Cliente',
    'healthcare.success.clinic': 'Falchi Dental Wiesbaden',
    'healthcare.success.quote': 'Las herramientas de diagnóstico de IA de EA Solutions han revolucionado nuestra práctica. Hemos visto mejoras significativas en precisión de tratamiento y satisfacción del paciente, mientras reducimos el tiempo de diagnóstico en un 40%.',
    'healthcare.compliance.title': 'Cumplimiento y Seguridad en Salud',
    'healthcare.compliance.subtitle': 'Nuestras soluciones están construidas con requisitos específicos de cumplimiento y seguridad en salud en mente, asegurando protección de datos del paciente y adherencia regulatoria.',
    'healthcare.cta.title': 'Transforma la Atención al Paciente con IA',
    'healthcare.cta.subtitle': 'Únete a proveedores líderes de atención médica que están mejorando resultados de pacientes y eficiencia operacional con la IA de salud de EA Solutions.',

    // Solution Pages - Smart Living (Spanish)
    'smart.hero.title': 'Vida Inteligente e IA Personal',
    'smart.hero.subtitle': 'Crea espacios de vida inteligentes con automatización del hogar adaptativa, asistentes de IA personales y optimización de energía que transforma tu experiencia de vida diaria.',
    'smart.hero.cta': 'Reserva tu demo de hogar inteligente',
    'smart.solutions.title': 'Soluciones de Hogar Inteligente',
    'smart.solutions.subtitle': 'Transforma tu espacio de vida en un ecosistema inteligente que aprende tus preferencias, optimiza comodidad y mejora tus rutinas diarias.',
    'smart.assistant.title': 'Asistente de IA Personal',
    'smart.assistant.desc': 'IA activada por voz que gestiona tu horario, controla dispositivos inteligentes y proporciona asistencia personalizada.',
    'smart.climate.title': 'Inteligencia Climática',
    'smart.climate.desc': 'Control climático adaptativo que aprende tus preferencias y optimiza temperatura para comodidad y eficiencia.',
    'smart.lighting.title': 'Iluminación Inteligente',
    'smart.lighting.desc': 'Sistemas de iluminación inteligentes que se ajustan automáticamente basados en tiempo, actividad y condiciones de luz natural.',
    'smart.security.title': 'Seguridad Avanzada',
    'smart.security.desc': 'Sistemas de seguridad impulsados por IA con reconocimiento facial, detección de anomalías y monitoreo inteligente.',
    'smart.energy.title': 'Gestión de Energía',
    'smart.energy.desc': 'Sistemas de energía inteligentes que optimizan uso, reducen costos e integran fuentes de energía renovable.',
    'smart.automation.title': 'Automatización de Toda la Casa',
    'smart.automation.desc': 'Sistema de control centralizado que orquesta todos los dispositivos inteligentes para gestión perfecta del hogar.',
    'smart.benefits.title': 'Beneficios de Vida Inteligente',
    'smart.benefits.subtitle': 'Experimenta los beneficios tangibles de automatización del hogar inteligente que se adapta a tu estilo de vida.',
    'smart.installation.title': 'Proceso de Instalación Simple',
    'smart.installation.subtitle': 'Nuestro equipo experto maneja todo desde consulta inicial hasta optimización final, asegurando una transformación de hogar inteligente perfecta.',
    'smart.features.title': 'Características Avanzadas de Hogar Inteligente',
    'smart.features.subtitle': 'Descubre las características de vanguardia que hacen que nuestras soluciones de hogar inteligente se destaquen de la competencia.',
    'smart.cta.title': '¿Listo para Transformar tu Hogar?',
    'smart.cta.subtitle': 'Únete a miles de propietarios que han creado espacios de vida inteligentes con la tecnología de hogar inteligente de EA Solutions.',

    // Solution Pages - Finance & Security (Spanish)
    'finance.hero.title': 'Finanzas y Seguridad',
    'finance.hero.subtitle': 'Mejora seguridad y cumplimiento con detección avanzada de fraude, evaluación de riesgos y reportes regulatorios automatizados que protegen tus operaciones financieras.',
    'finance.hero.cta': 'Reserva tu demo de IA FinTech',
    'finance.solutions.title': 'Soluciones Avanzadas de IA Financiera',
    'finance.solutions.subtitle': 'Desde detección de fraude hasta cumplimiento regulatorio, nuestras soluciones de IA proporcionan protección y optimización integral para tus operaciones financieras.',
    'finance.fraud.title': 'Detección Avanzada de Fraude',
    'finance.fraud.desc': 'Monitoreo de transacciones en tiempo real con algoritmos de aprendizaje automático que identifican patrones sospechosos y previenen fraude.',
    'finance.risk.title': 'Evaluación y Gestión de Riesgos',
    'finance.risk.desc': 'Sistemas comprensivos de evaluación de riesgos que evalúan riesgos de crédito, mercado y operacionales con precisión sin precedentes.',
    'finance.compliance.title': 'Cumplimiento Regulatorio',
    'finance.compliance.desc': 'Sistemas automatizados de monitoreo y reporte de cumplimiento que aseguran adherencia a regulaciones financieras.',
    'finance.cyber.title': 'Inteligencia de Ciberseguridad',
    'finance.cyber.desc': 'Sistemas de seguridad impulsados por IA que detectan y responden a amenazas cibernéticas antes de que impacten tus operaciones.',
    'finance.aml.title': 'Anti-Lavado de Dinero',
    'finance.aml.desc': 'Sistemas AML sofisticados que identifican esquemas complejos de lavado de dinero y actividades sospechosas.',
    'finance.privacy.title': 'Protección de Datos y Privacidad',
    'finance.privacy.desc': 'Soluciones comprensivas de protección de datos que aseguran privacidad del cliente y cumplimiento regulatorio.',
    'finance.metrics.title': 'Resultados de Seguridad Probados',
    'finance.metrics.subtitle': 'Nuestras soluciones de IA financiera entregan mejoras medibles en seguridad, cumplimiento y eficiencia operacional.',
    'finance.standards.title': 'Excelencia en Cumplimiento Regulatorio',
    'finance.standards.subtitle': 'Nuestras soluciones están diseñadas para cumplir los más altos estándares regulatorios y requisitos de la industria.',
    'finance.case.title': 'Caso de Estudio: Banco Mayor Transforma Detección de Fraude',
    'finance.case.desc': 'Un banco europeo líder se asoció con EA Solutions para implementar sistemas avanzados de detección de fraude que redujeron pérdidas por fraude en un 90% mientras mejoraban la experiencia del cliente.',
    'finance.cta.title': 'Asegura tu Futuro Financiero con IA',
    'finance.cta.subtitle': 'Únete a instituciones financieras líderes que han transformado su seguridad y cumplimiento con EA Solutions.',

    // Solution Pages - Retail (Spanish)
    'retail.hero.title': 'Retail y E-commerce',
    'retail.hero.subtitle': 'Impulsa ventas con recomendaciones personalizadas, optimización de inventario y automatización inteligente de servicio al cliente que transforma tus operaciones de retail y experiencias de clientes.',
    'retail.hero.cta': 'Reserva tu demo de IA para retail',
    'retail.solutions.title': 'Soluciones de Retail Inteligente',
    'retail.solutions.subtitle': 'Desde experiencias de compra personalizadas hasta gestión de inventario optimizada, nuestras soluciones de IA impulsan ventas y mejoran satisfacción del cliente a través de todos los canales de retail.',
    'retail.recommendations.title': 'Recomendaciones Personalizadas',
    'retail.recommendations.desc': 'Motores de recomendación impulsados por IA que analizan comportamiento del cliente para sugerir productos relevantes y aumentar ventas.',
    'retail.inventory.title': 'Inteligencia de Inventario',
    'retail.inventory.desc': 'Gestión de inventario inteligente que predice demanda, optimiza niveles de stock y reduce desperdicios.',
    'retail.service.title': 'Automatización de Servicio al Cliente',
    'retail.service.desc': 'Chatbots inteligentes y asistentes virtuales que proporcionan soporte al cliente 24/7 y asistencia con pedidos.',
    'retail.analytics.title': 'Análisis e Insights de Ventas',
    'retail.analytics.desc': 'Análisis avanzado que proporciona insights profundos sobre comportamiento del cliente, tendencias de ventas y oportunidades de mercado.',
    'retail.omnichannel.title': 'Experiencia Omnicanal',
    'retail.omnichannel.desc': 'Integración perfecta a través de todos los canales de ventas para una experiencia unificada del cliente.',
    'retail.pricing.title': 'Precios Dinámicos',
    'retail.pricing.desc': 'Estrategias de precios impulsadas por IA que optimizan ingresos mientras mantienen competitividad.',
    'retail.metrics.title': 'Resultados de Retail Probados',
    'retail.metrics.subtitle': 'Nuestras soluciones de IA para retail entregan mejoras medibles en rendimiento de ventas, satisfacción del cliente y eficiencia operacional.',
    'retail.cases.title': 'Casos de Uso de IA para Retail',
    'retail.cases.subtitle': 'Descubre cómo nuestras soluciones de IA pueden aplicarse en diferentes escenarios de retail para impulsar crecimiento y eficiencia.',
    'retail.integration.title': 'Integración Perfecta de Plataforma',
    'retail.integration.subtitle': 'Nuestras soluciones de IA para retail se integran perfectamente con plataformas líderes de e-commerce y sistemas de gestión de retail.',
    'retail.cta.title': '¿Listo para Revolucionar tu Negocio de Retail?',
    'retail.cta.subtitle': 'Únete a retailers exitosos que han transformado sus operaciones e impulsado ventas con la tecnología de IA para retail de EA Solutions.'
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