"use client";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

interface GallerySliderProps {
  images: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const data = images.length < 5 ? [...images, ...images, ...images] : images;

  return (
    <div>
          <div className="absolute -left-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
          <div className="absolute -right-60 top-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />

    <div className="absolute -right-60 bottom-0 max-w-md w-full z-10 aspect-square rounded-full bg-linear-95 blur-[300px] from-primary to-secondary" />
      <SwiperCarousel
        data={data || []}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        navigation={{
          nextEl: ".villa-gallery-next",
          prevEl: ".villa-gallery-prev",
        }}
        className="w-full we-offer-slider"
        swiperSlideClassName="swiper-slide"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0, // keep flat
          stretch: 20,
          depth: 300, // scale of the side slides
          modifier: 2.5, // makes the central slide more prominent
          slideShadows: false,
        }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 24 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        renderSlide={(src) => (
          <div className="w-full">
            <div className="w-full relative aspect-[4/2.5]">
              <Image src={src} alt="Presidential Villa" fill className="object-cover" />
            </div>
          </div>
        )}
      />
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          aria-label="Previous photo"
          className="villa-gallery-prev flex size-9 items-center justify-center rounded-full bg-primary text-lg text-white transition-colors hover:bg-secondary"
        >
          <GoArrowLeft />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          className="villa-gallery-next flex size-9 items-center justify-center rounded-full bg-primary text-lg text-white transition-colors hover:bg-secondary"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
