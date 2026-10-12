import type { Metadata } from "next";
import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  ContactHero,
  ContactDetailsSection,
  EnquirySection,
  GettingHereSection,
  FaqSection,
  contactPageData,
} from "./components";

export const metadata: Metadata = {
  title: "Contact Us | Jai Anjaney Resort, Salasar",
  description:
    "Get in touch with Jai Anjaney Resort, Salasar. Plan your stay, enquire for weddings & events, find directions, or contact our reservations desk.",
};

export default function ContactPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <ContactHero {...contactPageData.hero} />

      {/* 2. Direct Contact Details & Interior Feature */}
      <ContactDetailsSection {...contactPageData.details} />

      {/* 3. Interactive Map & Enquiry Form */}
      <EnquirySection {...contactPageData.enquiry} />

      {/* 4. Getting Here & Travel Routes */}
      <GettingHereSection {...contactPageData.gettingHere} />

      {/* 5. Frequently Asked Questions */}
      <FaqSection {...contactPageData.faqs} />

      {/* 6. Sacred Welcome Blessing Note */}
      <WelComeNote
        {...contactPageData.welcomeNote}
        wrapperClassName="max-w-3xl"
      />
    </main>
  );
}
