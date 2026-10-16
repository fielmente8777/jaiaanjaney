"use client";

import { ValuesSectionType } from "@/@types/aboutPage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";
import { GiIndianPalace, GiOpenBook, GiPrayer, GiWheat } from "react-icons/gi";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const ICONS = {
  temple: GiIndianPalace,
  devotion: GiPrayer,
  food: GiWheat,
  heritage: GiOpenBook,
} as const;

const ValuesSlider: React.FC<ValuesSectionType> = ({
  eyebrow,
  title,
  items,
}) => (
  <div className="relative w-full max-lg:pb-8">
    <SwiperCarousel
      data={items}
      slidesPerView={1}
      spaceBetween={16}
      loop
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
        el: ".day-pagination",
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={800}
      renderSlide={(item, index) => (
        <ValuesCard
          {...item}
          eyebrow={eyebrow}
          heading={title}
          priority={index === 0}
        />
      )}
    />

    <div
      className="
        absolute
        z-10
        top-1/2
        -translate-y-1/2
        left-[calc(50%-28px)]

        max-lg:top-auto
        max-lg:bottom-[-16px]
        max-lg:left-1/2
        max-lg:-translate-x-1/2
        max-lg:translate-y-0
      "
    >
      <div
        className="
          slider-dots
          day-pagination
          flex
          items-center
          justify-center
          gap-6
          rotate-90
          max-lg:rotate-0
        "
      />
    </div>
  </div>
);

export default ValuesSlider;

type ValuesCardProps = ValuesSectionType["items"][number] & {
  eyebrow?: string;
  heading: string;
  priority?: boolean;
};

export const ValuesCard: React.FC<ValuesCardProps> = ({
  icon,
  title,
  description,
  image,
  eyebrow = "",
  heading,
  priority,
}) => {
  const Icon = icon ? ICONS[icon] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-10 lg:gap-14 items-center">
      <div className="group overflow-hidden relative w-full aspect-4/3.5 h-[600px] md:aspect-4/4.25">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col items-center text-center gap-4 lg:pl-12">
        <Tagline eyebrow={eyebrow} />
        <SectionHeading title={heading} />
        {Icon && <Icon className="text-primary size-12" aria-hidden />}
        <h3 className="text-2xl italic font-secondary font-semibold text-primary capitalize">
          {title}
        </h3>
        <p className="text-light text-xl max-w-xs">{description}</p>
      </div>
    </div>
  );
};
