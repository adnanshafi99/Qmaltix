export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'journal' | 'conference' | 'preprint' | 'ongoing' | 'accepted'
  link?: string
  abstract?: string
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'When to use standardization and normalization: empirical evidence from machine learning models and XAI',
    authors: ['QMALTIX Lab'],
    venue: 'IEEE Xplore',
    year: 2024,
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/abstract/document/10681438',
    abstract: 'Empirical evidence on when to use standardization and normalization in machine learning models with explainable AI insights.',
  },
  {
    id: '2',
    title: 'A novel framework for malware detection using entropy-based statistical features and machine learning models across file types',
    authors: ['QMALTIX Lab'],
    venue: 'IOP Science',
    year: 2024,
    type: 'journal',
    link: 'https://iopscience.iop.org/article/10.1088/2631-8695/add645/meta',
    abstract: 'A novel framework for malware detection utilizing entropy-based statistical features and machine learning models across different file types.',
  },
  {
    id: '3',
    title: 'The Effects of Imbalanced Datasets on Machine Learning Algorithms in Predicting Student Performance',
    authors: ['QMALTIX Lab'],
    venue: 'JOIV: International Journal on Informatics Visualization',
    year: 2024,
    type: 'journal',
    link: 'https://joiv.org/index.php/joiv/article/view/2449',
    abstract: 'Investigating the effects of imbalanced datasets on machine learning algorithms in the context of predicting student performance.',
  },
]

