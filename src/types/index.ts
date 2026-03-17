export interface CoupleInfo {
  name: string;
  fullName: string;
  role: 'bride' | 'groom';
  image: string;
  bio: string;
  fatherName: string;
  motherName: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  image?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  label: string;
}

export interface WeddingData {
  couple: {
    bride: CoupleInfo;
    groom: CoupleInfo;
    weddingDate: string; // ISO date string
    hashtag?: string;
  };
  timeline: TimelineEvent[];
  events: WeddingEvent[];
  bankAccounts: BankAccount[];
  heroImage?: string;
  gallery: string[];
  backgroundMusic?: string;
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export type ThemeName = 'romantic' | 'rustic' | 'traditional';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  text: string;
  textLight: string;
  textMuted: string;
  border: string;
  overlay: string;
  gradient: string;
  gradientAlt: string;
  floatingElement: 'hearts' | 'petals' | 'sparkles';
}
