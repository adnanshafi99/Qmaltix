import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'
import { publications } from '@/data/publications'

export default function SetSchemaPublicationsPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'CollectionPage',
        '@id': `${SiteConfig.url}/publications#webpage`,
        url: `${SiteConfig.url}/publications`,
        name: `Publications | ${SiteConfig.fullName}`,
        description: 'Research publications and papers',
        isPartOf: {
          '@id': websiteId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        hasPart: publications.map((pub) => ({
          '@type': 'ScholarlyArticle',
          headline: pub.title,
          description: pub.abstract || pub.title,
          author: pub.authors.map((author) => ({
            '@type': 'Person',
            name: author,
          })),
          datePublished: `${pub.year}-01-01`,
          publisher: {
            '@id': organizationId,
          },
        })),
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
