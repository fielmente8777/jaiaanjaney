import React from "react";
import Image from "next/image";
import { PilgrimsServicesSectionType } from "@/@types/pilgrimagePage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";
import {
  CateringIcon,
  GolfCart,
  GroupIcon,
  LawnIcon,
  MandirIcon,
  Parking,
} from "@/utils/icons";

/**
 * Dedicated Coach Parking Icon for pilgrimage bus/yatra travel.
 */
const CoachParkingIcon = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="24"
      height="24"
      rx="4"
      stroke="#E9621C"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 20V8H15C17.2091 8 19 9.567 19 11.5C19 13.433 17.2091 15 15 15H10"
      stroke="#E9621C"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getServiceIcon = (icon: string) => {
  switch (icon) {
    case "mandir":
      return <MandirIcon />;
    case "catering":
      return <CateringIcon />;
    case "meditation":
    case "lawn":
      return (
        <span className="inline-flex items-center justify-center [&>svg]:w-[38px] [&>svg]:h-[38px]">
          <LawnIcon />
        </span>
      );
    case "stay":
    case "group":
    case "group-stays":
      return <GroupIcon />;
    case "parking":
    case "coach-parking":
      return <CoachParkingIcon />;
    case "golfcart":
    case "golf-cart":
      return <GolfCart />;
    default:
      return null;
  }
};

const PilgrimsServicesSection: React.FC<PilgrimsServicesSectionType> = ({
  eyebrow,
  title,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionId="pilgrim-services"
      sectionClassName="relative bg-[#FBF8F2] py-16 sm:py-20 lg:py-28 overflow-hidden"
      containerClassName="relative z-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <Tagline eyebrow={eyebrow} className="!text-[20px] !font-normal" />
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[54px] lg:leading-[64px] text-dark font-normal uppercase tracking-wide mt-[12px]">
          {title}
        </h2>
      </div>

      {/* Services Grid */}
      <div className="relative mt-[60px]">
        {/* Background Decorative Mandala Pattern */}
        <div className="absolute -top-[380px] -right-[120px] w-[320px] h-[320px] opacity-10 sm:-top-[490px] sm:right-auto md:-right-12 lg:-right-70 sm:w-[456px] sm:h-[456px] sm:opacity-[0.08] pointer-events-none select-none">
          <Image
            src="/rooms/mandala-new-design.png"
            alt="Mandala pattern"
            width={456}
            height={456}
            className="w-full h-full object-contain animate-[bg-rotate_35s_linear_infinite]"
          />
        </div>

        {/* 3-Column Services Grid */}
        <div className="border border-[#E3D3BC] grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => {
            const isRow1 = index < 3;
            const isNotLastCol = index % 3 !== 2;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-start pt-[43px] pb-[40px] px-6 sm:px-7 lg:px-8 transition-colors duration-200 hover:bg-white/60 group ${isRow1 ? "md:border-b md:border-[#E3D3BC]" : ""
                  } ${isNotLastCol ? "md:border-r md:border-[#E3D3BC]" : ""} ${index < items.length - 1
                    ? "max-md:border-b max-md:border-[#E3D3BC]"
                    : ""
                  }`}
              >
                {/* Service Icon */}
                <div className="h-9 flex items-center transition-transform duration-300 group-hover:scale-105">
                  {getServiceIcon(item.icon)}
                </div>

                {/* Service Title */}
                <h3 className="font-cinzel text-[18px] leading-[24px] text-dark font-normal uppercase tracking-wide mt-[14px]">
                  {item.title}
                </h3>

                {/* Service Narrative */}
                <p
                  className={`font-nunito-sans text-[15px] leading-[24px] text-[#5A544A] font-light mt-[8px] ${item.id === "sattvic-kitchens" ? "lg:whitespace-nowrap" : ""
                    }`}
                >
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

export default PilgrimsServicesSection;
