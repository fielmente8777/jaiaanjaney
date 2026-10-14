import { VillaGallerySectionType } from "@/@types/presidentialVillaPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import GallerySlider from "./slider/GallerySlider";

const GallerySection: React.FC<VillaGallerySectionType> = ({
  eyebrow,
  title,
  description,
  images,
}) => (
  <SectionWithContainer
    // `isolate` keeps the `.bg-image` mandala (z-index: -1) above this section's own gradient
    sectionClassName="relative isolate bg-image bg-left bg-linear-to-br from-cream from-60% to-[#FCEBD3]"
    containerClassName="flex flex-col gap-10"
  >
    <div className="flex flex-col items-center gap-3 text-center">
      <Tagline eyebrow={eyebrow} />
      <SectionHeading
        title={title}
        titleColor="dark"
        wrapperClassName="mx-auto max-w-3xl"
        textCenter
      />
    </div>

    <GallerySlider images={images} alt={title} />

    <p className="mx-auto max-w-5xl text-center text-sm text-light md:text-base lg:text-lg">
      {description}
    </p>
  </SectionWithContainer>
);

export default GallerySection;
