import React from "react";
import Image from "next/image";
import { BanquetHeroType } from "@/@types/banquetPage";
import { Section } from "@/components/sectionComponants";

const BanquetHero: React.FC<BanquetHeroType> = ({
  title,
  subtitle,
  description,
  image,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full aspect-[1440/640] min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] overflow-hidden border-b-[5px] border-[#E9621C]"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 11, 5, 0.1) 0%, rgba(20, 11, 5, 0.22) 45%, rgba(20, 11, 5, 0.85) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center text-white px-4 sm:px-6 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
        {subtitle && (
          <p className="font-secondary italic font-bold text-lg sm:text-xl md:text-2xl text-[#E9621C] mb-2 md:mb-3 drop-shadow-md">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[80px] font-cinzel font-normal uppercase tracking-wide text-white drop-shadow-md">
          {title}
        </h1>
        <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-light text-white/90 leading-relaxed font-nunito-sans">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default BanquetHero;
