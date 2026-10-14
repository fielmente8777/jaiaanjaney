import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SpaceToCelebrateType } from "@/@types/banquetPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";

const SpaceToCelebrate: React.FC<SpaceToCelebrateType> = ({
  eyebrow,
  title,
  paragraphs,
  ctaText,
  ctaLink,
  image,
  imageAlt,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] py-16 sm:py-20 lg:py-[120px] overflow-hidden"
      containerClassName="relative z-10"
    >
      {/* Subtle Rotating Mandala in Background (Top-Left) */}
      <div className="absolute -top-54 -left-67 w-96 h-96 pointer-events-none select-none opacity-[0.08] hidden md:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala motif"
          width={400}
          height={400}
          className="w-full h-full object-contain animate-[bg-rotate_30s_linear_infinite]"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        {/* Space Overview & Narrative */}
        <div className="flex-1 min-w-0 flex flex-col items-start text-left space-y-6 w-full">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="!items-start"
            className="!text-left !text-[20px] !font-normal"
          />

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[54px] lg:leading-[64px] text-dark font-normal uppercase tracking-wide lg:whitespace-nowrap">
            {title}
          </h2>

          {/* Responsive Media Preview (Mobile) */}
          <div className="lg:hidden w-full my-2">
            <div className="relative w-full aspect-[680/540] rounded-sm overflow-hidden shadow-[0px_10px_35px_rgba(0,0,0,0.12)]">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="space-y-4 font-nunito-sans text-[#5A544A] text-base sm:text-lg leading-relaxed font-light max-w-xl">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-2 w-full flex justify-center lg:justify-start">
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center w-[254px] h-[54px] px-[40px] py-[18px] bg-[#E9621C] hover:bg-[#D55312] text-white font-nunito-sans font-normal text-sm uppercase tracking-wider rounded-[4px] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {ctaText}
            </Link>
          </div>
        </div>

        {/* Featured Architectural Visual (Desktop) */}
        <div className="hidden lg:block shrink-0 w-full lg:w-[680px] max-w-[680px]">
          <div className="relative w-full aspect-[680/540] rounded-sm overflow-hidden shadow-[0px_10px_35px_rgba(0,0,0,0.12)]">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 680px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SpaceToCelebrate;
