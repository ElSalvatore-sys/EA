import React from 'react';
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
  Sparkles
} from 'lucide-react';

const Home: React.FC = () => {
  const industries = [
    {
      id: 'gastronomy',
      title: 'Gastronomy & Hospitality',
      icon: Utensils,
      link: '/solutions/gastronomy-hospitality',
      description: 'Intelligent reservation systems, automated guest services',
      gradient: 'from-orange-400 via-red-400 to-pink-400',
      shadowColor: 'shadow-orange-500/25'
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      icon: Factory,
      link: '/solutions/industrial-manufacturing',
      description: 'Predictive maintenance, quality control automation',
      gradient: 'from-gray-400 via-slate-500 to-zinc-600',
      shadowColor: 'shadow-gray-500/25'
    },
    {
      id: 'finance',
      title: 'Finance & Security',
      icon: Shield,
      link: '/solutions/finance-security',
      description: 'Fraud detection, risk assessment, compliance automation',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      shadowColor: 'shadow-emerald-500/25'
    },
    {
      id: 'smart-living',
      title: 'Smart Living & Personal AI',
      icon: HomeIcon,
      link: '/solutions/smart-living',
      description: 'Intelligent home automation, personal assistant systems',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: Heart,
      link: '/solutions/healthcare',
      description: 'Diagnostic assistance, patient management systems',
      gradient: 'from-pink-400 via-rose-500 to-red-500',
      shadowColor: 'shadow-pink-500/25'
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      link: '/solutions/retail',
      description: 'Personalized recommendations, inventory optimization',
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/25'
    }
  ];

  const clientLogos = [
    { name: 'Hotel am Kochbrunnen', industry: 'Hospitality', metric: '40% efficiency boost' },
    { name: 'Falchi Dental', industry: 'Healthcare', metric: '60% faster diagnostics' },
    { name: 'Aramco', industry: 'Energy', metric: 'Global AI integration' },
    { name: 'TechCorp Industries', industry: 'Manufacturing', metric: '70% downtime reduction' },
    { name: 'SecureBank', industry: 'Finance', metric: '99.7% fraud detection' }
  ];

  const partners = [
    'Google Cloud Partner',
    'Microsoft Azure',
    'Amazon Web Services',
    'OpenAI',
    'Anthropic (Claude)'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Business Has a Body.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                We Build Its Mind.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              We architect bespoke AI infrastructures that eradicate repetitive work, 
              amplify human potential, and unlock unprecedented levels of efficiency for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Book Your AI Strategy Call
              </button>
              <Link 
                to="/solutions" 
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Client Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Powering Innovation Across Industries</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Businesses Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From local innovators to global enterprises, we empower organizations to integrate intelligence at their core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {client.industry}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {client.name}
                </h3>
                <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full inline-block">
                  {client.metric}
                </div>
              </div>
            ))}
          </div>
          
          {/* Animated metrics bar */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600">Avg. Efficiency Gain</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-600 mb-2">18mo</div>
                <div className="text-gray-600">Avg. ROI Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Industry Solutions Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Intelligence, Engineered for Your Sector</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sector-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Generic AI is a dead end. True transformation requires solutions engineered 
              for the specific DNA of your industry. Discover how we elevate your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Link
                  key={industry.id}
                  to={industry.link}
                  className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* 3D Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  <div className="relative z-10">
                    {/* 3D Icon Container */}
                    <div className={`relative w-20 h-20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-2xl ${industry.shadowColor} shadow-lg group-hover:shadow-xl transition-shadow duration-500`}></div>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <IconComponent className="h-10 w-10 text-white drop-shadow-lg" />
                      </div>
                      {/* 3D depth effect */}
                      <div className={`absolute -bottom-1 -right-1 w-full h-full bg-gradient-to-br ${industry.gradient} rounded-2xl opacity-30 -z-10`}></div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 text-center">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-center text-blue-600 group-hover:text-purple-600 font-semibold transition-colors duration-500">
                      <span className="mr-2">Explore Solutions</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${industry.shadowColor} shadow-2xl -z-10`}></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* The EA Method Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Support for Every Stage</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our proven methodology ensures your AI transformation is seamless, 
              strategic, and sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Deep Dive & Discovery',
                description: 'We embed with your team to map every process, identify bottlenecks, and understand your ultimate goals.'
              },
              {
                number: '02',
                title: 'Architectural Design',
                description: 'We design a bespoke AI blueprint for your business, selecting the optimal blend of technologies.'
              },
              {
                number: '03',
                title: 'Seamless Implementation',
                description: 'Our elite engineers build and deploy your AI infrastructure with military precision.'
              },
              {
                number: '04',
                title: 'Evolution & Enhancement',
                description: 'Your AI mind is a living entity. We provide continuous optimization and enhancement.'
              }
            ].map((stage, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-4">{stage.number}</div>
                <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                <p className="text-blue-100">{stage.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ea-method"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Learn About Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The EA Solutions Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Radically Bespoke',
                description: 'We don\'t sell software. We build solutions. Every line of code, every algorithm, and every integration is custom-architected for you.'
              },
              {
                icon: Users,
                title: 'Elite Expertise',
                description: 'Our team consists of world-class AI engineers and strategists who live at the bleeding edge of technology.'
              },
              {
                icon: Zap,
                title: 'Tangible ROI',
                description: 'Our goal is your bottom line. We deliver measurable improvements in efficiency, cost reduction, and revenue generation.'
              }
            ].map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by World-Leading Technology</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 px-6 py-3 rounded-lg">
                <span className="text-lg font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized consultation and discover how AI can revolutionize your operations.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Book Your AI Strategy Call Now
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;