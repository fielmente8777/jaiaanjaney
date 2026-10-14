import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WeddingVillasSectionType } from "@/@types/weddingsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Headings, Tagline } from "@/components/typography";
import ArchFrame from "@/components/CommonComponents/ArchFrame";

const ArchImage: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <ArchFrame
      shape="dome"
      outlineClassName="text-secondary/70"
      className="mx-auto aspect-559/765 w-full max-w-md lg:max-w-none"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-cover"
      />
    </ArchFrame>
  );
};

const WeddingVillasSection: React.FC<WeddingVillasSectionType> = ({
  eyebrow,
  title,
  description,
  quote,
  ctaText,
  ctaLink,
  image,
  imageAlt,
}) => {
  return (
    <SectionWithContainer
      sectionId="wedding-villas"
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-16 sm:py-20 lg:py-24 border-b-[5px] border-[#E9621C]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Copy & Quote */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center max-w-[580px] w-full">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-start"
            className="!font-normal !text-[18px] sm:!text-[20px] !leading-[26px]"
          />

          <Headings
            level={2}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[60px] font-cinzel font-normal text-dark uppercase tracking-[0.02em] mt-[12px]"
          />

          {/* Philosophy Visual (Mobile) */}
          <div className="lg:hidden w-full max-w-[420px] mx-auto py-4">
            <ArchImage image={image} title={imageAlt || title} />
          </div>

          {/* Narrative Description */}
          <p className="font-nunito-sans font-light text-[18px] leading-[30px] text-light text-left mt-[22px]">
            {description}
          </p>

          {/* Accent Quote Callout */}
          <div className="border-l-[2.5px] border-[#BA471B] pl-5 sm:pl-6 py-1 mt-[30px]">
            <p className="font-secondary italic font-normal text-xl sm:text-[26px] leading-[30px] sm:leading-[35px] text-dark">
              {quote}
            </p>
          </div>

          {/* Navigation Action CTA */}
          <div className="mt-[38px]">
            <Link
              href={ctaLink}
              className="inline-flex items-center border-b-[1.5px] border-[#BA471B] pb-1.5 w-fit font-nunito-sans font-normal text-[13px] sm:text-[14px] tracking-[0.14em] uppercase text-dark hover:text-[#BA471B] transition-colors duration-200"
            >
              <span>{ctaText}</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Architectural Arch Visual (Desktop) */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 relative justify-center items-center w-full pt-2">
          <ArchImage image={image} title={imageAlt || title} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WeddingVillasSection;
