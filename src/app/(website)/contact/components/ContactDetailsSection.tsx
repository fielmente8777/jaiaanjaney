import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactDetailsType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { EmailIcon, PhoneIcon, AddressIcon } from "@/utils/icons";

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
      sectionClassName="relative overflow-hidden bg-gradient-to-b from-[#E9621C] to-[#DF951D]"
      sectionStyle={{ background: "linear-gradient(180deg, #E9621C 0%, #DF951D 100%)" }}
      containerClassName="!max-w-full !p-0 w-full"
    >
      {/* Interior Visual (Desktop) */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 z-20 overflow-hidden group cursor-pointer">
        <Image
          src={image}
          alt="Jai Anjaney Resort Interior"
          fill
          priority={false}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="50vw"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[460px] lg:min-h-[620px] xl:min-h-[680px]">
        {/* Interior Visual (Mobile) */}
        <div className="lg:hidden w-full relative aspect-[16/10] sm:aspect-[640/420] min-h-[280px] overflow-hidden group">
          <Image
            src={image}
            alt="Jai Anjaney Resort Interior"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="100vw"
          />
        </div>
        <div className="hidden lg:block pointer-events-none" aria-hidden="true" />

        {/* Contact Information Panel */}
        <div
          style={{ background: "linear-gradient(180deg, #E9621C 0%, #DF951D 100%)" }}
          className="w-full bg-gradient-to-b from-[#E9621C] to-[#DF951D] text-white flex flex-col justify-start px-4 sm:px-6 lg:px-[56px] py-12 sm:py-16 lg:pt-[172px] lg:pb-[172px]"
        >
          <div className="w-full flex flex-col">
            {/* Email Contact */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <EmailIcon />
                <h3 className="font-ivyora font-normal text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] tracking-[0.07em] text-white uppercase">
                  {email.label}
                </h3>
              </div>
              <Link
                href={email.link}
                className="font-montserrat font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-normal text-white/95 hover:text-white mt-3 lg:mt-[16px] block hover:underline underline-offset-4"
              >
                {email.value}
              </Link>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/40 my-7 sm:my-8 lg:mt-[48px] lg:mb-[40px]" />

            {/* Telephone Contact */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <PhoneIcon />
                <h3 className="font-ivyora font-normal text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] tracking-[0.07em] text-white uppercase">
                  {phone.label}
                </h3>
              </div>
              <Link
                href={phone.link}
                className="font-montserrat font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-normal text-white/95 hover:text-white mt-3 lg:mt-[16px] block"
              >
                {phone.value}
              </Link>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/40 my-7 sm:my-8 lg:mt-[48px] lg:mb-[40px]" />

            {/* Physical Location */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <AddressIcon />
                <h3 className="font-ivyora font-normal text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] tracking-[0.07em] text-white uppercase">
                  {address.label}
                </h3>
              </div>
              <p className="font-montserrat font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-normal text-white/95 mt-3 lg:mt-[16px]">
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
