'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Users, ArrowRight, CheckCircle, Globe, Clock } from 'lucide-react'

const opportunities = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Research Fellowships',
    description: 'Join our research fellowship program and work on cutting-edge projects. Duration: 3–12 months.',
    duration: '3–12 months',
    type: 'Fellowship',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Internships',
    description: 'Gain valuable research experience through our internship program. Flexible remote and hybrid options available.',
    duration: 'Flexible',
    type: 'Internship',
    features: ['Remote options', 'Hybrid options'],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Collaborations',
    description: 'Partner with us for research collaborations. We work with global academic and industry partners.',
    duration: 'Ongoing',
    type: 'Collaboration',
    features: ['Global academic partners', 'Industry partnerships'],
  },
]

const benefits = [
  'Access to state-of-the-art facilities',
  'Collaboration with leading researchers',
  'Conference and publication support',
  'Professional development opportunities',
  'Flexible working arrangements',
]

export default function JoinUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl leading-relaxed mb-8">
              When you join us, you're not just collaborating — you're growing with a team that's 
              committed to your success. At QMALTIX Lab, we stand by your side, putting our passion 
              and expertise to work for your ideas, your team, and your future.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
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
                Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us in advancing the frontiers of AI, Quantum Computing, and IoT research
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {opportunities.map((opp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {opp.icon}
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-3">
                      {opp.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{opp.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{opp.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Duration: {opp.duration}</span>
                  </div>
                  {opp.features && (
                    <div className="pt-4 border-t border-gray-200">
                      <ul className="space-y-2">
                        {opp.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Join QMALTIX Lab?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white p-4 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How to Apply
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review Open Positions</h3>
                  <p className="text-gray-600">
                    Browse our available positions and find the one that matches your interests and qualifications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prepare Your Application</h3>
                  <p className="text-gray-600">
                    Prepare your CV, cover letter, and any required documents. Make sure to highlight 
                    your research interests and how they align with our work.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">
                    Send your application to us through our contact form or email. We'll review your 
                    application and get back to you soon.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

