// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ContactHeroType } from "@/@types/contactPage";
// import { SectionWithContainer } from "@/components/sectionComponants";
// import { Description, Headings, Tagline } from "@/components/typography";
// import { ContactUsBell } from "@/utils/icons";

// const ContactHero: React.FC<ContactHeroType> = ({
//   eyebrow = "The Jai Anjaney Journal",
//   title,
//   description,
//   buttonText,
//   buttonLink,
//   image,
// }) => {
//   return (
//     <SectionWithContainer
//       sectionId="contact-hero"
//       defaultPadding={false}
//       sectionClassName="relative bg-[#FAF6EC] overflow-hidden"
//       containerClassName="!max-w-full !p-0 w-full"
//     >
//       <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[720px] xl:min-h-[784px]">
//         {/* Left Column: Full bleed to the left edge of viewport */}
//         <div className="w-full flex flex-col items-center pt-12 sm:pt-16 md:pt-[102px] pb-12 sm:pb-16 md:pb-[102px] text-center relative z-10">
//           {/* Top Ambient Primary Gradient */}
//           <div
//             className="absolute top-0 inset-x-0 h-52 sm:h-72 pointer-events-none z-0 bg-linear-to-b from-primary/20 via-primary/5 to-transparent"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(233, 98, 28, 0.20) 0%, rgba(233, 98, 28, 0.05) 55%, transparent 100%)",
//             }}
//           />

//           {/* Eyebrow Tagline */}
//           <div className="px-5 sm:px-8 md:px-10 max-w-[560px] text-center">
//             <Tagline
//               eyebrow={eyebrow}
//               wrapperClassName="items-center justify-center !gap-[16px]"
//               className="!font-normal !text-[24px] !leading-[32px] text-center"
//             />
//           </div>

//           {/* Section Heading */}
//           <div className="px-5 sm:px-8 md:px-10 max-w-[600px] text-center mt-[16px]">
//             <Headings
//               level={1}
//               heading={title}
//               className="text-3xl sm:text-4xl md:text-[56px] md:leading-[64px] font-primary font-normal text-dark uppercase tracking-wide text-center"
//             />
//           </div>

//           {/* Decorative Concierge Bell Graphic */}
//           <div className="w-full mt-6 sm:mt-8 md:mt-[56px]">
//             <ContactUsBell className="w-full h-auto block" />
//           </div>

//           {/* Featured Architecture Visual (Mobile) */}
//           <div className="lg:hidden w-full relative aspect-[16/10] sm:aspect-[640/380] min-h-[260px] overflow-hidden shadow-md border-y border-[#DF951D]/30 mt-8 mb-6 sm:mt-10 sm:mb-8 group">
//             <Image
//               src={image}
//               alt={title}
//               fill
//               priority
//               className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//               sizes="100vw"
//             />
//           </div>

//           {/* Introductory Description */}
//           <div className="px-5 sm:px-8 md:px-0 max-w-[520px] w-full text-center mt-6 sm:mt-8 md:mt-[56px]">
//             <Description className="text-light !font-montserrat !font-normal !text-[16px] !leading-[24px] text-center">
//               {description}
//             </Description>
//           </div>

//           {/* Call to Action */}
//           <div className="mt-8 sm:mt-10 md:mt-[56px] flex justify-center">
//             <Link
//               href={buttonLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-avenir font-medium text-[14px] leading-[20px] tracking-[0.12em] uppercase px-8 py-3.5 shadow-md transition-all"
//             >
//               {buttonText}
//             </Link>
//           </div>
//         </div>

//         {/* Right Column: Full bleed visual touching the right edge */}
//         <div className="hidden lg:block relative w-full h-full min-h-[500px] lg:min-h-[720px] xl:min-h-[784px] overflow-hidden group cursor-pointer">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             priority
//             className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//             sizes="(max-width: 1600px) 50vw, 800px"
//           />
//         </div>
//       </div>
//     </SectionWithContainer>
//   );
// };

// export default ContactHero;

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
      sectionClassName="relative bg-cream overflow-hidden"
      containerClassName="!max-w-full !p-0 w-full"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[720px] xl:min-h-[784px]">
        {/* Left Column: Full bleed to the left edge of viewport */}
        <div className="w-full flex flex-col items-center pt-12 sm:pt-16 md:pt-[102px] pb-12 sm:pb-16 md:pb-[102px] text-center relative z-10">
          {/* Top Ambient Primary Gradient */}
          <div className="absolute top-0 inset-x-0 h-52 sm:h-72 pointer-events-none z-0 bg-linear-to-b from-primary/20 via-primary/5 to-transparent" />

          {/* Eyebrow Tagline */}
          <div className="px-5 sm:px-8 md:px-10 max-w-[560px] text-center">
            <Tagline
              eyebrow={eyebrow}
              wrapperClassName="items-center justify-center !gap-[16px]"
              className="!font-normal !text-[24px] !leading-[32px] text-center"
            />
          </div>

          {/* Section Heading */}
          <div className="px-5 sm:px-8 md:px-10 max-w-[600px] text-center mt-[16px]">
            <Headings
              level={1}
              heading={title}
              className="text-3xl sm:text-4xl md:text-[56px] md:leading-[64px] font-primary font-normal text-dark uppercase tracking-wide text-center"
            />
          </div>

          {/* Decorative Concierge Bell Graphic */}
          <div className="w-full mt-6 sm:mt-8 md:mt-[56px]">
            <ContactUsBell className="w-full h-auto block" />
          </div>

          {/* Featured Architecture Visual (Mobile) */}
          <div className="lg:hidden w-full relative aspect-[16/10] sm:aspect-[640/380] min-h-[260px] overflow-hidden shadow-md border-y border-secondary/30 mt-8 mb-6 sm:mt-10 sm:mb-8 group">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="100vw"
            />
          </div>

          {/* Introductory Description */}
          <div className="px-5 sm:px-8 md:px-0 max-w-[520px] w-full text-center mt-6 sm:mt-8 md:mt-[56px]">
            <Description className="text-light !font-montserrat !font-normal !text-[16px] !leading-[24px] text-center">
              {description}
            </Description>
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-10 md:mt-[56px] flex justify-center">
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-avenir font-medium text-[14px] leading-[20px] tracking-[0.12em] uppercase px-8 py-3.5 shadow-md transition-all"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Right Column: Full bleed visual touching the right edge */}
        <div className="hidden lg:block relative w-full h-full min-h-[500px] lg:min-h-[720px] xl:min-h-[784px] overflow-hidden group cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1600px) 50vw, 800px"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactHero;
