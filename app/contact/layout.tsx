import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaContactPage from '@/metadata/schemas/schemaContactPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.CONTACT)
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaContactPage />
      {children}
    </>
  )
}
