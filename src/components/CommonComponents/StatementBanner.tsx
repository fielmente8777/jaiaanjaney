import type { StatementBannerType } from "@/@types/commonSections";
import { SectionWithContainer } from "@/components/sectionComponants";

/** Orange gradient statement strip. `isolate` keeps the `.bg-image` mandala above the gradient. */
const StatementBanner: React.FC<StatementBannerType> = ({ title, subtitle }) => (
  <SectionWithContainer
    sectionClassName="isolate bg-image bg-left bg-linear-to-r from-primary to-secondary text-white"
    containerClassName="flex flex-col items-center gap-3 text-center"
  >
    <span aria-hidden className="size-2 rotate-45 bg-white/80" />
    <h2 className="font-secondary text-3xl font-medium italic md:text-[40px]">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[13px] uppercase text-[#F0B45A]">
        {subtitle}
      </p>
    )}
  </SectionWithContainer>
);

export default StatementBanner;
