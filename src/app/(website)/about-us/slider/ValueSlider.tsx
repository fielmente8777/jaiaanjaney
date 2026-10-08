"use client";

import { ValuesSectionType } from "@/@types/homePage";
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

const ValuesSlider: React.FC<ValuesSectionType> = ({ eyebrow, title, items }) => (
  <div className="w-full relative max-lg:pb-8">
    <SwiperCarousel
      data={items}
      slidesPerView={1}
      spaceBetween={16}
      loop
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true, el: ".day-pagination" }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={800}
      renderSlide={(item, index) => (
        <ValuesCard {...item} eyebrow={eyebrow} heading={title} priority={index === 0} />
      )}
    />

    <div className="absolute z-50 lg:top-1/2 -bottom-4 -translate-y-1/2 lg:left-[52%] max-lg:left-1/2 max-lg:-translate-x-1/2 lg:rotate-90 flex justify-center items-center">
      <div className="slider-dots day-pagination gap-6 flex justify-center items-center" />
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
      <div className="relative w-full aspect-4/3.5 md:aspect-4/4.25">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
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