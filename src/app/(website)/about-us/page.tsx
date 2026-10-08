import type { Metadata } from "next";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import {
  AboutHero,
  StorySection,
  ValuesSection,
  VisionSection,
} from "./components";
import { aboutPageData } from "./components/pageData";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import { homePageData } from "../home-page-components/pageData";
import { DayAtJaiAnjaney } from "../home-page-components";

export const metadata: Metadata = {
  title: "About Us | Jai Anjaney Resort, Salasar",
  description: aboutPageData.hero.description,
};

export default function AboutUs() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <AboutHero {...aboutPageData.hero} />
      <SlidingTitle items={aboutPageData.slidingTitleItems} />
      <StorySection {...aboutPageData.story} />
      <VisionSection {...aboutPageData.vision} />
      {/* <DayAtJaiAnjaney {...homePageData.dayAtJaiAnjaney} /> */}
      <ValuesSection {...aboutPageData.values} />
      <WelComeNote {...aboutPageData.welcomeNote} />
    </main>
  );
}
