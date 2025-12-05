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
  source?: 'linkedin' | 'facebook' | 'website'
  url?: string // Link to original post on LinkedIn/Facebook
}

/**
 * Blog Posts
 * 
 * To add posts from LinkedIn or Facebook:
 * 1. Copy the post content from LinkedIn/Facebook
 * 2. Add it here with source: 'linkedin' or 'facebook'
 * 3. Add the original post URL in the 'url' field
 * 4. The post will automatically link to the original social media post
 */
export const blogPosts: BlogPost[] = [
  // Add your LinkedIn and Facebook posts here manually
  // Example format:
  // {
  //   id: 'linkedin-1',
  //   title: 'Post title from LinkedIn',
  //   excerpt: 'First 200 characters...',
  //   content: 'Full post content...',
  //   author: 'QMALTIX Lab',
  //   date: '2024-01-15',
  //   category: 'Research',
  //   tags: ['QuantumComputing', 'AI'],
  //   source: 'linkedin',
  //   url: 'https://www.linkedin.com/posts/qmaltix-lab_...',
  // },
]

