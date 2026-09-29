/* ---------------------------------------------------------------------------
 * SiteContent schema
 * Every editable piece of the website is typed here. Components consume this
 * contract and never hardcode business copy.
 * ------------------------------------------------------------------------- */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'twitter' | 'linkedin' | 'dribbble' | 'github';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
}

export interface Stat {
  value: string;
  label: string;
}

export interface About {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: { src: string; alt: string };
  stats: Stat[];
  cta: { label: string; href: string };
}

export interface WorkItem {
  title: string;
  category: string;
  description: string;
  image: { src: string; alt: string };
  link?: { label: string; href: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: { initials: string; hue: number };
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  cta: { label: string; href: string };
  features: string[];
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Cta {
  eyebrow: string;
  heading: string;
  paragraph: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface Hero {
  eyebrow: string;
  headline: string;
  highlight: string;
  paragraph: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  visualLabel: string;
  visualMeta: string;
}

export interface Seo {
  title: string;
  description: string;
  url: string;
}

export interface SiteContent {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
  };
  seo: Seo;
  hero: Hero;
  nav: NavLink[];
  services: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    items: Service[];
  };
  about: About;
  work: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    categories: string[];
    items: WorkItem[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    items: Testimonial[];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    plans: PricingPlan[];
    annualDiscountLabel: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    items: FaqItem[];
  };
  cta: Cta;
  contact: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    info: ContactInfo;
  };
  footer: {
    summary: string;
    legal: { label: string; href: string }[];
  };
  socials: SocialLink[];
}