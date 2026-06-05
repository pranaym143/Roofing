export interface Service {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  longDescription: string;
  benefits: string[];
  priceRange: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'drone' | 'modern';
  location: string;
  image: string;
  beforeImage?: string;
  specs: {
    material: string;
    area: string;
    duration: string;
    warranty: string;
  };
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  projectType: string;
  verified: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  detailPoints: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
