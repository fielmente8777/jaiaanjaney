"use client";
import { AmenitiesSectionType } from "@/@types/homePage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const BeyondTheStaySlider: React.FC<{
  items: AmenitiesSectionType["items"];
}> = ({ items }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        renderSlide={(item) => <BeyondTheStaySliderCard {...item} />}
      />
    </div>
  );
};

export default BeyondTheStaySlider;

export const BeyondTheStaySliderCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="w-full relative md:aspect-4/5.5 aspect-4/4.75">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl font-primary font-light text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  );
};
