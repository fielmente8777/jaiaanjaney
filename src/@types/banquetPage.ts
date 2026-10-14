import { FinalCtaSectionType } from "./homePage";

export interface BanquetHeroType {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

export interface MetricItemType {
  value: string;
  label: string;
}

export interface SpaceToCelebrateType {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt?: string;
}

export interface VenueCardType {
  id: string;
  title: string;
  tag: string;
  description: string;
  capacity: string;
  enquireLink?: string;
  image: string;
}

export interface OurVenuesSectionType {
  eyebrow: string;
  title: string;
  venues: VenueCardType[];
}

export interface CapacityRowType {
  venue: string;
  type: string;
  area: string;
  guests: string;
  bestFor: string;
}

export interface VenueCapacitiesSectionType {
  eyebrow: string;
  title: string;
  note?: string;
  rows: CapacityRowType[];
}

export interface EventServiceItemType {
  id: string;
  title: string;
  description: string;
  icon: "catering" | "stay" | "decor" | "parking" | "golfcart" | "mandir" | string;
}

export interface EventServicesSectionType {
  eyebrow: string;
  title: string;
  items: EventServiceItemType[];
}

export interface WeddingsBannerType {
  title: string;
  subtitle: string;
}

export interface BanquetPageDataType {
  hero: BanquetHeroType;
  metrics: MetricItemType[];
  spaceToCelebrate: SpaceToCelebrateType;
  ourVenues: OurVenuesSectionType;
  venueCapacities: VenueCapacitiesSectionType;
  eventServices: EventServicesSectionType;
  weddingsBanner: WeddingsBannerType;
  welcomeNote: FinalCtaSectionType;
}
