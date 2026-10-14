import type { SplitSectionType } from "@/@types/commonSections";
import ArrowLink from "@/components/buttons/ArrowLink";
import LinkButton from "@/components/buttons/LinkButton";
import ArchFrame from "@/components/CommonComponents/ArchFrame";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, SectionHeading, Tagline } from "@/components/typography";
import clsx from "clsx";
import Image from "next/image";
import { TbCheck } from "react-icons/tb";

const SplitSection: React.FC<SplitSectionType> = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageShape = "plain",
  imagePosition = "left",
  highlights,
  quote,
  cta,
  ctaVariant = "button",
}) => {
  const photo = (
    <Image
      src={image}
      alt={imageAlt ?? title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  );

  return (
    <SectionWithContainer
      sectionClassName="relative bg-image bg-right"
      containerClassName="grid items-center gap-8 md:grid-cols-2 lg:gap-20"
    >
      <div className={clsx(imagePosition === "right" && "md:order-2")}>
        {imageShape === "arch" ? (
          <ArchFrame className="mx-auto aspect-422/456 w-full max-w-md md:max-w-none">
            {photo}
          </ArchFrame>
        ) : (
          <div className="relative aspect-4/3 w-full md:aspect-square">
            {photo}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <Tagline eyebrow={eyebrow} wrapperClassName="md:items-start" />
        <SectionHeading title={title} titleClassName="md:text-[54px]!" />
        {description.map((text) => (
          <Description key={text} className="md:text-lg!">
            {text}
          </Description>
        ))}

        {highlights && (
          <div className="w-full text-left">
            <ul className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2 md:max-w-none ">
              {highlights.map((highlight, index) => (
                <li
                  key={`${highlight.label}-${index}`}
                  className="flex items-center gap-3 text-sm text-dark "
                >
                  <span className="flex size-6 shrink-0 items-center justify-center text-primary ">
                    {highlight.icon}
                  </span>

                  <span>{highlight.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {quote && (
          <blockquote className="border-l-2 border-primary pl-4 text-left font-secondary text-lg italic text-dark md:text-[26px]">
            {quote}
          </blockquote>
        )}

        {cta &&
          (ctaVariant === "link" ? (
            <ArrowLink
              href={cta.link}
              label={cta.text}
              className="mt-2 text-primary"
            />
          ) : (
            <LinkButton
              href={cta.link}
              label={cta.text}
              className="mt-2 h-12 justify-center border-primary bg-primary px-8 text-sm uppercase text-white"
            />
          ))}
      </div>
    </SectionWithContainer>
  );
};

export default SplitSection;
