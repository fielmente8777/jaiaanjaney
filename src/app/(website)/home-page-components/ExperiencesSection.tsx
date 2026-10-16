"use client";
import { ExperiencesSectionType } from "@/@types/homePage";
import Accordion from "@/components/accordion/Accordion";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";
import { useState } from "react";

const ExperiencesSection: React.FC<ExperiencesSectionType> = ({
  eyebrow,
  title,
  items,
}) => {
  const [selectTitle, setSelectTitle] = useState<string>(
    items[0]?.title || ""
  );
  const filteredImage =
    items.find((item) => item.title === selectTitle) || items[0];
  const activeImage = filteredImage?.image;

  return (
    <SectionWithContainer sectionClassName="relative bg-image bg-left">
 <div className="pointer-events-none absolute z-0 -left-24 -bottom-10 w-48 md:-left-60 md:-bottom-20 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />
    
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
        {/* content */}
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading title={title} wrapperClassName="md:max-w-lg" />
          {/* show image in md screen */}
          
          <div className="w-full border-t border-secondary">
            {items.map((item, index) => (
              <Accordion
                key={index}
                q={item.title}
                a={item.description}
                i={index}
                setSelectTitle={setSelectTitle}
                image={item.image || activeImage || ""}
              />
            ))}
          </div>
        </div>
        {/* show image in md screen */}
        <div className="relative w-full aspect-square hidden md:block overflow-hidden group">
          {activeImage && (
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ExperiencesSection;
