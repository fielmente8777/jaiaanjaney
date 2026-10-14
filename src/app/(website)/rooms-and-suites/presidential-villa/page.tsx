import ImageHero from "@/components/banner/ImageHero";
import type { Metadata } from "next";

import {
  AmenitiesComforts,
  DayFromVilla,
  GallerySection,
  GoodToKnow,
} from "./components";
import { PresidentialVillaPageData } from "./components/pagedata";

import VillaHighlights from "./components/Highlights2";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import { ArticlesPageData } from "../../blogs/components/pagedata";

export const metadata: Metadata = {
  title: "The Presidential Villa | Jai Anjaney Resort, Salasar",
  description: PresidentialVillaPageData.hero.description,
};

export default function PresidentialVillaPage() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-cream after:z-[-3]">
      <ImageHero {...PresidentialVillaPageData.hero} contentPosition="bottom" />
      <VillaHighlights {...PresidentialVillaPageData.highlights} />
      <GallerySection {...PresidentialVillaPageData.gallery} />
      <AmenitiesComforts {...PresidentialVillaPageData.amenities} />
      <DayFromVilla {...PresidentialVillaPageData.day} />
      <GoodToKnow {...PresidentialVillaPageData.goodToKnow} />
      <WelComeNote {...ArticlesPageData.welcomeNote} />
    </main>
  );
}
