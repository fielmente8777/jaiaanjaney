"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaqSectionType } from "@/@types/contactPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Description, Headings, Tagline } from "@/components/typography";
import { ChevronDown, Contact } from "@/utils/icons";

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
            className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-cinzel font-normal text-dark uppercase tracking-wide"
          />
          <Description className="text-light text-[17px] leading-[26px] mt-1">
            {subtitle}
          </Description>

          <div className="flex items-center gap-3 pt-4">
            <div className="shrink-0 flex items-center justify-center">
              <Contact />
            </div>
            <Link
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="font-cinzel text-xl sm:text-2xl text-primary hover:text-dark transition-colors tracking-wide font-normal"
            >
              {phone}
            </Link>
          </div>
        </div>

        {/* Accordion List */}
        <div className="lg:col-span-7 flex flex-col w-full divide-y divide-[#E8BF73]/50 border-t border-b border-[#E8BF73]/50">
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
                  <span className="font-cinzel text-base sm:text-lg lg:text-[19px] text-dark font-normal tracking-wide uppercase group-hover:text-primary transition-colors">
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
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;
