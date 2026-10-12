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
      containerClassName="w-full"
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-[205px] -left-[205px] w-[411px] h-[411px] rounded-full bg-linear-95 blur-[300px] from-primary to-secondary pointer-events-none z-0" />

      {/* Featured Architecture Visual (Desktop) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 z-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="50vw"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px] lg:min-h-[784px]">
        {/* Hero Content Column */}
        <div className="w-full flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-20 lg:pr-6 xl:pr-10">
          {/* Eyebrow Tagline */}
          <div className="px-6 text-center">
            <Tagline
              eyebrow={eyebrow}
              wrapperClassName="items-center justify-center"
              className="!font-normal !text-[20px] !leading-[26px] text-center"
            />
          </div>

          {/* Section Heading */}
          <div className="px-6 text-center mt-3 sm:mt-4">
            <Headings
              level={1}
              heading={title}
              className="text-4xl sm:text-5xl lg:text-[68px] lg:leading-[76px] font-cinzel font-normal text-dark uppercase tracking-wide text-center"
            />
          </div>

          {/* Service Bell Motif */}
          <div className="w-full my-4 sm:my-6 lg:my-8">
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
          <div className="px-6 max-w-[480px] text-center">
            <Description className="text-light text-base sm:text-[18px] leading-relaxed text-center">
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

        {/* Layout Column Spacer */}
        <div className="hidden lg:block pointer-events-none" aria-hidden="true" />
      </div>
    </SectionWithContainer>
  );
};

export default ContactHero;
