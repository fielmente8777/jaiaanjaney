import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Tagline from "@/components/typography/Tagline";
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
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
        <div className="relative w-full aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <Tagline eyebrow={eyebrow} />
          <SectionHeading title={title} />
          {description.map((item, index) => (
            <p key={index} className="text-light">
              {item}
            </p>
          ))}
          <Link
            href={cta.link}
            className="border-b-2 border-primary pb-2 w-fit uppercase text-dark "
          >
            {cta.text}
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
