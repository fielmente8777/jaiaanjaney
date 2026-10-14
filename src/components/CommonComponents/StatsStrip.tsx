import { SectionWithContainer } from "@/components/sectionComponants";
import clsx from "clsx";

interface StatsStripProps {
  items: { value: string; label: string }[];
}

/**
 * Left-aligned figures with hairline dividers.
 * Dividers are the 1px gaps of the grid, so they stay correct when the grid wraps:
 * 2 columns on mobile (an odd last item spans both), 5 in one row from tablet up.
 */
const StatsStrip: React.FC<StatsStripProps> = ({ items }) => (
  <SectionWithContainer
    defaultPadding={false}
    sectionClassName="border-b border-secondary/30 bg-cream"
  >
    <ul className="grid grid-cols-2 gap-px bg-secondary/30 md:grid-cols-5">
      {items.map(({ value, label }, i) => (
        <li
          key={label}
          className={clsx(
            "flex flex-col gap-1 bg-cream px-4 py-5 lg:px-6 md:first:pl-0",
            items.length % 2 === 1 && i === items.length - 1 && "max-md:col-span-2"
          )}
        >
          <span className="font-primary text-2xl text-primary lg:text-3xl">
            {value}
          </span>
          <span className="text-xs uppercase tracking-widest text-light">
            {label}
          </span>
        </li>
      ))}
    </ul>
  </SectionWithContainer>
);

export default StatsStrip;
