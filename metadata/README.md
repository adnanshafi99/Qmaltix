# Metadata & SEO Configuration

This folder contains all SEO-related configurations and structured data schemas for the QMALTIX Lab website.

## Structure

```
metadata/
├── site-config.ts          # Site-wide configuration (name, URL, keywords, etc.)
├── site-metadata.ts        # Page-specific metadata definitions
├── shared/
│   ├── base-metadata.ts   # Base metadata for root layout
│   ├── base-schema.ts     # Base Schema.org structure
│   ├── organization.ts    # Organization structured data
│   └── website.ts         # Website structured data
├── schemas/
│   ├── schemaHomePage.tsx
│   ├── schemaAboutPage.tsx
│   ├── schemaPublicationsPage.tsx
│   └── schemaTeamPage.tsx
└── utils/
    └── get-metadata.ts    # Utility function for generating metadata
```

## Environment Variables

Make sure to set the following environment variable:

```env
WEBSITE_URL=https://qmaltixlab.org
# or
NEXT_PUBLIC_WEBSITE_URL=https://qmaltixlab.org
```

## Usage

Each page should:
1. Import `getMetadata` from `@/metadata/utils/get-metadata`
2. Import `SiteMetadata` from `@/metadata/site-metadata`
3. Export `generateMetadata()` function
4. Import and render the appropriate schema component

Example:
```typescript
import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaHomePage from '@/metadata/schemas/schemaHomePage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.HOME)
}

export default function HomePage() {
  return (
    <>
      <SetSchemaHomePage />
      {/* page content */}
    </>
  )
}
```

## Features

- ✅ Page-specific metadata (title, description, keywords)
- ✅ Canonical URLs for all pages
- ✅ Open Graph and Twitter Card metadata
- ✅ Structured data (Schema.org JSON-LD)
- ✅ Dynamic sitemap generation
- ✅ robots.txt configuration
