export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type LeadCaptureData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  childrenCount: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type PricingTier = {
  label: string;
  weeks: string;
  price: number;
  discount: number;
};

export type CampWeek = {
  number: number;
  start: string;
  end: string;
};

export type ProgramLevel = {
  name: string;
  ages: string;
  grades: string;
  slug: string;
};

export type Activity = {
  name: string;
  description: string;
  items?: readonly string[];
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
