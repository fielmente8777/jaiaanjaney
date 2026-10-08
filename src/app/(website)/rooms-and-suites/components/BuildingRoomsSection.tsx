import { BuildingRoomsSectionType } from "@/@types/roomsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Tagline } from "@/components/typography";
import LinkButton from "@/components/buttons/LinkButton";
import Link from "next/link";
import RoomImageSlider from "./RoomImageSlider";

const BuildingRoomsSection: React.FC<BuildingRoomsSectionType> = ({
  eyebrow,
  title,
  description,
  rooms,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative bg-[#FAF6EC] py-14 md:py-24 overflow-hidden border-b-4 border-[#E9621C]"
      containerClassName="space-y-16 md:space-y-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 md:pb-10 border-b border-[#E3D3BC]">
        <div className="flex flex-col items-start gap-2">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-start"
            className="!font-normal !text-[20px] !leading-[26px]"
          />
          <h2 className="font-cinzel md:text-5xl/tight text-3xl text-dark uppercase font-normal">
            {title}
          </h2>
        </div>

        <Description className="md:max-w-md text-left">
          {description}
        </Description>
      </div>

      {/* Room Cards */}
      <div className="flex flex-col gap-16 md:gap-24">
        {rooms.map((room, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={index} className="relative w-full">
              {/* Gradient Glow */}
              <div
                className={`absolute w-[400px] sm:w-[473px] h-[400px] sm:h-[473px] aspect-square rounded-full bg-linear-95 from-primary/30 to-secondary/25 blur-[100px] sm:blur-[140px] md:blur-[160px] pointer-events-none z-30 -bottom-20 md:-bottom-28 ${
                  isEven
                    ? "-left-16 sm:-left-24 md:-left-32"
                    : "-right-16 sm:-right-24 md:-right-32"
                }`}
              />

              {/* Image Slider */}
              <RoomImageSlider
                images={room.images || [room.image]}
                title={room.title}
                isEven={isEven}
              />

              {/* Details Card */}
              <div
                className={`relative md:absolute md:top-1/2 md:-translate-y-1/2 w-full md:w-[48%] lg:w-[45%] bg-white bg-linear-to-b from-white to-[#FAF6EC]/40 p-5 sm:p-7 md:px-8 lg:px-10 md:pt-[44px] md:pb-[40px] border border-secondary shadow-lg md:shadow-xl z-20 max-md:mt-0 max-md:border-t-0 ${
                  isEven ? "md:left-0" : "md:right-0"
                }`}
              >
                {/* Tag & Number */}
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-4xl sm:text-5xl md:text-[64px] font-normal leading-none md:leading-[64px] text-secondary">
                    {room.number}
                  </span>
                  <span className="font-nunito-sans text-[11.5px] leading-[16px] tracking-[0.14em] uppercase text-light">
                    {room.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col mt-3 sm:mt-4 md:mt-[20px]">
                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-[34px] md:leading-[38px] text-dark uppercase font-normal">
                    {room.title}
                  </h3>
                  <p className="font-secondary italic text-lg sm:text-xl md:text-[22px] leading-[26px] md:leading-[28px] text-primary mt-1 md:mt-[6px]">
                    {room.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-nunito-sans font-light text-[15px] sm:text-[16px] md:text-[16.5px] leading-[23px] sm:leading-[25px] md:leading-[27px] text-light mt-3 sm:mt-4 md:mt-[20px]">
                  {room.description}
                </p>

                {/* Specs Table */}
                <div className="mt-5 sm:mt-6 md:mt-[34px] flex flex-col">
                  <div className="flex items-center justify-between border-b border-dashed border-[#E3D3BC] pb-2 sm:pb-2.5 md:pb-[10px]">
                    <span className="font-nunito-sans text-[11.5px] leading-[16px] tracking-[0.14em] uppercase text-light">
                      Guests
                    </span>
                    <span className="font-nunito-sans text-[15px] leading-[22px] text-dark">
                      {room.specs.guests}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-[#E3D3BC] pt-2.5 sm:pt-3 md:pt-[14px] pb-2 sm:pb-2.5 md:pb-[10px]">
                    <span className="font-nunito-sans text-[11.5px] leading-[16px] tracking-[0.14em] uppercase text-light">
                      Size
                    </span>
                    <span className="font-nunito-sans text-[15px] leading-[22px] text-dark">
                      {room.specs.size}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-[#E3D3BC] pt-2.5 sm:pt-3 md:pt-[14px] pb-2 sm:pb-2.5 md:pb-[10px]">
                    <span className="font-nunito-sans text-[11.5px] leading-[16px] tracking-[0.14em] uppercase text-light">
                      Bed
                    </span>
                    <span className="font-nunito-sans text-[15px] leading-[22px] text-dark">
                      {room.specs.bed}
                    </span>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="flex items-center justify-between gap-6 sm:gap-8 pt-5 sm:pt-6 md:pt-[28px]">
                  <Link
                    href={room.cta.viewLink}
                    className="font-body font-medium text-[14px] leading-[20px] text-dark hover:text-primary transition-colors inline-flex items-center gap-2 border-b border-[#E9621C] pb-0.5 group/link shrink-0"
                  >
                    <span>{room.cta.viewText}</span>
                    <span className="text-base leading-none transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>

                  <LinkButton
                    href={room.cta.bookLink}
                    label={room.cta.bookText}
                    labelClass="font-body font-medium text-[14px] leading-[20px] !tracking-normal"
                    className="bg-primary hover:bg-secondary text-white !h-[48px] !w-full max-w-[340px] !px-[24px] !py-[14px] border-none shadow-none justify-center rounded-none text-center"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWithContainer>
  );
};

export default BuildingRoomsSection;
