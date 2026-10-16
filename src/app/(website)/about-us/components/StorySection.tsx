import { StorySectionType } from "@/@types/aboutPage";

import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";
import Link from "next/link";

const StorySection: React.FC<StorySectionType> = ({
  title,
  description,
  images,
}) => (
  <SectionWithContainer
    sectionClassName="relative bg-image bg-right"
    containerClassName="md:space-y-10 space-y-6"
  >
    <div className="pointer-events-none absolute z-0 -left-24 -bottom-10 w-48 md:-left-60 md:-bottom-20 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />
    <div className="pointer-events-none absolute z-0 -right-24 top-0 w-48 md:-right-60 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />

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
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-90"
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
        <div className="flex flex-col md:mt-16 gap-6 text-xl text-center text-light md:px-6">
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <div className="flex justify-center">
            <Link href="/contact" className="border-b border-primary pb-1">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </SectionWithContainer>
);

export default StorySection;
