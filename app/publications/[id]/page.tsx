import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Users, FileText, ExternalLink, ArrowLeft, BookOpen } from 'lucide-react'
import { publications } from '@/data/publications'
import getMetadata from '@/metadata/utils/get-metadata'
import SiteConfig from '@/metadata/site-config'
import BaseSchema from '@/metadata/shared/base-schema'
import { websiteId } from '@/metadata/shared/website'
import { organizationId } from '@/metadata/shared/organization'

// Generate static params for all publications at build time
export function generateStaticParams() {
  return publications.map((pub) => ({
    id: pub.id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const publication = publications.find(p => p.id === params.id)

  if (!publication) {
    return getMetadata({
      title: 'Publication Not Found',
      description: 'The publication you are looking for does not exist.',
      path: `/publications/${params.id}`,
      noindex: true,
    })
  }

  return getMetadata({
    title: publication.title,
    description: publication.abstract || publication.title,
    path: `/publications/${publication.id}`,
    keywords: [
      ...(publication.authors || []),
      publication.venue,
      publication.type,
      publication.year.toString(),
      ...SiteConfig.keywords,
    ],
  })
}

function SetSchemaPublicationPage(publication: typeof publications[0]) {
  // Defensive check for authors - ensure we have the property
  const authors = (publication && Array.isArray(publication.authors)) ? publication.authors : []

  const graph = BaseSchema({
    pageSchemas: [
      {
        '@type': 'ScholarlyArticle',
        '@id': `${SiteConfig.url}/publications/${publication.id}#article`,
        headline: publication.title,
        description: publication.abstract || publication.title,
        author: authors.map((author) => ({
          '@type': 'Person',
          name: author,
        })),
        datePublished: `${publication.year}-01-01`,
        publisher: {
          '@id': organizationId,
        },
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@type': 'Thing',
          name: publication.venue,
        },
        inLanguage: 'en-US',
        ...(publication.link
          ? {
              url: publication.link,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': publication.link,
              },
            }
          : {}),
      },
      {
        '@type': 'WebPage',
        '@id': `${SiteConfig.url}/publications/${publication.id}#webpage`,
        url: `${SiteConfig.url}/publications/${publication.id}`,
        name: `${publication.title} | ${SiteConfig.fullName}`,
        description: publication.abstract || publication.title,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': `${SiteConfig.url}/publications/${publication.id}#article`,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
      },
    ],
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function PublicationPage({ params }: { params: { id: string } }) {
  const publication = publications.find(p => p.id === params.id)

  if (!publication) {
    notFound()
  }

  // Additional defensive check
  if (!publication.authors || !Array.isArray(publication.authors)) {
    // Fallback to empty array if authors is missing
    publication.authors = []
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800'
      case 'conference':
        return 'bg-green-100 text-green-800'
      case 'preprint':
        return 'bg-gray-100 text-gray-800'
      case 'ongoing':
        return 'bg-purple-100 text-purple-800'
      case 'accepted':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/44913e7b-f291-4f20-ab5f-3120e1e18349',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/publications/[id]/page.tsx:132',message:'Before SetSchemaPublicationPage call',data:{publicationId:publication.id,publicationHasAuthors:!!publication.authors,authorsIsArray:Array.isArray(publication.authors),authorsLength:publication.authors?.length,publicationKeys:Object.keys(publication)},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'D'})}).catch(()=>{});
  // #endregion agent log

  // Ensure publication object is complete before passing
  const completePublication = {
    ...publication,
    authors: publication.authors || [],
  }

  return (
    <>
      <SetSchemaPublicationPage publication={completePublication} />
      <div className="pt-20">
        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Publications
              </Link>

              {/* Publication Header */}
              <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-8 mb-8 border border-primary-100">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span className="font-medium text-gray-700">{publication.year}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <FileText className="h-4 w-4 text-primary-600" />
                    <span className="font-medium text-gray-700">{publication.venue}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {publication.type === 'accepted' && (
                      <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${getTypeColor('conference')}`}>
                        Conference
                      </span>
                    )}
                    <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${getTypeColor(publication.type)}`}>
                      {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {publication.title}
                </h1>

                <div className="flex items-start gap-3 mb-6">
                  <Users className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Authors</p>
                    <p className="text-gray-600">{(publication.authors || []).join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Abstract Section */}
              {publication.abstract && (
                <section className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Abstract</h2>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {publication.abstract}
                    </p>
                  </div>
                </section>
              )}

              {/* Publication Details */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Publication Details</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Venue</h3>
                      <p className="text-gray-600">{publication.venue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Year</h3>
                      <p className="text-gray-600">{publication.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Authors</h3>
                      <p className="text-gray-600">{(publication.authors || []).join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Type</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {publication.type === 'accepted' && (
                          <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${getTypeColor('conference')}`}>
                            Conference
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${getTypeColor(publication.type)}`}>
                          {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Paper Link Section */}
              {publication.link && (
                <section className="mb-8">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6 text-white">
                    <h2 className="text-xl font-bold mb-4">Access the Paper</h2>
                    <p className="text-primary-100 mb-4">
                      This paper is available at the following URL. Please use this link when citing this work.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-white break-all">{publication.link}</p>
                    </div>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Read Full Paper
                    </a>
                  </div>
                </section>
              )}

            </div>
          </div>
        </article>
      </div>
    </>
  )
}
