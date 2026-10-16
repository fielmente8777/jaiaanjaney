import { dayAtJaiAnjaneyType } from "@/@types/homePage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Tagline from "@/components/typography/Tagline";
import DayAtJaiAnjaneySlider from "./slider/DayAtJaiAnjaneySlider";

const DayAtJaiAnjaney: React.FC<dayAtJaiAnjaneyType> = ({
  eyebrow,
  title,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="border-y-4 bg-image bg-left relative border-secondary"
      containerClassName="md:space-y-8 space-y-4 "
    >
     <div className="pointer-events-none absolute z-0 -left-24 -bottom-10 w-48 md:-left-60 md:-bottom-20 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" /> 
      <div className="pointer-events-none absolute z-0 -right-24 top-0 w-48 md:-right-60 md:w-full md:max-w-md aspect-square rounded-full bg-linear-95 from-primary to-secondary opacity-40 md:opacity-100 blur-[100px] md:blur-[300px]" />

      <div className="flex flex-col justify-center items-center text-center gap-4">
        <Tagline eyebrow={eyebrow} />
        <SectionHeading title={title} />
      </div>
      <DayAtJaiAnjaneySlider items={items} />
    </SectionWithContainer>
  );
};

export default DayAtJaiAnjaney;
