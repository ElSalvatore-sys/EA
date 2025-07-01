import React from 'react';
import { Search, Lightbulb, Cog, TrendingUp, CheckCircle, Users, Target, Zap } from 'lucide-react';

const EAMethod: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">The EA Method</h1>
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 max-w-4xl mx-auto mb-8">
              Our proven methodology ensures your AI transformation is seamless, strategic, and sustainable. 
              Every step is designed to maximize value while minimizing disruption.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Four Stages to AI Excellence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach ensures every aspect of your AI implementation is carefully planned, 
              expertly executed, and continuously optimized for maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                stage: '01',
                title: 'Deep Dive & Discovery',
                icon: Search,
                description: 'We embed with your team to map every process, identify bottlenecks, and understand your ultimate goals. We don\'t just listen; we analyze.',
                duration: '2-4 weeks',
                deliverables: ['Process mapping', 'Bottleneck analysis', 'Goal alignment', 'Technical assessment'],
                image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
              },
              {
                stage: '02',
                title: 'Architectural Design',
                icon: Lightbulb,
                description: 'We design a bespoke AI blueprint for your business, selecting the optimal blend of local and external LLMs and integrating with your existing tech stack.',
                duration: '3-5 weeks',
                deliverables: ['AI architecture blueprint', 'Technology selection', 'Integration plan', 'Security framework'],
                image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
              },
              {
                stage: '03',
                title: 'Seamless Implementation',
                icon: Cog,
                description: 'Our elite engineers build and deploy your AI infrastructure with military precision, ensuring minimal disruption and maximum adoption.',
                duration: '6-12 weeks',
                deliverables: ['System development', 'Integration testing', 'Staff training', 'Go-live support'],
                image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
              },
              {
                stage: '04',
                title: 'Evolution & Enhancement',
                icon: TrendingUp,
                description: 'Your AI mind is a living entity. We provide continuous optimization, performance monitoring, and enhancement to ensure it grows with your business.',
                duration: 'Ongoing',
                deliverables: ['Performance monitoring', 'Continuous optimization', 'Feature updates', 'Strategic guidance'],
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
              }
            ].map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="bg-blue-900 dark:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {stage.stage}
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Stage Image */}
                  <div className="mb-6">
                    <img 
                      src={stage.image}
                      alt={`${stage.title} process`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">{stage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{stage.description}</p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">DURATION</span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{stage.duration}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 block mb-2">KEY DELIVERABLES</span>
                      <ul className="space-y-1">
                        {stage.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our methodology consistently delivers measurable results across all industries and project types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '95%',
                description: 'Project success rate',
                icon: Target
              },
              {
                metric: '60%',
                description: 'Average efficiency improvement',
                icon: Zap
              },
              {
                metric: '18 months',
                description: 'Average timeline to results',
                icon: TrendingUp
              },
              {
                metric: '98%',
                description: 'Client satisfaction score',
                icon: Users
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.metric}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the EA Method?</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Join industry leaders who have transformed their operations with our proven AI implementation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Start Your Discovery Phase
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Download Methodology Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EAMethod;