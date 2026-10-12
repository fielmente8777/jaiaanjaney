export interface StayRootedSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  images: {
    main: string;
    small: string;
  };
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

/* ───────────── Rooms hero ───────────── */
export interface CtaType {
  text: string;
  link: string;
}

export interface RoomsHeroType {
  eyebrow: string;
  title: string;
  description: string;
  /** Single export of the three arched photos (transparent PNG). */
  image: string;
  imageAlt?: string;
}

/* ───────────── Villas ───────────── */
export interface VillaType {
  id: string;
  /** e.g. "04 · 32 KEYS" */
  label: string;
  title: string;
  tagline: string;
  description: string;
  /** Rendered joined with " · ", e.g. ["2 Adults + 1 Child", "≈ 400 sq ft"] */
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

/* ───────────── Presidential villa ───────────── */
export type VillaFeatureIcon =
  | "pool"
  | "salon"
  | "pantry"
  | "bedrooms"
  | "transfer"
  | "guests";

export interface PresidentialVillaType {
  /** e.g. "07 · The Crown of the Estate" */
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
