"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { PrevBtn, NextBtn } from "@/utils/icons";

interface RoomImageSliderProps {
  images: string[];
  title: string;
  isEven: boolean;
}

const RoomImageSlider: React.FC<RoomImageSliderProps> = ({
  images,
  title,
  isEven,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideList = images.length > 0 ? images : ["/rooms/room1.png"];

  return (
    <div
      className={`relative w-full md:w-[65%] lg:w-[62%] aspect-4/3 sm:aspect-16/9 md:aspect-4/3 overflow-hidden shadow-md border border-secondary/20 bg-white group ${
        isEven ? "md:ml-auto" : ""
      }`}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={slideList.length > 1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {slideList.map((img, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <Image
              src={img}
              alt={`${title} - image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 750px"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Inner Border */}
      <div className="absolute inset-3 border border-white/40 pointer-events-none z-10" />

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className={`absolute z-20 top-1/2 -translate-y-1/2 left-3 md:top-auto md:translate-y-0 md:bottom-6 ${
          isEven ? "md:left-auto md:right-16" : "md:left-6"
        } w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 shadow-md select-none [&>svg]:w-[35px] [&>svg]:h-[35px]`}
        aria-label="Previous image"
      >
        <PrevBtn />
      </button>

      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className={`absolute z-20 top-1/2 -translate-y-1/2 right-3 md:top-auto md:translate-y-0 md:bottom-6 ${
          isEven ? "md:right-6" : "md:left-16 md:right-auto"
        } w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 shadow-md select-none [&>svg]:w-[35px] [&>svg]:h-[35px]`}
        aria-label="Next image"
      >
        <NextBtn />
      </button>
    </div>
  );
};

export default RoomImageSlider;
