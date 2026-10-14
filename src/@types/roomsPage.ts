/* ───────────── Rooms hero ───────────── */
export interface CtaType {
  text: string;
  link: string;
}
export interface RoomsHeroType {
  eyebrow: string;
  title: string;
  description: string;

  image: string;
  imageAlt?: string;
}

/* ───────────── Villas ───────────── */
export interface VillaType {
  id: string;

  label: string;
  title: string;
  tagline: string;
  description: string;

  specs: string[];
  image: string;
  bookCta: CtaType;
  viewCta: CtaType;
}

export interface VillasSectionType {
  eyebrow: string;
  title: string;
  description: string;
  items: VillaType[];
}

export type VillaFeatureIcon =
  "pool" | "salon" | "pantry" | "bedrooms" | "transfer" | "guests";

export interface PresidentialVillaType {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: { icon: VillaFeatureIcon; label: string }[];
  specs: string[];
  bookCta: CtaType;
  viewCta: CtaType;
}
export interface StayRootedSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features?: { icon: VillaFeatureIcon; label: string }[];
  specs?: string[];
  bookCta?: CtaType;
  viewCta?: CtaType;
  stats: {
    value: string;
    label: string;
  }[]
  images: {
    main: string;
    small: string;
  }
}

export interface RoomItemType {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: {
    guests: string;
    size: string;
    bed: string;
  };
  image: string;
  images?: string[];
  cta: {
    viewText: string;
    viewLink: string;
    bookText: string;
    bookLink: string;
  };
}

export interface BuildingRoomsSectionType {
  eyebrow: string;
  title: string;
  description: string;
  rooms: RoomItemType[];
}

export interface ComfortItemType {
  title: string;
  subtitle: string;
  icon: string;
}

export interface ThoughtfulComfortsSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ComfortItemType[];
}
