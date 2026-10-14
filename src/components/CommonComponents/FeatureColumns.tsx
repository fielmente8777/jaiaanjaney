import type { FeatureColumnsType } from "@/@types/commonSections";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";

/**
 * Dark section with a 1 / 2 / 4 column grid.
 * Dividers are the 1px grid gaps, so they stay correct at every column count.
 */
const FeatureColumns: React.FC<FeatureColumnsType> = ({
  eyebrow,
  title,
  items,
  footnote,
}) => (
  <SectionWithContainer
    sectionClassName="isolate relative bg-image bg-left bg-accent text-white"
    containerClassName="flex flex-col gap-8 md:gap-12"
  >
    <div className="flex flex-col items-center gap-3 text-center">
      <Tagline eyebrow={eyebrow} textColor="text-secondary" />
      <SectionHeading
        title={title}
        titleColor="white"
        titleClassName="md:text-[54px]!"
        textCenter
      />
    </div>

    <ul className="grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ label, title: itemTitle, description }) => (
        <li key={itemTitle} className="flex flex-col gap-2 bg-accent p-6 md:p-8">
          <span className="text-xs uppercase text-secondary">
            {label}
          </span>
          <h3 className="font-primary text-lg md:text-[21px]">{itemTitle}</h3>
          <p className="text-sm md:text-2xl font-light text-white/80">{description}</p>
        </li>
      ))}
    </ul>

    {footnote && (
      <p className="text-center font-secondary md:text-2xl italic text-white/90">
        {footnote}
      </p>
    )}
  </SectionWithContainer>
);

export default FeatureColumns;
