import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, SectionHeading, Tagline } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  eyebrow: string;
  title: string;
  description: string[];
  cta: {
    text: string;
    link: string;
  };
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  eyebrow,
  title,
  description,
  cta,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative bg-image bg-right">

      <div className="absolute -left-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
        {/* image */}
        <div className="relative lg:block hidden">
          <div className="absolute inset-y-4 left-0 w-1 bg-secondary" />
          <div className="absolute inset-y-2 left-2 w-1 bg-primary" />
          <div className="absolute inset-y-2 right-2 w-1 bg-primary" />
          <div className="absolute inset-y-4 right-0 w-1 bg-secondary" />
          <div className="relative w-[94%] mx-auto aspect-4/4.5 ">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-4 border border-white rounded-t-[300px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading title={title} />
          {description.map((item, index) => (
            <Description key={index}>{item}</Description>
          ))}
          <Link
            href={cta.link}
            className="border-b-2 border-primary pb-1 w-fit uppercase text-dark "
          >
            {cta.text}
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
