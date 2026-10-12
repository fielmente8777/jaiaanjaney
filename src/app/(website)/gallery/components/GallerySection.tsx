"use client";

import { GallerySectionType } from "@/@types/galleryPage";
import OnlyButton from "@/components/buttons/OnlyButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import clsx from "clsx";
import { useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";

/** Cell shapes on a 6-column grid (2 columns on mobile). */
const SHAPES = {
  hero: "col-span-2 aspect-4/3 md:col-span-4 md:row-span-2 md:aspect-auto",
  stack: "aspect-square md:col-span-2 md:aspect-436/294",
  third: "aspect-square md:col-span-2 md:aspect-436/377",
  half: "aspect-square md:col-span-3 md:aspect-660/377",
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
    <SectionWithContainer containerClassName="flex flex-col items-center gap-8 md:gap-10">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={active === id}
            onClick={() => select(id)}
            className={clsx(
              "h-11 px-5 text-xs uppercase tracking-widest transition-colors",
              active === id
                ? "bg-primary text-white"
                : "bg-white text-dark hover:text-primary"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid w-full grid-cols-2 gap-1.5 md:grid-cols-6">
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
                  : "(max-width: 768px) 50vw, 33vw"
              }
            />
          );
        })}
      </div>

      {visible.length < filtered.length && (
        <OnlyButton
          label={loadMoreLabel}
          onclick={() => setPages((p) => p + 1)}
          className="rounded-none! border-primary bg-primary text-xs font-medium tracking-widest text-white"
        />
      )}
    </SectionWithContainer>
  );
};

export default GallerySection;
