import WelComeNote from "@/components/CommonComponents/WelComeNote";
import { RoomPageData } from "./components/pagedata";

export default function Rooms() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <WelComeNote {...RoomPageData.welcomeNote} />
    </main>
  );
}
