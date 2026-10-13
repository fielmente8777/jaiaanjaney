"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookTableSectionType } from "@/@types/diningPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ChevronDown, Contact } from "@/utils/icons";

const BookTableSection: React.FC<BookTableSectionType> = ({
  eyebrow,
  title,
  subtitle,
  image,
  imageCaption,
  phone,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    restaurant: "Any restaurant",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <SectionWithContainer
      sectionId="book-table"
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden border-b-[5px] border-[#E9621C]"
      containerClassName="w-full"
    >
      {/* Featured Dining Visual (Desktop) */}
      <div className="hidden lg:block absolute inset-y-0 left-0 lg:w-[41%] xl:w-[41.5%] z-0 overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={imageCaption}
          fill
          className="object-cover object-center"
          sizes="42vw"
          priority={false}
        />
        {/* Visual Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Ambient Caption */}
        <div className="absolute inset-x-0 bottom-8 lg:bottom-12 z-20 px-8 xl:px-12">
          <p
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "40px",
            }}
            className="font-secondary italic font-normal text-[32px] leading-[40px] text-white drop-shadow-md"
          >
            {imageCaption}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center py-12 sm:py-16 lg:py-20">
        {/* Media Column Spacer (Desktop) */}
        <div
          className="hidden lg:block lg:w-[41%] xl:w-[41.5%] shrink-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Table Reservation Form Container */}
        <div className="w-full lg:flex-1 flex flex-col justify-center px-0 lg:pl-[100px] xl:pl-[100px] lg:pr-8 xl:pr-12">
          <div className="max-w-[720px] w-full mx-auto lg:mx-0 flex flex-col gap-3 mb-8">
            <Tagline
              eyebrow={eyebrow}
              wrapperClassName="items-start"
              className="!font-normal !text-[18px] sm:!text-[20px] !leading-[26px]"
            />
            <Headings
              level={2}
              heading={title}
              className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-cinzel font-normal text-dark uppercase tracking-wide"
            />

            {/* Featured Dining Visual (Mobile) */}
            <div className="lg:hidden w-full relative aspect-[640/760] min-h-[360px] sm:min-h-[400px] overflow-hidden shadow-lg border border-[#F6C77A]/50 my-2">
              <Image
                src={image}
                alt={imageCaption}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-20 px-4 sm:px-6">
                <p
                  style={{
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "32px",
                    lineHeight: "40px",
                  }}
                  className="font-secondary italic font-normal text-[26px] sm:text-[32px] leading-[34px] sm:leading-[40px] text-white drop-shadow-md"
                >
                  {imageCaption}
                </p>
              </div>
            </div>

            <Description className="text-light text-base sm:text-[18px] leading-[24px] sm:leading-[26px]">
              {subtitle}
            </Description>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-[720px] w-full mx-auto lg:mx-0 flex flex-col gap-4"
          >
            {submitted && (
              <div className="bg-green-50 border border-green-300 text-green-800 p-4 rounded text-sm mb-2 font-nunito-sans">
                Thank you! Your table reservation request has been received. Our team will contact you shortly to confirm.
              </div>
            )}

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  PHONE
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
                />
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  DATE
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Select date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer"
                  />
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  TIME
                </label>
                <div className="relative w-full">
                  <select
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className={`w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer ${
                      formData.time ? "text-dark" : "text-[#8E8B85]"
                    }`}
                  >
                    <option value="" className="text-[#8E8B85]">Select time</option>
                    <option value="breakfast" className="text-dark">Breakfast (7:30 AM - 10:30 AM)</option>
                    <option value="lunch" className="text-dark">Lunch (12:30 PM - 3:30 PM)</option>
                    <option value="high-tea" className="text-dark">Evening Tea (4:30 PM - 6:30 PM)</option>
                    <option value="dinner" className="text-dark">Dinner (7:30 PM - 10:30 PM)</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Count & Venue */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  GUESTS
                </label>
                <div className="relative w-full">
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer"
                  >
                    <option value="1" className="text-dark">1</option>
                    <option value="2" className="text-dark">2</option>
                    <option value="3" className="text-dark">3</option>
                    <option value="4" className="text-dark">4</option>
                    <option value="6" className="text-dark">6</option>
                    <option value="8+" className="text-dark">8+</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  RESTAURANT
                </label>
                <div className="relative w-full">
                  <select
                    value={formData.restaurant}
                    onChange={(e) =>
                      setFormData({ ...formData, restaurant: e.target.value })
                    }
                    className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer"
                  >
                    <option value="Any restaurant" className="text-dark">Any restaurant</option>
                    <option value="The Restaurant" className="text-dark">The Restaurant (Main Building)</option>
                    <option value="Rooftop Restaurant" className="text-dark">Rooftop Restaurant</option>
                    <option value="Al Fresco Patio" className="text-dark">Al Fresco Patio</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Requests */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                MESSAGE
              </label>
              <input
                type="text"
                placeholder="Special requests — Jain meals, birthdays, high chairs"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
              />
            </div>

            {/* Submission Action */}
            <button
              type="submit"
              className="mt-2 w-full h-[50px] bg-[#BA471B] hover:bg-[#A83C15] text-white font-nunito-sans font-semibold text-[16px] leading-[20px] tracking-[0.12em] uppercase flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              REQUEST A TABLE
            </button>

            {/* Direct Telephone Link */}
            <div className="flex items-center justify-start gap-2.5 pt-2">
              <div className="shrink-0 flex items-center justify-center">
                <Contact />
              </div>
              <span className="text-light text-[12px] leading-none font-nunito-sans">
                Or call our team
              </span>
              <Link
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="font-normal text-dark hover:text-primary text-[16px] leading-none font-cinzel tracking-wide"
              >
                {phone}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default BookTableSection;
