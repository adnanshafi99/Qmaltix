'use client'

import { Target, Eye, Code, Shield, Users, TrendingUp, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Innovation Through Research',
    description: 'Developing new algorithms, frameworks, and systems that push the boundaries of what\'s possible.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Ethical Technology',
    description: 'Pioneering Explainable AI and ethical technology that prioritizes trust, transparency, and explainability.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Global Partnerships',
    description: 'Building partnerships with global institutions to foster collaboration and drive meaningful innovation.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Measurable Impact',
    description: 'Solving meaningful problems with measurable outcomes that create real-world value.',
  },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About QMALTIX Lab</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-100">
                A global interdisciplinary research center advancing the frontiers of AI, Quantum Computing, and IoT
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16 border border-primary-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Our mission is to advance the frontiers of AI, Quantum Computing, and IoT through rigorous modeling, 
                algorithm design, and extended intelligence frameworks. We envision a future where technology empowers 
                humanity through trust, transparency, and explainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                To become a leading research hub connecting AI, Quantum Computing, and IoT innovations for solving 
                real-world challenges in healthcare, cybersecurity, energy, and education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our research and shape our impact
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="h-12 w-12 mx-auto mb-6 text-primary-200" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Driving Innovation Across Industries
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Our research addresses critical challenges in healthcare, cybersecurity, energy, and education, 
                creating solutions that make a measurable difference in people's lives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Healthcare', 'Cybersecurity', 'Energy', 'Education'].map((industry, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
