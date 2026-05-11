export type Language = 'uz' | 'en' | 'ru';

export interface NewsPost {
  id: string;
  title: string;
  translations?: Record<Language, { title: string; content: string }>;
  content: string;
  imageUrl?: string;
  category: string;
  tags?: string[];
  views: number;
  createdAt: any;
  telegramId?: string;
}

export interface Reel {
  id: string;
  videoUrl: string;
  title: string;
  views: number;
  likes: number;
  createdAt: any;
}

export interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  workingHours: string;
  description: string;
  imageUrl?: string;
  rating: number;
}

export interface Poll {
  id: string;
  question: string;
  options: { label: string; votes: number }[];
  totalVotes: number;
  createdAt: any;
  userVotes?: Record<string, number>;
}

export interface Ad {
  id: string;
  title: string;
  content: string;
  contact: string;
  imageUrl?: string;
  expiryDate: any;
}
