import { VisitCtaType } from "@/@types/galleryPage";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Link from "next/link";

/** Orange gradient "Plan Your Visit" strip — drop it above the footer on any page. */
const VisitCta: React.FC<VisitCtaType> = ({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
}) => (
  <SectionWithContainer
    sectionClassName="isolate bg-image bg-right bg-linear-to-r from-primary to-secondary text-white"
    containerClassName="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
  >
    <div className="flex flex-col gap-2">
      <p className="text-xs uppercase tracking-[0.25em] text-white/80">
        {eyebrow}
      </p>
      <SectionHeading
        title={title}
        titleClassName="md:text-[40px]! md:leading-[48px]!"
      />
      <p className="text-sm text-white/80">{description}</p>
    </div>

    <div className="flex flex-col items-center gap-3">
      <LinkButton
        href={cta.link}
        label={cta.text}
        className="h-12 justify-center border-white bg-white px-8 text-sm uppercase text-primary"
      />
      <Link
        href={secondaryCta.link}
        className="text-xs uppercase tracking-widest text-white/80 underline-offset-4 hover:underline"
      >
        {secondaryCta.text}
      </Link>
    </div>
  </SectionWithContainer>
);

export default VisitCta;
