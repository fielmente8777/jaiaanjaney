export interface StorySectionType {
  title: string;
  description: string[];
  images: [string, string];
}

export interface VisionSectionType {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export type ValuesSectionType = {
  eyebrow?: string;
  title: string;
  items: {
    icon?: "temple" | "devotion" | "food" | "heritage";
    title: string;
    description: string;
    image: string;
  }[];
};
export interface AboutHeroType {
  title: string;
  description: string;
  images: string[];
}

export interface AboutCtaType {
  eyebrow: string;
  description: string;
  note?: string;
  cta: {
    text: string;
    link: string;
  };
}
