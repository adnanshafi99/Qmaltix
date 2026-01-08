import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'
import { BlogPost } from '@/data/blog'

export default function SetSchemaBlogPostPage(post: BlogPost) {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'BlogPosting',
        '@id': `${SiteConfig.url}/blog/${post.id}#blogpost`,
        headline: post.title,
        description: post.excerpt,
        author: {
          '@type': 'Person',
          name: post.author,
        },
        datePublished: post.date,
        publisher: {
          '@id': organizationId,
        },
        isPartOf: {
          '@id': websiteId,
        },
        inLanguage: 'en-US',
        ...(post.url
          ? {
              url: post.url,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': post.url,
              },
            }
          : {}),
      },
      {
        '@type': 'WebPage',
        '@id': `${SiteConfig.url}/blog/${post.id}#webpage`,
        url: `${SiteConfig.url}/blog/${post.id}`,
        name: `${post.title} | ${SiteConfig.fullName}`,
        description: post.excerpt,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': `${SiteConfig.url}/blog/${post.id}#blogpost`,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
      },
    ],
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
