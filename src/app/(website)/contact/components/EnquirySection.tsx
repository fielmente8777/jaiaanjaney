"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EnquirySectionType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ChevronDown } from "@/utils/icons";

const EnquirySection: React.FC<EnquirySectionType> = ({
  eyebrow,
  title,
  description,
  mapHeading,
  mapAddress,
  mapDirectionsText,
  mapDirectionsLink,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryFor: "Stay, wedding, event...",
    dates: "",
    guests: "Approx. number",
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

  const renderMapCard = () => (
    <div className="relative bg-[#E9621C] p-5 sm:p-7 w-full max-w-[640px] lg:w-[640px] min-h-[520px] lg:h-[760px] flex flex-col justify-between shadow-xl">
      {/* Inner Border Frame */}
      <div className="relative flex-1 border-2 border-dashed border-white/90 p-5 sm:p-7 flex flex-col justify-between">
        {/* Map Location Placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 sm:py-10">
          <svg
            width={34}
            height={34}
            viewBox="0 0 24 24"
            fill="white"
            className="drop-shadow"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white mt-3">
            INTERACTIVE MAP HERE
          </span>
        </div>

        {/* Destination Details Box */}
        <div className="bg-white px-6 sm:px-7 pt-[22px] pb-[26px] shadow-md flex flex-col text-left relative z-10">
          <h3 className="font-cinzel font-normal text-[21px] leading-[24px] tracking-normal text-dark uppercase">
            {mapHeading}
          </h3>
          <p className="font-nunito-sans font-light text-[15px] leading-[23px] tracking-normal text-[#6B655B] mt-[10px]">
            {mapAddress}
          </p>
          <div className="mt-[10px] flex">
            <Link
              href={mapDirectionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] w-fit whitespace-nowrap min-w-[160px] h-[24px] pb-[5px] border-b border-[#E9621C] font-nunito-sans text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-dark hover:text-primary transition-colors"
            >
              {mapDirectionsText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SectionWithContainer
      sectionId="enquiry"
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-16 md:py-24 border-b-[5px] border-[#E9621C]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[100px] items-center w-full">
        {/* Map Information Card (Desktop) */}
        <div className="hidden lg:block w-full max-w-[640px] mx-auto lg:mx-0">
          {renderMapCard()}
        </div>

        {/* Enquiry Form Container */}
        <div className="w-full max-w-[580px] mx-auto lg:mx-0 flex flex-col justify-center">
          <div className="flex flex-col gap-3 mb-8">
            <Tagline
              eyebrow={eyebrow}
              wrapperClassName="items-start"
              className="!font-normal !text-[20px] !leading-[26px]"
            />
            <Headings
              level={2}
              heading={title}
              className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] font-primary font-normal text-dark uppercase tracking-normal"
            />

            {/* Location & Directions Card (Mobile) */}
            <div className="lg:hidden w-full my-4">
              {renderMapCard()}
            </div>

            <Description className="text-light font-nunito-sans !font-light !text-[17px] !leading-[28px] tracking-normal">
              {description}
            </Description>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {submitted && (
              <div className="bg-green-50 border border-green-300 text-green-800 p-4 rounded text-sm mb-2 font-nunito-sans">
                Thank you! Your enquiry has been received. Our reservations and event planning team will contact you shortly.
              </div>
            )}

            {/* Name & Telephone */}
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

            {/* Email & Subject */}
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
                  className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  ENQUIRY FOR
                </label>
                <div className="relative w-full">
                  <select
                    value={formData.enquiryFor}
                    onChange={(e) =>
                      setFormData({ ...formData, enquiryFor: e.target.value })
                    }
                    className={`w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer ${
                      formData.enquiryFor === "Stay, wedding, event..." || !formData.enquiryFor
                        ? "text-[#8E8B85]"
                        : "text-dark"
                    }`}
                  >
                    <option value="Stay, wedding, event..." className="text-[#8E8B85]">Stay, wedding, event...</option>
                    <option value="Stay" className="text-dark">Room & Suite Stay</option>
                    <option value="Wedding" className="text-dark">Destination Wedding</option>
                    <option value="Event" className="text-dark">Family Celebration / Event</option>
                    <option value="Dining" className="text-dark">Group Dining / Feast</option>
                    <option value="Corporate" className="text-dark">Corporate Meeting / MICE</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Schedule & Party Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                  DATES
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Select dates"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    value={formData.dates}
                    onChange={(e) =>
                      setFormData({ ...formData, dates: e.target.value })
                    }
                    className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px] cursor-pointer"
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
                    className={`w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] pr-9 outline-none focus:border-primary font-nunito-sans font-normal text-[16px] appearance-none cursor-pointer ${
                      formData.guests === "Approx. number" || !formData.guests
                        ? "text-[#8E8B85]"
                        : "text-dark"
                    }`}
                  >
                    <option value="Approx. number" className="text-[#8E8B85]">Approx. number</option>
                    <option value="1-2" className="text-dark">1 - 2 Guests</option>
                    <option value="3-5" className="text-dark">3 - 5 Guests</option>
                    <option value="6-10" className="text-dark">6 - 10 Guests</option>
                    <option value="10-50" className="text-dark">10 - 50 Guests (Small Group)</option>
                    <option value="50+" className="text-dark">50+ Guests (Large Group / Event)</option>
                    <option value="200+" className="text-dark">200+ Guests (Wedding)</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Inquiries */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-nunito-sans uppercase text-[12px] leading-tight tracking-wider text-light font-semibold">
                MESSAGE
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-[50px] bg-white border border-[#E8BF73]/60 px-[14px] text-dark placeholder:text-[#8E8B85] outline-none focus:border-primary font-nunito-sans font-normal text-[16px]"
              />
            </div>

            {/* Form Submission */}
            <button
              type="submit"
              className="mt-2 w-full h-[50px] bg-[#E9621C] hover:bg-[#D45515] text-white font-avenir font-medium text-[14px] leading-[20px] tracking-normal flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default EnquirySection;
