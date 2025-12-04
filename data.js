// Person links for advisor and author hyperlinks
const PERSON_LINKS = {
  'Rodrigo Echeveste': 'https://scholar.google.com/citations?hl=es&user=AcT16qoAAAAJ',
  'Enzo Ferrante': 'https://scholar.google.com/citations?user=ArqlkTUAAAAJ&hl=es&oi=ao',
  'Stergios Christodoulidis': 'https://scholar.google.com/citations?user=-h5w30sAAAAJ&hl=es&oi=ao',
  'Maria Vakalopoulou': 'https://scholar.google.com/citations?hl=es&user=FKUHYqMAAAAJ',
  'Fabio De Sousa Ribeiro': 'https://scholar.google.com/citations?hl=es&user=iIcKRG0AAAAJ',
  'Emma A.M. Stanley': 'https://scholar.google.com/citations?hl=es&user=yj9NS6UAAAAJ',
  'Panos Dimitrakopoulos': 'https://scholar.google.com/citations?hl=es&user=Xz0qnGoAAAAJ',
  'Sotirios A. Tsaftaris': 'https://scholar.google.com/citations?user=fA-_oIIAAAAJ',
  'Ben Glocker': 'https://scholar.google.co.uk/citations?user=kWe-lXgAAAAJ',
  'Sara Hooker': 'https://scholar.google.com/citations?hl=es&user=2xy6h3sAAAAJ',
  'Diego H. Milone': 'https://scholar.google.com/citations?hl=es&user=nLd_jfgAAAAJ',
  'Lucas Mansilla': 'https://scholar.google.com/citations?hl=es&user=5WMFRWgAAAAJ'
};

// Personal Information
const PERSONAL_INFO = {
  name: "Estanislao Claucich",
  title: "PhD in Engineering Student & Computer Engineer",
  email: "eclaucich@sinc.unl.edu.ar",
  location: "sinc(i), Santa Fe, Argentina",
  location_url: "https://sinc.unl.edu.ar/",
  socials: [
    { 
      name: 'GitHub', 
      url: 'https://github.com/eclaucich-sinc',
      icon: 'github'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/estanislao-claucich/',
      icon: 'linkedin'
    }
  ]
};

// Education
const EDUCATION = [
  {
    id: "phd",
    degree: "PhD in Engineering",
    institution: "Research Institute for Signals, Systems and Computational Intelligence, sinc(i)-CONICET",
    location: "Santa Fe, Argentina",
    period: "2023 - Present",
    advisors: "Rodrigo Echeveste and Enzo Ferrante",
    technologies: ["Deep Learning", "Fairness", "Computer Vision"]
  },
  {
    id: "eng",
    degree: "Computer Engineering",
    institution: "Universidad Nacional del Litoral",
    location: "Santa Fe, Argentina",
    period: "2017 - 2023"
  }
];

// Research Experience
const RESEARCH_EXPERIENCE = [
  {
    id: "mics",
    role: "Research Internship at MICS",
    institution: "CentraleSupélec, Université Paris-Saclay",
    location: "Paris, France",
    period: "Nov 2024 - Feb 2025",
    description: "FairMed-VLMs: Development of VLMs for Medical Image Analysis within the Algorithmic Fairness Framework.",
    advisors: "Stergios Christodoulidis and Maria Vakalopoulou"
  },
  {
    id: "sinc",
    role: "Research Fellow",
    institution: "sinc(i)-CONICET",
    location: "Santa Fe, Argentina",
    period: "2021 - 2022",
    description: "Development of bias mitigation techniques for medical imaging based on machine learning models.",
    advisors: "Rodrigo Echeveste and Enzo Ferrante"
  }
];

// Industry Experience
const INDUSTRY_EXPERIENCE = [
  {
    id: "anlis",
    role: "Full-Stack Developer",
    institution: "ANLIS-INER",
    location: "Santa Fe, Argentina",
    period: "2021 - 2025",
    description: "Development of the national argentine medical system 'Registro Nacional de Fibrosis Quística (ReNaFQ)'.",
    technologies: ["JavaScript", "MongoDB", "NodeJS", "React"]
  },
  {
    id: "sbi",
    role: "Back-End Developer",
    institution: "SBI-Technology",
    location: "Santa Fe, Argentina",
    period: "2022 - 2023",
    description: "Development of solutions for the Guidewire Suite.",
    technologies: ["Gosu", "Java", "Relational Databases"]
  }
];

// Teaching Experience
const TEACHING_EXPERIENCE = [
  {
    id: "ta-opt",
    role: "Senior Teaching Assistant",
    institution: "Facultad de Ingeniería Química (FIQ-UNL)",
    location: "Santa Fe, Argentina",
    period: "2024 - Now",
    description: "Subject: Optimization and Machine Learning.",
    technologies: ["Linear Regression", "SVM", "Clustering", "LDA", "QDA", "Decision Trees", "Ensembles", "MLP", "Regularization"]
  },
  {
    id: "ta-prog",
    role: "Senior Teaching Assistant",
    institution: "Facultad de Ingeniería Química (FIQ-UNL)",
    location: "Santa Fe, Argentina",
    period: "2024 - 2025",
    description: "Subject: Introduction to Programming in Python."
  }
];

// Publications
const PUBLICATIONS = [
  {
    id: "neurips25",
    authors: "Fabio De Sousa Ribeiro, Estanislao Claucich, Emma A.M. Stanley, Panos Dimitrakopoulos, Sotirios A. Tsaftaris, Enzo Ferrante, Ben Glocker & Rodrigo Echeveste",
    title: "SynthFair: A Semi-Synthetic Medical Imaging Dataset to Propel Research on Bias Detection & Mitigation",
    venue: "NeurIPS AI for Science Workshop",
    year: "2025",
    url: "https://openreview.net/forum?id=vlaEtuPh6n#discussion"
  },
  {
    id: "facct25",
    authors: "Estanislao Claucich, Sara Hooker, Diego H. Milone, Rodrigo Echeveste & Enzo Ferrante",
    title: "Fairness of Deep Ensembles: On the interplay between per-group task difficulty and under-representation",
    venue: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
    year: "2025",
    url: "https://dl.acm.org/doi/10.1145/3715275.3732200"
  },
  {
    id: "tmlr24",
    authors: "Lucas Mansilla, Estanislao Claucich, Rodrigo Echeveste, Diego H. Milone & Enzo Ferrante",
    title: "Demographically-Informed Prediction Discrepancy Index: Early Warnings of Demographic Biases for Unlabeled Populations",
    venue: "Transactions on Machine Learning Research (TMLR)",
    year: "2024",
    url: "https://openreview.net/forum?id=8W6IDyFZgC"
  },
  {
    id: "jaiio22",
    authors: "Estanislao Claucich, Enzo Ferrante & Rodrigo Echeveste",
    title: "Sesgos en problemas de regresión originados por el desbalance de datos en términos de atributos protegidos",
    venue: "Jornadas Argentinas de Informática (JAIIO)",
    year: "2022",
    url: "https://sedici.unlp.edu.ar/bitstream/handle/10915/151624/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y"
  }
];

// Languages
const LANGUAGES = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "B2 (Upper Intermediate)" }
];

// Core Technologies
const CORE_TECHNOLOGIES = [
  'Python', 
  'Deep Learning', 
  'Computer Vision', 
  'React', 
  'NodeJS', 
  'MongoDB', 
  'JavaScript', 
  'Java', 
  'Machine Learning'
];
