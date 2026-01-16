import Link from 'next/link'
import { Mail, MapPin, Linkedin, Facebook } from 'lucide-react'
import SiteConfig from '@/metadata/site-config'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">QMALTIX LAB</h3>
            <p className="text-sm leading-relaxed">
              A Bangladesh based non commercial interdisciplinary research center focusing on Quantum Computing, 
              Artificial Intelligence, Mathematical Modeling, IoT, and Extended Intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-primary-400 transition-colors">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-primary-400 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary-400 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-primary-400 transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${SiteConfig.email}`} className="text-sm hover:text-primary-400 transition-colors">
                  {SiteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://www.linkedin.com/company/qmaltix-lab/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/people/Qmaltix-Lab/61578988760620/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors" 
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} QMALTIX | Powered by QMALTIX</p>
        </div>
      </div>
    </footer>
  )
}

