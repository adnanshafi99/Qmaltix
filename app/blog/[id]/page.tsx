import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import getMetadata from '@/metadata/utils/get-metadata'
import SiteConfig from '@/metadata/site-config'
import SetSchemaBlogPostPage from '@/metadata/schemas/schemaBlogPostPage'

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    return getMetadata({
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
      path: `/blog/${params.id}`,
      noindex: true,
    })
  }

  return getMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.id}`,
    keywords: post.tags,
  })
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SetSchemaBlogPostPage post={post} />
      <div className="pt-20">
        <article className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
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

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="text-gray-700 leading-relaxed">
                {post.content || (
                  <div>
                    <p>
                      This is a placeholder for the full blog post content. In a real implementation,
                      you would fetch the full content from a CMS or markdown files.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  )
}

