import { StorySectionType } from "@/@types/homePage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";

const StorySection: React.FC<StorySectionType> = ({
  title,
  description,
  images,
}) => (
  <SectionWithContainer
    sectionClassName="relative bg-image bg-right"
    containerClassName="md:space-y-10 space-y-6"
  >
    <div className="absolute -left-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

    <div className="absolute -right-60 bottom-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

    <div className="flex flex-col items-center text-center gap-4">
      <Tagline eyebrow="" />
      <SectionHeading title={title} />
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
      <div className="relative w-full aspect-4/5 max-md:aspect-4/3 md:mt-12">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="relative w-full aspect-7/5">
          <Image
            src={images[1]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col mt-16 gap-6 text-xl text-center text-light md:px-6">
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  </SectionWithContainer>
);

export default StorySection;
