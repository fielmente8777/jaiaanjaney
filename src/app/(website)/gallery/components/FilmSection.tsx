"use client";

import { FilmSectionType } from "@/@types/galleryPage";
import { Container, Section } from "@/components/sectionComponants";
import { SEOVideo } from "@/components/Video";
import Image from "next/image";
import { useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";

const FilmSection: React.FC<FilmSectionType & { image?: string }> = ({
  eyebrow,
  title,
  poster,
  image,
  video,
}) => {
  const [playing, setPlaying] = useState(false);
  const bannerImage = image || poster || "/banquet/lawn-2.jpg";

  return (
    <Section
      defaultPadding={false}
      className="relative w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] text-white overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <Image
          src={bannerImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {playing ? (
        <div className="relative z-10 w-full aspect-16/9 max-h-[85vh]">
          <SEOVideo
            src={video}
            poster={bannerImage}
            controls
            muted={false}
            loop={false}
            pauseOnScroll={false}
          />
        </div>
      ) : (
        <>
          {/* Banner Visual Contrast Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(20, 11, 5, 0.35) 0%, rgba(20, 11, 5, 0.45) 50%, rgba(20, 11, 5, 0.75) 100%)",
            }}
          />
          <Container className="relative z-20 flex flex-col items-center justify-center text-center w-full max-md:py-12 md:pt-[181px] md:pb-[215px]">
            <button
              type="button"
              aria-label={`Play: ${title}`}
              onClick={() => setPlaying(true)}
              className="grid size-20 place-items-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer md:size-24"
            >
              <TbPlayerPlayFilled className="size-8 md:size-9 translate-x-0.5" />
            </button>

            <p
              className="font-secondary italic text-xl sm:text-[22px] md:text-[24px] md:leading-[32px] text-[#F3D5A5] mt-6 sm:mt-8 md:mt-[42px]"
              style={{ color: "var(--brand-gold-pale, #F3D5A5)" }}
            >
              {eyebrow}
            </p>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[54px] md:leading-[64px] font-normal uppercase tracking-wide text-white mt-3 sm:mt-4 md:mt-[18px]">
              {title}
            </h2>
          </Container>
        </>
      )}
    </Section>
  );
};

export default FilmSection;
