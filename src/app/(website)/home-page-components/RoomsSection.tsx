"use client";
import { RoomsSectionType } from "@/@types/homePage";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

const RoomsSection: React.FC<RoomsSectionType> = ({
  title,
  description,
  cta,
  images,
}) => {
  return (
    <Section className="relative">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        renderSlide={(src) => (
          <div className="w-full md:aspect-16/8 relative">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        )}
      />
      <SectionHeading
        title={title}
        wrapperClassName="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 max-w-sm text-center"
        titleColor="white"
      />
      <Link
        href={cta.link}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10  text-white py-1  uppercase font-light border-b border-white  transition-all"
      >
        {cta.text}
      </Link>
    </Section>
  );
};

export default RoomsSection;
