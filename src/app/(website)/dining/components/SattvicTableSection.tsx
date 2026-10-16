import React from "react";
import Image from "next/image";
import { SattvicTableSectionType } from "@/@types/diningPage";
import ArchFrame from "@/components/CommonComponents/ArchFrame";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";

const ArchImage: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <ArchFrame
      shape="dome"

      className="mx-auto aspect-559/765 w-full max-w-md lg:max-w-none group cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </ArchFrame>
  );
};

const SattvicTableSection: React.FC<SattvicTableSectionType> = ({
  eyebrow,
  title,
  description1,
  description2,
  stats,
  image,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-[#F7F3EB] overflow-hidden py-16 md:py-24 border-y-[5px] border-[#E9621C]"
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute z-0 -left-24 -bottom-10 w-48 md:-left-60 md:-bottom-20 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />
      <div className="pointer-events-none absolute z-0 -right-24 top-0 w-48 md:-right-60 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />

      {/* Ambient Pattern */}
      <div className="absolute -top-[80px] -left-[80px] w-[280px] h-[280px] sm:-top-[140px] sm:-left-[180px] sm:w-[480px] sm:h-[480px] pointer-events-none z-0 select-none opacity-[0.08]">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={480}
          height={480}
          className="w-full h-full object-contain animate-[bg-rotate_25s_linear_infinite]"
        />
      </div>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:gap-14 items-center relative z-10">
        {/* Philosophy Overview */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center max-w-[580px] w-full max-lg:items-center max-lg:text-center gap-5 sm:gap-6">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-start max-lg:items-center"
            className="!font-normal !text-[20px] !leading-[26px]"
          />

          <Headings
            level={2}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-cinzel font-normal text-dark uppercase tracking-wide"
          />

          <div className="lg:hidden w-full max-w-[420px] mx-auto py-2">
            <ArchImage image={image} title={title} />
          </div>

          <Description className="w-full text-base sm:text-[17px] leading-relaxed text-light text-left max-lg:text-center">
            {description1}
          </Description>

          <Description className="w-full text-base sm:text-[17px] leading-relaxed text-light text-left max-lg:text-center">
            {description2}
          </Description>

          {/* Highlights Summary Grid */}
          <div className="w-full border-t border-b border-secondary/30 mt-4 grid grid-cols-3 divide-x divide-secondary/30 items-stretch">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center py-5 sm:py-6 text-left max-lg:text-center ${
                  index === 0
                    ? "pr-4 sm:pr-6"
                    : index === 1
                      ? "px-4 sm:px-6"
                      : "pl-4 sm:pl-6"
                }`}
              >
                <span className="font-cinzel text-3xl sm:text-4xl md:text-[44px] leading-[44px] text-primary font-normal">
                  {item.value}
                </span>
                <span className="font-nunito-sans text-[11px] sm:text-[13px] leading-[18px] tracking-[0.12em] uppercase text-light mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Visual (Desktop) */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 relative justify-center items-center w-full pt-2">
          <ArchImage image={image} title={title} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SattvicTableSection;
