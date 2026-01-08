import SiteConfig from '../site-config'

export const organizationId = `${SiteConfig.url}/#organization`

export const organizationJsonLd = {
  '@type': 'Organization',
  '@id': organizationId,
  name: SiteConfig.fullName,
  url: SiteConfig.url,
  logo: `${SiteConfig.url}/favicon.png`,
  description: SiteConfig.description,
  email: SiteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SiteConfig.location,
    addressCountry: 'BD',
  },
  sameAs: [
    'https://www.linkedin.com/company/qmaltix-lab/',
    'https://www.facebook.com/people/Qmaltix-Lab/61578988760620/',
  ],
}
