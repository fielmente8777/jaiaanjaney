// "use client";
// import { VisionSectionType } from "@/@types/homePage";
// import { Section } from "@/components/sectionComponants";
// import SwiperCarousel from "@/components/sliders/SwiperCarousel";
// import { SectionHeading } from "@/components/typography";
// import Image from "next/image";
// import { useRef } from "react";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";

// const VisionSection: React.FC<VisionSectionType> = ({ title, description, images }) => {
//   const swiper = useRef<SwiperType | null>(null);
//   const arrow = "p-1 text-white/80 hover:text-white transition-colors";

//   return (
//     <Section defaultPadding={false} className="relative border-t-4 border-secondary pb-24 md:pb-20">
//       <SwiperCarousel
//         data={images}
//         slidesPerView={1}
//         loop
//         speed={1000}
//         modules={[Autoplay]}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         onSwiper={(s) => (swiper.current = s)}
//         renderSlide={(src, i) => (
//           <div className="relative w-full md:aspect-16/8 aspect-4/3.5">
//             <Image src={src} alt={title} fill sizes="100vw" className="object-cover" priority={i === 0} />
//           </div>
//         )}
//       />


//       <div className="absolute z-10 bottom-4 md:bottom-0 inset-x-4 md:inset-x-auto md:left-[18%] md:w-[64%] bg-linear-to-r from-primary to-secondary text-white p-6 md:px-8 md:py-6 border border-secondary">
//         <SectionHeading title={title} titleColor="white" wrapperClassName="mb-2" titleClassName="max-md:text-3xl!" />
//         <p className="font-light pr-14">{description}</p>
//         <div className="absolute top-4 right-4 flex">
//           <button type="button" aria-label="Previous slide" onClick={() => swiper.current?.slidePrev()} className={arrow}>
//             <BiChevronLeft size={20} />
//           </button>
//           <button type="button" aria-label="Next slide" onClick={() => swiper.current?.slideNext()} className={arrow}>
//             <BiChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default VisionSection;

"use client";
import { VisionSectionType } from "@/@types/homePage";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Autoplay, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const SPEED = 1000;

const VisionSection: React.FC<VisionSectionType> = ({ title, items }) => {
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [textSwiper, setTextSwiper] = useState<SwiperType | null>(null);
  const arrow = "p-1 text-white/80 hover:text-white transition-colors";


  useEffect(() => {
    if (!imageSwiper || !textSwiper) return;
    imageSwiper.controller.control = textSwiper;
    return () => {
      imageSwiper.controller.control = undefined;
    };
  }, [imageSwiper, textSwiper]);

  return (
    <Section
      defaultPadding={false}
      className="relative border-t-4 border-secondary pb-10 md:pb-16"
    >
   
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        loop
        speed={SPEED}
        modules={[Autoplay, Controller]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={setImageSwiper}
        renderSlide={({ image }, i) => (
          <div className="relative w-full md:aspect-16/8 aspect-4/3.5">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        )}
      />

   
      <div className="relative z-10 -mt-12 md:-mt-16 mx-4 md:mx-auto md:w-[64%] bg-linear-to-r from-primary to-secondary text-white p-6 md:px-8 md:py-6 border border-secondary">
        <SectionHeading
          title={title}
          titleColor="white"
          wrapperClassName="mb-2"
          titleClassName="max-md:text-3xl!"
        />

       
        <div className="pr-14">
          <SwiperCarousel
            data={items}
            slidesPerView={1}
            loop
            speed={SPEED}
            allowTouchMove={false}
            modules={[Controller]}
            onSwiper={setTextSwiper}
            renderSlide={({ description }) => (
              <p className="font-light text-xl">{description}</p>
            )}
          />
        </div>

        <div className="absolute top-4 right-4 flex">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => imageSwiper?.slidePrev()}
            className={arrow}
          >
            <BiChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => imageSwiper?.slideNext()}
            className={arrow}
          >
            <BiChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default VisionSection;
