'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github, Award, Users, GraduationCap, FlaskConical, Code } from 'lucide-react'
import Image from 'next/image'
import { leadershipTeam, researchTeam, technicalTeam, TeamMember } from '@/data/team'

export default function Team() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-100">
                Meet the talented researchers and leaders driving innovation at QMALTIX Lab
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Leadership Section */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-12"
              >
                <Award className="h-8 w-8 text-primary-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Leadership</h2>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leadershipTeam.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                      {/* Card Header with Gradient */}
                      <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8">
                        <div className="flex items-start gap-6">
                          {/* Avatar */}
                          <div className="relative">
                            {member.image ? (
                              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-lg">
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={96}
                                  height={96}
                                  className="w-full h-full object-cover"
                                  unoptimized
                                />
                              </div>
                            ) : (
                              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            )}
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                              <Users className="h-4 w-4 text-primary-600" />
                            </div>
                          </div>
                          
                          {/* Name and Role */}
                          <div className="flex-1 pt-2">
                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-primary-100 font-semibold text-lg">{member.role}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-8 flex-1 flex flex-col">
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-1">
                          {member.bio}
                        </p>
                        
                        {/* Research Interests */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Research Interests
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.researchInterests.map((interest, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact & Social */}
                        <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                aria-label="Email"
                              >
                                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                              </a>
                            )}
                            {member.social?.linkedin && (
                              <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                aria-label="LinkedIn"
                              >
                                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                              </a>
                            )}
                            {member.social?.twitter && (
                              <a
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                aria-label="Twitter"
                              >
                                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                              </a>
                            )}
                            {member.social?.github && (
                              <a
                                href={member.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                aria-label="GitHub"
                              >
                                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                              </a>
                            )}
                            {member.social?.googleScholar && (
                              <a
                                href={member.social.googleScholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                aria-label="Google Scholar"
                              >
                                <GraduationCap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Research Team Section */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-12"
              >
                <FlaskConical className="h-8 w-8 text-primary-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Research Team</h2>
              </motion.div>
              {researchTeam.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {researchTeam.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                        {/* Card Header with Gradient */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8">
                          <div className="flex items-start gap-6">
                            {/* Avatar */}
                            <div className="relative">
                              {member.image ? (
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-lg">
                                  <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                  />
                                </div>
                              ) : (
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              )}
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Users className="h-4 w-4 text-primary-600" />
                              </div>
                            </div>
                            
                            {/* Name and Role */}
                            <div className="flex-1 pt-2">
                              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                              <p className="text-primary-100 font-semibold text-lg">{member.role}</p>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 flex-1 flex flex-col">
                          <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-1">
                            {member.bio}
                          </p>
                          
                          {/* Research Interests */}
                          {member.researchInterests && member.researchInterests.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                Research Interests
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {member.researchInterests.map((interest, idx) => (
                                  <span
                                    key={idx}
                                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                                  >
                                    {interest}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Contact & Social */}
                          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {member.email && (
                                <a
                                  href={`mailto:${member.email}`}
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                  aria-label="Email"
                                >
                                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {member.social?.linkedin && (
                                <a
                                  href={member.social.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                  aria-label="LinkedIn"
                                >
                                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {member.social?.googleScholar && (
                                <a
                                  href={member.social.googleScholar}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                  aria-label="Google Scholar"
                                >
                                  <GraduationCap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                  <FlaskConical className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Research team members will be added soon</p>
                </div>
              )}
            </div>

            {/* Technical Team Section */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-12"
              >
                <Code className="h-8 w-8 text-primary-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Team</h2>
              </motion.div>
              {technicalTeam.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technicalTeam.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                        {/* Card Header with Gradient */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8">
                          <div className="flex items-start gap-6">
                            {/* Avatar */}
                            <div className="relative">
                              {member.image ? (
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-lg">
                                  <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                  />
                                </div>
                              ) : (
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              )}
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Users className="h-4 w-4 text-primary-600" />
                              </div>
                            </div>
                            
                            {/* Name and Role */}
                            <div className="flex-1 pt-2">
                              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                              <p className="text-primary-100 font-semibold text-lg">{member.role}</p>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 flex-1 flex flex-col">
                          <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-1">
                            {member.bio}
                          </p>
                          
                          {/* Research Interests */}
                          {member.researchInterests && member.researchInterests.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                Research Interests
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {member.researchInterests.map((interest, idx) => (
                                  <span
                                    key={idx}
                                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                                  >
                                    {interest}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Contact & Social */}
                          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {member.email && (
                                <a
                                  href={`mailto:${member.email}`}
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                  aria-label="Email"
                                >
                                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {member.social?.linkedin && (
                                <a
                                  href={member.social.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                  aria-label="LinkedIn"
                                >
                                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {member.social?.googleScholar && (
                                <a
                                  href={member.social.googleScholar}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 group"
                                  aria-label="Google Scholar"
                                >
                                  <GraduationCap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                  <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Technical team members will be added soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We're always looking for talented researchers and students to join our lab
            </p>
            <a
              href="/join-us"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

