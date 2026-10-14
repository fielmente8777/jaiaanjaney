import { EventsBannerType } from "@/@types/meetingsPage";
import { SectionWithContainer } from "@/components/sectionComponants";

/** Orange gradient statement strip. `isolate` keeps the `.bg-image` mandala above the gradient. */
const EventsBanner: React.FC<EventsBannerType> = ({ title, subtitle }) => (
  <SectionWithContainer
    sectionClassName="isolate bg-image bg-left bg-linear-to-r from-primary to-secondary text-white"
    containerClassName="flex flex-col items-center gap-3 text-center"
  >
    <span aria-hidden className="size-2 rotate-45 bg-white/80" />
    <h2 className="font-secondary text-3xl font-medium italic md:text-5xl">
      {title}
    </h2>
    <p className="text-xs uppercase tracking-[0.25em] text-white/80">{subtitle}</p>
  </SectionWithContainer>
);

export default EventsBanner;
