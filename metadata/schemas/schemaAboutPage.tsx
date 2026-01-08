import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'

export default function SetSchemaAboutPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'AboutPage',
        '@id': `${SiteConfig.url}/about#webpage`,
        url: `${SiteConfig.url}/about`,
        name: `About | ${SiteConfig.fullName}`,
        description: `Learn about ${SiteConfig.fullName}`,
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
    ],
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
