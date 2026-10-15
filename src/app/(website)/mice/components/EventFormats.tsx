import {  EventFormatsType } from "@/@types/meetingsPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";




const EventFormats: React.FC<EventFormatsType> = ({
  eyebrow,
  title,
  desc,
  items,
}) => (
  <SectionWithContainer
  defaultPadding={false}
    sectionClassName="relative bg-image bg-right mb-12"
    containerClassName="flex flex-col gap-8 md:gap-12"
  >
    <div className="flex flex-col items-center gap-3 text-center">
      <Tagline eyebrow={eyebrow} />
      <SectionHeading
        title={title}
        titleClassName="md:text-[56px]! "
        textCenter
      />
      <p className="text-sm lg:text-[19px] md:text-[15px] font-light text-light">{desc}</p>
    </div>

    <ul className="grid gap-px border border-secondary/30 bg-secondary/30 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon, title: itemTitle, description }) => (
        <li
          key={itemTitle}
          className="flex flex-col gap-3 bg-cream p-6 transition-colors hover:bg-white md:p-8"
        >
          <span aria-hidden className="flex h-8 items-center">
            {icon}
          </span>
          <h3 className="font-primary text-lg text-dark md:text-xl">
            {itemTitle}
          </h3>
          <p className="text-sm font-light text-light">{description}</p>
        </li>
      ))}
    </ul>
  </SectionWithContainer>
);

export default EventFormats;
