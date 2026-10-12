import { GalleryHeroType } from "@/@types/galleryPage";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";

/**
 * Both mandalas come from the `.bg-image` helpers. They share `::before`, so the
 * right one lives on an inner full-width wrapper instead of the same element.
 */
const GalleryHero: React.FC<GalleryHeroType> = ({
  eyebrow,
  title,
  description,
}) => (
  <Section className="bg-image bg-left">
    <div className="bg-image bg-right">
      <Container className="flex flex-col items-center gap-4 text-center">
        <Tagline eyebrow={eyebrow} />
        <SectionHeading
          level={1}
          title={title}
          titleClassName="md:text-[56px]! md:leading-[64px]!"
          textCenter
        />
        <p className="max-w-xl text-light">{description}</p>
      </Container>
    </div>
  </Section>
);

export default GalleryHero;
