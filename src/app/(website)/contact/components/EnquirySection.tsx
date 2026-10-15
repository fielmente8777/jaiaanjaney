"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EnquirySectionType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ChevronDown } from "@/utils/icons";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID";
const RESORT_COORDS = { lat: 27.7267, lng: 74.7175 };

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
    <div
      style={{ background: "linear-gradient(180deg, #E9621C 0%, #DF951D 100%)" }}
      className="relative bg-gradient-to-b from-[#E9621C] to-[#DF951D] p-2 sm:p-4 w-full max-w-[640px] lg:w-[640px] min-h-[440px] sm:min-h-[520px] lg:h-[760px] flex flex-col justify-between shadow-xl overflow-hidden"
    >
      {/* Live Interactive Google Map */}
      <div className="absolute inset-2 sm:inset-4 overflow-hidden z-0">
        {API_KEY ? (
          <APIProvider apiKey={API_KEY}>
            <Map
              mapId={MAP_ID}
              defaultCenter={RESORT_COORDS}
              defaultZoom={15}
              gestureHandling="cooperative"
              disableDefaultUI
              zoomControl
              fullscreenControl
              clickableIcons={false}
              className="h-full w-full"
            >
              <AdvancedMarker
                position={RESORT_COORDS}
                title={mapHeading || "Jai Anjaney Resort"}
              >
                <div className="flex flex-col items-center">
                  <div className="h-5 w-5 rounded-full border-2 border-white bg-primary shadow-md flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <span className="mt-1 rounded bg-white/95 px-2 py-0.5 text-xs font-semibold text-dark shadow-sm whitespace-nowrap">
                    {mapHeading || "Jai Anjaney Resort"}
                  </span>
                </div>
              </AdvancedMarker>
            </Map>
          </APIProvider>
        ) : (
          <div className="w-full h-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-cinzel text-sm tracking-widest">
            MAP UNAVAILABLE
          </div>
        )}
      </div>

      {/* Inner Border Frame (Dashed) */}
      <div className="relative flex-1 border-2 border-dashed border-white/90 p-3 sm:p-7 flex flex-col justify-end pointer-events-none z-10">
        {/* Destination Details Box */}
        <div className="bg-white p-3.5 sm:px-7 sm:pt-[22px] sm:pb-[26px] shadow-md flex flex-col text-left relative z-10 pointer-events-auto">
          <h3 className="font-cinzel font-normal text-base sm:text-[21px] sm:leading-[24px] tracking-normal text-dark uppercase">
            {mapHeading}
          </h3>
          <p className="font-nunito-sans font-light text-xs sm:text-[15px] sm:leading-[23px] tracking-normal text-[#6B655B] mt-1 sm:mt-[10px]">
            {mapAddress}
          </p>
          <div className="mt-2 sm:mt-[10px] flex">
            <Link
              href={
                mapDirectionsLink && mapDirectionsLink !== "https://maps.google.com"
                  ? mapDirectionsLink
                  : `https://www.google.com/maps/dir/?api=1&destination=${RESORT_COORDS.lat},${RESORT_COORDS.lng}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] w-fit whitespace-nowrap min-w-[140px] sm:min-w-[160px] h-[22px] sm:h-[24px] pb-[3px] sm:pb-[5px] border-b border-[#E9621C] font-nunito-sans text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-dark hover:text-primary transition-colors"
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
