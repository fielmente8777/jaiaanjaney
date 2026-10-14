import React from "react";
import Image from "next/image";
import { GalleryHeroType } from "@/@types/galleryPage";
import { Container, Section } from "@/components/sectionComponants";
import { Tagline, Headings, Description } from "@/components/typography";

const GalleryHero: React.FC<GalleryHeroType> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative overflow-hidden bg-[#F7F3EB] border-b border-[#E3D3BC] pt-16 sm:pt-20 md:pt-[92px] pb-12 sm:pb-16 md:pb-[73px]"
      style={{ backgroundColor: "var(--ground-ivory, #F7F3EB)" }}
    >
      {/* Left Ambient Mandala Motif */}
      <div className="absolute -left-[170px] top-1/2 -translate-y-1/2 w-[384px] h-[384px] pointer-events-none z-0 select-none opacity-8 hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={384}
          height={384}
          className="w-full h-full object-contain animate-[bg-rotate_50s_linear_infinite]"
        />
      </div>

      {/* Right Ambient Mandala Motif */}
      <div className="absolute -right-[170px] top-1/2 -translate-y-1/2 w-[384px] h-[384px] pointer-events-none z-0 select-none opacity-8 hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={384}
          height={384}
          className="w-full h-full object-contain animate-[bg-rotate_50s_linear_infinite]"
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Tagline */}
        <div className="max-w-[560px] text-center">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-center justify-center !gap-[14px]"
            className="!font-normal !text-[24px] !leading-[32px] !text-primary text-center"
          />
        </div>

        {/* Section Heading */}
        <div className="max-w-[600px] text-center mt-[14px]">
          <Headings
            level={1}
            heading={title}
            className="text-4xl sm:text-5xl md:text-[56px] md:leading-[64px] font-primary font-normal text-dark uppercase tracking-wide text-center"
          />
        </div>

        {/* Narrative Description */}
        <div className="max-w-[660px] w-full text-center mt-[14px]">
          <Description className="text-light font-nunito-sans !font-light !text-[19px] !leading-[32px] tracking-normal text-center">
            {description}
          </Description>
        </div>
      </Container>
    </Section>
  );
};

export default GalleryHero;
