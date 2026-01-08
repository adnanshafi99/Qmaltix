import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'

export default function SetSchemaBlogPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'CollectionPage',
        '@id': `${SiteConfig.url}/blog#webpage`,
        url: `${SiteConfig.url}/blog`,
        name: `Blog & News | ${SiteConfig.fullName}`,
        description: 'Latest insights, research updates, and news from QMALTIX Lab.',
        isPartOf: {
          '@id': websiteId,
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
