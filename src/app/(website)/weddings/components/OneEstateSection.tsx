import React from "react";
import Image from "next/image";
import Link from "next/link";
import { OneEstateSectionType } from "@/@types/weddingsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { Bed, CateringIcon, GolfCart, MandirIcon } from "@/utils/icons";

const renderHighlightIcon = (icon: string) => {
  switch (icon) {
    case "rooms":
    case "bed":
      return (
        <div className="w-8 h-8 flex items-center justify-center shrink-0 [&>svg]:w-8 [&>svg]:h-8 [&>svg_*]:stroke-[#BA471B]">
          <Bed />
        </div>
      );
    case "mandir":
      return (
        <div className="w-8 h-8 flex items-center justify-center shrink-0 [&>svg]:w-[22px] [&>svg]:h-[24px] [&>svg_*]:stroke-[#BA471B]">
          <MandirIcon />
        </div>
      );
    case "catering":
      return (
        <div className="w-8 h-8 flex items-center justify-center shrink-0 [&>svg]:w-[22px] [&>svg]:h-[22px] [&>svg_*]:stroke-[#BA471B]">
          <CateringIcon />
        </div>
      );
    case "golf":
    case "golfcart":
    case "golf-cart":
      return (
        <div className="w-8 h-8 flex items-center justify-center shrink-0 [&>svg]:w-[30px] [&>svg]:h-[30px] [&>svg_*]:stroke-[#BA471B]">
          <GolfCart />
        </div>
      );
    default:
      return null;
  }
};

const OneEstateSection: React.FC<OneEstateSectionType> = ({
  eyebrow,
  title,
  paragraphs,
  highlights,
  ctaText,
  ctaLink,
  image,
  imageAlt,
}) => {
  return (
    <SectionWithContainer
      sectionId="one-estate"
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-16 sm:py-20 lg:py-24 border-b-[5px] border-[#E9621C]"
    >
      {/* Subtle Rotating Mandala Watermark in top-right */}
      <div className="absolute -top-[100px] -right-[120px] sm:-top-[140px] sm:-right-[150px] md:-top-[160px] md:-right-[180px] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] pointer-events-none select-none opacity-[0.08] sm:opacity-[0.07] md:opacity-[0.06] z-0">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={500}
          height={500}
          className="w-full h-full object-contain animate-[bg-rotate_40s_linear_infinite]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Ceremony Visual (Desktop) */}
        <div className="hidden lg:flex lg:col-span-6 w-full justify-center">
          <div className="relative w-full max-w-[640px] aspect-[640/480] overflow-hidden group cursor-pointer">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Architectural Inset Accent Border */}
            <div className="pointer-events-none absolute inset-4 sm:inset-5 md:inset-6 border border-white/75 z-10" />
          </div>
        </div>

        {/* Right Column: Copy & Highlights */}
        <div className="lg:col-span-6 flex flex-col justify-center max-w-[600px] w-full">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-start"
            className="!font-normal !text-[18px] sm:!text-[20px] !leading-[26px]"
          />

          <Headings
            level={2}
            heading={title}
            className="font-cinzel font-normal uppercase text-3xl sm:text-4xl lg:text-[54px] lg:leading-[60px] tracking-[0.02em] text-dark mt-3"
          />

          {/* Responsive Media Preview (Mobile) */}
          <div className="lg:hidden w-full my-6 flex justify-center">
            <div className="relative w-full max-w-[640px] aspect-[640/480] overflow-hidden shadow-md group cursor-pointer">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-4 sm:inset-5 border border-white/75 z-10" />
            </div>
          </div>

          <div className="flex flex-col gap-[22px] mt-2 lg:mt-[22px]">
            {paragraphs.map((paragraph, index) => (
              <Description
                key={index}
                className="font-nunito-sans font-light text-[18px] leading-[30px] text-light text-left"
              >
                {paragraph}
              </Description>
            ))}
          </div>

          {/* Highlights 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-[30px]">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 text-left"
              >
                <div className="shrink-0 flex items-center justify-center">
                  {renderHighlightIcon(item.icon)}
                </div>
                <span className="font-nunito-sans font-normal text-[15px] leading-[22px] text-dark">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="mt-[34px] flex justify-center lg:justify-start">
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center w-[266px] h-[54px] whitespace-nowrap bg-[#BA471B] hover:bg-[#A83C15] text-white font-nunito-sans font-normal text-[15px] leading-[18px] tracking-[0.1em] uppercase shadow-md transition-all cursor-pointer"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OneEstateSection;
