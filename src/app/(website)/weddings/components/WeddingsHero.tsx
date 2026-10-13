import React from "react";
import Image from "next/image";
import { WeddingsHeroType } from "@/@types/weddingsPage";
import { Section } from "@/components/sectionComponants";

const WeddingsHero: React.FC<WeddingsHeroType> = ({
  eyebrow,
  title,
  description,
  image,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full aspect-[1440/640] min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] overflow-hidden border-b-[5px] border-[#E9621C]"
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

      {/* Dark warm gradient overlay for high readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 11, 5, 0.25) 0%, rgba(20, 11, 5, 0.45) 50%, rgba(20, 11, 5, 0.9) 100%)",
        }}
      />

      {/* Hero Content Stack */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center text-white px-4 sm:px-6 pb-16">
        {eyebrow && (
          <div className="flex flex-col items-center gap-2 mb-[14px]">
            <Image
              src="/tagline.png"
              alt="tagline"
              width={74}
              height={17}
              className="mx-auto"
            />
            <p className="font-secondary italic font-normal text-[20px] sm:text-[24px] leading-[26px] sm:leading-[30px] text-white">
              {eyebrow}
            </p>
          </div>
        )}

        <h1
          className="font-cinzel font-normal uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[78px] tracking-[0.02em] text-white text-center max-w-5xl mx-auto"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="mt-[14px] text-sm sm:text-base md:text-lg lg:text-[19px] max-w-3xl font-light text-white/90 leading-relaxed font-nunito-sans mx-auto">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default WeddingsHero;
