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
      sectionClassName="relative bg-gradient-to-r from-[#DF5311] via-[#E86E18] to-[#DF951D] text-white overflow-hidden py-16 md:py-24 border-b-[5px] border-[#E9621C]"
    >
      {/* Ambient Motif Graphic */}
      <div className="absolute -right-[160px] -top-[160px] w-[560px] h-[560px] pointer-events-none z-0 select-none opacity-20 hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={560}
          height={560}
          className="w-full h-full object-contain animate-[bg-rotate_40s_linear_infinite]"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16 max-w-3xl">
          <Tagline
            eyebrow={eyebrow}
            className="!font-normal !text-[20px] !text-[#FAF6EC]"
          />
          <Headings
            level={2}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[56px] font-cinzel font-normal text-white uppercase tracking-wide"
          />
          <Description className="text-white/95 text-base sm:text-lg max-w-2xl mt-1">
            {subtitle}
            <span className="block text-sm sm:text-base text-white/80 mt-1 font-light">
              Distances to be confirmed.
            </span>
          </Description>
        </div>

        {/* Transportation Routes Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 w-full">
          {modes.map((mode, index) => (
            <div key={index} className="flex flex-col">
              {/* Transport Category */}
              <h3 className="font-cinzel text-xl sm:text-2xl text-white font-normal uppercase tracking-wider mb-4 pb-1">
                {mode.title}
              </h3>

              {/* Route Distances */}
              <div className="flex flex-col">
                {mode.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    <div className="flex items-center justify-between gap-4 py-2.5">
                      <span className="font-cinzel text-xs sm:text-sm font-normal uppercase tracking-wider text-white/95">
                        {item.destination}
                      </span>
                      <span className="font-cinzel text-xs sm:text-sm font-normal uppercase tracking-wider text-white/95 whitespace-nowrap">
                        {item.distance}
                      </span>
                    </div>
                    {/* Item Divider */}
                    <div className="w-full h-[1px] bg-white/30" />
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
