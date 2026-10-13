import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  WeddingsHero,
  OneEstateSection,
  FourCeremoniesSection,
  WeddingVillasSection,
  WeddingsCalloutBanner,
  PlanWeddingSection,
  WeddingsPageData,
} from "./components";

export const metadata: Metadata = {
  title: "Weddings | Jai Anjaney Resort, Salasar",
  description:
    "Where a destination wedding feels as sacred as a home ritual, with the grandeur of Salasar's finest resort estate. 4 ceremony spaces, 150 luxury rooms, on-site mandir and pure Sattvic catering.",
};

export default function WeddingsPage() {
  return (
    <main>
      {/* 1. Hero: WEDDINGS AT JAI ANJANEY */}
      <WeddingsHero {...WeddingsPageData.hero} />

      {/* 2. ONE ESTATE, EVERY CEREMONY */}
      <OneEstateSection {...WeddingsPageData.oneEstate} />

      {/* 3. FOUR CEREMONIES, ONE SACRED GROUND */}
      <FourCeremoniesSection {...WeddingsPageData.fourCeremonies} />

      {/* 4. VILLAS FOR THE WEDDING PARTY */}
      <WeddingVillasSection {...WeddingsPageData.villas} />

      {/* 5. Full Width Callout Banner: Grand Ho Toh Jai Anjaney Ho */}
      <WeddingsCalloutBanner {...WeddingsPageData.weddingsBanner} />

      {/* 6. PLAN YOUR WEDDING (Inquiry Form Section) */}
      <PlanWeddingSection {...WeddingsPageData.planWedding} />

      {/* 7. Devotional Blessing Note: Jai Shree Balaji */}
      <WelComeNote {...WeddingsPageData.welcomeNote} />
    </main>
  );
}
