import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaPublicationsPage from '@/metadata/schemas/schemaPublicationsPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.PUBLICATIONS)
}

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaPublicationsPage />
      {children}
    </>
  )
}
