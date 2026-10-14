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

export interface EventFormatsType {
  eyebrow: string;
  title: string;
  desc?: string;
  items: { icon: React.ReactNode; title: string; description: string }[];
}

/* ───────────── Orange banner ───────────── */
export interface EventsBannerType {
  title: string;
  subtitle: string;
}
