import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Factory, 
  Shield, 
  Home as HomeIcon, 
  Heart, 
  ShoppingCart,
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
  Smartphone
} from 'lucide-react';

const Home: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const industries = [
    {
      id: 'gastronomy',
      title: 'Gastronomy & Hospitality',
      icon: Utensils,
      link: '/solutions/gastronomy-hospitality',
      description: 'Intelligent systems for seamless guest experiences',
      available: true
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      icon: Factory,
      link: '/solutions/industrial-manufacturing',
      description: 'Smart automation for operational excellence',
      available: true
    },
    {
      id: 'finance',
      title: 'Finance & Security',
      icon: Shield,
      link: '/solutions/finance-security',
      description: 'Advanced protection and compliance systems',
      available: false,
      status: 'Under Research'
    },
    {
      id: 'smart-living',
      title: 'Smart Living & Personal AI',
      icon: HomeIcon,
      link: '/solutions/smart-living',
      description: 'Intelligent environments that adapt to you',
      available: true
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: Heart,
      link: '/solutions/healthcare',
      description: 'Precision care through intelligent systems',
      available: true
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      link: '/solutions/retail',
      description: 'Personalized experiences that drive growth',
      available: false,
      status: 'Under Research'
    }
  ];

  const clientLogos = [
    { 
      name: 'Hotel am Kochbrunnen', 
      industry: 'Hospitality', 
      metric: 'Full AI transformation',
      description: 'Complete hospitality AI ecosystem with 8 integrated pillars'
    },
    { 
      name: 'Falchi Dental', 
      industry: 'Healthcare', 
      metric: '60% faster diagnostics',
      description: 'AI-powered diagnostic support and patient management'
    },
    { 
      name: 'Klavierschule Glenn Miller', 
      industry: 'Education', 
      metric: 'AI booking & scheduling',
      description: 'Intelligent booking system with automated schedule optimization'
    }
  ];

  const partners = [
    { name: 'Google Cloud', logo: '🌐' },
    { name: 'Microsoft Azure', logo: '☁️' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Anthropic', logo: '🧠' },
    { name: 'AWS', logo: '⚡' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-3 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
              Your Business Has a Body.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium">
                We Build Its Mind.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              We architect bespoke AI infrastructures that eradicate repetitive work, 
              amplify human potential, and unlock unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Book Your AI Strategy Call
              </button>
              <Link 
                to="/solutions" 
                className="border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Client Showcase */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Transforming Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              From local innovators to global enterprises, we empower organizations to integrate intelligence at their core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {client.industry}
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2 text-lg">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {client.description}
                </p>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  {client.metric}
                </div>
              </div>
            ))}
          </div>
          
          {/* Metrics */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-light text-blue-600 dark:text-blue-400 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-light text-purple-600 dark:text-purple-400 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">Client Satisfaction</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-4xl font-light text-green-600 dark:text-green-400 mb-2">40-60%</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">Cost Reduction vs Big Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel am Kochbrunnen Detailed Showcase */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Featured Case Study</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Hotel am Kochbrunnen
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light mb-8">
              From traditional hospitality to AI-driven guest perfection. A complete transformation across 8 integrated pillars.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 mb-12">
              <img 
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Hotel am Kochbrunnen - Luxury hospitality with AI integration" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* AI Transformation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Key,
                title: 'Friction-Free Guest Journey',
                features: [
                  'Keyless check-in/out via QR & NFC',
                  'AI-concierge (LLM-powered)',
                  'WhatsApp integration',
                  'Multilingual voice commands'
                ],
                impact: 'Cuts queue times, boosts satisfaction, captures upsell moments'
              },
              {
                icon: BarChart3,
                title: 'Fully-Automated Back Office',
                features: [
                  'e-Invoice generator & Steuererklärung',
                  'GoBD-compliant workflows',
                  'Real-time PMS & OTA sync',
                  'Dynamic pricing dashboards'
                ],
                impact: 'Saves ~40 hrs/month admin, eliminates tax errors'
              },
              {
                icon: Thermometer,
                title: 'Smart Room & Building Control',
                features: [
                  'IoT occupancy-based HVAC',
                  'Voice + mobile app control',
                  'Energy-analytics panel',
                  'Carbon-reduction targets'
                ],
                impact: 'Cuts energy cost by 25%, supports ESG goals'
              },
              {
                icon: Lock,
                title: 'Security & Compliance',
                features: [
                  'Zero-trust network segmentation',
                  'GDPR-proof data lake',
                  'Automatic PII masking',
                  'Continuous vulnerability scanning'
                ],
                impact: 'Protects guest data, lowers insurance premiums'
              },
              {
                icon: TrendingUp,
                title: 'Revenue-Driving AI Services',
                features: [
                  'Context-aware RAG system',
                  'Local events & offers integration',
                  'Upsell engine in chatbot',
                  'Sentiment analysis & auto-response'
                ],
                impact: 'Converts inquiries to bookings, increases revenue'
              },
              {
                icon: Smartphone,
                title: 'Seamless Booking & CRM',
                features: [
                  'Mobile-first website (99 Lighthouse)',
                  'One-tap booking + Apple/Google Pay',
                  'Automated email/SMS triggers',
                  'Personalized touchpoints'
                ],
                impact: 'Lifts direct-booking share, drives repeat stays'
              },
              {
                icon: Users,
                title: 'Staff Orchestration',
                features: [
                  'AI-driven housekeeping routes',
                  'Linen forecasting',
                  'Auto-generated maintenance tickets',
                  'Role-based mobile dashboards'
                ],
                impact: 'Cuts room-turn times, prevents outages'
              },
              {
                icon: Zap,
                title: 'Scalable Architecture',
                features: [
                  'Containerised micro-services',
                  'German cloud deployment',
                  'GitOps CI/CD with rollback',
                  'Hourly encrypted backups'
                ],
                impact: 'Guarantees 99.9% uptime, DSGVO-compliant'
              }
            ].map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{pillar.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">{pillar.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Measurable Results</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                Complete AI transformation delivering unprecedented operational excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-green-600 dark:text-green-400 mb-2">40hrs</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">Monthly Admin Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-purple-600 dark:text-purple-400 mb-2">25%</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">Energy Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-orange-600 dark:text-orange-400 mb-2">99</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">Lighthouse Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Websites & Apps Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              AI-Powered Websites & Apps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              We build intelligent websites and applications with 40-60% cost savings compared to big companies, 
              without compromising on quality or innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12 h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Klavierschule Glenn Miller</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI-Integrated Piano School Platform</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg font-light leading-relaxed">
                  Complete website with AI-powered booking system, intelligent schedule creator, and automated 
                  student management. Features smart lesson planning and personalized learning paths.
                </p>
                <a 
                  href="https://klavierschule-glennmiller.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Smart Development</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  AI-assisted development process that reduces costs while maintaining enterprise-grade quality.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Intelligent Design</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  AI-powered design systems that create beautiful, user-centric interfaces automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalistic Industry Solutions */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Sector-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Intelligent systems engineered for your industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const isAvailable = industry.available;
              
              return (
                <div
                  key={industry.id}
                  className={`group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 transition-all duration-500 border border-gray-100 dark:border-gray-700 ${
                    isAvailable 
                      ? 'hover:shadow-xl hover:-translate-y-2 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  {!isAvailable && (
                    <div className="absolute top-4 right-4 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
                      {industry.status}
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <IconComponent className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  {isAvailable ? (
                    <Link
                      to={industry.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic EA Method Process */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              The EA Method
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Our proven methodology ensures seamless AI transformation.
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-32">
              {[
                {
                  number: '01',
                  title: 'Deep Dive & Discovery',
                  description: 'We embed with your team to map every process and identify transformation opportunities.',
                  duration: '2-4 weeks'
                },
                {
                  number: '02',
                  title: 'Architectural Design',
                  description: 'Custom AI blueprint creation with optimal technology selection for your specific needs.',
                  duration: '3-5 weeks'
                },
                {
                  number: '03',
                  title: 'Seamless Implementation',
                  description: 'Precise deployment with minimal disruption and comprehensive team training.',
                  duration: '6-12 weeks'
                },
                {
                  number: '04',
                  title: 'Evolution & Enhancement',
                  description: 'Continuous optimization and enhancement as your AI systems grow with your business.',
                  duration: 'Ongoing'
                }
              ].map((stage, index) => (
                <div
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  data-step={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                    visibleSteps.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      {/* Step Circle */}
                      <div className={`absolute -left-6 top-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg transition-all duration-1000 hidden lg:flex ${
                        visibleSteps.includes(index)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-100'
                          : 'bg-gray-300 dark:bg-gray-700 scale-75'
                      }`}>
                        {stage.number}
                      </div>
                      
                      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:ml-6 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-6 lg:hidden">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-lg">
                            {stage.number}
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {stage.duration}
                          </span>
                        </div>
                        
                        <div className="hidden lg:flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                            {stage.title}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {stage.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4 lg:hidden">
                          {stage.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center">
                      <div className="text-6xl opacity-20 font-light">
                        {stage.number}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link
              to="/ea-method"
              className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              The EA Solutions Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: 'Radically Bespoke',
                description: 'Every solution is custom-architected for your specific needs and industry requirements.'
              },
              {
                icon: Users,
                title: 'Elite Expertise',
                description: 'World-class AI engineers and strategists with deep industry knowledge and proven results.'
              },
              {
                icon: Zap,
                title: 'Measurable Impact',
                description: 'Guaranteed improvements in efficiency, cost reduction, and operational excellence.'
              }
            ].map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-12 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <IconComponent className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Powered by Leading Technology
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{partner.logo}</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 font-light">
            Schedule a personalized consultation and discover how AI can revolutionize your operations.
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Book Your AI Strategy Call Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;