import { TimelineEntry, EducationEntry, Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Philosophy', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: TimelineEntry[] = [
  {
    period: '2019 – Now',
    role: 'Head Aesthetic Doctor',
    company: 'Moii Aesthetic Clinic',
    location: 'Umalas Kerobokan – Bali'
  },
  {
    period: '2018 – Now',
    role: 'Guest Aesthetic Doctor',
    company: 'Cure Clinic',
    location: 'Griya Cure – Jakarta Pusat'
  },
  {
    period: '2018 – 2022',
    role: 'Head Doctor',
    company: 'Omedica Clinic',
    location: 'Kelapa Gading – Jakarta Utara'
  },
  {
    period: '2016 – 2019',
    role: 'Senior Aesthetic Doctor',
    company: 'CellScience Solitaire',
    location: 'Sofitel Luxury Hotel – Nusa Dua',
    description: '(formerly Vietura Bali)'
  },
  {
    period: '2016 – 2018',
    role: 'Senior Aesthetic Doctor & Advisor',
    company: 'EuroSkinLab (Euromedica Group)',
    location: 'Jakarta, Medan, Surabaya'
  },
  {
    period: '2012 – 2016',
    role: 'Aesthetic & Anti-Aging Doctor',
    company: 'Soleil Medispa',
    location: 'Discovery Mall Kuta',
    awards: ['Awarded WhatClinic Best Customer Service 2015 & 2016', 'International reviews on TripAdvisor']
  },
  {
    period: '2009 – 2012',
    role: 'Aesthetic & Anti-Aging Doctor & Co-Founder',
    company: 'Prasanti Beauty Clinic',
    description: 'Monthly anti-aging talkshow at BaliFM Radio'
  },
  {
    period: '2008 – 2009',
    role: 'General Practitioner',
    company: 'Kyoai Healthcare',
    location: 'Prime Care International Clinic'
  }
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    year: '2017',
    degree: '200-hour Yoga Teacher Training',
    institution: 'Tattvaa Yogashala, Rishikesh – India'
  },
  {
    year: '2012',
    degree: 'Diplomate',
    institution: 'American Board of Anti-Aging & Regenerative Medicine'
  },
  {
    year: '2008 – 2010',
    degree: 'Master Degree in Anti-Aging Medicine',
    institution: 'Udayana University, Bali',
    details: 'Postgraduate Program'
  },
  {
    year: '2000 – 2007',
    degree: 'Medical Doctor',
    institution: 'Trisakti University, Jakarta'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Botox',
    description: 'Natural-result-focused approach to smooth fine lines and refresh your expression.',
    details: ['Forehead & Frown lines', 'Crow’s feet', 'Gummy smile correction', 'Jaw trimming', 'Neck-lift', 'Under-arm sweating']
  },
  {
    title: 'Fillers',
    description: 'Correction and facial balance to restore volume and harmony.',
    details: ['Under-eyes & Cheeks', 'Nose & Lips', 'Chin & Jawline', 'Scars & Hands', 'Liquid Facelift']
  },
  {
    title: 'Thread-Lift',
    description: 'Non-surgical lifting using PLA (Silhouette Soft) & PDO threads.',
    details: ['Targets lower/middle face', 'Neck lifting', 'Stimulates collagen', 'Immediate lifting effect']
  },
  {
    title: 'Liquid FaceLift',
    description: 'A synergistic combination of botox and fillers for subtle, overall lifting.',
    details: ['No threads required', 'Refreshed appearance', 'Minimally invasive', 'Holistic facial harmony']
  },
  {
    title: 'DAO-Lift',
    description: 'Holistic aesthetic therapy inspired by Traditional Chinese Medicine.',
    details: ['Enhances energy flow', 'Rejuvenates face & body', 'Non-injectable option', 'Natural healing']
  },
  {
    title: 'MesoAcuLift',
    description: 'The fusion of mesotherapy and acupuncture for skin health.',
    details: ['Natural skin rejuvenation', 'Long-term skin health', 'Micro-injection technique', 'Boosts radiance']
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/600/600?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/500?random=3',
  'https://picsum.photos/600/700?random=4',
  'https://picsum.photos/600/600?random=5',
  'https://picsum.photos/600/900?random=6',
];