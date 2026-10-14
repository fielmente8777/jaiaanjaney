import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  PilgrimageHero,
  ThreeTemplesSection,
  PilgrimsServicesSection,
  PilgrimageStayBanner,
  PilgrimagePageData,
} from "./components";

export const metadata: Metadata = {
  title: "Pilgrimage | Jai Anjaney Resort, Salasar",
  description:
    "Stay in sacred peace near Salasar Balaji Dham, Khatu Shyam Ji and Rani Sati Dadi Mandir. Thoughtfully planned for pilgrims, families and yatra groups.",
};

export default function PilgrimagePage() {
  return (
    <main>
      {/* 1. Hero: A Town That Wakes For Balaji */}
      <PilgrimageHero {...PilgrimagePageData.hero} />

      {/* 2. Three Temples, One Journey */}
      <ThreeTemplesSection {...PilgrimagePageData.threeTemples} />

      {/* 3. For Pilgrims & Yatra Groups (3x2 Services Grid) */}
      <PilgrimsServicesSection {...PilgrimagePageData.pilgrimServices} />

      {/* 4. Plan Your Pilgrimage Stay (Gradient Banner) */}
      <PilgrimageStayBanner {...PilgrimagePageData.stayBanner} />

      {/* 5. Jai Shree Balaji Welcome Blessing Note */}
      <WelComeNote {...PilgrimagePageData.welcomeNote} />
    </main>
  );
}
