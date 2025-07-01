import React from 'react';
import { Target, Users, Zap, Shield, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

const WhyEA: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why EA Solutions?</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              In a world flooded with generic AI solutions, we stand apart. 
              Discover what makes EA Solutions the definitive choice for enterprise AI transformation.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Experience the Difference
            </button>
          </div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The EA Solutions Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just implement AI – we architect intelligent ecosystems that evolve with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Radically Bespoke',
                description: 'We don\'t sell software. We build solutions. Every line of code, every algorithm, and every integration is custom-architected for you.',
                details: [
                  'Custom AI models trained on your data',
                  'Tailored user interfaces and workflows',
                  'Industry-specific optimization',
                  'Proprietary algorithm development'
                ]
              },
              {
                icon: Users,
                title: 'Elite Expertise',
                description: 'Our team consists of world-class AI engineers and strategists who live at the bleeding edge of technology.',
                details: [
                  'PhD-level AI researchers',
                  'Former Big Tech engineers',
                  'Industry domain experts',
                  'Continuous learning culture'
                ]
              },
              {
                icon: Zap,
                title: 'Tangible ROI',
                description: 'Our goal is your bottom line. We deliver measurable improvements in efficiency, cost reduction, and revenue generation.',
                details: [
                  'Guaranteed ROI within 18 months',
                  'Performance-based pricing options',
                  'Continuous optimization',
                  'Transparent success metrics'
                ]
              }
            ].map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 mb-6">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">EA Solutions vs. The Competition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we stack up against generic AI solutions and traditional consulting firms.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900 bg-blue-100">EA Solutions</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Generic AI Platforms</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Traditional Consulting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: 'Custom AI Development',
                      ea: '✓ Fully Bespoke',
                      generic: '✗ One-size-fits-all',
                      traditional: '△ Limited Customization'
                    },
                    {
                      feature: 'Industry Expertise',
                      ea: '✓ Deep Domain Knowledge',
                      generic: '✗ Generic Solutions',
                      traditional: '△ Broad but Shallow'
                    },
                    {
                      feature: 'Implementation Speed',
                      ea: '✓ Rapid Deployment',
                      generic: '△ Moderate',
                      traditional: '✗ Slow & Bureaucratic'
                    },
                    {
                      feature: 'Ongoing Support',
                      ea: '✓ Continuous Evolution',
                      generic: '△ Basic Support',
                      traditional: '✗ Project-based Only'
                    },
                    {
                      feature: 'ROI Guarantee',
                      ea: '✓ Performance-based',
                      generic: '✗ No Guarantees',
                      traditional: '✗ No Guarantees'
                    },
                    {
                      feature: 'Security & Privacy',
                      ea: '✓ Enterprise-grade',
                      generic: '△ Standard',
                      traditional: '△ Varies'
                    }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-green-600 bg-green-50">{row.ea}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.generic}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients who chose EA Solutions for their AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: 'Hotel am Kochbrunnen',
                industry: 'Hospitality',
                challenge: 'High no-show rates and inefficient booking management',
                solution: 'AI-powered reservation system with predictive analytics',
                results: ['40% reduction in no-shows', '25% increase in customer satisfaction', '30% operational efficiency gain'],
                testimonial: 'EA Solutions transformed our guest experience completely.'
              },
              {
                company: 'Falchi Dental',
                industry: 'Healthcare',
                challenge: 'Time-consuming diagnostic processes and patient management',
                solution: 'Intelligent diagnostic support and automated patient workflows',
                results: ['40% faster diagnostics', '95% accuracy improvement', '60% admin time reduction'],
                testimonial: 'The AI diagnostic tools have revolutionized our practice.'
              },
              {
                company: 'Manufacturing Client',
                industry: 'Industrial',
                challenge: 'Frequent equipment failures and production downtime',
                solution: 'Predictive maintenance system with IoT integration',
                results: ['70% reduction in downtime', '45% maintenance cost savings', '35% production increase'],
                testimonial: 'Our production efficiency has never been higher.'
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <div className="text-sm text-blue-600 font-semibold mb-4">{story.industry}</div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <blockquote className="text-gray-600 italic border-l-4 border-blue-500 pl-4">
                  "{story.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'AI Innovation Award',
                organization: 'Tech Excellence 2024',
                description: 'Recognized for breakthrough AI implementation methodology'
              },
              {
                icon: Shield,
                title: 'Security Excellence',
                organization: 'CyberSec Awards',
                description: 'Outstanding achievement in AI security and privacy protection'
              },
              {
                icon: Users,
                title: 'Client Satisfaction',
                organization: 'Industry Survey',
                description: '98% client satisfaction rate across all projects'
              },
              {
                icon: TrendingUp,
                title: 'Growth Leader',
                organization: 'Business Journal',
                description: 'Fastest growing AI consulting firm in Europe'
              }
            ].map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                  <div className="text-blue-400 font-semibold mb-2">{award.organization}</div>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together the best minds in AI, engineering, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: '15+',
                description: 'Years average AI experience',
                icon: Users
              },
              {
                stat: '50+',
                description: 'Successful AI implementations',
                icon: Target
              },
              {
                stat: '10+',
                description: 'Industry verticals served',
                icon: Award
              },
              {
                stat: '24/7',
                description: 'Global support coverage',
                icon: Shield
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.stat}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the EA Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the growing number of industry leaders who have chosen EA Solutions for their AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule Your Strategy Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Download Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyEA;