export interface ContactHeroType {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface ContactInfoItem {
  label: string;
  value: string;
  link?: string;
  description?: string;
}

export interface ContactDetailsType {
  image: string;
  email: {
    label: string;
    value: string;
    link: string;
  };
  phone: {
    label: string;
    value: string;
    link: string;
  };
  address: {
    label: string;
    value: string;
    note?: string;
  };
}

export interface EnquirySectionType {
  eyebrow: string;
  title: string;
  description: string;
  mapHeading: string;
  mapAddress: string;
  mapDirectionsText: string;
  mapDirectionsLink: string;
}

export interface TravelRouteItem {
  destination: string;
  distance: string;
}

export interface TravelModeCategory {
  title: string;
  items: TravelRouteItem[];
}

export interface GettingHereSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  modes: TravelModeCategory[];
}

export interface FaqItemType {
  question: string;
  answer: string;
}

export interface FaqSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  phone: string;
  faqs: FaqItemType[];
}
