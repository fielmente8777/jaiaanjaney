import { ExperiencesSectionType } from "@/@types/homePage";
import Accordion from "@/components/accordion/Accordion";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";

const ExperiencesSection: React.FC<ExperiencesSectionType> = ({
  eyebrow,
  title,
  items,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative bg-image bg-left">
      <div className="absolute -left-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
        {/* content */}
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading title={title} wrapperClassName="md:max-w-lg" />
          {/* show image in md screen */}
          <div className="relative w-full aspect-square md:hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-full border-t border-secondary">
            {items.map((item, index) => (
              <Accordion
                key={index}
                q={item.title}
                a={item.description}
                i={index}
              />
            ))}
          </div>
        </div>
        {/* show image in md screen */}
        <div className="relative w-full aspect-square hidden md:block">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ExperiencesSection;
