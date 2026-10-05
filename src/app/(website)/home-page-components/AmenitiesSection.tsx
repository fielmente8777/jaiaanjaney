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
    <Section>
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
