import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaTeamPage from '@/metadata/schemas/schemaTeamPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.TEAM)
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaTeamPage />
      {children}
    </>
  )
}
