import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactHeroType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ContactUsBell } from "@/utils/icons";

const ContactHero: React.FC<ContactHeroType> = ({
  eyebrow = "The Jai Anjaney Journal",
  title,
  description,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <SectionWithContainer
      sectionId="contact-hero"
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden border-b-[5px] border-[#E9621C]"
      containerClassName="!max-w-full !p-0 w-full"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[720px] xl:min-h-[784px]">
        {/* Left Column: Full bleed to the left edge of viewport */}
        <div className="w-full flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-20 relative z-10">
          {/* Eyebrow Tagline */}
          <div className="px-6 sm:px-10 max-w-[560px] text-center">
            <Tagline
              eyebrow={eyebrow}
              wrapperClassName="items-center justify-center"
              className="!font-normal !text-[20px] !leading-[26px] text-center"
            />
          </div>

          {/* Section Heading */}
          <div className="px-6 sm:px-10 max-w-[560px] text-center mt-3 sm:mt-4">
            <Headings
              level={1}
              heading={title}
              className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] lg:leading-[72px] font-cinzel font-normal text-dark uppercase tracking-wide text-center"
            />
          </div>

          {/* Decorative Concierge Bell Graphic */}
          <div className="w-full my-6 sm:my-8 lg:my-10">
            <ContactUsBell className="w-full h-auto block" />
          </div>

          {/* Featured Architecture Visual (Mobile) */}
          <div className="lg:hidden w-full relative aspect-[16/10] sm:aspect-[640/380] min-h-[260px] overflow-hidden shadow-md border-y border-[#DF951D]/30 my-4">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Introductory Description */}
          <div className="px-6 sm:px-10 max-w-[520px] text-center">
            <Description className="text-light text-base sm:text-[18px] leading-relaxed text-center font-light">
              {description}
            </Description>
          </div>

          {/* Call to Action */}
          <div className="pt-6 sm:pt-8 flex justify-center">
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#BA471B] hover:bg-[#A83C15] text-white font-nunito-sans font-semibold text-[15px] leading-[18px] tracking-[0.12em] uppercase px-8 py-3.5 shadow-md transition-all"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Right Column: Full bleed visual touching the right edge */}
        <div className="hidden lg:block relative w-full h-full min-h-[500px] lg:min-h-[720px] xl:min-h-[784px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1600px) 50vw, 800px"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactHero;
