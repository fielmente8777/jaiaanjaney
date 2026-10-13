import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PilgrimageStayBannerType } from "@/@types/pilgrimagePage";
import { SectionWithContainer } from "@/components/sectionComponants";

const PilgrimageStayBanner: React.FC<PilgrimageStayBannerType> = ({
  eyebrow,
  title,
  description,
  buttonText,
  buttonLink = "/contact",
  phone,
}) => {
  return (
    <SectionWithContainer
      sectionId="plan-pilgrimage-stay"
      defaultPadding={false}
      sectionClassName="relative -bg-linear-90 from-secondary to-primary text-white min-h-[320px] sm:min-h-[350px] flex items-center py-12 sm:py-14 overflow-hidden"
      containerClassName="w-full"
    >
      {/* Decorative Rotating Mandala Overlay on Right (514px x 514px, bottom-0 right-0, behind content) */}
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] sm:w-[514px] sm:h-[514px] pointer-events-none z-0 select-none opacity-25 hidden sm:block">
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
        <div className="flex flex-col gap-2 max-w-3xl text-center lg:text-left">
          {/* Tagline */}
          <span className="font-secondary italic text-lg sm:text-[22px] leading-[28px] text-[#F3D5A5]">
            {eyebrow}
          </span>

          {/* Heading */}
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] lg:leading-[52px] font-normal uppercase tracking-wide text-white lg:whitespace-nowrap">
            {title}
          </h2>

          {/* Description */}
          <p className="font-nunito-sans text-white/90 text-base sm:text-[17px] sm:leading-[26px] font-light leading-relaxed mt-2 max-w-xl">
            {description}
          </p>
        </div>

        {/* Right: CTA Button & Phone */}
        <div className="relative z-20 flex flex-col items-center justify-center shrink-0 w-full sm:w-auto">
          <Link
            href={buttonLink}
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

export default PilgrimageStayBanner;
