'use client'

import { Brain, Cpu, Network, Zap, Shield, Heart, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

const researchAreas = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Quantum Computing & Algorithms',
    description: 'Pioneering quantum-enhanced solutions that revolutionize computational capabilities. Our research explores the intersection of quantum mechanics and advanced algorithms to solve previously intractable problems.',
    color: 'from-purple-500 to-pink-500',
    details: [
      'Quantum-enhanced AI models',
      'Quantum cryptography & optimization',
      'Quantum algorithm development',
      'Quantum information processing',
    ],
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Mathematical Modeling & Theoretical Computing',
    description: 'Developing sophisticated mathematical frameworks and theoretical foundations for understanding and optimizing complex systems under real-world uncertainties.',
    color: 'from-orange-500 to-red-500',
    details: [
      'Complex system modeling',
      'Optimization under uncertainty',
      'Theoretical computing frameworks',
      'Advanced mathematical techniques',
    ],
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Artificial Intelligence & Extended Intelligence (XAI)',
    description: 'Creating transparent, interpretable AI systems that augment human decision-making. Our focus is on building trustworthy AI that works collaboratively with humans.',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Explainable and interpretable machine learning',
      'AI augmentation for human decision-making',
      'Transparent AI systems',
      'Human-AI collaboration',
    ],
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: 'IoT & Edge Computing',
    description: 'Building secure, intelligent edge computing systems that enable distributed learning and real-time decision-making across IoT networks.',
    color: 'from-green-500 to-emerald-500',
    details: [
      'Federated learning for IoT devices',
      'Secure edge intelligence',
      'Distributed computing systems',
      'Real-time IoT analytics',
    ],
  },
]

const applications = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Cybersecurity',
    description: 'Advanced threat detection and secure systems',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Healthcare',
    description: 'AI-powered diagnostics and medical modeling',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Environmental Modeling',
    description: 'Climate prediction and sustainability solutions',
    color: 'from-green-500 to-teal-500',
  },
]

export default function Research() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Areas</h1>
            <p className="text-xl leading-relaxed">
              Exploring cutting-edge technologies and interdisciplinary research to solve complex problems
            </p>
          </div>
        </div>
      </section>

      {/* Core Research Domains */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Research Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our interdisciplinary research spans four fundamental domains, driving innovation at the intersection of quantum computing, AI, mathematics, and IoT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{area.description}</p>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Focus Areas</h4>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className={`text-primary-600 mr-3 mt-1.5 flex-shrink-0`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="flex-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our research translates into practical solutions across critical domains, addressing real-world challenges with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always open to discussing research collaborations, partnerships, and opportunities 
              to work together on innovative projects.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

