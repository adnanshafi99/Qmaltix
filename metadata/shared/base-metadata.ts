import type { Metadata } from 'next'
import SiteConfig from '../site-config'

export const baseMetadata: Metadata = {
  metadataBase: new URL(SiteConfig.url),
  authors: [
    {
      name: SiteConfig.fullName,
      url: SiteConfig.url,
    },
  ],
  creator: SiteConfig.fullName,
  publisher: SiteConfig.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
    ],
    apple: [{ url: '/favicon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SiteConfig.fullName,
    images: [
      {
        url: `${SiteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SiteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteConfig.fullName,
    description: SiteConfig.description,
    images: [`${SiteConfig.url}/og-image.png`],
  },
}
