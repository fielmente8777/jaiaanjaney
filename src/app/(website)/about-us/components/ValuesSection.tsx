import { ValuesSectionType } from "@/@types/homePage";
import { SectionWithContainer } from "@/components/sectionComponants";
import ValuesSlider from "../slider/ValueSlider";

const ValuesSection: React.FC<ValuesSectionType> = ({
  eyebrow,
  title,
  items,
}) => (
  <SectionWithContainer sectionClassName="border-y-4 bg-image bg-right-center relative border-secondary">
    <div className="absolute -left-60 -bottom-20 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
    <div className="absolute -right-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
    <ValuesSlider eyebrow={eyebrow} title={title} items={items} />
  </SectionWithContainer>
);

export default ValuesSection;
