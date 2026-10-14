import type { HeroType } from "@/@types/homePage";
import type { CtaLink } from "@/@types/galleryPage";

/* ───────────── Hero (ImageHero + small orange line above the title) ───────────── */
export interface MeetingsHeroType extends HeroType {
  eyebrow: string;
}

/* ───────────── Intro ───────────── */
export interface EventsIntroType {
  eyebrow: string;
  title: string;
  description: string[];
  image: string;
  cta: CtaLink;
}

/* ───────────── Event formats ───────────── */
export type EventFormatIcon =
  | "conference"
  | "corporate"
  | "offsite"
  | "wedding"
  | "social"
  | "cultural";

export interface EventFormatsType {
  eyebrow: string;
  title: string;
  items: { icon: React.ReactNode; title: string; description: string }[];
}

/* ───────────── Orange banner ───────────── */
export interface EventsBannerType {
  title: string;
  subtitle: string;
}

/* ───────────── RFP ───────────── */
export interface RfpSectionType {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageCaption: string;
  eventTypes: string[];
  guestRanges: string[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  phoneLabel: string;
  phone: string;
  endpoint?: string;
}
