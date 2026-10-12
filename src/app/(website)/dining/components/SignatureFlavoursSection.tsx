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
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-16 md:py-24 border-b-[5px] border-[#E9621C]"
    >
      {/* Decorative Rotating Mandala Pattern (456px x 456px, Figma exact size & positioning) */}
      <div className="absolute top-[60px] md:top-[90px] -left-[228px] w-[456px] h-[456px] pointer-events-none z-0 select-none opacity-[0.08] hidden sm:block">
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
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
          <Tagline eyebrow={eyebrow} className="!font-normal !text-[20px]" />
          <Headings
            level={2}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-cinzel font-normal text-dark uppercase tracking-wide"
          />
          <Description className="text-light text-base md:text-lg max-w-2xl mt-1">
            {subtitle}
          </Description>
        </div>

        {/* 2-Column Menu Grid (Full Width, 80px Gap) */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:gap-[80px] w-full">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-6">
              {/* Category Header (26px, No underline) */}
              <h3 className="font-cinzel text-[26px] leading-[34px] text-dark uppercase tracking-wider pb-1 font-normal">
                {category.title}
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col gap-1.5">
                    {/* Item Title (20px, Weight: 400), Connecting Line (#F0B45A), Tag */}
                    <div className="flex items-baseline justify-between gap-3 w-full">
                      <span className="font-cinzel text-[20px] leading-[28px] text-dark font-normal tracking-wide uppercase whitespace-nowrap">
                        {item.name}
                      </span>
                      <div className="flex-1 border-b border-[#F0B45A] border-solid mx-1 relative top-[-4px]" />
                      <span className="font-nunito-sans text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#C8501E] whitespace-nowrap">
                        {item.tag}
                      </span>
                    </div>

                    {/* Item Description (18px) */}
                    <p className="font-secondary italic text-[18px] leading-[26px] text-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote (18px) */}
        {footnote && (
          <p className="text-center font-secondary italic text-[18px] leading-[26px] text-light/80 mt-12 sm:mt-16">
            {footnote}
          </p>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default SignatureFlavoursSection;
