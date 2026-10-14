import { StayRootedSectionType } from "@/@types/roomsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import Image from "next/image";

const ImageComposition: React.FC<{
  images: { main: string; small: string };
  title: string;
}> = ({ images, title }) => (
  <div className="relative w-full max-w-[464px] h-[340px] sm:h-[480px] lg:h-[580px] mx-auto lg:ml-auto lg:mr-0">
    {/* Background Frame */}
    <div className="absolute -top-3.5 sm:-top-6 -right-3.5 sm:-right-6 w-full h-[320px] sm:h-[464px] lg:h-[556px] border border-[#E0951E] pointer-events-none z-0" />

    {/* Main Image */}
    <div className="relative w-full h-full border border-secondary/20 shadow-lg z-10 overflow-hidden bg-white">
      <Image
        src={images.main}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 464px"
      />
    </div>

    {/* Inset Image */}
    <div className="absolute -bottom-7 sm:-bottom-8 md:-bottom-10 -left-5 sm:-left-12 md:-left-16 w-[140px] sm:w-[180px] md:w-[230px] h-[140px] sm:h-[180px] md:h-[230px] border-4 sm:border-[8px] border-[#FBF8F2] shadow-[0px_20px_44px_0px_rgba(80,45,15,0.16)] z-20 overflow-hidden bg-white">
      <Image
        src={images.small}
        alt="Room interior detail"
        fill
        className="object-cover"
        sizes="230px"
      />
    </div>
  </div>
);

const StayRootedSection: React.FC<StayRootedSectionType> = ({
  eyebrow,
  title,
  subtitle,
  description,
  stats,
  images,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-white overflow-hidden border-y-[5px] border-[#E9621C] py-16 md:py-[124px]"
    >
      {/* Mandala Pattern */}
      <div className="absolute -top-[145px] -left-[200px] w-[456px] h-[456px] pointer-events-none z-0 select-none opacity-[0.08] hidden sm:block">
        <Image
          src="/rooms/mandala-new-design.png"
          alt="Mandala pattern"
          width={456}
          height={456}
          className="w-full h-full object-contain animate-[bg-rotate_25s_linear_infinite]"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="flex flex-col justify-center max-lg:items-center max-lg:text-center gap-6">
          <Tagline
            eyebrow={eyebrow}
            wrapperClassName="items-start max-lg:items-center"
            className="!font-normal !text-[20px] !leading-[26px]"
          />

          <Headings
            level={2}
            heading={title.replace("in Salasar", "in<br />Salasar")}
            className="md:text-5xl/tight text-3xl font-cinzel font-normal text-dark uppercase"
          />

          {/* Quote */}
          <div className="border-l-2 border-primary pl-4 py-1 text-left max-lg:border-l-0 max-lg:pl-0 max-lg:text-center">
            <p className="font-secondary italic text-xl sm:text-2xl md:text-[34px] md:leading-[42px] text-dark">
              {subtitle}
            </p>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden w-full my-6 sm:my-8 px-6 pt-5 pb-6">
            <ImageComposition images={images} title={title} />
          </div>

          <Description className="w-full text-[16px] sm:text-base leading-relaxed text-left max-lg:text-center">
            {description}
          </Description>

          {/* Stats */}
          <div className="w-full pt-6 border-t border-secondary/30 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 text-left max-lg:text-center"
              >
                <span className="font-cinzel text-[36px] sm:text-[44px] leading-[44px] text-primary">
                  {item.value}
                </span>
                <span className="font-nunito-sans text-[13px] leading-[18px] tracking-[0.14em] uppercase text-light mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative hidden lg:flex justify-end items-center w-full pr-6 pt-6">
          <ImageComposition images={images} title={title} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayRootedSection;
