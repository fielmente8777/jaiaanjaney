"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaqSectionType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ChevronDown } from "@/utils/icons";

const FaqSection: React.FC<FaqSectionType> = ({
  eyebrow,
  title,
  subtitle,
  phone,
  faqs,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <SectionWithContainer
      sectionId="faq"
      defaultPadding={false}
      sectionClassName="relative bg-[#FAF6EC] overflow-hidden py-16 md:py-24 border-b-[5px] border-[#E9621C]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
        {/* Support Overview & Direct Line */}
        <div className="lg:col-span-5 flex flex-col gap-4 max-w-lg">
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

          {/* Support Narrative & Contact Information (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4">
            <Description className="text-light font-nunito-sans !font-light !text-[17px] !leading-[28px] tracking-normal mt-1">
              Something else on your mind? Our reservations
              <span className="block">desk is happy to help.</span>
            </Description>

            <div className="pt-2">
              <Link
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-block font-nunito-sans font-normal text-[13.5px] leading-[18px] tracking-[0.14em] uppercase text-dark border-b border-[#E9621C] pb-[3px] hover:text-primary transition-colors"
              >
                {phone}
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <div className="flex flex-col w-full divide-y divide-[#E8BF73]/50 border-t border-b border-[#E8BF73]/50">
            {faqs.map((faq, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div key={index} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-cinzel text-[18px] sm:text-[20px] text-dark font-normal tracking-wide uppercase group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 transition-transform duration-300 text-primary ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6 text-light font-nunito-sans text-sm sm:text-base leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Support Narrative & Contact Information (Mobile) */}
          <div className="lg:hidden flex flex-col items-center text-center gap-2.5 mt-8 pt-2">
            <Description className="text-light font-nunito-sans !font-light !text-[17px] !leading-[28px] tracking-normal text-center max-w-md mx-auto">
              Something else on your mind?
              <span className="block">Our reservations desk is happy to help.</span>
            </Description>

            <div className="pt-2">
              <Link
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-block font-nunito-sans font-normal text-[13.5px] leading-[18px] tracking-[0.14em] uppercase text-dark border-b border-[#E9621C] pb-[3px] hover:text-primary transition-colors"
              >
                {phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;
