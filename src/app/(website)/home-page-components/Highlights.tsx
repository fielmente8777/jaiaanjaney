import { HighlightsSectionType } from "@/@types/homePage";
import { SectionWithContainer } from "@/components/sectionComponants";

const Highlights: React.FC<HighlightsSectionType> = ({ items }) => {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="border-b-[0.5px] border-[#585858] bg-white" containerClassName="flex items-center divide-x divide-[#585858]">
      {items.map((item, index) => (
        <div className="flex flex-col gap-2 items-center justify-center w-full py-4" key={index}>
          <h3 className="text-2xl text-primary font-primary">{item.value}</h3>
          <p className="text-sm font-light uppercase text-light">{item.label}</p>
        </div>
      ))}
    </SectionWithContainer>
  );
};

export default Highlights;
