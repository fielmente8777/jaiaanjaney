import React from "react";
import Image from "next/image";
import { SignatureFlavoursSectionType } from "@/@types/diningPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";

const SignatureFlavoursSection: React.FC<SignatureFlavoursSectionType> = ({
  eyebrow,
  title,
  subtitle,
  categories,
  footnote,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-12 md:py-24 border-b-[5px] border-[#E9621C]"
    >
      {/* Ambient Mandala Pattern */}
      <div className="absolute top-[30px] -left-[100px] w-[260px] h-[260px] sm:top-[60px] md:top-[90px] sm:-left-[228px] sm:w-[456px] sm:h-[456px] pointer-events-none z-0 select-none opacity-[0.08]">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={456}
          height={456}
          className="w-full h-full object-contain animate-[bg-rotate_30s_linear_infinite]"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 md:mb-16">
          <Tagline eyebrow={eyebrow} className="!font-normal !text-[18px] sm:!text-[20px]" />
          <Headings
            level={2}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-cinzel font-normal text-dark uppercase tracking-wide"
          />
          <Description className="text-light text-base md:text-lg max-w-2xl mt-1">
            {subtitle}
          </Description>
        </div>

        {/* 2-Column Menu Grid (Full Width, 80px Gap on lg) */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 sm:gap-10 lg:gap-[80px] w-full">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-5 md:gap-6">
              {/* Menu Category Header */}
              <h3 className="font-cinzel text-[22px] sm:text-[24px] md:text-[26px] leading-[28px] sm:leading-[30px] md:leading-[34px] text-dark uppercase tracking-wider pb-1 font-normal">
                {category.title}
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-5 md:gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1 md:gap-1.5">
                    {/* Item Title & Dietary Tag */}
                    <div className="flex items-baseline justify-between gap-2 sm:gap-2.5 md:gap-3 w-full">
                      <span className="font-cinzel text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[25px] md:leading-[28px] text-dark font-normal tracking-wide uppercase whitespace-nowrap">
                        {item.name}
                      </span>
                      <div className="flex-1 border-b border-[#F0B45A] border-solid mx-1 relative top-[-4px] min-w-2 sm:min-w-3" />
                      <span className="font-nunito-sans text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.12em] md:tracking-[0.14em] uppercase text-[#C8501E] whitespace-nowrap shrink-0">
                        {item.tag}
                      </span>
                    </div>

                    {/* Item Description */}
                    <p className="font-secondary italic text-[16px] sm:text-[17px] md:text-[18px] leading-[23px] sm:leading-[24px] md:leading-[26px] text-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dietary & Preparation Note */}
        {footnote && (
          <p className="text-center font-secondary italic text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[25px] md:leading-[26px] text-light/80 mt-8 sm:mt-12 md:mt-16">
            {footnote}
          </p>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default SignatureFlavoursSection;
