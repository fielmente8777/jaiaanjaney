// import { RoomsHeroType } from "@/@types/roomsPage";

// import BookingForm from "@/components/Forms/BookingForm";
// import { Section } from "@/components/sectionComponants";
// import { SectionHeading, Tagline } from "@/components/typography";
// import Image from "next/image";

// const RoomsHero: React.FC<RoomsHeroType> = ({
//   eyebrow,
//   title,
//   description,
//   image,
//   imageAlt,
// }) => (
//   <Section
//     defaultPadding={false}
//     className="relative border-b-2 border-primary bg-linear-to-b from-cream to-[#FCEBD3] pt-10 pb-12 md:pt-14 md:pb-16"
//   >


//     <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
//       <Tagline eyebrow={eyebrow} />
//       <SectionHeading
//         level={1}
//         title={title}
//         titleColor="dark"
//         titleClassName="md:text-[56px]! md:leading-[64px]!"
//         textCenter
//       />
//     </div>

//     <div className="relative z-10 mx-auto mt-8 w-full max-w-[1320px] px-4">
//       <div className="relative aspect-775/364 w-full">
//         <Image
//           src={image}
//           alt={imageAlt ?? title}
//           fill
//           priority
//           sizes="(max-width: 1352px) 100vw, 1320px"
//           className="object-contain"
//         />
//       </div>

//       {/* booking bar sits half over the bottom edge of the arches on desktop */}
//       <div className="relative z-20 mx-auto mt-4 w-full max-w-[975px] lg:-mt-10">
//         <BookingForm/>
//       </div>
//     </div>

//     <p className="relative z-10 mx-auto mt-8 max-w-xl px-4 text-center text-sm text-light md:text-base">
//       {description}
//     </p>
//   </Section>
// );

// export default RoomsHero;

import { RoomsHeroType } from "@/@types/roomsPage";

import BookingForm from "@/components/Forms/BookingForm";
import { Section } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import Image from "next/image";

const RoomsHero: React.FC<RoomsHeroType> = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}) => (
  <Section
    defaultPadding={false}
    className="relative border-b-2 border-primary bg-linear-to-b from-[#FAF6EC] to-[#FCEBD3] pt-10 pb-12 md:pt-14 md:pb-16"
  >


    <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
      <Tagline eyebrow={eyebrow} />
      <SectionHeading
        level={1}
        title={title}
        titleColor="dark"
        titleClassName="md:text-[56px]! md:leading-[64px]!"
        textCenter
      />
    </div>

    {/* no z-index here: the image blends with the section gradient (mix-blend-darken) */}
    <div className="relative mx-auto mt-8 w-full max-w-[1320px] px-4">
      <div className="relative aspect-775/364 w-full">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="(max-width: 1352px) 100vw, 1320px"
          className="object-contain mix-blend-darken"
        />
      </div>

      {/* booking bar sits half over the bottom edge of the arches on desktop */}
      <div className="relative z-20 mx-auto mt-4 w-full max-w-[975px] lg:-mt-10">
        <BookingForm/>
      </div>
    </div>

    <p className="relative z-10 mx-auto mt-8 max-w-xl px-4 text-center text-sm text-light md:text-base">
      {description}
    </p>
  </Section>
);

export default RoomsHero;
