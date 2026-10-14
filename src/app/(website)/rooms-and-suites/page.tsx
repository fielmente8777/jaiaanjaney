import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";

import { PresidentialVilla, RoomsHero, VillasSection } from "./components";
import {
  StayRootedSection,
  BuildingRoomsSection,
  ThoughtfulComfortsSection,
  RoomPageData,
} from "./components";
export const metadata: Metadata = {
  title: "Rooms & Suites | Jai Anjaney Resort, Salasar",
  description:
    "Explore luxury rooms and suites at Jai Anjaney Resort in Salasar. Restful rooms, marble finishes, and peaceful stays rooted in devotion and luxury.",
};
export default function Rooms() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <RoomsHero {...RoomPageData.hero} />
      <StayRootedSection {...RoomPageData.stayRooted} />
      <BuildingRoomsSection {...RoomPageData.buildingRooms} />
      <VillasSection {...RoomPageData.villas} />

      <PresidentialVilla {...RoomPageData.presidentialVilla} />
      <ThoughtfulComfortsSection {...RoomPageData.thoughtfulComforts} />
      <WelComeNote {...RoomPageData.welcomeNote} />
    </main>
  );
}
