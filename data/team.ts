export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  email?: string
  website?: string
  researchInterests: string[]
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
    googleScholar?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Khaled Mahmud Sujon',
    role: 'Founder & Director',
    bio: 'Founder and Director of QMALTIX Lab, leading research in quantum computing, AI, and extended intelligence.',
    researchInterests: ['Quantum Computing', 'Artificial Intelligence', 'Machine Learning', 'Extended Intelligence'],
    image: 'https://i.ibb.co/YTcdQ9Mp/8-B98-CC37-1-D16-4-C84-8-A3-A-F39-D7-EE0-EB00.jpg',
    email: 'khaledsujon66@gmail.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/khaled-mahmud-sujon-6030a9357/',
      googleScholar: 'https://scholar.google.com/citations?user=HLV75FEAAAAJ&hl=en',
    },
  },
  {
    id: '2',
    name: 'Adnan Shafi',
    role: 'Co Founder',
    bio: 'Co-Founder of QMALTIX Lab, specializing in machine learning, cybersecurity, and data science.',
    researchInterests: ['Machine Learning', 'Cybersecurity', 'Data Science', 'Malware Detection'],
    image: 'https://i.ibb.co/RTzT03CR/1730832469539.jpg',
    email: 'adnanshafi966@gmail.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/adnan-shafi-413144246/',
      googleScholar: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=f5ZwJlcAAAAJ',
    },
  },
]

