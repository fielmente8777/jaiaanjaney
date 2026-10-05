import { FinalCtaSectionType } from "@/@types/homePage";
import { SectionWithContainer } from "../sectionComponants";
import Tagline from "../typography/Tagline";
import { SectionHeading } from "../typography";

const WelComeNote: React.FC<FinalCtaSectionType> = ({
  eyebrow,
  description,
  note,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-8 space-y-4">
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <SectionHeading title={eyebrow} />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4 max-w-xl mx-auto">
        <p className="text-light text-center">{description}</p>
        <Tagline eyebrow={note} />
      </div>
    </SectionWithContainer>
  );
};

export default WelComeNote;
