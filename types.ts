export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  location?: string;
  description?: string;
  awards?: string[];
}

export interface EducationEntry {
  year: string;
  degree: string;
  institution: string;
  details?: string;
}

export interface Service {
  title: string;
  description: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
}