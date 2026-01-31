
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechGroup {
  category: string;
  items: TechItem[];
}
