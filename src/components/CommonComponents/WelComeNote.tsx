import { FinalCtaSectionType } from "@/@types/homePage";
import { AboutCtaType } from "@/@types/aboutPage";
import { SectionWithContainer } from "../sectionComponants";
import Tagline from "../typography/Tagline";
import { SectionHeading } from "../typography";
import Image from "next/image";
import Link from "next/link";

type WelcomeNoteProps = (FinalCtaSectionType | AboutCtaType) & {
  wrapperClassName?: string;
  descriptionClassName?: string;
  sectionClassName?: string;
};

const WelComeNote: React.FC<WelcomeNoteProps> = ({
  eyebrow,
  description,
  note,
  cta,
  wrapperClassName,
  descriptionClassName,
  sectionClassName,
}) => {
  return (
    <SectionWithContainer
      containerClassName="relative z-10 md:space-y-8 space-y-4"
      sectionClassName={`relative bg-cream bg-image bg-bottom-left bg-bottom-right bg-image-after ${
        sectionClassName || ""
      }`}
    >
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <Image
          src="/tagline.png"
          alt="tagline"
          width={74}
          height={17}
          className="mx-auto"
        />

        <SectionHeading title={eyebrow} />
      </div>

      <div
        className={`flex flex-col justify-center items-center text-center gap-4 ${
          wrapperClassName || "max-w-xl"
        } mx-auto`}
      >
        <p className={`text-light text-center ${descriptionClassName || ""}`}>
          {description}
        </p>

        {note && <Tagline eyebrow={note} showIcon={false} />}

        {cta && (
          <Link href={cta.link} className="border-b border-primary pb-1">
            {cta.text}
          </Link>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default WelComeNote;
