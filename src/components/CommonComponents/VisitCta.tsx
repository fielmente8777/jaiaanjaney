import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VisitCtaType } from "@/@types/galleryPage";
import { SectionWithContainer } from "@/components/sectionComponants";

/** Orange gradient "Plan Your Visit" strip — matching FamilyFeastBanner design from Dining */
const VisitCta: React.FC<VisitCtaType> = ({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative -bg-linear-90 from-secondary to-primary text-white min-h-[350px] flex items-center py-10 overflow-hidden border-b-[5px] border-[#E9621C]"
      containerClassName="w-full"
    >
      {/* Background Decorative Mandala Motif */}
      <div className="absolute right-0 bottom-0 w-[514px] h-[514px] pointer-events-none z-0 select-none opacity-8 hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={514}
          height={514}
          className="w-full h-full object-contain brightness-0 invert animate-[bg-rotate_30s_linear_infinite]"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
        <div className="flex flex-col gap-2 max-w-2xl text-center lg:text-left">
          <span className="font-secondary italic text-lg sm:text-[22px] leading-[28px] text-[#F3D5A5]">
            {eyebrow}
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-normal uppercase tracking-wide text-white">
            {title}
          </h2>

          <p className="font-nunito-sans text-white/90 text-base sm:text-[20px] sm:leading-[30px] font-light leading-relaxed mt-2">
            {description}
          </p>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center shrink-0 w-full sm:w-auto">
          {cta && (
            <Link
              href={cta.link}
              className="w-full sm:w-auto text-center bg-white text-primary hover:bg-cream font-nunito-sans font-normal text-[15px] leading-[18px] tracking-[0.1em] uppercase py-3.5 px-8 shadow-lg transition-all relative z-10"
            >
              {cta.text}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.link}
              className="font-nunito-sans text-[14px] uppercase text-white/90 hover:text-white underline underline-offset-4 mt-4 transition-colors relative z-10"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default VisitCta;
