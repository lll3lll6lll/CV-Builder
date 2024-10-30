export interface Resume {
  id: string;
  contacts: ResumeContacts;
  data: ResumeData;
  settings: ResumeSettings;
}

export interface ResumeContacts {
  email: string;
  phone: string;
  country: string;
  city: string;
  social: {
    website?: string;
    twitter?: string;
    linkedIn?: string;
    faceBook?: string;
    quora?: string;
    skype?: string;
    gitHub?: string;
    medium?: string;
    instagram?: string;
    stackOverflow?: string;
  };
}

export interface ResumeData {
  education: Education[];
  works: Work[];
  personalProjects: Project[];
  skills: string[];
  certificates: Certificate[];
  languages: Language[];
  interests: string[];
  achievements: Achievement[];
  teaching: Teaching[];
  publications: Publication[];
  volunteer: Volunteer[];
}

export interface Education {
  studyProgram: string;
  institution: string;
  start: Date;
  end: Date | null;
  present: boolean;
  location: string;
  courses: string[];
}

export interface Work {
  position: string;
  company: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
  present: boolean;
  responsibility: string[];
}

export interface Project {
  name: string;
  start: Date;
  end: Date;
  present: boolean;
  description: string;
}

export interface Certificate {
  name: string;
  start: Date;
  end: Date;
  present: boolean;
  description: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Achievement {
  name: string;
  start: Date;
  end: Date;
  present: boolean;
  description: string;
}

export interface Teaching {
  name: string;
  company: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
  present: boolean;
  responsibility: string[];
}

export interface Publication {
  title: string;
  type: string;
  authors: string;
  publicationDate: Date;
  description: string;
  issue: string;
}

export interface Volunteer {
  position: string;
  company: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
  present: boolean;
  responsibility: string[];
}

export interface ResumeSettings {
  theme: any;
}
