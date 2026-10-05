"use client";

import Image from "next/image";
import { TestimonialsProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";

import { Autoplay } from "swiper/modules";
import { BlueTickIcon, StarIcon } from "@/utils/icons";

const TestimonialsSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={reviews}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={26}
        loop
        className="p-1!"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        renderSlide={(item) => (
          <div className="relative pt-12">
            {/* Profile Image */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={item.avatar!}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                
                <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow">
                  <Image
                    src="/icons/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div> */}

            {/* Card */}
            <div className="rounded-[28px] border border-[#D9D9D9] bg-white px-8 pt-16 pb-8 min-h-[280px] text-center flex flex-col">
              <h3 className="text-[24px] font-semibold text-blue">
                {item.name}
              </h3>

              <p className="text-[#8F8F8F] text-sm mt-1">{item.time}</p>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mt-4">
                {Array.from({ length: item.rating ! }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <BlueTickIcon />
              </div>

              <p className="mt-6 text-base leading-7 text-[#202020]">
                {item.review}
              </p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;