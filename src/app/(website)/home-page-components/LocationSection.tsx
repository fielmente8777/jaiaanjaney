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
    <Section id="nearby-attractions" className="relative bg-image  bg-bottom-left">
      <div className="absolute -right-60 -bottom-20 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

      <Container className="mb-10 md:mb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading
            title={title}
          />
        </div>
      </Container>

      {/* The map runs full-bleed; its details panel sits back inside the container */}
      <NearbyAttractionsMap origin={origin} places={places} />
    </Section>
  );
};

export default LocationSection;
