"use client";

import { FilmSectionType } from "@/@types/galleryPage";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { SEOVideo } from "@/components/Video";
import Image from "next/image";
import { useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";

const FilmSection: React.FC<FilmSectionType> = ({
  eyebrow,
  title,
  description,
  poster,
  video,
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <Section
      defaultPadding={false}
      className="relative aspect-4/3 text-white lg:aspect-16/7"
    >
      <Image src={poster} alt={title} fill sizes="100vw" className="object-cover" />

      {playing ? (
        <SEOVideo
          src={video}
          poster={poster}
          controls
          muted={false}
          loop={false}
          pauseOnScroll={false}
        />
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 bg-black/40" />
          <Container className="relative z-10 flex h-full flex-col items-center justify-center gap-3 text-center">
            <button
              type="button"
              aria-label={`Play: ${title}`}
              onClick={() => setPlaying(true)}
              className="mb-2 grid size-20 place-items-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110 md:size-24"
            >
              <TbPlayerPlayFilled className="size-8 md:size-9" />
            </button>
            <p className="font-secondary text-lg italic text-white/70">{eyebrow}</p>
            <SectionHeading
              title={title}
              titleClassName="md:text-[56px]! md:leading-[64px]!"
              textCenter
            />
            <p className="text-sm text-white/70">{description}</p>
          </Container>
        </>
      )}
    </Section>
  );
};

export default FilmSection;
