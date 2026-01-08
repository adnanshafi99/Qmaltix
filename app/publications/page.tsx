'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, ExternalLink, Calendar, Users, ArrowRight } from 'lucide-react'
import { publications, Publication } from '@/data/publications'

const types = ['all', 'journal', 'conference', 'preprint', 'ongoing', 'accepted'] as const

export default function Publications() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)

  const filteredPublications = publications
    .filter(pub => {
      let typeMatch = false
      if (selectedType === 'all') {
        typeMatch = true
      } else if (selectedType === 'conference') {
        // Include both 'conference' and 'accepted' types when filtering by conference
        typeMatch = pub.type === 'conference' || pub.type === 'accepted'
      } else {
        typeMatch = pub.type === selectedType
      }
      const yearMatch = selectedYear === 'all' || pub.year.toString() === selectedYear
      return typeMatch && yearMatch
    })
    .sort((a, b) => b.year - a.year) // Sort by year descending (latest first)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800'
      case 'conference':
        return 'bg-green-100 text-green-800'
      case 'preprint':
        return 'bg-gray-100 text-gray-800'
      case 'ongoing':
        return 'bg-purple-100 text-purple-800'
      case 'accepted':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl leading-relaxed">
              Our research contributions to the scientific community
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-semibold text-gray-700">Filter by:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="journal">Journal</option>
              <option value="conference">Conference</option>
              <option value="preprint">Preprint</option>
              <option value="ongoing">Ongoing</option>
              <option value="accepted">Accepted</option>
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year.toString()}>{year}</option>
              ))}
            </select>
            <span className="text-gray-600 ml-auto">
              {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <Link
                      href={`/publications/${pub.id}`}
                      className="block group"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {pub.title}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{pub.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{pub.venue}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    {pub.abstract && (
                      <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                        {pub.abstract}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pub.type === 'accepted' && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor('conference')}`}>
                        conference
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(pub.type)}`}>
                      {pub.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/publications/${pub.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read Paper
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

