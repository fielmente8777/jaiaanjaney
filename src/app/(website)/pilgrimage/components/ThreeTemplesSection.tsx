import React from "react";
import Image from "next/image";
import { ThreeTemplesSectionType } from "@/@types/pilgrimagePage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";

const ThreeTemplesSection: React.FC<ThreeTemplesSectionType> = ({
  eyebrow,
  title,
  subtitle,
  temples,
}) => {
  return (
    <SectionWithContainer
      sectionId="three-temples"
      sectionClassName="relative bg-[#A2400D] py-16 sm:py-20 lg:py-28 overflow-hidden text-white"
      containerClassName="relative z-10"
    >
      {/* Decorative Rotating Mandala on the left */}
      <div className="absolute -left-[320px] -bottom-[110px] w-[552px] h-[552px] pointer-events-none select-none opacity-25 z-0">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={680}
          height={680}
          className="w-full h-full object-contain animate-[bg-rotate_50s_linear_infinite]"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <Tagline
          eyebrow={eyebrow}
          textColor="!text-[#F3D5A5]"
          className="!text-[20px] !font-normal"
        />
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[52px] lg:leading-[62px] text-white font-normal uppercase tracking-wide mt-[12px]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-nunito-sans text-sm sm:text-base lg:text-[19px] text-white/80 font-light mt-[24px]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Temples Sacred Circuit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 mt-[56px]">
        {temples.map((temple) => (
          <div
            key={temple.id}
            className="flex flex-col pt-[31px] pb-[36px] px-6 sm:px-7 lg:px-8 border border-[#F3D5A5]/25 bg-[#A2400D] relative z-10 transition-all duration-300 hover:border-[#F3D5A5]/50 group"
          >
            {/* Number and Distance Badge */}
            <div className="flex items-center justify-between gap-4">
              <span className="font-cinzel text-3xl sm:text-4xl text-[#F3D5A5] font-light leading-none">
                {temple.number}
              </span>
              <span className="border border-[#F3D5A5]/40 text-[#F3D5A5] font-nunito-sans text-[11px] leading-none tracking-[0.15em] uppercase px-2.5 py-1.5 rounded-[2px]">
                {temple.distance}
              </span>
            </div>

            {/* Shrine Heading */}
            <h3 className="font-cinzel text-lg sm:text-[24px] lg:text-[26px] leading-snug text-white font-normal uppercase tracking-wide mt-[31px] group-hover:text-[#F3D5A5] transition-colors duration-200">
              {temple.title}
            </h3>

            {/* Shrine Description */}
            <p className="font-nunito-sans text-sm sm:text-[15px] leading-[24px] text-white/80 font-light mt-[14px]">
              {temple.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ThreeTemplesSection;
