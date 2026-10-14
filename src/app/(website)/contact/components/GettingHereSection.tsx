import React from "react";
import Image from "next/image";
import { GettingHereSectionType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";

const GettingHereSection: React.FC<GettingHereSectionType> = ({
  eyebrow,
  title,
  subtitle,
  modes,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-gradient-to-r from-[#DF5311] via-[#E86E18] to-[#DF951D] text-white overflow-hidden py-14 sm:py-20 md:!py-[120px] border-b-[5px] border-[#E9621C]"
    >
      {/* Ambient Motif Graphic */}
      <div className="absolute -right-[212px] -top-[200px] w-[552px] h-[552px] pointer-events-none z-0 select-none opacity-10 hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={552}
          height={552}
          className="w-full h-full object-contain brightness-0 invert animate-[bg-rotate_40s_linear_infinite]"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-8 sm:mb-10 md:mb-[56px] max-w-5xl w-full">
          <Tagline
            eyebrow={eyebrow}
            className="!font-normal !text-[20px] !text-[#FAF6EC]"
          />
          <Headings
            level={2}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] font-cinzel font-normal text-white uppercase tracking-wide lg:whitespace-nowrap"
          />
          <Description className="text-white font-nunito-sans !font-light !text-[19px] !leading-[32px] tracking-normal text-center max-w-3xl mt-1">
            {subtitle}
            <span className="block text-white/80 mt-1">
              Distances to be confirmed.
            </span>
          </Description>
        </div>

        {/* Transportation Routes Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-[40px] w-full">
          {modes.map((mode, index) => (
            <div key={index} className="flex flex-col">
              {/* Transport Category */}
              <h3 className="font-cinzel text-[24px] sm:text-[26px] leading-[30px] sm:leading-[32px] text-white font-normal uppercase tracking-wider mb-4 sm:mb-6 md:mb-[32px]">
                {mode.title}
              </h3>

              {/* Route Distances */}
              <div className="flex flex-col">
                {mode.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`flex items-baseline justify-between gap-4 border-b border-white/30 ${
                      itemIdx === 0
                        ? "pb-3.5 md:pb-[18px]"
                        : "pt-3.5 pb-3.5 md:pt-[18px] md:pb-[18px]"
                    }`}
                  >
                    <span className="font-cinzel text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px] font-normal uppercase tracking-wider text-white/95">
                      {item.destination}
                    </span>
                    <span className="font-cinzel text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px] font-normal uppercase tracking-wider text-white/95 whitespace-nowrap">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GettingHereSection;
