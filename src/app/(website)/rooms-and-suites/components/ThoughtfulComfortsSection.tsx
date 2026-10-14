import Image from "next/image";
import { ThoughtfulComfortsSectionType } from "@/@types/roomsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Tagline } from "@/components/typography";
import {
  Wifi,
  AC,
  Bed,
  Dining,
  TV,
  RoomSafe,
  Bath,
  Shower,
  Tea,
  HouseKeeping,
  Parking,
  GolfCart,
} from "@/utils/icons";

const getAmenityIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "wifi":
      return <Wifi />;
    case "ac":
    case "air conditioning":
      return <AC />;
    case "bed":
    case "king-size beds":
      return <Bed />;
    case "dining":
    case "in-room dining":
      return <Dining />;
    case "tv":
    case "smart tv":
      return <TV />;
    case "safe":
    case "in-room safe":
      return <RoomSafe />;
    case "bath":
    case "bath amenities":
      return <Bath />;
    case "shower":
    case "rain shower":
      return <Shower />;
    case "tea":
    case "coffee":
    case "tea & coffee":
      return <Tea />;
    case "housekeeping":
    case "daily housekeeping":
      return <HouseKeeping />;
    case "parking":
      return <Parking />;
    case "golf-cart":
    case "golf-cart rides":
    case "golfcart":
      return <GolfCart />;
    default:
      return <Wifi />;
  }
};

const ThoughtfulComfortsSection: React.FC<ThoughtfulComfortsSectionType> = ({
  eyebrow,
  title,
  subtitle,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative bg-[#FBF8F2] border-y-4 border-[#E9621C] py-16 md:py-24 overflow-hidden"
      containerClassName="space-y-12"
    >
      {/* Mandala Pattern */}
      <div className="absolute top-0 -left-[228px] w-[456px] h-[456px] pointer-events-none z-0 select-none opacity-[0.08] hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={456}
          height={456}
          className="w-full h-full object-contain animate-[bg-rotate_25s_linear_infinite]"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col justify-center items-center text-center gap-3 max-w-2xl mx-auto relative z-10">
        <Tagline
          eyebrow={eyebrow}
          className="!font-normal !text-[20px] !leading-[26px]"
        />
        <h2 className="font-cinzel md:text-5xl/tight text-3xl text-dark uppercase font-normal">
          {title}
        </h2>
        <Description className="text-center text-[16px] sm:text-base leading-relaxed mx-auto">
          {subtitle}
        </Description>
      </div>

      {/* Amenities Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#E3D3BC] bg-[#FBF8F2] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start text-center px-3 sm:px-4 pt-[30px] pb-[28px] border-[#E3D3BC] border-b [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(-n+6)]:border-b-0 border-r [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 transition-colors duration-300 hover:bg-white/80 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-[12px] transition-transform duration-300 group-hover:scale-110">
              {getAmenityIcon(item.icon)}
            </div>

            {/* Title */}
            <h4 className="font-cinzel text-sm sm:text-[15px] lg:text-[17px] leading-[22px] lg:leading-[24px] text-dark uppercase mb-[12px]">
              {item.title}
            </h4>

            {/* Subtitle */}
            <p className="font-nunito-sans font-light text-[14px] leading-[20px] text-light">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ThoughtfulComfortsSection;
