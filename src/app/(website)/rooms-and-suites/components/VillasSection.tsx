// import { VillasSectionType } from "@/@types/roomsPage";
// import MandalaBg from "@/components/CommonComponents/MandalaBg";
// import { Container, Section } from "@/components/sectionComponants";
// import { SectionHeading, Tagline } from "@/components/typography";
// import VillaCard from "./VillaCard";

// const VillasSection: React.FC<VillasSectionType> = ({
//   eyebrow,
//   title,
//   description,
//   items,
// }) => (
//   <Section
//     defaultPadding={false}
//     className="relative bg-linear-to-b from-cream from-35% to-espresso to-65% py-16 md:py-24"
//   >
//     <MandalaBg position="top-right" />

//     <Container className="relative z-10 flex flex-col gap-10 md:gap-16">
//       <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
//         <Tagline eyebrow={eyebrow} />
//         <SectionHeading
//           level={2}
//           title={title}
//           titleColor="dark"
//           titleClassName="md:text-[56px]! md:leading-[64px]!"
//           textCenter
//         />
//         <p className="text-sm text-light md:text-base">{description}</p>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {items.map((villa) => (
//           <VillaCard key={villa.id} {...villa} />
//         ))}
//       </div>
//     </Container>
//   </Section>
// );

// export default VillasSection;

import { VillasSectionType } from "@/@types/roomsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import VillaCard from "./VillaCard";

const VillasSection: React.FC<VillasSectionType> = ({
  eyebrow,
  title,
  description,
  items,
}) => (
  <SectionWithContainer

    sectionClassName="relative bg-image bg-right bg-linear-to-b from-cream from-35% to-espresso to-65%"
    containerClassName="flex flex-col gap-10 md:gap-16"
  >
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
      <Tagline eyebrow={eyebrow} />
      <SectionHeading
        level={2}
        title={title}
        titleColor="dark"
        titleClassName="md:text-[48px]! "
        textCenter
      />
      <p className="text-sm text-light md:text-base">{description}</p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((villa) => (
        <VillaCard key={villa.id} {...villa} />
      ))}
    </div>
  </SectionWithContainer>
);

export default VillasSection;
