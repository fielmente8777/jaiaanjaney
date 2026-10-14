import React from "react";
import Image from "next/image";
import Link from "next/link";
import { OurVenuesSectionType } from "@/@types/banquetPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";

const OurVenuesSection: React.FC<OurVenuesSectionType> = ({
  eyebrow,
  title,
  venues,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative bg-[#FBF8F2] py-16 sm:py-20 lg:py-24 border-t border-[#E7DECE]"
      containerClassName="space-y-12 sm:space-y-16"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center gap-3 max-w-2xl mx-auto">
        <Tagline eyebrow={eyebrow} className="!text-[20px] !font-normal" />
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[54px] lg:leading-[64px] text-dark font-normal uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="flex flex-col bg-white border border-[#E7DECE] rounded-sm overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group w-full max-w-[413px] min-h-[541px] justify-between"
          >
            {/* Venue Preview Media */}
            <div className="relative w-full h-[300px] overflow-hidden bg-[#ECE6DC] shrink-0">
              <Image
                src={venue.image}
                alt={venue.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 413px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Venue Details Content */}
            <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
              <div className="space-y-2">
                <span className="inline-block font-nunito-sans font-normal text-[12px] leading-[16px] tracking-[0.14em] text-[#E9621C] uppercase">
                  {venue.tag}
                </span>

                <h3 className="font-cinzel text-[22px] sm:text-[26px] leading-[32px] text-dark font-normal uppercase">
                  {venue.title}
                </h3>

                <p className="font-nunito-sans text-[16px] leading-[24px] text-[#615A4F] font-light">
                  {venue.description}
                </p>
              </div>

              {/* Divider & Guest Capacity & Enquire Link */}
              <div className="pt-4 mt-auto border-t border-[#E3D3BC] space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#4A453E] font-nunito-sans">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#E9621C] shrink-0" />
                  <span>{venue.capacity}</span>
                </div>

                <div>
                  <Link
                    href={venue.enquireLink || "#check-availability"}
                    className="group inline-flex items-center gap-2 border-b border-[#E9621C] pb-0.5 font-nunito-sans text-[14px] uppercase tracking-widest text-[#4A453E] hover:text-[#E9621C] transition-colors"
                  >
                    <span>ENQUIRE</span>
                    <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default OurVenuesSection;
