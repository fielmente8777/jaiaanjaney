"use client";
import { HeroType } from "@/@types/homePage";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { LazyLoadedVideo } from "@/components/Video";
import clsx from "clsx";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

interface ImageHeroProps extends HeroType {
  contentPosition?: "center" | "bottom";
  eyebrow?: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({
  title,
  description,
  images,
  video,
  contentPosition = "center",
  eyebrow,
}) => {
  const hasImages = !!images && images.length > 0;

  return (
    <Section
      defaultPadding={false}
      className="relative w-full aspect-4/3.5 lg:aspect-16/8"
    >
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

      <div
        className={clsx(
          "absolute inset-0 z-10 pointer-events-none",
          contentPosition === "bottom"
            ? "bg-linear-to-t from-black/60 via-black/10 to-transparent"
            : "bg-black/30"
        )}
      />
      <div
        className={clsx(
          "absolute inset-0 z-20 flex flex-col items-center text-center text-white px-4 pointer-events-none",
          contentPosition === "bottom" ? "justify-end pb-6 md:pb-10" : "justify-center"
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-sm  text-primary md:text-lg">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-7xl font-primary">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl font-light max-lg:hidden">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default ImageHero;
