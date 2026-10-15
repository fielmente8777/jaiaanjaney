import { VillaDayType } from "@/@types/presidentialVillaPage";
import ArchFrame from "@/components/CommonComponents/ArchFrame";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const DayFromVilla: React.FC<VillaDayType> = ({
  eyebrow,
  title,
  image,
  items,
  closing,
}) => (
  <SectionWithContainer

    sectionClassName="group overflow-hidden relative isolate bg-accent text-cream bg-image bg-right"
    containerClassName="grid items-center gap-8 lg:grid-cols-[1fr_3fr] lg:gap-16"
  >
    <ArchFrame
      shape="dome"
      outline={false}
      className="mx-auto aspect-4/5 w-full max-w-xs lg:max-w-none"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 70vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </ArchFrame>

    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="font-secondary text-lg italic text-cream/60">{eyebrow}</p>
        <SectionHeading
          level={2}
          title={title}
          titleClassName="text-[#FAF6EC] text-3xl"
        />
      </div>

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.time} className="flex flex-col gap-2">
            <span className="flex items-center gap-2" aria-hidden>
              <span className="size-2 shrink-0 rotate-45 bg-secondary" />
              <span className="h-px flex-1 bg-[#FAF6EC]/20" />
            </span>
            <p className="text-[10px] uppercase tracking-[0.25em] text-secondary">{item.time}</p>
            <h3 className="font-primary text-lg text-cream">{item.title}</h3>
            <p className="text-xs font-light leading-5 text-cream/70">{item.description}</p>
          </li>
        ))}
      </ol>

      <p className="text-lg font-semibold">{closing}</p>
    </div>
  </SectionWithContainer>
);

export default DayFromVilla;
