
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // A number from 0 to 100 for the progress bar
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ResumeItem {
  title: string;
  companyOrInstitution: string;
  period: string;
  description: string;
  points?: string[];
}
