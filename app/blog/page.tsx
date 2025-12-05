import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & News</h1>
            <p className="text-xl leading-relaxed">
              Latest insights, research updates, and news from QMALTIX Lab
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

