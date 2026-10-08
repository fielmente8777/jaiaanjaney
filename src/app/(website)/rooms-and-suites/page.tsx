import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
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
    <main>
      <StayRootedSection {...RoomPageData.stayRooted} />
      <BuildingRoomsSection {...RoomPageData.buildingRooms} />
      <ThoughtfulComfortsSection {...RoomPageData.thoughtfulComforts} />
      <WelComeNote
        {...RoomPageData.welcomeNote}
        wrapperClassName="max-w-4xl"
      />
    </main>
  );
}
