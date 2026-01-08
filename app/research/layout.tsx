import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaResearchPage from '@/metadata/schemas/schemaResearchPage'

export function generateMetadata() {
  return getMetadata(SiteMetadata.RESEARCH)
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SetSchemaResearchPage />
      {children}
    </>
  )
}
