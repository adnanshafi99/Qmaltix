'use client'

import { motion } from 'framer-motion'

interface ResearchCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function ResearchCard({ icon, title, description, color }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
    >
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

