import { HighlightsSectionType } from "@/@types/homePage";
import { SectionWithContainer } from "@/components/sectionComponants";

const Highlights: React.FC<HighlightsSectionType> = ({ items }) => {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="border-b-[0.5px] border-[#585858] bg-white" containerClassName="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 px-0! items-center divide-x divide-[#585858]">
      {items.map((item, index) => (
        <div className="flex flex-col gap-2 text-center items-center justify-center max-lg:border-b max-lg:last:border-b-0 max-lg:last:col-span-2 w-full py-4 h-full" key={index}>
          <h3 className="lg:text-2xl text-xl text-primary font-primary">{item.value}</h3>
          <p className="max-lg:text-xs text-sm font-light uppercase text-light">{item.label}</p>
        </div>
      ))}
    </SectionWithContainer>
  );
};

export default Highlights;
