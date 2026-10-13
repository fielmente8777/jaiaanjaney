import React from "react";
import Image from "next/image";
import { FourCeremoniesSectionType } from "@/@types/weddingsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";
import { SmallDiamondIcon } from "@/utils/icons";

const FourCeremoniesSection: React.FC<FourCeremoniesSectionType> = ({
  eyebrow,
  title,
  blessingText = "जय श्री बालाजी",
  ceremonies,
}) => {
  return (
    <SectionWithContainer
      sectionId="four-ceremonies"
      sectionClassName="relative bg-[#A2400D] py-16 sm:py-20 lg:py-28 overflow-hidden text-white border-b-[5px] border-[#E9621C]"
      containerClassName="relative z-10 space-y-12 sm:space-y-16"
    >
      {/* Decorative Rotating Mandala Pattern on Top-Right */}
      <div className="absolute -top-[140px] -right-[130px] sm:-top-[200px] sm:-right-[190px] md:-top-[320px] md:-right-[310px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[552px] md:h-[552px] pointer-events-none select-none opacity-10 sm:opacity-15 md:opacity-25 z-0">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern top right"
          width={680}
          height={680}
          className="w-full h-full object-contain animate-[bg-rotate_55s_linear_infinite]"
        />
      </div>

      {/* Decorative Rotating Mandala Pattern on Bottom-Left */}
      <div className="absolute -bottom-[140px] -left-[130px] sm:-bottom-[200px] sm:-left-[190px] md:-bottom-[300px] md:-left-[310px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[552px] md:h-[552px] pointer-events-none select-none opacity-10 sm:opacity-15 md:opacity-25 z-0">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern bottom left"
          width={700}
          height={700}
          className="w-full h-full object-contain animate-[bg-rotate_50s_linear_infinite]"
        />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center gap-3 max-w-3xl mx-auto relative z-10">
        <Tagline
          eyebrow={eyebrow}
          textColor="!text-[#F6C77A]"
          className="!text-[18px] sm:!text-[20px] !font-normal"
        />
        <h2
          className="font-cinzel text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] lg:leading-[62px] text-white font-normal uppercase tracking-wide text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* 4 Ceremonies Columns with individual diamond and line per column */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 w-full pt-4">
        {ceremonies.map((ceremony) => (
          <div
            key={ceremony.id}
            className="flex flex-col justify-start text-left bg-[#A2400D] p-5 sm:p-6 relative z-10"
          >
            {/* Small diamond icon and line starting next to diamond */}
            <div className="flex items-center w-full mb-4">
              <div className="shrink-0 flex items-center justify-center z-10">
                <SmallDiamondIcon />
              </div>
              <div className="h-[1px] bg-[#F6C77A]/50 flex-1 -ml-[1px]" />
            </div>

            {/* Day Eyebrow */}
            <span className="font-nunito-sans text-[12px] uppercase tracking-[0.16em] text-[#F6C77A] font-normal mb-2">
              {ceremony.day}
            </span>

            {/* Ceremony Title */}
            <h3 className="font-cinzel text-xl sm:text-[22px] leading-snug text-white font-normal uppercase tracking-wide mb-2.5">
              {ceremony.title}
            </h3>

            {/* Description */}
            <p className="font-nunito-sans text-sm sm:text-[15px] leading-[24px] text-white/85 font-light">
              {ceremony.description}
            </p>
          </div>
        ))}
      </div>

      {/* Devotional Balaji blessing below the columns */}
      {blessingText && (
        <div className="flex flex-col items-center justify-center text-center pt-6 sm:pt-10 relative z-10">
          <p className="text-[24px] leading-[32px] font-medium text-white tracking-wide">
            {blessingText}
          </p>
        </div>
      )}
    </SectionWithContainer>
  );
};

export default FourCeremoniesSection;
