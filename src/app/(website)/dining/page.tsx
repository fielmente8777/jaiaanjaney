import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  DiningHero,
  SattvicTableSection,
  WhereToDineSection,
  SignatureFlavoursSection,
  FamilyFeastBanner,
  BookTableSection,
  diningPageData,
} from "./components";

export const metadata: Metadata = {
  title: "Dining | Jai Anjaney Resort, Salasar",
  description:
    "Pure Vegetarian & Alcohol-Free Dining at Jai Anjaney Resort, Salasar. Experience authentic Rajasthani flavours, Sattvic thalis, sweets and family feasts.",
};

export default function DiningPage() {
  return (
    <main>
      {/* 1. Hero Banner */}
      <DiningHero {...diningPageData.hero} />

      {/* 2. Our Philosophy - A Sattvic Table */}
      <SattvicTableSection {...diningPageData.sattvicTable} />

      {/* 3. Where To Dine - Venues & Menus */}
      <WhereToDineSection {...diningPageData.whereToDine} />

      {/* 4. Signature Flavours - Rajasthani Classics & Sweets */}
      <SignatureFlavoursSection {...diningPageData.signatureFlavours} />

      {/* 5. Group Callout - Plan A Family Feast */}
      <FamilyFeastBanner {...diningPageData.familyFeast} />

      {/* 6. Reserve a Table - Booking Form */}
      <BookTableSection {...diningPageData.bookTable} />

      {/* 7. Welcome Blessing Note */}
      <WelComeNote
        {...diningPageData.welcomeNote}
        wrapperClassName="max-w-3xl"
      />
    </main>
  );
}
