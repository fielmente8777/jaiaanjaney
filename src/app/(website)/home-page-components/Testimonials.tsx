import { TestimonialsSectionType } from "@/@types/homePage";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";
import TestimonialsSlider from "./slider/TestimonialsSlider";

const Testimonials: React.FC<TestimonialsSectionType> = ({
  eyebrow,
  title,
  items,
  image,
}) => {
  return (
    <Section className="grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full relative aspect-4/3.25">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="lg:pl-7 max-lg:px-4  py-16 flex flex-col gap-6 -bg-linear-90 from-secondary to-primary ">
        <div className="flex flex-col gap-2 items-center text-center">
          <Tagline eyebrow={eyebrow} textColor="text-white" showIcon={false} />
          <SectionHeading title={title} titleColor="white" />
        </div>
        <Image src="/google-icon.png" alt="Google Reviews" width={50} height={50} className="mx-auto" />
        <TestimonialsSlider items={items} />
      </div>
    </Section>
  );
};

export default Testimonials;
