export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image?: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Quantum Computing in Healthcare',
    excerpt: 'Exploring how quantum computing can revolutionize drug discovery and personalized medicine.',
    content: 'Full article content...',
    author: 'Dr. John Doe',
    date: '2024-01-15',
    category: 'Quantum Computing',
    tags: ['Quantum Computing', 'Healthcare', 'Research'],
  },
  {
    id: '2',
    title: 'Ethical AI: Building Responsible Machine Learning Systems',
    excerpt: 'A deep dive into the principles of ethical AI and how we can build more responsible systems.',
    content: 'Full article content...',
    author: 'Dr. Jane Smith',
    date: '2024-01-10',
    category: 'Artificial Intelligence',
    tags: ['AI Ethics', 'Machine Learning', 'Responsible AI'],
  },
  {
    id: '3',
    title: 'IoT Networks: Challenges and Opportunities',
    excerpt: 'Understanding the current state of IoT networks and future possibilities.',
    content: 'Full article content...',
    author: 'Dr. Alice Johnson',
    date: '2024-01-05',
    category: 'IoT',
    tags: ['IoT', 'Networks', 'Technology'],
  },
  {
    id: '4',
    title: 'Mathematical Modeling for Climate Prediction',
    excerpt: 'How advanced mathematical models help us understand and predict climate patterns.',
    content: 'Full article content...',
    author: 'David Lee',
    date: '2023-12-20',
    category: 'Mathematical Modeling',
    tags: ['Climate', 'Modeling', 'Science'],
  },
]

