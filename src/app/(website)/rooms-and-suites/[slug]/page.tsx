import ImageHero from "@/components/banner/ImageHero";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlesPageData } from "../../blogs/components/pagedata";

import {
  AmenitiesComforts,
  DayFromVilla,
  GallerySection,
  GoodToKnow,
} from "./components";
import VillaHighlights from "./components/Highlights2";
import { getRoomDetail, RoomDetailPages } from "./components/pagedata";

interface Params {
  params: Promise<{ slug: string }>;
}

// Pre-render one page per room at build time; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return RoomDetailPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomDetail(slug);
  if (!room) return { title: "Room not found" };

  const title = `${room.hero.title} | Jai Anjaney Resort, Salasar`;
  return {
    title,
    description: room.hero.description,
    openGraph: {
      title,
      description: room.hero.description,
      images: room.hero.images?.[0] ? [room.hero.images[0]] : undefined,
    },
  };
}

export default async function RoomDetailPage({ params }: Params) {
  const { slug } = await params;
  const room = getRoomDetail(slug);
  if (!room) return notFound();

  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-cream after:z-[-3]">
      <ImageHero {...room.hero} contentPosition="bottom" />
      <VillaHighlights {...room.highlights} />
      <GallerySection {...room.gallery} />
      <AmenitiesComforts {...room.amenities} />
      <DayFromVilla {...room.day} />
      <GoodToKnow {...room.goodToKnow} />
      <WelComeNote {...ArticlesPageData.welcomeNote} />
    </main>
  );
}
