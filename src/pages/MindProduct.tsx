import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Building,
  Factory,
  Heart,
  Home,
  ShoppingCart,
  Utensils
} from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const MindProduct: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Universal AI Intelligence',
      description: 'One AI system that adapts to any industry, any workflow, any challenge.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Implementation',
      description: 'Deploy across your entire organization in weeks, not months.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Military-level encryption and compliance with all major standards.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Seamless Integration',
      description: 'Connects with 500+ existing tools and platforms out of the box.',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const industries = [
    { icon: Utensils, name: 'Hospitality', color: 'text-orange-500' },
    { icon: Factory, name: 'Manufacturing', color: 'text-gray-600' },
    { icon: Heart, name: 'Healthcare', color: 'text-pink-500' },
    { icon: Home, name: 'Smart Living', color: 'text-blue-500' },
    { icon: ShoppingCart, name: 'Retail', color: 'text-purple-500' },
    { icon: Building, name: 'Finance', color: 'text-green-500' }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '€2,999',
      period: '/month',
      description: 'Perfect for small businesses ready to embrace AI',
      features: [
        'Up to 50 employees',
        'Basic AI automation',
        '3 integrated systems',
        'Email support',
        'Monthly optimization'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '€7,999',
      period: '/month',
      description: 'Comprehensive AI transformation for growing companies',
      features: [
        'Up to 200 employees',
        'Advanced AI capabilities',
        'Unlimited integrations',
        'Priority support',
        'Weekly optimization',
        'Custom AI models',
        'Performance analytics'
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Unlimited AI power for large organizations',
      features: [
        'Unlimited employees',
        'Full AI ecosystem',
        'White-label solutions',
        '24/7 dedicated support',
        'Daily optimization',
        'Proprietary AI development',
        'Multi-location deployment',
        'Compliance guarantees'
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Industries',
      company: 'Manufacturing',
      quote: 'MIND transformed our entire operation. 70% efficiency increase in just 3 months.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Marcus Weber',
      role: 'Director, Alpine Hotels',
      company: 'Hospitality',
      quote: 'The ROI was immediate. Guest satisfaction up 40%, operational costs down 30%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Chief Medical Officer',
      company: 'Healthcare',
      quote: 'MIND revolutionized our patient care. Diagnostic accuracy improved by 45%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 dark:from-gray-950 dark:via-purple-950 dark:to-blue-950 text-white py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-400 rounded-full opacity-8 animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Brain className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="h-4 w-4 text-yellow-900" />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                MIND
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 text-gray-300 dark:text-gray-400 font-light">
              The Universal AI Solution
            </p>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              One intelligent system that adapts to every industry, every workflow, every challenge. 
              MIND is not just AI – it's the evolution of how businesses think, learn, and grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Start Your AI Transformation
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Why MIND Changes Everything
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Unlike traditional AI solutions that force you to adapt, MIND adapts to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              One Solution, Every Industry
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              MIND automatically configures itself for your specific industry needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white dark:bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <IconComponent className={`h-8 w-8 ${industry.color}`} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Choose the plan that fits your organization's size and ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl scale-105' 
                    : 'border-gray-200 dark:border-gray-700 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-light text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include 30-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-light leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              See how much MIND can save your organization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">Average Results</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Efficiency Increase</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">+65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">-45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">ROI Timeline</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">6 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Annual Savings</span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">€500K+</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">Get Your Custom ROI</h3>
                <div className="space-y-4">
                  <input
                    type="number"
                    placeholder="Number of employees"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  <input
                    type="number"
                    placeholder="Annual revenue (€)"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option>Select your industry</option>
                    <option>Hospitality</option>
                    <option>Manufacturing</option>
                    <option>Healthcare</option>
                    <option>Retail</option>
                    <option>Finance</option>
                    <option>Other</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                    Calculate My ROI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 dark:from-purple-950 dark:via-blue-950 dark:to-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Ready to Unleash Your Organization's Mind?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 font-light">
            Join the AI revolution. Transform your business. Unlock unlimited potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 dark:text-gray-500 mb-4">Trusted by 500+ companies worldwide</p>
            <div className="flex justify-center space-x-8 opacity-60">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindProduct;