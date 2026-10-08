"use client";

import { dayAtJaiAnjaneyType } from "@/@types/homePage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Tagline from "@/components/typography/Tagline";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import clsx from "clsx";

const DayAtJaiAnjaneySlider: React.FC<{
  items: dayAtJaiAnjaneyType["items"];
}> = ({ items }) => {
  return (
    <div className="w-full relative max-lg:pb-8">
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        spaceBetween={16}
        loop
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".day-pagination",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        renderSlide={(item) => <DayAtJaiAnjaneyCard {...item} />}
      />
      <div className="absolute z-50 lg:top-1/2 -bottom-4 -translate-y-1/2 left-[31.5%]  lg:rotate-90 flex justify-center items-center">
        <div className="day-pagination gap-6 flex justify-center items-center" />
      </div>
    </div>
  );
};

export default DayAtJaiAnjaneySlider;

export const DayAtJaiAnjaneyCard: React.FC<dayAtJaiAnjaneyType["items"][0]> = ({
  subtitle,
  description,
  images,
  title,
}) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-[0.58fr_1fr]
        gap-10
        lg:gap-14
        items-center
      "
    >
      <div className="flex flex-col gap-4 text-right">
        <p className="text-lg italic font-secondary text-primary capitalize font-semibold">
          {title}
        </p>

        <h3 className="text-dark lg:text-3xl text-2xl font-primary">
          {subtitle}
        </h3>
        <div className="grid grid-cols-2 gap-6 items-center md:hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={clsx(
                "w-full relative",
                index === 0 ? "aspect-[2/2.5]" : "aspect-square"
              )}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          ))}
        </div>

        <p className="text-light">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-6 items-center max-md:hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(
              "w-full relative",
              index === 0 ? "aspect-[2/2.5]" : "aspect-square"
            )}
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
