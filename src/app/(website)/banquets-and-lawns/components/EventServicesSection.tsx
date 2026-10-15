import React from "react";
import Image from "next/image";
import { EventServicesSectionType } from "@/@types/banquetPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";
import {
  Bed,
  CateringIcon,
  DecorIcon,
  GolfCart,
  MandirIcon,
  Parking,
} from "@/utils/icons";

const getServiceIcon = (icon: string) => {
  switch (icon) {
    case "catering":
      return <CateringIcon />;
    case "stay":
      return <Bed />;
    case "decor":
      return <DecorIcon />;
    case "parking":
      return <Parking />;
    case "golfcart":
    case "golf-cart":
      return <GolfCart />;
    case "mandir":
      return <MandirIcon />;
    default:
      return null;
  }
};

const EventServicesSection: React.FC<EventServicesSectionType> = ({
  eyebrow,
  title,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative bg-[#FBF8F2] py-16 sm:py-20 lg:py-28 overflow-hidden"
      containerClassName="relative z-10 space-y-12 sm:space-y-16"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center gap-3 max-w-2xl mx-auto">
        <Tagline eyebrow={eyebrow} className="!text-[20px] !font-normal" />
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[54px] lg:leading-[64px] text-dark font-normal uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Mandala */}
      <div className="relative">
        {/* Decorative Rotating Mandala */}
        <div className="absolute -top-[310px] -right-[130px] w-[320px] h-[320px] opacity-7 sm:top-auto sm:bottom-full sm:-right-[300px] sm:w-[456px] sm:h-[456px] sm:opacity-[0.08] pointer-events-none select-none">
          <Image
            src="/rooms/mandala-new-design.png"
            alt="Mandala pattern"
            width={456}
            height={456}
            className="w-full h-full object-contain animate-[bg-rotate_35s_linear_infinite]"
          />
        </div>

        {/* 3-Column Event Services Grid */}
        <div className="border border-[#E3D3BC] grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => {
            const isRow1 = index < 3;
            const isNotLastCol = index % 3 !== 2;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-start p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:bg-white/60 group ${isRow1 ? "md:border-b md:border-[#E3D3BC]" : ""
                  } ${isNotLastCol ? "md:border-r md:border-[#E3D3BC]" : ""} ${index < items.length - 1
                    ? "max-md:border-b max-md:border-[#E3D3BC]"
                    : ""
                  }`}
              >
                {/* Service Icon */}
                <div className="mb-4 sm:mb-5 h-9 flex items-center transition-transform duration-300 group-hover:scale-105">
                  {getServiceIcon(item.icon)}
                </div>

                {/* Service Title */}
                <h3 className="font-cinzel text-[18px] leading-[24px] text-dark font-normal uppercase tracking-wide mb-2">
                  {item.title}
                </h3>

                {/* Service Narrative */}
                <p className="font-nunito-sans text-[16px] leading-[24px] text-[#5A544A] font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default EventServicesSection;
