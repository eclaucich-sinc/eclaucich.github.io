export interface Experience {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  advisors?: string;
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
  advisors?: string;
}

export interface Publication {
  id: string;
  authors: string;
  title: string;
  venue: string;
  year: string;
  url?: string;
}

export interface Language {
  language: string;
  level: string;
}