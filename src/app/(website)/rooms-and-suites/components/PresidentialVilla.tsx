// import { PresidentialVillaType, VillaFeatureIcon } from "@/@types/roomsPage";
// import ArchFrame from "@/components/CommonComponents/ArchFrame";


// import LinkButton from "@/components/buttons/LinkButton";
// import { Container, Section } from "@/components/sectionComponants";
// import { SectionHeading } from "@/components/typography";
// import Image from "next/image";
// import type { IconType } from "react-icons";
// import {
//   TbBed,
//   TbCar,
//   TbPool,
//   TbSofa,
//   TbToolsKitchen2,
//   TbUsers,
// } from "react-icons/tb";

// const FEATURE_ICONS: Record<VillaFeatureIcon, IconType> = {
//   pool: TbPool,
//   salon: TbSofa,
//   pantry: TbToolsKitchen2,
//   bedrooms: TbBed,
//   transfer: TbCar,
//   guests: TbUsers,
// };

// const PresidentialVilla: React.FC<PresidentialVillaType> = ({
//   eyebrow,
//   title,
//   subtitle,
//   description,
//   image,
//   features,
//   specs,

// }) => (
//   <Section
//     defaultPadding={false}
//     className="relative bg-accent py-16 text-cream md:py-24 bg-image bg-left"
//   >
  

//     <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-24">
//       <ArchFrame
//         shape="dome"
//         outlineClassName="border-secondary/70"
//         className="mx-auto aspect-559/765 w-full max-w-md lg:max-w-none"
//       >
//         <Image
//           src={image}
//           alt={title}
//           fill
//           sizes="(max-width: 1024px) 90vw, 45vw"
//           className="object-cover"
//         />
//       </ArchFrame>

//       <div className="flex flex-col gap-6">
//         <div className="flex flex-col gap-3">
//           <p className="font-secondary text-xl italic text-cream/60">
//             {eyebrow}
//           </p>
//           <SectionHeading
//             level={2}
//             title={title}
//             titleColor="cream"
//             titleClassName="md:text-[56px]! md:leading-[64px]!"
//           />
//           <p className="text-xs uppercase tracking-[0.25em] text-secondary">
//             {subtitle}
//           </p>
//         </div>

//         <p className="font-light leading-7 text-cream/80">
//           {description}
//         </p>

//         <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
//           {features.map(({ icon, label }) => {
//             const Icon = FEATURE_ICONS[icon];
//             return (
//               <li
//                 key={label}
//                 className="flex items-center gap-3 border-b border-cream/40 pb-4 text-xs uppercase tracking-[0.2em]"
//               >
//                 <Icon aria-hidden className="size-6 shrink-0 text-cream/70" />
//                 {label}
//               </li>
//             );
//           })}
//         </ul>

//         <p className="text-sm text-cream/60">{specs.join(" · ")}</p>

//         <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
//           {/* <LinkButton
//             href={bookCta.link}
//             label={bookCta.text}
//             className="h-14 min-w-52 flex-1 justify-center border-cream/60 bg-primary text-sm uppercase text-white"
//           />
//           <ArrowLink
//             href={viewCta.link}
//             label={viewCta.text}
//             className="shrink-0 text-cream"
//           /> */}
//         </div>
//       </div>
//     </Container>
//   </Section>
// );

// export default PresidentialVilla;


import { PresidentialVillaType, VillaFeatureIcon } from "@/@types/roomsPage";
import ArrowLink from "@/components/buttons/ArrowLink";
import LinkButton from "@/components/buttons/LinkButton";
import ArchFrame from "@/components/CommonComponents/ArchFrame";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

import { contact } from "@/utils/constent";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  TbBed,
  TbCar,
  TbPool,
  TbSofa,
  TbToolsKitchen2,
  TbUsers,
} from "react-icons/tb";

const FEATURE_ICONS: Record<VillaFeatureIcon, IconType> = {
  pool: TbPool,
  salon: TbSofa,
  pantry: TbToolsKitchen2,
  bedrooms: TbBed,
  transfer: TbCar,
  guests: TbUsers,
};

const PresidentialVilla: React.FC<PresidentialVillaType> = ({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  features,
  specs,
  bookCta,
  viewCta,
}) => (
  <SectionWithContainer
  
    sectionClassName="relative isolate bg-accent text-cream bg-image bg-right"
    containerClassName="grid items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-16"
  >
    <ArchFrame
      shape="dome"
      outlineClassName="text-secondary/70"
      className="mx-auto aspect-559/765 w-full max-w-md lg:max-w-none"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-cover"
      />
    </ArchFrame>

    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="font-secondary text-xl italic text-cream/60">{eyebrow}</p>
        <SectionHeading
          level={2}
          title={title}
          titleColor="cream"
          titleClassName="md:text-[56px]! md:leading-[64px]!"
        />
        <p className="text-xs uppercase tracking-[0.25em] text-secondary">
          {subtitle}
        </p>
      </div>

      <p className="font-light leading-7 text-cream/80">{description}</p>

      <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {features.map(({ icon, label }) => {
          const Icon = FEATURE_ICONS[icon];
          return (
            <li
              key={label}
              className="flex items-center gap-3 border-b border-cream/40 pb-4 text-xs uppercase tracking-[0.2em]"
            >
              <Icon aria-hidden className="size-6 shrink-0 text-cream/70" />
              {label}
            </li>
          );
        })}
      </ul>

      <p className="text-sm text-cream/60">{specs.join(" · ")}</p>


      <div className="flex items-center gap-6">
        <LinkButton
           href={contact.WhatsappCta}
          label="Book Now"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 flex-1 justify-center border-cream/60 bg-primary text-sm text-white"
        />
        <ArrowLink
          href={viewCta.link}
          label={viewCta.text}
          className="text-cream"
        />
      </div>
    </div>
  </SectionWithContainer>
);

export default PresidentialVilla;
