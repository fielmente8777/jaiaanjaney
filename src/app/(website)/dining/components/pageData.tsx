import {
  SattvicTableSectionType,
  WhereToDineSectionType,
  SignatureFlavoursSectionType,
  FamilyFeastBannerType,
  BookTableSectionType,
} from "@/@types/diningPage";
import { FinalCtaSectionType, HeroType } from "@/@types/homePage";

export const diningPageData: {
  hero: HeroType & { subtitle?: string };
  sattvicTable: SattvicTableSectionType;
  whereToDine: WhereToDineSectionType;
  signatureFlavours: SignatureFlavoursSectionType;
  familyFeast: FamilyFeastBannerType;
  bookTable: BookTableSectionType;
  welcomeNote: FinalCtaSectionType;
} = {
  hero: {
    title: "DINING AT <br class='block md:hidden' />JAI ANJANEY",
    subtitle: "Pure Vegetarian · Alcohol-Free",
    description:
      "Sattvic kitchens, Rajasthani warmth and tables set for families, from the first chai after aarti to dinner under the stars.",
    images: ["/dining/banner-photo.png"],
  },

  sattvicTable: {
    eyebrow: "Our Philosophy",
    title: "A SATTVIC TABLE",
    description1:
      "In a town that wakes for Balaji, our kitchens keep the same discipline as our guests: every dish is pure vegetarian, and the estate is alcohol-free.",
    description2:
      "What that leaves is flavour, slow-cooked Rajasthani classics, North Indian favourites and the sweets that mark every celebration, made fresh and served with care.",
    stats: [
      {
        value: "120",
        label: "RESTAURANT COVERS",
      },
      {
        value: "100%",
        label: "PURE VEGETARIAN",
      },
      {
        value: "4",
        label: "PLACES TO DINE",
      },
    ],
    image: "/dining/photo.jpg",
  },

  whereToDine: {
    eyebrow: "Four Tables, One Kitchen Philosophy",
    title: "WHERE TO DINE",
    items: [
      {
        tag: "Main Building · 120 Covers",
        title: "THE RESTAURANT",
        description:
          "Our all-day dining room, thalis at lunch, à la carte in the evening, and room for large family tables.",
        timings: "Breakfast · Lunch · Dinner",
        ctaText: "VIEW MENU →",
        ctaLink: "#signature-flavours",
        image: "/dining/banner-photo.png",
      },
      {
        tag: "Open-Air · Evenings",
        title: "ROOFTOP RESTAURANT",
        description:
          "Dinner above the estate, with lamplit courtyards below and the desert sky above.",
        timings: "Dinner  [timings to confirm]",
        ctaText: "RESERVE A TABLE →",
        ctaLink: "#signature-flavours",
        image: "/dining/photo.jpg",
      },
      {
        tag: "Clubhouse · All Day",
        title: "CLUBHOUSE CAFÉ",
        description:
          "Coffee, chai and light bites between a swim, a game of bowling and the spa.",
        timings: "All day  [timings to confirm]",
        ctaText: "DISCOVER →",
        ctaLink: "#signature-flavours",
        image: "/dining/photo2.jpg",
      },
      {
        tag: "Pool Deck · Afternoons",
        title: "POOLSIDE DINING",
        description:
          "Fresh juices, chaat and light plates served beside the pool and the kids' pool.",
        timings: "Afternoons  [timings to confirm]",
        ctaText: "DISCOVER →",
        ctaLink: "#signature-flavours",
        image: "/dining/photo3.jpg",
      },
    ],
  },

  signatureFlavours: {
    eyebrow: "From Our Kitchens",
    title: "SIGNATURE FLAVOURS",
    subtitle:
      "A taste of what we serve. Seasonal menus are shared at the table.",
    categories: [
      {
        title: "RAJASTHANI CLASSICS",
        items: [
          {
            name: "DAL BAATI CHURMA",
            tag: "SIGNATURE",
            description: "Baked wheat baatis, panchmel dal and sweet churma.",
          },
          {
            name: "GATTE KI SABZI",
            tag: "CLASSIC",
            description: "Gram-flour dumplings in a tangy yoghurt curry.",
          },
          {
            name: "KER SANGRI",
            tag: "OF THE DESERT",
            description:
              "The desert's own beans and berries, slow-cooked with spice.",
          },
          {
            name: "RAJASTHANI THALI",
            tag: "LUNCH",
            description: "A full platter of the region, served at lunch.",
          },
        ],
      },
      {
        title: "SWEETS & CHAI",
        items: [
          {
            name: "GHEWAR",
            tag: "SEASONAL",
            description: "The honeycomb sweet of Rajasthan's festive months.",
          },
          {
            name: "MOONG DAL HALWA",
            tag: "WINTER",
            description: "Slow-roasted, rich with ghee and dry fruit.",
          },
          {
            name: "MALPUA WITH RABRI",
            tag: "FESTIVE",
            description: "Soft, syrup-kissed pancakes with thickened milk.",
          },
          {
            name: "MASALA CHAI",
            tag: "ALL DAY",
            description: "Brewed strong, served after every aarti.",
          },
        ],
      },
    ],
    footnote: "*Dishes and seasons to be confirmed with the kitchen",
  },

  familyFeast: {
    eyebrow: "Celebrations & Groups",
    title: "PLAN A FAMILY FEAST",
    description:
      "From birthday dinners to yatra groups of a hundred, our team will set the table and the menu for your occasion.",
    buttonText: "TALK TO OUR TEAM",
    phone: "+91 12345 12345",
  },

  bookTable: {
    eyebrow: "Reserve a Table",
    title: "BOOK YOUR TABLE",
    subtitle: "Tell us when you would like to dine and how many will join you.",
    image: "/dining/photo.jpg",
    imageCaption: "Every Meal, Made With Devotion",
    phone: "+91 12345 12345",
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "A place of sacred refuge for millions of devotees who journey to Salasar in faith and love, our home must be their sacred companion on every journey.",
    note: "The Standard Greeting of Jai Anjaney Resort",
  },
};
