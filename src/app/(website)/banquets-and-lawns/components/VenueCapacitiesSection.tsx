import React from "react";
import { VenueCapacitiesSectionType } from "@/@types/banquetPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Tagline } from "@/components/typography";

const VenueCapacitiesSection: React.FC<VenueCapacitiesSectionType> = ({
  eyebrow,
  title,
  note,
  rows,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative bg-cream py-16 sm:py-20 lg:py-28 border-t border-[#E7DECE]"
      containerClassName="space-y-10 sm:space-y-14"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center gap-3 max-w-2xl mx-auto">
        <Tagline eyebrow={eyebrow} className="!text-[20px] !font-normal" />
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[54px] lg:leading-[64px] text-dark font-normal uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Venue Dimensions & Capacity Specifications Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[780px]">
          <thead>
            <tr className="bg-cream-soft border-y border-line-default font-nunito-sans text-xs tracking-[0.14em] text-[#7A7366] uppercase">
              <th className="py-4 px-4 sm:px-6 font-normal w-[28%]">VENUE</th>
              <th className="py-4 px-4 sm:px-6 font-normal w-[18%]">TYPE</th>
              <th className="py-4 px-4 sm:px-6 font-normal w-[18%]">AREA</th>
              <th className="py-4 px-4 sm:px-6 font-normal w-[16%]">GUESTS</th>
              <th className="py-4 px-4 sm:px-6 font-normal w-[20%]">BEST FOR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line-default font-nunito-sans text-sm sm:text-base">
            {rows.map((row) => (
              <tr
                key={row.venue}
                className="hover:bg-[#F4ECE0]/40 transition-colors duration-150"
              >
                <td className="py-5 sm:py-6 px-4 sm:px-6 font-cinzel text-dark font-normal uppercase tracking-wide text-base sm:text-[17px]">
                  {row.venue}
                </td>
                <td className="py-5 sm:py-6 px-4 sm:px-6 text-[#5A544A] font-light">
                  {row.type}
                </td>
                <td className="py-5 sm:py-6 px-4 sm:px-6 text-[#5A544A] font-light">
                  {row.area}
                </td>
                <td className="py-5 sm:py-6 px-4 sm:px-6 text-primary font-normal">
                  {row.guests}
                </td>
                <td className="py-5 sm:py-6 px-4 sm:px-6 text-[#5A544A] font-light">
                  {row.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      {note && (
        <p className="text-center font-secondary italic text-base sm:text-lg text-[#776E60] max-w-3xl mx-auto pt-2">
          {note}
        </p>
      )}
    </SectionWithContainer>
  );
};

export default VenueCapacitiesSection;
