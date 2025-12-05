'use client'

import { motion } from 'framer-motion'
import { Users, FileText, Award, Globe } from 'lucide-react'

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '25+', label: 'Team Members' },
  { icon: <FileText className="h-8 w-8" />, value: '50+', label: 'Publications' },
  { icon: <Award className="h-8 w-8" />, value: '15+', label: 'Research Projects' },
  { icon: <Globe className="h-8 w-8" />, value: '10+', label: 'Countries' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 text-primary-400">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

