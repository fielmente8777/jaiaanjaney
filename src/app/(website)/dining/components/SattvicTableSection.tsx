import React from "react";
import Image from "next/image";
import { SattvicTableSectionType } from "@/@types/diningPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";

const ArchImage: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <div className="relative w-full max-w-[520px] aspect-[520/693] mx-auto lg:ml-auto lg:mr-0">
      {/* Traditional Arch Frame */}
      <div
        className="relative w-full h-full overflow-hidden shadow-xl"
        style={{
          clipPath: "url(#rajasthani-pointed-arch)",
          WebkitClipPath: "url(#rajasthani-pointed-arch)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 520px"
        />

        {/* Arch Inset Outline */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <svg
            viewBox="0 0 520 693"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M 18,675 L 18,270 C 18,158 142,117 171,98 C 203,77 246,58 260,42 C 274,58 317,77 349,98 C 378,117 502,158 502,270 L 502,675 Z"
              fill="none"
              stroke="#F6C77A"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
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
      {/* SVG Clip Path Definition */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        aria-hidden="true"
      >
        <defs>
          <clipPath
            id="rajasthani-pointed-arch"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M 0,1 L 0,0.3896 C 0,0.2165 0.2577,0.1515 0.3173,0.1227 C 0.3846,0.0902 0.4712,0.0606 0.5,0.0346 C 0.5288,0.0606 0.6154,0.0902 0.6827,0.1227 C 0.7423,0.1515 1,0.2165 1,0.3896 L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* Background Accent Glow */}
      <div className="absolute -bottom-[205px] -left-[205px] w-[411px] h-[411px] rounded-full bg-linear-95 blur-[300px] from-primary to-secondary pointer-events-none z-0" />

      {/* Ambient Pattern */}
      <div className="absolute -top-[140px] -left-[180px] w-[480px] h-[480px] pointer-events-none z-0 select-none opacity-[0.08] hidden sm:block">
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

          {/* Philosophy Visual (Mobile) */}
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
          <div className="w-full border-t border-b border-[#E8BF73]/60 mt-4 grid grid-cols-3 divide-x divide-[#E8BF73]/60 items-stretch">
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
