import React from "react";
import Image from "next/image";
import { Section } from "@/components/sectionComponants";

interface DiningHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  images?: string[];
}

const DiningHero: React.FC<DiningHeroProps> = ({
  title,
  subtitle,
  description,
  images,
}) => {
  const heroImage = images?.[0] || "/dining/banner-photo.png";

  return (
    <Section
      defaultPadding={false}
      className="relative w-full aspect-[1440/640] min-h-[460px] sm:min-h-[540px] lg:min-h-[640px] overflow-hidden border-b-[5px] border-[#E9621C] group"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title.replace(/<[^>]*>/g, "")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Ambient Visual Contrast Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 11, 5, 0.25) 0%, rgba(20, 11, 5, 0.5) 50%, rgba(20, 11, 5, 0.85) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center text-center text-white px-4 sm:px-6 pb-6 md:pb-0">
        {subtitle && (
          <p className="font-secondary italic text-lg sm:text-xl md:text-2xl text-white mb-2 md:mb-3">
            {subtitle}
          </p>
        )}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[80px] font-cinzel font-normal uppercase tracking-wide text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl max-w-3xl font-light text-white/90 leading-relaxed font-nunito-sans">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default DiningHero;
