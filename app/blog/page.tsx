'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Linkedin, Facebook, ExternalLink, BookOpen, Sparkles, TrendingUp } from 'lucide-react'
import { blogPosts } from '@/data/blog'

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-100">
                Blog & News
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-100 mb-4">
                Latest insights, research updates, and news from QMALTIX Lab
              </p>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Research Updates</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-primary-300" />
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Latest Publications</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest research, publications, and community updates
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LinkedIn Link */}
              <motion.a
                href="https://www.linkedin.com/company/qmaltix-lab/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">LinkedIn</h3>
                      <p className="text-gray-500 text-sm font-medium">@qmaltix-lab</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Follow our latest research updates, publications, and insights from the QMALTIX Lab team
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Visit Our LinkedIn Page
                    <ExternalLink className="h-5 w-5 group-hover:rotate-[-45deg] transition-transform" />
                  </div>
                </div>
              </motion.a>

              {/* Facebook Link */}
              <motion.a
                href="https://www.facebook.com/people/Qmaltix-Lab/61578988760620/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Facebook className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Facebook</h3>
                      <p className="text-gray-500 text-sm font-medium">QMALTIX Lab</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Join our research community on Facebook for discussions, events, and collaborative opportunities
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Visit Our Facebook Page
                    <ExternalLink className="h-5 w-5 group-hover:rotate-[-45deg] transition-transform" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {blogPosts.length > 0 ? (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our latest research insights and updates
                </p>
              </motion.div>
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                          <Calendar className="h-4 w-4 text-primary-600" />
                          <span className="font-medium">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                          <User className="h-4 w-4 text-primary-600" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-lg text-sm font-semibold shadow-sm">
                          {post.category}
                        </span>
                        {post.source && (
                          <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                            {post.source === 'linkedin' ? (
                              <>
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                              </>
                            ) : (
                              <>
                                <Facebook className="h-4 w-4" />
                                Facebook
                              </>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {post.url && post.source ? (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg group"
                      >
                        {post.source === 'linkedin' ? (
                          <>
                            <Linkedin className="h-5 w-5" />
                            View on LinkedIn
                          </>
                        ) : (
                          <>
                            <Facebook className="h-5 w-5" />
                            View on Facebook
                          </>
                        )}
                        <ExternalLink className="h-4 w-4 group-hover:rotate-[-45deg] transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg group"
                      >
                        Read More
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-12 shadow-lg border-2 border-gray-100"
              >
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Coming Soon
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We're preparing exciting content for you. Check back soon for our latest research insights, publications, and updates.
                </p>
                <p className="text-sm text-gray-500">
                  In the meantime, connect with us on social media for the latest news!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

