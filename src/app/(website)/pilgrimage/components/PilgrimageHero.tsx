// import React from "react";
// import Image from "next/image";
// import { PilgrimageHeroType } from "@/@types/pilgrimagePage";
// import ArchFrame from "@/components/CommonComponents/ArchFrame";
// import { SectionWithContainer } from "@/components/sectionComponants";
// import { Headings, Tagline } from "@/components/typography";

// import { CateringIcon, LawnIcon, MandirIcon, Parking } from "@/utils/icons";

// const renderHeroChecklistIcon = (item: { text: string; icon?: string }) => {
//   const key = (item.icon || item.text).toLowerCase();

//   if (key.includes("mandir")) {
//     return (
//       <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[21px] [&>svg]:h-[23px] [&>svg_*]:stroke-[#E9621C]">
//         <MandirIcon />
//       </div>
//     );
//   }
//   if (
//     key.includes("catering") ||
//     key.includes("kitchen") ||
//     key.includes("sattvic")
//   ) {
//     return (
//       <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[23px] [&>svg]:h-[23px] [&>svg_*]:stroke-[#E9621C]">
//         <CateringIcon />
//       </div>
//     );
//   }
//   if (key.includes("lawn") || key.includes("meditation")) {
//     return (
//       <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[27px] [&>svg]:h-[27px] [&>svg_*]:stroke-[#E9621C]">
//         <LawnIcon />
//       </div>
//     );
//   }
//   if (key.includes("parking") || key.includes("coach")) {
//     return (
//       <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[29px] [&>svg]:h-[29px] [&>svg_*]:stroke-[#E9621C]">
//         <Parking />
//       </div>
//     );
//   }

//   return (
//     <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[22px] [&>svg]:h-[22px] [&>svg_*]:stroke-[#E9621C]">
//       <MandirIcon />
//     </div>
//   );
// };

// const ArchImage: React.FC<{ image: string; title: string }> = ({
//   image,
//   title,
// }) => {
//   return (
//     <ArchFrame
//       shape="dome"
//       className="mx-auto aspect-559/765 w-full max-w-md lg:max-w-none group cursor-pointer"
//     >
//       <Image
//         src={image}
//         alt={title}
//         fill
//         priority
//         className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//         sizes="(max-width: 1024px) 100vw, 500px"
//       />
//     </ArchFrame>
//   );
// };

// const PilgrimageHero: React.FC<PilgrimageHeroType> = ({
//   eyebrow,
//   title,
//   description1,
//   description2,
//   checklist,
//   image,
// }) => {
//   return (
//     <SectionWithContainer
//       sectionId="pilgrimage-hero"
//       defaultPadding={false}
//       sectionClassName="relative bg-ground-ivory-light overflow-hidden py-14 sm:py-20 lg:py-24"
//     >
//       {/* Top Ambient Primary Gradient */}
//       <div
//         className="absolute top-0 inset-x-0 h-52 sm:h-72 pointer-events-none z-0 bg-linear-to-b from-primary/20 via-primary/5 to-transparent"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(233, 98, 28, 0.20) 0%, rgba(233, 98, 28, 0.05) 55%, transparent 100%)",
//         }}
//       />

//       <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 lg:gap-14 items-center relative z-10">
//         {/* Left Column: Story & Checklist */}
//         <div className="lg:col-span-7 flex flex-col justify-center max-w-[620px] w-full max-lg:items-center max-lg:text-center">
//           <Tagline
//             eyebrow={eyebrow}
//             wrapperClassName="items-start max-lg:items-center"
//             className="!font-normal !text-[20px] !leading-[26px]"
//           />

//           <Headings
//             level={1}
//             heading={title}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-cinzel font-normal text-dark uppercase tracking-wide mt-3"
//           />

//           {/* Visual on Mobile */}
//           <div className="lg:hidden w-full max-w-[420px] mx-auto py-4">
//             <ArchImage image={image} title={title} />
//           </div>

//           {/* Narrative Description */}
//           <div className="flex flex-col gap-5 mt-[22px] w-full max-w-[580px] max-lg:mx-auto">
//             <p className="w-full font-nunito-sans font-light text-[18px] leading-[30px] text-light text-left max-lg:text-center">
//               {description1}
//             </p>

//             <p className="w-full font-nunito-sans font-light text-[18px] leading-[30px] text-light text-left max-lg:text-center">
//               {description2}
//             </p>
//           </div>

//           {/* Pilgrim Amenities Checklist */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-[30px] w-full text-left">
//             {checklist.map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 {renderHeroChecklistIcon(item)}
//                 <span className="font-nunito-sans text-[15px] leading-[22px] text-dark font-normal">
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column: Visual Arch on Desktop */}
//         <div className="hidden lg:block lg:col-span-5">
//           <ArchImage image={image} title={title} />
//         </div>
//       </div>
//     </SectionWithContainer>
//   );
// };

// export default PilgrimageHero;

import React from "react";
import Image from "next/image";
import { PilgrimageHeroType } from "@/@types/pilgrimagePage";
import ArchFrame from "@/components/CommonComponents/ArchFrame";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Headings, Tagline } from "@/components/typography";

import { CateringIcon, LawnIcon, MandirIcon, Parking } from "@/utils/icons";

const renderHeroChecklistIcon = (item: { text: string; icon?: string }) => {
  const key = (item.icon || item.text).toLowerCase();

  if (key.includes("mandir")) {
    return (
      <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[21px] [&>svg]:h-[23px] [&>svg_*]:stroke-primary">
        <MandirIcon />
      </div>
    );
  }
  if (
    key.includes("catering") ||
    key.includes("kitchen") ||
    key.includes("sattvic")
  ) {
    return (
      <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[23px] [&>svg]:h-[23px] [&>svg_*]:stroke-primary">
        <CateringIcon />
      </div>
    );
  }
  if (key.includes("lawn") || key.includes("meditation")) {
    return (
      <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[27px] [&>svg]:h-[27px] [&>svg_*]:stroke-primary">
        <LawnIcon />
      </div>
    );
  }
  if (key.includes("parking") || key.includes("coach")) {
    return (
      <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[29px] [&>svg]:h-[29px] [&>svg_*]:stroke-primary">
        <Parking />
      </div>
    );
  }

  return (
    <div className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-[22px] [&>svg]:h-[22px] [&>svg_*]:stroke-primary">
      <MandirIcon />
    </div>
  );
};

const ArchImage: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <ArchFrame
      shape="dome"
      className="mx-auto aspect-559/765 w-full max-w-md lg:max-w-none group cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 500px"
      />
    </ArchFrame>
  );
};

const PilgrimageHero: React.FC<PilgrimageHeroType> = ({
  eyebrow,
  title,
  description1,
  description2,
  checklist,
  image,
}) => {
  return (
    <SectionWithContainer
      sectionId="pilgrimage-hero"
      defaultPadding={false}
      sectionClassName="relative bg-ground-ivory-light overflow-hidden py-12 sm:py-20 lg:py-24"
    >
      {/* Top Ambient Primary Gradient */}
      <div
        className="absolute top-0 inset-x-0 h-52 sm:h-72 pointer-events-none z-0 bg-linear-to-b from-primary/20 via-primary/5 to-transparent"
      />

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Story & Checklist */}
        <div className="lg:col-span-7 flex flex-col justify-center max-w-[620px] w-full max-lg:items-center max-lg:text-center">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-start max-lg:items-center"
            className="!font-normal !text-[20px] !leading-[26px]"
          />

          <Headings
            level={1}
            heading={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-cinzel font-normal text-dark uppercase tracking-wide mt-3"
          />

          {/* Visual on Mobile */}
          <div className="lg:hidden w-full max-w-[420px] mx-auto py-4">
            <ArchImage image={image} title={title} />
          </div>

          {/* Narrative Description */}
          <div className="flex flex-col gap-5 mt-[22px] w-full max-w-[580px] max-lg:mx-auto">
            <p className="w-full font-nunito-sans font-light text-[18px] leading-[30px] text-light text-left max-lg:text-center">
              {description1}
            </p>

            <p className="w-full font-nunito-sans font-light text-[18px] leading-[30px] text-light text-left max-lg:text-center">
              {description2}
            </p>
          </div>

          {/* Pilgrim Amenities Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-[30px] w-full text-left">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {renderHeroChecklistIcon(item)}
                <span className="font-nunito-sans text-[15px] leading-[22px] text-dark font-normal">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Arch on Desktop */}
        <div className="hidden lg:block lg:col-span-5">
          <ArchImage image={image} title={title} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default PilgrimageHero;
