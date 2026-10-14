import { VillaAmenitiesType } from "@/@types/presidentialVillaPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import Swoosh from "@/components/typography/Swoosh";

const AmenitiesComforts: React.FC<VillaAmenitiesType> = ({
  eyebrow,
  title,
  groups,
}) => (
  <SectionWithContainer
    sectionClassName="relative isolate bg-image bg-left bg-linear-to-r from-primary to-secondary"
    containerClassName="flex flex-col items-center gap-8 md:gap-10"
  >
    <div className="flex flex-col items-center gap-3 text-center">
      <Swoosh eyebrow={eyebrow} textColor="text-white" />
      <SectionHeading title={title} titleColor="dark" textCenter />
    </div>

    <div className="grid w-full gap-px bg-secondary/40 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-4 bg-cream p-6">
          <h3 className="font-primary text-lg uppercase text-dark">
            {group.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {group.items.map(({ label, icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm text-light"
              >
                <span aria-hidden className="shrink-0">
                  {icon}
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWithContainer>
);

export default AmenitiesComforts;
