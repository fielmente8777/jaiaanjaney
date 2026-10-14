"use client";

import { GallerySectionType } from "@/@types/galleryPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import clsx from "clsx";
import { useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";

/** Cell shapes on a 6-column grid (2 columns on mobile). */
const SHAPES = {
  hero: "col-span-1 aspect-4/3 md:col-span-4 md:row-span-2 md:aspect-auto",
  stack: "col-span-1 aspect-4/3 md:col-span-2 md:aspect-436/294",
  third: "col-span-1 aspect-4/3 md:col-span-2 md:aspect-436/377",
  half: "col-span-1 aspect-4/3 md:col-span-3 md:aspect-660/377",
} as const;

type Shape = keyof typeof SHAPES;

/** The Figma mosaic. 14 cells close into full rows, then it simply repeats. */
const MOSAIC: Shape[] = [
  "hero", "stack", "stack",
  "third", "third", "third",
  "stack", "hero", "stack",
  "half", "half",
  "third", "third", "third",
];

const ALL = "all";

const GallerySection: React.FC<GallerySectionType> = ({
  categories,
  items,
  loadMoreLabel,
  pageSize = MOSAIC.length,
}) => {
  const [active, setActive] = useState(ALL);
  const [pages, setPages] = useState(1);

  const labels = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c.label])),
    [categories]
  );

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((i) => i.category === active)),
    [active, items]
  );
  const visible = filtered.slice(0, pages * pageSize);

  const select = (id: string) => {
    setActive(id);
    setPages(1);
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-ground-ivory bg-[#F7F3EB] pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24"
      sectionStyle={{ backgroundColor: "var(--ground-ivory, #F7F3EB)" }}
      containerClassName="flex flex-col items-center gap-8 md:gap-10"
    >
      <div className="flex w-full items-center overflow-x-auto hide-scroll scroll-smooth max-sm:justify-start max-sm:px-4 max-sm:pb-1 sm:w-auto sm:flex-wrap sm:justify-center sm:overflow-visible gap-2.5 sm:gap-3 md:gap-3.5">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={active === id}
            onClick={() => select(id)}
            className={clsx(
              "shrink-0 whitespace-nowrap h-11 sm:h-12 px-5 sm:px-6 font-nunito-sans font-normal text-[12.5px] leading-[18px] tracking-[0.24em] uppercase transition-all cursor-pointer border shadow-xs",
              active === id
                ? "bg-primary text-white border-[#E9621C] shadow-sm"
                : "bg-white text-dark border-[#E3D3BC] hover:text-primary hover:border-primary"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-[12px] md:grid-cols-6">
        {visible.map((item, i) => {
          // the mosaic only makes sense for the full set; filtered views use equal tiles
          const shape: Shape = active === ALL ? MOSAIC[i % MOSAIC.length] : "third";
          return (
            <GalleryCard
              key={item.id}
              src={item.src}
              title={item.title}
              tag={labels[item.category] ?? ""}
              className={SHAPES[shape]}
              priority={i === 0}
              sizes={
                shape === "hero"
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setPages((p) => p + 1)}
        className="w-[284px] h-[50px] whitespace-nowrap bg-[#E9621C] hover:bg-[#d55515] text-white font-nunito-sans font-normal text-[14px] leading-[18px] tracking-[0.1em] uppercase transition-colors cursor-pointer flex items-center justify-center shadow-sm"
      >
        {loadMoreLabel || "LOAD MORE PHOTOGRAPHS"}
      </button>
    </SectionWithContainer>
  );
};

export default GallerySection;
