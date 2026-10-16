import { AmenitiesSectionType } from "@/@types/homePage";
import { Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Tagline from "@/components/typography/Tagline";
import BeyondTheStaySlider from "./slider/BeyondTheStaySlider";
import Container from "../../../components/sectionComponants/Container";

const AmenitiesSection: React.FC<AmenitiesSectionType> = ({
  eyebrow,
  title,
  items,
}) => {
  return (
    <Section className="relative bg-image bg-left">
      <div className="pointer-events-none absolute z-0 -left-24 -bottom-10 w-48 md:-left-60 md:-bottom-20 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />

      <div className="flex flex-col items-center justify-center md:gap-12 gap-10">
        <Container className="flex flex-col items-center justify-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading
            title={title}
            wrapperClassName="md:max-w-2xl text-center"
          />
        </Container>
        <BeyondTheStaySlider items={items} />
      </div>
    </Section>
  );
};

export default AmenitiesSection;
