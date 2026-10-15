import { EventsIntroType } from "@/@types/meetingsPage";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, SectionHeading, Tagline } from "@/components/typography";
import Image from "next/image";

/** Image + copy. Stacks on mobile (centered), two columns from tablet (left-aligned). */
const EventsIntro: React.FC<EventsIntroType> = ({
  eyebrow,
  title,
  description,
  image,
  cta,
}) => (
  <SectionWithContainer
    sectionClassName="group overflow-hidden relative bg-image bg-right"
    containerClassName="grid items-center gap-8 md:grid-cols-2 lg:gap-20"
  >
    <div className="relative aspect-4/3 w-full md:aspect-square">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>

    <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
      <Tagline eyebrow={eyebrow} wrapperClassName="md:items-start" />
      <SectionHeading
        title={title}
        titleClassName="md:text-[40px]! md:leading-[48px]!"
      />
      {description.map((text) => (
        <Description key={text} className="md:text-base! md:leading-7!">
          {text}
        </Description>
      ))}
      <LinkButton
        href={cta.link}
        label={cta.text}
        className="mt-2 h-12 justify-center border-primary bg-primary px-8 text-sm uppercase text-white"
      />
    </div>
  </SectionWithContainer>
);

export default EventsIntro;
