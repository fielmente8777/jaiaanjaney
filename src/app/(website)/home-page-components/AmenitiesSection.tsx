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
      <div className="absolute -left-60 -bottom-20 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

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
