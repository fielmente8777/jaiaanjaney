import type { Metadata } from "next";
import ImageHero from "@/components/banner/ImageHero";

import {
  EventFormats,
  EventsBanner,
  EventsIntro,
  RfpSection,
} from "./components";
import { meetingsPageData } from "./components/pageData";
import StatsStrip from "@/components/CommonComponents/StatsStrip";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import { ArticlesPageData } from "../blogs/components/pagedata";

export const metadata: Metadata = {
  title: "Meetings & Events | Jai Anjaney Resort, Salasar",
  description: meetingsPageData.hero.description,
};

export default function MeetingsAndEvents() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-cream after:z-[-3]">
      <ImageHero {...meetingsPageData.hero} contentPosition="bottom" />
      <StatsStrip items={meetingsPageData.stats} />
      <EventsIntro {...meetingsPageData.intro} />
      <EventFormats {...meetingsPageData.formats} />
      <EventsBanner {...meetingsPageData.banner} />
      <RfpSection {...meetingsPageData.rfp} />
      <WelComeNote {...ArticlesPageData.welcomeNote} />
    </main>
  );
}
