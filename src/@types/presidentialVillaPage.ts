import type { IconType } from "react-icons";
import { HeroType, HighlightsSectionType } from "./homePage";
import { ReactNode } from "react";

export interface VillaGallerySectionType {
  eyebrow: string;
  title: string;
  /** One string, or several paragraphs */
  description: string | string[];
  /** Optional pull-quote shown under the description */
  quote?: string;
  images: string[];
}

export interface VillaAmenitiesType {
  eyebrow: string;
  title: string;
  groups: {
    title: string;
    items: { label: string; icon: React.ReactNode }[];
  }[];
}
export interface VillaHighlightsType {
  items: { icon: ReactNode; label: string }[];
}
export interface VillaDayType {
  eyebrow: string;
  title: string;
  image: string;
  items: { time: string; title: string; description: string }[];
  closing: string;
}

export interface GoodToKnowType {
  eyebrow: string;
  title: string;
  description: string;
  callLabel: string;
  cta: { text: string; link: string };
  facts: {
    label: string;
    value: string;

    link?: string;
  }[];
}

export interface PresidentialVillaPageType {
  hero: HeroType;
  highlights:  VillaHighlightsType;
  gallery: VillaGallerySectionType;
  amenities: VillaAmenitiesType;
  day: VillaDayType;
  goodToKnow: GoodToKnowType;
}


/**
 * One entry per room / suite / villa. `slug` is the URL segment:
 * /rooms-and-suites/<slug>
 */
export interface RoomDetailPageType extends PresidentialVillaPageType {
  slug: string;
}
