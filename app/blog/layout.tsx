import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaBlogPage from '@/metadata/schemas/schemaBlogPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.BLOG)
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaBlogPage />
      {children}
    </>
  )
}
