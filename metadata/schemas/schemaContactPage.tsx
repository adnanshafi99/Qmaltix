import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'

export default function SetSchemaContactPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'ContactPage',
        '@id': `${SiteConfig.url}/contact#webpage`,
        url: `${SiteConfig.url}/contact`,
        name: `Contact Us | ${SiteConfig.fullName}`,
        description: `Get in touch with ${SiteConfig.fullName} for collaborations, inquiries, or just to say hello.`,
        isPartOf: {
          '@id': websiteId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        mainEntity: {
          '@id': organizationId,
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
