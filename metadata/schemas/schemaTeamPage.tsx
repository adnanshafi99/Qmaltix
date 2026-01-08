import BaseSchema from '../shared/base-schema'
import SiteConfig from '../site-config'
import { websiteId } from '../shared/website'
import { organizationId } from '../shared/organization'
import { teamMembers } from '@/data/team'

export default function SetSchemaTeamPage() {
  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'CollectionPage',
        '@id': `${SiteConfig.url}/team#webpage`,
        url: `${SiteConfig.url}/team`,
        name: `Team | ${SiteConfig.fullName}`,
        description: 'Meet our research team',
        isPartOf: {
          '@id': websiteId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        hasPart: teamMembers.map((member) => ({
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role,
          description: member.bio,
          email: member.email,
          image: member.image,
          url: member.website,
          sameAs: member.social
            ? Object.values(member.social).filter(Boolean)
            : [],
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
