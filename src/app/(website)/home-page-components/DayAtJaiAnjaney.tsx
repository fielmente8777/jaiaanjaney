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
    <SectionWithContainer sectionClassName="border-y-4 bg-image bg-left relative border-secondary" containerClassName="md:space-y-8 space-y-4 ">
      <div className="absolute -left-60 -bottom-20 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
      <div className="absolute -right-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

      <div className="flex flex-col justify-center items-center text-center gap-4">
        <Tagline eyebrow={eyebrow} />
        <SectionHeading title={title} />
      </div>
      <DayAtJaiAnjaneySlider items={items} />
    </SectionWithContainer>
  );
};

export default DayAtJaiAnjaney;
