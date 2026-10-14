import type { Metadata } from "next";
import ImageHero from "@/components/banner/ImageHero";
import EnquirySection from "@/components/CommonComponents/EnquirySection";
import FeatureColumns from "@/components/CommonComponents/FeatureColumns";
import NoticeStrip from "@/components/CommonComponents/NoticeStrip";
import SplitSection from "@/components/CommonComponents/SplitSection";
import StatementBanner from "@/components/CommonComponents/StatementBanner";
import { weddingsPageData } from "./pageData";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import { ArticlesPageData } from "../blogs/components/pagedata";

export const metadata: Metadata = {
  title: "Weddings | Jai Anjaney Resort, Salasar",
  description: weddingsPageData.hero.description,
};

export default function Weddings() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-cream after:z-[-3]">
      <ImageHero {...weddingsPageData.hero} contentPosition="bottom" />
      <SplitSection {...weddingsPageData.intro} />
      <FeatureColumns {...weddingsPageData.ceremonies} />
      {/* <NoticeStrip {...weddingsPageData.notice} /> */}
      <SplitSection {...weddingsPageData.villas} />
      <StatementBanner {...weddingsPageData.banner} />
      <EnquirySection {...weddingsPageData.enquiry} />
      <WelComeNote {...ArticlesPageData.welcomeNote} />
    </main>
  );
}
