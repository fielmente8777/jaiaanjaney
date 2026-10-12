import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FamilyFeastBannerType } from "@/@types/diningPage";
import { SectionWithContainer } from "@/components/sectionComponants";

const FamilyFeastBanner: React.FC<FamilyFeastBannerType> = ({
  eyebrow,
  title,
  description,
  buttonText,
  phone,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative -bg-linear-90 from-secondary to-primary text-white min-h-[350px] flex items-center py-10 overflow-hidden border-b-[5px] border-[#E9621C]"
      containerClassName="w-full"
    >
      {/* Decorative Rotating Mandala Overlay on Right (514px x 514px, bottom-0 right-0, behind content) */}
      <div className="absolute right-0 bottom-0 w-[514px] h-[514px] pointer-events-none z-0 select-none opacity-25 hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={514}
          height={514}
          className="w-full h-full object-contain animate-[bg-rotate_30s_linear_infinite]"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
        {/* Left: Text Details */}
        <div className="flex flex-col gap-2 max-w-2xl text-center lg:text-left">
          {/* Tagline (22px) */}
          <span className="font-secondary italic text-lg sm:text-[22px] leading-[28px] text-[#F3D5A5]">
            {eyebrow}
          </span>

          {/* Heading (46px) */}
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-normal uppercase tracking-wide text-white">
            {title}
          </h2>

          {/* Description (20px) */}
          <p className="font-nunito-sans text-white/90 text-base sm:text-[20px] sm:leading-[30px] font-light leading-relaxed mt-2">
            {description}
          </p>
        </div>

        {/* Right: CTA Button & Phone (Higher z-index to always stay above background mandala) */}
        <div className="relative z-20 flex flex-col items-center justify-center shrink-0 w-full sm:w-auto">
          <Link
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto text-center bg-white text-primary hover:bg-[#FAF6EC] font-nunito-sans font-normal text-[15px] leading-[18px] tracking-[0.1em] uppercase py-3.5 px-8 shadow-lg transition-all relative z-10"
          >
            {buttonText}
          </Link>
          <Link
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="font-nunito-sans text-[14px] leading-[18px] tracking-[0.14em] uppercase text-white/90 hover:text-white underline underline-offset-4 mt-4 transition-colors relative z-10"
          >
            CALL {phone}
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FamilyFeastBanner;
