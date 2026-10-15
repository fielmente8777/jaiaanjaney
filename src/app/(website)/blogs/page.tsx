import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import { Metadata } from "next";
import ArticlesList from "./components/ArticlesList";
import NewsletterSection from "./components/NewsletterSection";
import { ArticlesPageData } from "./components/pagedata";
import WelComeNote from "@/components/CommonComponents/WelComeNote";

export const metadata: Metadata = {
  title: "Stories from Salasar | Jai Anjaney Resort",
  description:
    "Pilgrimage guides, celebration ideas and local traditions from Salasar, Rajasthan.",
};

export default function Articles() {
  const { hero, list, newsletter } = ArticlesPageData;

  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <SectionWithContainer
        sectionClassName="relative border-b border-secondary/20 bg-linear-to-b from-[#FCEBD3] to-cream bg-image bg-left bg-image-after bg-bottom-right"
        containerClassName="flex flex-col items-center gap-4 text-center"
      >
        <Tagline eyebrow={hero.eyebrow} />
        <SectionHeading
          level={1}
          title={hero.title}
          titleColor="dark"
          titleClassName="md:text-[56px]! md:leading-[64px]!"
          textCenter
        />
        <p className="max-w-xl text-sm text-light md:text-base">{hero.description}</p>
      </SectionWithContainer>

      <SectionWithContainer containerClassName="flex flex-col gap-8 md:gap-10">
        <ArticlesList {...list} />
      </SectionWithContainer>

      <NewsletterSection {...newsletter} />
      <WelComeNote {...ArticlesPageData.welcomeNote} />
    </main>
  );
}
