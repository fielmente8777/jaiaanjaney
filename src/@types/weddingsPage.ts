export interface WeddingsHeroType {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface OneEstateHighlightType {
  icon: "guests" | "rooms" | "mandir" | "catering" | "golf";
  text: string;
}

export interface OneEstateSectionType {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: OneEstateHighlightType[];
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
}

export interface CeremonyItemType {
  id: string;
  day: string;
  title: string;
  description: string;
}

export interface FourCeremoniesSectionType {
  eyebrow: string;
  title: string;
  blessingText?: string;
  ceremonies: CeremonyItemType[];
}

export interface WeddingVillasSectionType {
  eyebrow: string;
  title: string;
  description: string;
  quote: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
}

export interface PlanWeddingSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  phone: string;
}

export interface WeddingsCalloutBannerType {
  title: string;
  subtitle: string;
}

export interface FinalCtaType {
  eyebrow: string;
  description: string;
  note: string;
}

export interface WeddingsPageDataType {
  hero: WeddingsHeroType;
  oneEstate: OneEstateSectionType;
  fourCeremonies: FourCeremoniesSectionType;
  villas: WeddingVillasSectionType;
  weddingsBanner: WeddingsCalloutBannerType;
  planWedding: PlanWeddingSectionType;
  welcomeNote: FinalCtaType;
}
