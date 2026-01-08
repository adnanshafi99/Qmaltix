import SiteConfig from '../site-config'
import { organizationId } from './organization'

export const websiteId = `${SiteConfig.url}/#website`

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: SiteConfig.fullName,
  description: SiteConfig.description,
  url: SiteConfig.url,
  publisher: {
    '@id': organizationId,
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SiteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
