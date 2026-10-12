"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DiningVenueType, WhereToDineSectionType } from "@/@types/diningPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const WhereToDineCard: React.FC<DiningVenueType> = ({
  tag,
  title,
  description,
  timings,
  ctaText = "VIEW MENU →",
  ctaLink = "#signature-flavours",
  image,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center w-full mx-auto py-1">
      {/* Left: Expanded Image (Increased Width & Height to remove extra surrounding padding) */}
      <div className="w-full">
        <div className="relative w-full aspect-[640/460] sm:aspect-[640/440] min-h-[380px] sm:min-h-[450px] lg:min-h-[490px] overflow-hidden shadow-xl border border-[#DF951D]/40 bg-white">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* 1px Inset Border Frame (Figma) */}
          <div className="absolute inset-4 sm:inset-5 border border-white/80 pointer-events-none z-20" />
        </div>
      </div>

      {/* Right: Venue Content Box */}
      <div className="w-full flex justify-center lg:justify-start">
        <div className="w-full max-w-[615px] flex flex-col justify-center gap-3.5 text-left pl-0 lg:pl-4 xl:pl-8">
          <span className="font-secondary italic text-[18px] leading-[26px] text-primary font-semibold">
            {tag}
          </span>

          <Headings
            level={3}
            heading={title}
            className="font-primary text-2xl sm:text-[32px] leading-tight sm:leading-[40px] text-dark uppercase tracking-normal font-normal"
          />

          <Description className="text-light text-base sm:text-[17px] leading-relaxed">
            {description}
          </Description>

          {/* Timings with Diamond Accent */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-dark font-medium font-nunito-sans pt-1">
            <span className="text-primary text-xs">◆</span>
            <span>{timings}</span>
          </div>

          {/* Action Link */}
          <div className="pt-2">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#DF951D] hover:text-primary transition-colors uppercase"
            >
              <span>{ctaText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhereToDineSection: React.FC<WhereToDineSectionType> = ({
  eyebrow,
  title,
  items,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-16 md:py-24 border-b-[5px] border-[#E9621C]"
    >
      {/* 411x411 Gradient Blur Effect (Figma exact) */}
      <div className="absolute -top-[205px] -left-[205px] w-[411px] h-[411px] rounded-full bg-linear-95 blur-[300px] from-primary to-secondary pointer-events-none z-0" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
        <Tagline eyebrow={eyebrow} className="!font-normal !text-[20px]" />
        <Headings
          level={2}
          heading={title}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-cinzel font-normal text-dark uppercase tracking-wide"
        />
      </div>

      {/* Slider using Home Page Swiper & Pagination Mechanism */}
      <div className="w-full relative max-lg:pb-12">
        <SwiperCarousel
          data={items}
          slidesPerView={1}
          spaceBetween={24}
          loop={items.length > 1}
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".dining-pagination",
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          renderSlide={(item) => <WhereToDineCard {...item} />}
        />

        {/* Vertical Pagination Dots centered exactly in the gap between Left Image & Right Content */}
        <div className="absolute z-30 lg:top-1/2 -bottom-4 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 lg:rotate-90 flex justify-center items-center pointer-events-auto">
          <div className="day-pagination dining-pagination gap-6 flex justify-center items-center" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhereToDineSection;
