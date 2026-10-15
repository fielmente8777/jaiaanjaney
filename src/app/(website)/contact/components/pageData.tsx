import {
  ContactHeroType,
  ContactDetailsType,
  EnquirySectionType,
  GettingHereSectionType,
  FaqSectionType,
} from "@/@types/contactPage";
import { FinalCtaSectionType } from "@/@types/homePage";

export const contactPageData: {
  hero: ContactHeroType;
  details: ContactDetailsType;
  enquiry: EnquirySectionType;
  gettingHere: GettingHereSectionType;
  faqs: FaqSectionType;
  welcomeNote: FinalCtaSectionType;
} = {
  hero: {
    eyebrow: "The Jai Anjaney Journal",
    title: "CONTACT US",
    description:
      "Darshan guides, celebration ideas and slow-travel notes from the heart of Rajasthan's pilgrimage circuit.",
    buttonText: "VIEW GOOGLE MAP",
    buttonLink: "https://maps.google.com",
    image: "/bnr.png",
  },

  details: {
    image: "/about.png",
    email: {
      label: "EMAIL ADDRESS:",
      value: "contact@LOREMIPSUM.com",
      link: "mailto:contact@LOREMIPSUM.com",
    },
    phone: {
      label: "PHONE:",
      value: "+91 XXXXXXXXXX",
      link: "tel:+91 XXXXXXXXXX",
    },
    address: {
      label: "ADDRESS:",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      
    },
  },

  enquiry: {
    eyebrow: "Write to Us",
    title: "SEND AN ENQUIRY",
    description:
      "Tell us what you are planning and the best way to reach you. Our team will get back to you.",
    mapHeading: "Jai Anjaney Resort",
    mapAddress: "Salasar, Churu District, Rajasthan",
    mapDirectionsText: "GET DIRECTIONS →",
    mapDirectionsLink:
      "https://www.google.com/maps/dir/?api=1&destination=27.7267,74.7175",
  },

  gettingHere: {
    eyebrow: "Getting Here",
    title: "FIND YOUR WAY TO SALASAR",
    subtitle:
      "In the Churu district of Rajasthan, on the road between the region's great temples.",
    modes: [
      {
        title: "BY ROAD",
        items: [
          { destination: "Jaipur", distance: "00 KM" },
          { destination: "Delhi", distance: "00 KM" },
          { destination: "Bikaner", distance: "00 KM" },
        ],
      },
      {
        title: "BY RAIL",
        items: [
          { destination: "Sujangarh Station", distance: "00 KM" },
          { destination: "Jaipur Junction", distance: "00 KM" },
        ],
      },
      {
        title: "BY AIR",
        items: [
          { destination: "Jaipur International Airport", distance: "00 KM" },
          { destination: "Delhi IGI Airport", distance: "00 KM" },
        ],
      },
    ],
  },

  faqs: {
    eyebrow: "Good to Know",
    title: "QUESTIONS, ANSWERED",
    subtitle:
      "Something else on your mind? Our reservations desk is happy to help.",
    phone: "+91 12345 12345",
    faqs: [
      {
        question: "What are the check-in and check-out times?",
        answer:
          "[Check-in and check-out times to confirm.] Early check-in and late check-out can be requested, subject to availability.",
      },
      {
        question: "Is the resort vegetarian?",
        answer:
          "Yes. Every kitchen on the estate is 100% pure vegetarian, and Jai Anjaney is a strictly alcohol-free sacred resort.",
      },
      {
        question: "How far is Salasar Balaji Dham?",
        answer:
          "Salasar Balaji Temple is located within a 5-minute drive from the resort. Dedicated transfers and darshan assistance are readily arranged.",
      },
      {
        question: "Is there a temple on the estate?",
        answer:
          "Yes, we have a serene on-site temple within the resort courtyard for morning aarti and tranquil personal meditation.",
      },
      {
        question: "Can you host weddings and large groups?",
        answer:
          "Yes, our grand banquet halls, sprawling lawns, and luxury suites can comfortably host group pilgrimages, family reunions, and destination weddings for up to 1,000+ guests.",
      },
      {
        question: "Is there parking for coaches?",
        answer:
          "Yes, we have extensive secure on-site parking facilities suitable for private cars, traveler mini-buses, and large luxury tour coaches.",
      },
    ],
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "A place of sacred refuge for millions of devotees who journey to Salasar in faith and love, our home must be their sacred companion on every journey.",
    note: "The Standard Greeting of Jai Anjaney Resort",
  },
};
