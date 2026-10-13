import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactDetailsType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";

const ContactDetailsSection: React.FC<ContactDetailsType> = ({
  image,
  email,
  phone,
  address,
}) => {
  return (
    <SectionWithContainer
      sectionId="contact-details"
      defaultPadding={false}
      sectionClassName="relative overflow-hidden border-b-[5px] border-[#E9621C] bg-gradient-to-b from-[#E9621C] to-[#DF951D]"
      sectionStyle={{ background: "linear-gradient(180deg, #E9621C 0%, #DF951D 100%)" }}
      containerClassName="w-full max-lg:!px-0 max-lg:!max-w-none"
    >
      {/* Interior Visual (Desktop) */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 z-0 overflow-hidden">
        <Image
          src={image}
          alt="Jai Anjaney Resort Interior"
          fill
          priority={false}
          className="object-cover object-center"
          sizes="50vw"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[460px] lg:min-h-[620px] xl:min-h-[680px]">
        {/* Interior Visual (Mobile) */}
        <div className="lg:hidden w-full relative aspect-[16/10] sm:aspect-[640/420] min-h-[280px] overflow-hidden">
          <Image
            src={image}
            alt="Jai Anjaney Resort Interior"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="hidden lg:block pointer-events-none" aria-hidden="true" />

        {/* Contact Information Panel */}
        <div
          style={{ background: "linear-gradient(180deg, #E9621C 0%, #DF951D 100%)" }}
          className="w-full bg-gradient-to-b from-[#E9621C] to-[#DF951D] text-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-14 xl:px-18 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-xl w-full mx-auto lg:mx-0 flex flex-col">
            {/* Email Contact */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-white"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-wide text-white uppercase">
                  {email.label}
                </h3>
              </div>
              <Link
                href={email.link}
                className="font-nunito-sans text-base sm:text-lg text-white/95 hover:text-white mt-2.5 block tracking-wide hover:underline underline-offset-4"
              >
                {email.value}
              </Link>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/40 my-6 sm:my-8" />

            {/* Telephone Contact */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-wide text-white uppercase">
                  {phone.label}
                </h3>
              </div>
              <Link
                href={phone.link}
                className="font-nunito-sans text-base sm:text-lg text-white/95 hover:text-white mt-2.5 block tracking-wider"
              >
                {phone.value}
              </Link>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/40 my-6 sm:my-8" />

            {/* Physical Location */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0 text-white"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-wide text-white uppercase">
                  {address.label}
                </h3>
              </div>
              <p className="font-nunito-sans text-base sm:text-lg text-white/95 mt-2.5 leading-relaxed">
                {address.value}
              </p>
              {address.note && (
                <p className="font-secondary italic text-sm sm:text-base text-white/85 mt-1.5">
                  {address.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactDetailsSection;
