import WelComeNote from "@/components/CommonComponents/WelComeNote";
import { RoomPageData } from "./components/pagedata";
import { PresidentialVilla, RoomsHero, VillasSection } from "./components";

export default function Rooms() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <RoomsHero {...RoomPageData.hero} />
       <VillasSection {...RoomPageData.villas} />
      <PresidentialVilla {...RoomPageData.presidentialVilla} />
      <WelComeNote {...RoomPageData.welcomeNote} />
    </main>
  );
}
