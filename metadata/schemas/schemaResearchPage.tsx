import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'

export default function SetSchemaResearchPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'CollectionPage',
        '@id': `${SiteConfig.url}/research#webpage`,
        url: `${SiteConfig.url}/research`,
        name: `Research Areas | ${SiteConfig.fullName}`,
        description: 'Explore our cutting-edge research in Quantum Computing, Mathematical Modeling, AI & Extended Intelligence, and IoT & Edge Computing.',
        isPartOf: {
          '@id': websiteId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        about: [
          {
            '@type': 'Thing',
            name: 'Quantum Computing',
          },
          {
            '@type': 'Thing',
            name: 'Artificial Intelligence',
          },
          {
            '@type': 'Thing',
            name: 'Mathematical Modeling',
          },
          {
            '@type': 'Thing',
            name: 'IoT',
          },
          {
            '@type': 'Thing',
            name: 'Extended Intelligence',
          },
        ],
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
