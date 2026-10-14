import { GoodToKnowType } from "@/@types/presidentialVillaPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

const GoodToKnow: React.FC<GoodToKnowType> = ({
  eyebrow,
  title,
  description,
  callLabel,
  cta,
  facts,
}) => (
  <SectionWithContainer
    sectionClassName="relative bg-image bg-right"
    containerClassName="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16"
  >
    <div className="absolute -left-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
    <div className="absolute -right-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
    <div className="flex flex-col items-start gap-3">
      <Tagline eyebrow={eyebrow} />
      <SectionHeading title={title} titleColor="dark" />
      <p className="max-w-xs text-sm text-light md:text-base">{description}</p>
      <p className="text-sm font-medium text-dark">{callLabel}</p>
      <Link
        href={cta.link}
        className="inline-flex items-center gap-2 border-b border-primary pb-0.5 text-[11px] uppercase tracking-widest text-dark"
      >
        {cta.text}
        <TbArrowRight aria-hidden />
      </Link>
    </div>

    <dl className="grid content-start gap-x-16 gap-y-6 sm:grid-cols-2">
      {facts.map(({ label, value, link }) => (
        <div
          key={label}
          className="flex flex-col gap-1 border-b border-secondary/50 pb-3"
        >
          <dt className="text-[11px] uppercase tracking-widest text-light">
            {label}
          </dt>
          <dd className="text-sm text-dark">
            {link ? (
              <Link
                href={link}
                className="inline-flex items-center gap-1 text-primary"
              >
                {value}
                <TbArrowRight aria-hidden />
              </Link>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  </SectionWithContainer>
);

export default GoodToKnow;
