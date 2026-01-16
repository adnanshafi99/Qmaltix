import SiteConfig from './site-config'

const SiteMetadata = {
  HOME: {
    title: SiteConfig.fullName,
    description: SiteConfig.description,
    path: '/',
    keywords: SiteConfig.keywords,
  },
  ABOUT: {
    title: 'About Us',
    description: `Learn about ${SiteConfig.fullName}, a Bangladesh based non commercial interdisciplinary research center focusing on Quantum Computing, Artificial Intelligence, Mathematical Modeling, IoT, and Extended Intelligence.`,
    path: '/about',
    keywords: ['about', 'mission', 'vision', 'values', ...SiteConfig.keywords],
  },
  RESEARCH: {
    title: 'Research Areas',
    description: 'Explore our cutting-edge research in Quantum Computing, Mathematical Modeling, AI & Extended Intelligence, and IoT & Edge Computing.',
    path: '/research',
    keywords: ['research', 'quantum computing', 'AI', 'IoT', 'extended intelligence', ...SiteConfig.keywords],
  },
  PUBLICATIONS: {
    title: 'Publications',
    description: 'Browse our research publications, journal articles, and conference papers in quantum computing, AI, and related fields.',
    path: '/publications',
    keywords: ['publications', 'research papers', 'journal articles', 'conference papers', ...SiteConfig.keywords],
  },
  TEAM: {
    title: 'Our Team',
    description: `Meet the talented researchers and leaders driving innovation at ${SiteConfig.fullName}.`,
    path: '/team',
    keywords: ['team', 'researchers', 'leadership', ...SiteConfig.keywords],
  },
  BLOG: {
    title: 'Blog & News',
    description: 'Latest insights, research updates, and news from QMALTIX Lab.',
    path: '/blog',
    keywords: ['blog', 'news', 'updates', ...SiteConfig.keywords],
  },
  CONTACT: {
    title: 'Contact Us',
    description: `Get in touch with ${SiteConfig.fullName} for collaborations, inquiries, or just to say hello.`,
    path: '/contact',
    keywords: ['contact', 'collaboration', 'inquiry', ...SiteConfig.keywords],
  },
  JOIN_US: {
    title: 'Join Our Team',
    description: 'Join us in advancing the frontiers of AI, Quantum Computing, and IoT research. Explore opportunities to work with our team.',
    path: '/join-us',
    keywords: ['careers', 'opportunities', 'join', 'research positions', ...SiteConfig.keywords],
  },
  NOT_FOUND: {
    title: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    path: '/404',
    keywords: [],
  },
}

export default SiteMetadata
