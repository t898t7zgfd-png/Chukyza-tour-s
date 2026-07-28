export type Language = 'es' | 'en';

export interface Tour {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  price: number;
  duration: string;
  difficulty: Record<Language, string>;
  tag: Record<Language, string>;
  image: string;
  featured?: boolean;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  vehicleType: string;
  included: Record<Language, string[]>;
}

export interface PackagePlan {
  id: string;
  name: Record<Language, string>;
  category: Record<Language, string>;
  price: number | 'Custom';
  unit: string;
  featured?: boolean;
  features: Record<Language, string[]>;
  recommendedFor: Record<Language, string>;
}

export interface GalleryItem {
  id: string;
  title: Record<Language, string>;
  category: string;
  image: string;
  location: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'general' | 'safety' | 'booking' | 'vehicles';
}

export interface Destination {
  id: string;
  name: string;
  elevation: string;
  distanceFromHQ: string;
  difficulty: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  coordinates: { x: number; y: number };
}

export interface BookingFormData {
  tourId: string;
  packageId: string;
  date: string;
  timeSlot: string;
  ridersCount: number;
  vehiclesCount: number;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  addOnsGopro: boolean;
  addOnsVipGuide: boolean;
  addOnsSnackPack: boolean;
}
