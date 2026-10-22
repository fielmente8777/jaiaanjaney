"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ChevronDown, Contact } from "@/utils/icons";

interface CheckAvailabilitySectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imageCaption?: string;
  phone?: string;
}

const CheckAvailabilitySection: React.FC<CheckAvailabilitySectionProps> = ({
  eyebrow = "Plan Your Event",
  title = "CHECK VENUE AVAILABILITY",
  subtitle = "Share your dates and guest count — our events team will suggest the right venues and send a proposal.",
  image = "/bnr.jpg",
  imageCaption = "Room for Every Celebration",
  phone = "+91 12345 12345",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDates: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <SectionWithContainer
      sectionId="check-availability"
      defaultPadding={false}
      sectionClassName="relative bg-cream overflow-hidden border-t-2 border-primary border-b-[5px] border-primary"
      containerClassName="w-full"
    >
      {/* Featured Venue Media Column (Desktop) */}
      <div className="hidden lg:block absolute inset-y-0 left-0 lg:w-[41%] xl:w-[41.5%] z-20 overflow-hidden shadow-xl group cursor-pointer">
        <Image
          src={image}
          alt={imageCaption}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="42vw"
          priority={false}
        />
        {/* Visual Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Ambient Caption */}
        <div className="absolute inset-x-0 bottom-8 lg:bottom-12 z-20 px-8 xl:px-12 pointer-events-none">
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
        {/* Media Column Alignment Spacer (Desktop) */}
        <div
          className="hidden lg:block lg:w-[41%] xl:w-[41.5%] shrink-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Availability Request Form Container */}
        <div className="w-full lg:flex-1 flex flex-col justify-center px-0 lg:pl-[100px] xl:pl-[100px] lg:pr-8 xl:pr-12">
          <div className="max-w-[720px] w-full mx-auto lg:mx-0 flex flex-col gap-3 mb-8">
            <Tagline
              eyebrow={eyebrow}
              wrapperClassName="items-start"
              className="!font-normal !text-[20px] !leading-[26px]"
            />
            <Headings
              level={2}
              heading={title}
              className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-cinzel font-normal text-dark uppercase tracking-wide"
            />

            {/* Featured Visual (Mobile) */}
            <div className="lg:hidden w-full relative aspect-[640/760] min-h-[380px] overflow-hidden shadow-lg border border-[#F6C77A]/50 my-2 group">
              <Image
                src={image}
                alt={imageCaption}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
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

            <Description className="text-light text-[18px] leading-[26px]">
              {subtitle}
            </Description>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-[720px] w-full mx-auto lg:mx-0 flex flex-col gap-4"
          >
            {submitted && (
              <div className="bg-green-50 border border-green-300 text-green-800 p-4 rounded text-sm mb-2 font-nunito-sans">
                Thank you! Your event inquiry has been received. Our events team
                will connect with you shortly with venue availability and a
                customized proposal.
              </div>
            )}

            {/* Row 1: Full Name & Phone */}
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
                  className="w-full h-[50px] bg-white border border-gold/60 px-[14px] text-dark placeholder:text-muted outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
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
                  className="w-full h-[50px] bg-white border border-gold/60 px-[14px] text-dark placeholder:text-muted outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
                />
              </div>
            </div>

            {/* Row 2: Email & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-[50px] bg-white border border-gold/60 px-[14px] text-dark placeholder:text-muted outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  EVENT TYPE
                </label>
                <div className="relative w-full">
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className={`w-full h-[50px] bg-white border border-gold/60 px-[14px] pr-9 outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer ${
                      formData.eventType ? "text-dark" : "text-muted"
                    }`}
                  >
                    <option value="" className="text-muted">
                      Wedding, reception, corporate...
                    </option>
                    <option value="Wedding" className="text-dark">
                      Wedding
                    </option>
                    <option value="Reception" className="text-dark">
                      Reception
                    </option>
                    <option
                      value="Engagement / Pre-wedding"
                      className="text-dark"
                    >
                      Engagement / Pre-wedding
                    </option>
                    <option value="Corporate / MICE" className="text-dark">
                      Corporate / Conference
                    </option>
                    <option
                      value="Spiritual / Satsang / Puja"
                      className="text-dark"
                    >
                      Spiritual / Satsang / Puja
                    </option>
                    <option
                      value="Birthday / Anniversary"
                      className="text-dark"
                    >
                      Birthday / Anniversary
                    </option>
                    <option value="Other Celebration" className="text-dark">
                      Other Celebration
                    </option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Event Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  EVENT DATES
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Select dates"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    value={formData.eventDates}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDates: e.target.value })
                    }
                    className="w-full h-[50px] bg-white border border-gold/60 px-[14px] pr-9 text-dark placeholder:text-muted outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer"
                  />
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>

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
                    className={`w-full h-[50px] bg-white border border-gold/60 px-[14px] pr-9 outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer ${
                      formData.guests ? "text-dark" : "text-muted"
                    }`}
                  >
                    <option value="" className="text-[#8E8B85]">
                      Approx. number
                    </option>
                    <option value="50–150" className="text-dark">
                      50–150 guests
                    </option>
                    <option value="150–300" className="text-dark">
                      150–300 guests
                    </option>
                    <option value="300–600" className="text-dark">
                      300–600 guests
                    </option>
                    <option value="600–1000" className="text-dark">
                      600–1,000 guests
                    </option>
                    <option value="1000+" className="text-dark">
                      1,000+ guests
                    </option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                MESSAGE
              </label>
              <input
                type="text"
                placeholder="Venues you are interested in"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-[50px] bg-white border border-gold/60 px-[14px] text-dark placeholder:text-muted outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
              />
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              className="mt-2 w-full h-[50px] bg-rust hover:bg-rust-dark text-white font-nunito-sans font-semibold text-[16px] leading-[20px] tracking-[0.12em] uppercase flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              REQUEST A PROPOSAL
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

export default CheckAvailabilitySection;
