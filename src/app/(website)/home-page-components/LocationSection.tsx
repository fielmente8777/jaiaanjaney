import { LocationSectionType } from "@/@types/homePage";
import { Container, Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Tagline from "@/components/typography/Tagline";
import NearbyAttractionsMap from "./NearbyAttractionsMap";

const LocationSection: React.FC<LocationSectionType> = ({
  eyebrow,
  title,
  origin,
  places,
}) => {
  return (
    <Section id="nearby-attractions">
      <Container className="mb-10 md:mb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading
            title={title}
            wrapperClassName="md:max-w-2xl text-center"
          />
        </div>
      </Container>

      {/* The map runs full-bleed; its details panel sits back inside the container */}
      <NearbyAttractionsMap origin={origin} places={places} />
    </Section>
  );
};

export default LocationSection;
