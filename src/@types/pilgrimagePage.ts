export interface PilgrimageHeroChecklistType {
  text: string;
  icon?: string;
}

export interface PilgrimageHeroType {
  eyebrow: string;
  title: string;
  description1: string;
  description2: string;
  checklist: PilgrimageHeroChecklistType[];
  image: string;
}

export interface TempleItemType {
  id: string;
  number: string;
  distance: string;
  title: string;
  description: string;
}

export interface ThreeTemplesSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  temples: TempleItemType[];
}

export interface PilgrimServiceItemType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PilgrimsServicesSectionType {
  eyebrow: string;
  title: string;
  items: PilgrimServiceItemType[];
}

export interface PilgrimageStayBannerType {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  phone: string;
}

export interface FinalCtaType {
  eyebrow: string;
  description: string;
  note: string;
}

export interface PilgrimagePageDataType {
  hero: PilgrimageHeroType;
  threeTemples: ThreeTemplesSectionType;
  pilgrimServices: PilgrimsServicesSectionType;
  stayBanner: PilgrimageStayBannerType;
  welcomeNote: FinalCtaType;
}
