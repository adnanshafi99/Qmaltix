import Link from 'next/link'
import { ArrowRight, Brain, Cpu, Network, Zap } from 'lucide-react'
import Hero from '@/components/Hero'
import ResearchCard from '@/components/ResearchCard'
import StatsSection from '@/components/StatsSection'
import getMetadata from '@/metadata/utils/get-metadata'
import SiteMetadata from '@/metadata/site-metadata'
import SetSchemaHomePage from '@/metadata/schemas/schemaHomePage'

const researchAreas = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Quantum Computing & Algorithms',
    description: 'Pioneering quantum-enhanced AI models and quantum cryptography to revolutionize computational capabilities.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Mathematical Modeling',
    description: 'Developing sophisticated frameworks for complex system modeling and optimization under uncertainty.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI & Extended Intelligence',
    description: 'Creating explainable and interpretable machine learning systems that augment human decision-making.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: 'IoT & Edge Computing',
    description: 'Building secure edge intelligence systems with federated learning for IoT devices.',
    color: 'from-green-500 to-emerald-500',
  },
]

export function generateMetadata() {
  return getMetadata(SiteMetadata.HOME)
}

export default function Home() {
  return (
    <>
      <SetSchemaHomePage />
      <div className="pt-20">
      {/* Hero Section */}
      <Hero />
      
      {/* Content Anchor */}
      <div id="content" className="scroll-mt-20"></div>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              QMALTIX Lab is a Lab for Quantum Computing, Modeling, AI, IoT, and eXtended Intelligence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              QMALTIX Lab is a Bangladesh based non commercial interdisciplinary research center focusing on Quantum Computing, 
              Artificial Intelligence, Mathematical Modeling, IoT, and Extended Intelligence. We aim to 
              create transformative technologies, ethical AI models, and collaborative innovations for 
              academia and industry.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring cutting-edge technologies and interdisciplinary research
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <ResearchCard key={index} {...area} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/research"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              <span>Explore All Research Areas</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let us together build a flourishing future
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              When you join us, you're not just collaborating — you're growing with a team that's 
              committed to your success. At QMALTIX Lab, we stand by your side, putting our passion 
              and expertise to work for your ideas, your team, and your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-us"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Join Our Team
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

