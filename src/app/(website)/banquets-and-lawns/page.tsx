import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  BanquetHero,
  BanquetMetrics,
  BanquetPageData,
  CheckAvailabilitySection,
  EventServicesSection,
  OurVenuesSection,
  SpaceToCelebrate,
  VenueCapacitiesSection,
  WeddingsCalloutBanner,
} from "./components";

export const metadata: Metadata = {
  title: "Banquets & Lawns | Jai Anjaney Resort, Salasar",
  description:
    "Host grand weddings, sacred rituals, and memorable celebrations at Jai Anjaney Resort, Salasar. 36,000 sq ft of regal banquet halls, lush party lawns, and world-class event services.",
};

export default function BanquetsAndLawnsPage() {
  return (
    <main>
      {/* 1. Hero: BANQUETS & LAWNS */}
      <BanquetHero {...BanquetPageData.hero} />

      {/* 2. Key Metrics Bar */}
      <BanquetMetrics metrics={BanquetPageData.metrics} />

      {/* 3. Space to Celebrate Overview */}
      <SpaceToCelebrate {...BanquetPageData.spaceToCelebrate} />

      {/* 4. Our Venues Showcase */}
      <OurVenuesSection {...BanquetPageData.ourVenues} />

      {/* 5. Venue Capacities & Specifications Table */}
      <VenueCapacitiesSection {...BanquetPageData.venueCapacities} />

      {/* 6. Event Services (3x2 Grid) */}
      <EventServicesSection {...BanquetPageData.eventServices} />

      {/* 7. Callout Banner: Grand Ho Toh Jai Anjaney Ho */}
      <WeddingsCalloutBanner {...BanquetPageData.weddingsBanner} />

      {/* 8. Availability Enquiry Form */}
      <CheckAvailabilitySection />

      {/* 9. Sacred Welcome Blessing Note */}
      <WelComeNote {...BanquetPageData.welcomeNote} />
    </main>
  );
}
