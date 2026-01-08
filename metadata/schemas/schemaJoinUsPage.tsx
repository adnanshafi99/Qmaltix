import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'

export default function SetSchemaJoinUsPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'WebPage',
        '@id': `${SiteConfig.url}/join-us#webpage`,
        url: `${SiteConfig.url}/join-us`,
        name: `Join Our Team | ${SiteConfig.fullName}`,
        description: 'Join us in advancing the frontiers of AI, Quantum Computing, and IoT research. Explore opportunities to work with our team.',
        isPartOf: {
          '@id': websiteId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        about: {
          '@type': 'Thing',
          name: 'Job Opportunities',
        },
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
