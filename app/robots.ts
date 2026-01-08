import { MetadataRoute } from 'next'
import SiteConfig from '@/metadata/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SiteConfig.url}/sitemap.xml`,
  }
}
