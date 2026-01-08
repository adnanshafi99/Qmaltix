import { websiteJsonLd } from './website'
import { organizationJsonLd } from './organization'

export default function BaseSchema({
  pageSchemas = [],
}: {
  pageSchemas?: any[]
}) {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      websiteJsonLd,
      organizationJsonLd,
      ...pageSchemas,
    ],
  }

  return graph
}
