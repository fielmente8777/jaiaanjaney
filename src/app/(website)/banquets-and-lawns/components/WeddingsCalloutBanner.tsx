import React from "react";
import Image from "next/image";
import { WeddingsBannerType } from "@/@types/banquetPage";
import { Section, Container } from "@/components/sectionComponants";

const WeddingsCalloutBanner: React.FC<WeddingsBannerType> = ({
  title,
  subtitle,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative bg-linear-to-r from-primary to-secondary text-white min-h-[300px] sm:min-h-[340px] md:min-h-[360px] flex items-center py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Left Decorative Motif */}
      <div className="absolute -left-[150px] sm:-left-[200px] md:-left-[220px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[576px] md:h-[576px] pointer-events-none z-0 select-none opacity-6">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern left"
          width={576}
          height={576}
          className="w-full h-full object-contain brightness-0 invert animate-[bg-rotate_35s_linear_infinite]"
        />
      </div>

      {/* Right Decorative Motif */}
      <div className="absolute -right-[150px] sm:-right-[200px] md:-right-[216px] top-1/2 -translate-y-1/2 md:top-[120px] md:translate-y-0 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[576px] md:h-[576px] pointer-events-none z-0 select-none opacity-6">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern right"
          width={576}
          height={576}
          className="w-full h-full object-contain brightness-0 invert animate-[bg-rotate_35s_linear_infinite]"
        />
      </div>

      {/* Banner Messaging */}
      <Container className="w-full relative z-10">
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-4">
          {/* Geometric Accent */}
          <div className="w-2.5 h-2.5 bg-[#F3D5A5] rotate-45 mb-[24px] shadow-xs" />

          {/* Primary Display Typography */}
          <h2
            className="font-secondary italic text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] text-white font-normal drop-shadow-sm"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Subtitle / Category Label */}
          <p className="font-nunito-sans text-xs sm:text-[13px] md:text-[14px] uppercase tracking-[0.2em] text-[#F3D5A5] font-light mt-[24px]">
            {subtitle}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default WeddingsCalloutBanner;
