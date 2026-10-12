import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  BuildingRoomsSection,
  PresidentialVilla,
  RoomPageData,
  RoomsHero,
  StayRootedSection,
  ThoughtfulComfortsSection,
  VillasSection,
} from "./components";

export const metadata: Metadata = {
  title: "Rooms & Suites | Jai Anjaney Resort, Salasar",
  description:
    "Explore luxury rooms, suites, and private villas at Jai Anjaney Resort in Salasar. Restful rooms, marble finishes, and peaceful stays rooted in devotion and luxury.",
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
      <WelComeNote
        {...RoomPageData.welcomeNote}
        wrapperClassName="max-w-4xl"
      />
    </main>
  );
}
