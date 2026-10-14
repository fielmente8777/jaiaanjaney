import type { NoticeStripType } from "@/@types/commonSections";
import { SectionWithContainer } from "@/components/sectionComponants";

/** Thin tinted note (policies, timings, "please note…"). */
const NoticeStrip: React.FC<NoticeStripType> = ({ text }) => (
  <SectionWithContainer
    defaultPadding={false}
    sectionClassName="bg-primary/10"
    containerClassName="py-3 text-center text-xs text-accent md:text-sm"
  >
    {text}
  </SectionWithContainer>
);

export default NoticeStrip;
