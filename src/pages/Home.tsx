import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  Building2,
  Sparkles,
  Globe,
  Code,
  Palette,
  Key,
  MessageSquare,
  Thermometer,
  Lock,
  TrendingUp,
  BarChart3,
  Smartphone,
  ExternalLink,
  Search,
  Lightbulb,
  Cog,
  Rocket,
  Brain,
  Shield,
  Monitor,
  Calendar,
  Star,
  Play
} from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const Home: React.FC = () => {
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 text-white relative overflow-hidden">
        {/* Minimalistic Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
              {translate('hero.title').split('.')[0]}.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium">
                {translate('hero.title').split('.')[1]}.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              {translate('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                {translate('cta.book')}
              </button>
              <Link 
                to="/mind" 
                className="border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Discover MIND AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}

      {/* Final CTA */}
      <section className="py-32 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">{translate('final.title')}</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 font-light">
            {translate('final.subtitle')}
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            {translate('final.cta')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;