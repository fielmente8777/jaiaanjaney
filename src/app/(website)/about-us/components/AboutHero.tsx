"use client";
import { HeroType } from "@/@types/homePage";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { LazyLoadedVideo } from "@/components/Video";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

const AboutHero: React.FC<HeroType> = ({
  title,
  description,
  images,
  video,
}) => {
  const hasImages = !!images && images.length > 0;

  return (
    <Section
      defaultPadding={false}
      className="relative w-full aspect-4/3.5 lg:aspect-16/8"
    >
      <div className="absolute inset-0 bg-black/30 z-10" />
      {hasImages ? (
        <div className="absolute inset-0">
          <SwiperCarousel
            data={images}
            className="h-full w-full"
            slidesPerView={1}
            loop={images.length > 1}
            speed={1200}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            allowTouchMove={images.length > 1}
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            renderSlide={(src, i) => (
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
          />
        </div>
      ) : (
        video && <LazyLoadedVideo src={video.src} poster={video.poster} />
      )}

      <div className="absolute inset-0 pb-6 md:pb-0 z-20 flex flex-col items-center justify-end md:justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-[56px] font-primary">{title}</h1>
        <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-light text-white/80 leading-relaxed font-nunito-sans">
          {/* <p className="mt-4 text-lg md:text-xl max-w-3xl text-white max-lg:hidden"> */}
          {description}
        </p>
      </div>
    </Section>
  );
};

export default AboutHero;
