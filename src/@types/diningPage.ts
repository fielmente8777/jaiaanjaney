export interface SattvicStatType {
  value: string;
  label: string;
}

export interface SattvicTableSectionType {
  eyebrow: string;
  title: string;
  description1: string;
  description2: string;
  stats: SattvicStatType[];
  image: string;
}

export interface DiningVenueType {
  tag: string;
  title: string;
  description: string;
  timings: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
}

export interface WhereToDineSectionType {
  eyebrow: string;
  title: string;
  items: DiningVenueType[];
}

export interface FlavorItemType {
  name: string;
  tag: string;
  description: string;
}

export interface FlavorCategoryType {
  title: string;
  items: FlavorItemType[];
}

export interface SignatureFlavoursSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  categories: FlavorCategoryType[];
  footnote: string;
}

export interface FamilyFeastBannerType {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  phone: string;
}

export interface BookTableSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  phone: string;
}
