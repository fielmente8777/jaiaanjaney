import type { Metadata } from "next";
import VisitCta from "@/components/CommonComponents/VisitCta";
import { FilmSection, GalleryHero, GallerySection } from "./components";
import { galleryPageData } from "./components/pageData";

export const metadata: Metadata = {
  title: "Gallery | Jai Anjaney Resort, Salasar",
  description: galleryPageData.hero.description,
};

export default function Gallery() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <GalleryHero {...galleryPageData.hero} />
      <GallerySection {...galleryPageData.gallery} />
      <FilmSection {...galleryPageData.film} />
      <VisitCta {...galleryPageData.visitCta} />
    </main>
  );
}
