import React from 'react';
import { Home, Smartphone, Zap, Thermometer, Lock, Lightbulb } from 'lucide-react';

const SmartLiving: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Home className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">Smart Living & Personal AI</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Create intelligent living spaces with adaptive home automation, personal AI assistants, 
                and energy optimization that transforms your daily life experience.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Book Your Smart Home Demo
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Smart home technology" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Home Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your living space into an intelligent ecosystem that learns your preferences, 
              optimizes comfort, and enhances your daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Personal AI Assistant',
                description: 'Voice-activated AI that manages your schedule, controls smart devices, and provides personalized assistance.',
                features: ['Voice command recognition', 'Schedule management', 'Smart device control', 'Personalized recommendations']
              },
              {
                icon: Thermometer,
                title: 'Climate Intelligence',
                description: 'Adaptive climate control that learns your preferences and optimizes temperature for comfort and efficiency.',
                features: ['Adaptive temperature control', 'Weather integration', 'Occupancy sensing', 'Energy optimization']
              },
              {
                icon: Lightbulb,
                title: 'Intelligent Lighting',
                description: 'Smart lighting systems that adjust automatically based on time, activity, and natural light conditions.',
                features: ['Circadian rhythm lighting', 'Automated scene control', 'Motion detection', 'Natural light integration']
              },
              {
                icon: Lock,
                title: 'Advanced Security',
                description: 'AI-powered security systems with facial recognition, anomaly detection, and intelligent monitoring.',
                features: ['Facial recognition', 'Intrusion detection', 'Smart notifications', 'Remote monitoring']
              },
              {
                icon: Zap,
                title: 'Energy Management',
                description: 'Intelligent energy systems that optimize usage, reduce costs, and integrate renewable energy sources.',
                features: ['Usage optimization', 'Peak shaving', 'Solar integration', 'Cost reduction analytics']
              },
              {
                icon: Home,
                title: 'Whole-Home Automation',
                description: 'Centralized control system that orchestrates all smart devices for seamless home management.',
                features: ['Centralized control', 'Device integration', 'Automated routines', 'Remote access']
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Living Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the tangible benefits of intelligent home automation that adapts to your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '40%',
                description: 'Average energy savings',
                icon: Zap
              },
              {
                metric: '2 hrs',
                description: 'Daily time saved',
                icon: Smartphone
              },
              {
                metric: '95%',
                description: 'User satisfaction rate',
                icon: Home
              },
              {
                metric: '30%',
                description: 'Improved home security',
                icon: Lock
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team handles everything from initial consultation to final optimization, 
              ensuring a seamless smart home transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Home Assessment',
                description: 'Comprehensive evaluation of your home layout, existing systems, and automation goals.',
                icon: Home
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Personalized smart home blueprint tailored to your lifestyle and preferences.',
                icon: Lightbulb
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Expert installation of all smart devices and systems with minimal disruption.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Optimization & Training',
                description: 'System optimization and comprehensive training to maximize your smart home experience.',
                icon: Smartphone
              }
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Smart Home Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge features that make our smart home solutions stand out from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Predictive Automation',
                description: 'AI that learns your routines and automatically adjusts settings before you even realize you need them.',
                features: ['Behavioral pattern learning', 'Predictive scheduling', 'Proactive adjustments', 'Continuous optimization']
              },
              {
                title: 'Voice & Gesture Control',
                description: 'Natural interaction through advanced voice recognition and gesture control for intuitive home management.',
                features: ['Multi-language support', 'Gesture recognition', 'Context awareness', 'Personalized responses']
              },
              {
                title: 'Integrated Health Monitoring',
                description: 'Subtle health and wellness monitoring through environmental sensors and wearable device integration.',
                features: ['Air quality monitoring', 'Sleep optimization', 'Activity tracking', 'Wellness insights']
              },
              {
                title: 'Adaptive Security',
                description: 'Intelligent security that adapts to your lifestyle and provides personalized protection.',
                features: ['Behavioral baselines', 'Threat assessment', 'Emergency response', 'Privacy protection']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of homeowners who have created intelligent living spaces with EA Solutions' smart home technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule Home Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Smart Home Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartLiving;