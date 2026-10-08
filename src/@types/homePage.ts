export interface HeroType {
  title: string;
  description: string;
  images?: string[];
  video?: {
    src: string;
    poster: string;
  };
}

export interface dayAtJaiAnjaneyType {
  eyebrow: string;
  title: string;
  items: {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
  }[];
}

export interface ExperiencesSectionType {
  eyebrow: string;
  title: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface RoomsSectionType {
  title: string;
  description: string;
  cta: {
    text: string;
    link: string;
  };
  images: string[];
}

export interface AmenitiesSectionType {
  eyebrow: string;
  title: string;
  items: {
    title: string;
    image: string;
  }[];
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface NearbyPlace {
  title: string;
  distance: string;
  description: string;
  image?: string;
  coords: LatLng;
}

export interface LocationSectionType {
  eyebrow: string;
  title: string;
  /** The resort itself — the home marker that routes are drawn from. */
  origin: {
    label: string;
    coords: LatLng;
  };
  places: NearbyPlace[];
}

export interface TestimonialsSectionType {
  eyebrow: string;
  title: string;
  image: string;
  items: {
    review: string;
    author: string;
  }[];
}

export interface FinalCtaSectionType {
  eyebrow: string;
  description: string;
  note: string;
  cta?: {
    text: string;
    link: string;
  };
}

export type HighlightsSectionType = {
  items: {
    value: string;
    label: string;
  }[];
};

export interface StorySectionType {
  title: string;
  description: string[];
  images: [string, string];
}

export interface VisionSectionType {
  title: string;
  items: {
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
