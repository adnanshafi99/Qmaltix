import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaAboutPage from '@/metadata/schemas/schemaAboutPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.ABOUT)
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaAboutPage />
      {children}
    </>
  )
}
