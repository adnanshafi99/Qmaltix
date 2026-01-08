import type { Metadata } from 'next'
import SiteConfig from '../site-config'

export default function getMetadata({
  title,
  description,
  path,
  keywords,
  openGraphImage,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  openGraphImage?: string
  noindex?: boolean
}): Metadata {
  // Handle NOT_FOUND page specially
  if (path === '/404') {
    noindex = true
  }
  const fullTitle = `${title} | ${SiteConfig.fullName}`
  const ogImage = openGraphImage || `${SiteConfig.url}/og-image.png`
  const canonicalUrl = `${SiteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    keywords: keywords || SiteConfig.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SiteConfig.fullName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
