import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaJoinUsPage from '@/metadata/schemas/schemaJoinUsPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.JOIN_US)
}

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaJoinUsPage />
      {children}
    </>
  )
}
