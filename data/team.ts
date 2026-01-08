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

// Leadership Team
export const leadershipTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Khaled Mahmud Sujon',
    role: 'Founder & Director',
    bio: 'Founder and Director of QMALTIX Lab, leading research in quantum computing, AI, and extended intelligence.',
    researchInterests: ['Quantum Computing', 'Artificial Intelligence', 'Machine Learning', 'Extended Intelligence', 'Image Processing', 'NLP'],
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
    researchInterests: ['Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Data Science'],
    image: 'https://i.ibb.co/RTzT03CR/1730832469539.jpg',
    email: 'adnanshafi966@gmail.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/adnan-shafi-413144246/',
      googleScholar: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=f5ZwJlcAAAAJ',
    },
  },
]

// Research Team - Research Assistants
export const researchTeam: TeamMember[] = [
  {
    id: '3',
    name: 'Tahmedur Rahman',
    role: 'Research Assistant',
    bio: 'Research Assistant at QMALTIX Lab, Department of Industrial and Systems Engineering, Lamar University.',
    researchInterests: ['Industrial Systems', 'Research'],
    email: 'trahman6@lamar.edu',
  },
  {
    id: '4',
    name: 'Aminul Islam Miraz',
    role: 'Research Assistant',
    bio: 'Research Assistant at QMALTIX Lab, Department of Information Systems, Lamar University.',
    researchInterests: ['Information Systems', 'Research'],
    email: 'amiraz@lamar.edu',
  },
  {
    id: '5',
    name: 'Md Muzahidul Islam',
    role: 'Research Assistant',
    bio: 'Research Assistant at QMALTIX Lab, Department of Information Systems, Lamar University.',
    researchInterests: ['Information Systems', 'Research'],
    email: 'mislam165@lamar.edu',
  },
  {
    id: '6',
    name: 'Md. Tahmid Farabe Shehun',
    role: 'Research Assistant',
    bio: 'Research Assistant at QMALTIX Lab, Department of Industrial and Systems Engineering, Lamar University.',
    researchInterests: ['Industrial Systems', 'Research'],
    email: 'mshehun@lamar.edu',
    image: 'https://i.ibb.co/Kj6WjB1F/shehun.jpg',
  },
  {
    id: '7',
    name: 'Md Monirul Islam Molla',
    role: 'Research Assistant',
    bio: 'Research Assistant at QMALTIX Lab, Japan-Bangladesh Robotics & Advanced Technology Research Center, Bangladesh.',
    researchInterests: ['Robotics', 'Advanced Technology', 'Research'],
    email: 'monirul.cse.utm@gmail.com',
  },
  {
    id: '9',
    name: 'Zubair Al Zami',
    role: 'Research Assistant',
    bio: 'Manager, Production Process Control at APEX HOLDINGS LIMITED and Research Assistant at QMALTIX Lab.',
    researchInterests: ['Data Science', 'Data Analyst', 'Textile Engineering'],
    email: 'zubair.actl@gmail.com',
    image: 'https://i.ibb.co/6787Dtcc/zubair.jpg',
  },
]

// Technical Team
export const technicalTeam: TeamMember[] = [
  {
    id: '8',
    name: 'Iftekhar Uddin Ahmed',
    role: 'Technical Team Member',
    bio: 'Technical Team Member at QMALTIX Lab, contributing to technical development and implementation.',
    researchInterests: ['Technical Development', 'Software Engineering'],
  },
]

// All team members (for backward compatibility)
export const teamMembers: TeamMember[] = [
  ...leadershipTeam,
  ...researchTeam,
  ...technicalTeam,
]

