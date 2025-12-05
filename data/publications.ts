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
    venue: 'IEEE Access',
    year: 2024,
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/10681438/',
    abstract: 'Empirical evidence on when to use standardization and normalization in machine learning models with explainable AI insights. This study provides comprehensive analysis of data preprocessing techniques and their impact on model performance and interpretability.',
  },
  {
    id: '2',
    title: 'The Effects of Imbalanced Datasets on Machine Learning Algorithms in Predicting Student Performance',
    authors: ['QMALTIX Lab'],
    venue: 'JOIV: International Journal on Informatics Visualization',
    year: 2024,
    type: 'journal',
    link: 'https://joiv.org/index.php/joiv/article/download/2449/1071',
    abstract: 'Investigating the effects of imbalanced datasets on machine learning algorithms in the context of predicting student performance. The study explores various techniques to handle class imbalance and improve prediction accuracy.',
  },
  {
    id: '3',
    title: 'A novel framework for malware detection using entropy-based statistical features and machine learning models across file types',
    authors: ['QMALTIX Lab'],
    venue: 'Engineering Research Express',
    year: 2025,
    type: 'journal',
    link: 'https://www.researchgate.net/publication/391586464_A_novel_framework_for_malware_detection_using_entropy-based_statistical_features_and_machine_learning_models_across_file_types',
    abstract: 'A novel framework for malware detection utilizing entropy-based statistical features and machine learning models across different file types. The approach provides effective detection capabilities for various malware variants.',
  },
  {
    id: '4',
    title: 'Synthetic Minority Over-sampling Technique for Student Performance Prediction: A Comparative Analysis of Ensemble and Linear Models',
    authors: ['QMALTIX Lab'],
    venue: '2024 27th International Conference on Computer and Information Technology (ICCIT)',
    year: 2024,
    type: 'conference',
    link: 'https://www.researchgate.net/publication/392564475_Synthetic_Minority_Over-sampling_Technique_for_Student_Performance_Prediction_A_Comparative_Analysis_of_Ensemble_and_Linear_Models',
    abstract: 'A comparative analysis of ensemble and linear models using Synthetic Minority Over-sampling Technique (SMOTE) for student performance prediction. The study demonstrates the effectiveness of SMOTE in handling imbalanced educational datasets.',
  },
  {
    id: '5',
    title: 'A Hybrid Approach for Malicious URL Detection Using Ensemble Models and Adaptive Synthetic Sampling',
    authors: ['QMALTIX Lab'],
    venue: 'JOIV: International Journal on Informatics Visualization',
    year: 2025,
    type: 'journal',
    link: 'https://joiv.org/index.php/joiv/article/view/4627/1456',
    abstract: 'A hybrid approach combining ensemble models with adaptive synthetic sampling for malicious URL detection. The method improves detection accuracy and handles class imbalance effectively in cybersecurity applications.',
  },
  {
    id: '6',
    title: 'The Impact of Recursive Feature Elimination and Information Gain on Machine Learning Models for Student Performance Prediction',
    authors: ['QMALTIX Lab'],
    venue: '2025 International Conference on Quantum Photonics, Artificial Intelligence, and Smart City (ICQPASC)',
    year: 2025,
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/11172062',
    abstract: 'Analyzing the impact of recursive feature elimination and information gain techniques on machine learning models for student performance prediction. The research highlights the importance of feature selection in educational data mining.',
  },
  {
    id: '7',
    title: 'OPTISTACK: A Hybrid Ensemble Learning and XAI-Based Approach for Malware Detection in Compressed Files',
    authors: ['QMALTIX Lab'],
    venue: 'IEEE Access',
    year: 2025,
    type: 'journal',
    link: 'https://doi.org/10.1109/ACCESS.2025.3579880',
    abstract: 'OPTISTACK presents a hybrid ensemble learning approach combined with explainable AI for malware detection in compressed files. The framework provides both high detection accuracy and interpretability for security analysts.',
  },
  {
    id: '8',
    title: 'A Hybrid Intrusion Detection System Approach Using PCA and SMOTE with Advanced Ensemble Models',
    authors: ['QMALTIX Lab'],
    venue: '2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)',
    year: 2025,
    type: 'conference',
    link: 'https://doi.org/10.1109/ECCE64574.2025.11014030',
    abstract: 'A hybrid intrusion detection system combining Principal Component Analysis (PCA) and SMOTE with advanced ensemble models. The approach enhances network security through improved detection of various intrusion patterns.',
  },
]

