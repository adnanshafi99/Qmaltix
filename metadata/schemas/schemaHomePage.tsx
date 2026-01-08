import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'

export default function SetSchemaHomePage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'WebPage',
        '@id': `${SiteConfig.url}/#webpage`,
        url: SiteConfig.url,
        name: `${SiteConfig.fullName} | ${SiteConfig.title}`,
        description: SiteConfig.description,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': organizationId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ResearchProject',
        name: SiteConfig.fullName,
        description: SiteConfig.description,
        researchArea: [
          'Quantum Computing',
          'Artificial Intelligence',
          'Mathematical Modeling',
          'IoT',
          'Extended Intelligence',
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
