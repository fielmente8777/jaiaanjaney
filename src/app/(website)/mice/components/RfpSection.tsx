// import type { RfpSectionType } from "@/@types/meetingsPage";
// import { Container, Section } from "@/components/sectionComponants";
// import { SectionHeading, Tagline } from "@/components/typography";
// import Image from "next/image";
// import { TbPhone } from "react-icons/tb";
// import RfpForm from "./RfpForm";

// /**
//  * Photo + enquiry form (server component; only `RfpForm` is client-side).
//  * lg+: the photo is absolutely positioned against the <Section> (Container is not `relative`),
//  *      so it bleeds from the left edge over the left half while the form takes the right column.
//  * Below lg: the same single <Image> sits in normal flow above the form.
//  */
// const RfpSection: React.FC<RfpSectionType> = ({
//   eyebrow,
//   title,
//   description,
//   image,
//   imageCaption,
//   phoneLabel,
//   phone,
//   ...form
// }) => (
//   <Section id="rfp" className="relative border-b-4 border-primary bg-cream">
//     <Container className="grid gap-8 lg:grid-cols-2 lg:gap-16">
//       <div className="relative aspect-4/3 overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-1/2">
//         <Image
//           src={image}
//           alt={imageCaption}
//           fill
//           sizes="(max-width: 1024px) 100vw, 50vw"
//           className="object-cover"
//         />
//         <div
//           aria-hidden
//           className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent via-40% to-transparent"
//         />
//         <p className="absolute inset-x-0 bottom-0 p-4 font-secondary text-xl italic text-white md:p-8 md:text-2xl">
//           {imageCaption}
//         </p>
//       </div>

//       <div className="flex flex-col gap-6 lg:col-start-2">
//         <div className="flex flex-col gap-3">
//           <Tagline eyebrow={eyebrow} wrapperClassName="items-start" />
//           <SectionHeading
//             title={title}
//             titleClassName="md:text-[40px]! md:leading-[48px]!"
//           />
//           <p className="text-sm text-light md:text-base">{description}</p>
//         </div>

//         <RfpForm {...form} />

//         <a
//           href={`tel:${phone.replace(/\s/g, "")}`}
//           className="flex w-fit items-center gap-2 border-t border-secondary/30 pt-4 text-sm text-light"
//         >
//           <TbPhone aria-hidden className="text-primary" />
//           {phoneLabel} <span className="text-dark">{phone}</span>
//         </a>
//       </div>
//     </Container>
//   </Section>
// );

// export default RfpSection;


import type { EnquirySectionType } from "@/@types/commonSections";
import EnquirySection from "@/components/CommonComponents/EnquirySection";

/** The RFP block is the shared photo + form section, anchored at #rfp. */
const RfpSection: React.FC<EnquirySectionType> = (props) => (
  <EnquirySection {...props} id={props.id ?? "rfp"} />
);

export default RfpSection;
