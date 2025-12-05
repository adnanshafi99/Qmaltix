'use client'

import { motion } from 'framer-motion'
import { Users, FileText, Award, FlaskConical } from 'lucide-react'
import { leadershipTeam, researchTeam, technicalTeam } from '@/data/team'
import { publications } from '@/data/publications'

// Calculate actual stats from data
const totalTeamMembers = leadershipTeam.length + researchTeam.length + technicalTeam.length
const totalPublications = publications.length
const researchAreasCount = 4 // Quantum Computing, Mathematical Modeling, AI & XAI, IoT & Edge Computing
const applicationsCount = 3 // Cybersecurity, Healthcare, Environmental Modeling

const stats = [
  { icon: <Users className="h-8 w-8" />, value: totalTeamMembers.toString(), label: 'Team Members' },
  { icon: <FileText className="h-8 w-8" />, value: totalPublications.toString(), label: 'Publications' },
  { icon: <FlaskConical className="h-8 w-8" />, value: researchAreasCount.toString(), label: 'Research Areas' },
  { icon: <Award className="h-8 w-8" />, value: applicationsCount.toString(), label: 'Applications' },
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

