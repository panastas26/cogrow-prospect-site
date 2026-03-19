export interface SiteConfig {
  business: BusinessProfile;
  conversion: ConversionConfig;
  trust: TrustConfig;
  seo: SEOConfig;
  brand: BrandConfig;
  sections: SectionConfig;
}

export interface BusinessProfile {
  name: string;
  vertical: string;
  businessType: string;
  geography: string;
  phone?: string;
  email?: string;
  address?: string;
  targetAudience: string;
}

export interface ConversionConfig {
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  urgentCTA?: { label: string; href: string };
}

export interface TrustConfig {
  yearsInBusiness: string;
  credentials: string[];
  serviceArea: string[];
  differentiators: string[];
  guarantee?: string;
  metrics: { value: string; label: string }[];
}

export interface SEOConfig {
  title: string;
  description: string;
  primaryTerms: string[];
  secondaryTerms?: string[];
}

export interface BrandConfig {
  tone: string;
  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
    light: string;
    dark: string;
  };
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  benefit: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Differentiator {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectionConfig {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  whyUs: {
    label: string;
    title: string;
    subtitle: string;
    items: Differentiator[];
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  serviceArea: {
    label: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    label: string;
    title: string;
    items: Testimonial[];
  };
  faq: {
    label: string;
    title: string;
    items: FAQItem[];
  };
  finalCTA: {
    headline: string;
    subheadline: string;
  };
  footer: {
    description: string;
    serviceLinks: { label: string; href: string }[];
    companyLinks: { label: string; href: string }[];
  };
}
