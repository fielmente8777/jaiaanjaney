import type {
  EnquirySectionType,
  FeatureColumnsType,
  NoticeStripType,
  SplitSectionType,
  StatementBannerType,
} from "@/@types/commonSections";
import type { HeroType } from "@/@types/homePage";
import { GolfCart } from "@/utils/icons";
import { BedIcon, GolfCartIcon, PureVegIcon, TempleIcon } from "@/utils/Room";

interface WeddingsPageDataType {
  hero: HeroType;
  intro: SplitSectionType;
  ceremonies: FeatureColumnsType;
  notice: NoticeStripType;
  villas: SplitSectionType;
  banner: StatementBannerType;
  enquiry: EnquirySectionType;
}

export const weddingsPageData: WeddingsPageDataType = {
  hero: {
    eyebrow: "Sacred Vows, Grand Celebrations",
    title: "Weddings at Jai Anjaney",
    description:
      "Pheras blessed beside a temple town, celebrations across lawns and chandeliered halls, and every guest staying on one estate.",
    images: ["/weddings/hero.jpg"],
  },

  intro: {
    eyebrow: "Residential & Non-Residential",
    title: "One Estate, Every Ceremony",
    description: [
      "Residential and non-residential celebrations across 151 rooms, banquet halls, open lawns and an on-site temple for pre-wedding rituals.",
      "Families arrive, settle into rooms and villas, and never need to leave: haldi on the lawn, sangeet under the chandeliers, pheras at the mandap and a reception beneath the stars.",
    ],
    image: "/weddings/intro.jpg",
    imageAlt: "A bride at her wedding at Jai Anjaney",
    // highlights: [
    //   { icon: <BedIcon />, label: "151 rooms & villa rooms for guests" },
    //   { icon: <TempleIcon />, label: "On-site mandir for pujas" },
    //   { icon: <PureVegIcon />, label: "Pure vegetarian catering" },
    //   { icon: <GolfCart />, label: "Golf carts for elders" },
    // ],
    highlights: [
      {
        icon: <BedIcon />,
        label: "151 rooms & villa rooms for guests",
      },
      {
        icon: <TempleIcon />,
        label: "On-site mandir for pujas",
      },
      {
        icon: <PureVegIcon />,
        label: "Pure vegetarian catering",
      },
      {
        icon: <GolfCartIcon />,
        label: "Golf carts for elders",
      },
    ],
    cta: { text: "Plan your wedding", link: "#enquiry" },
  },

  ceremonies: {
    eyebrow: "The ceremonies",
    title: "Four Ceremonies, One Sacred Ground",
    items: [
      {
        label: "01 · Pre-wedding",
        title: "Mehendi & Haldi",
        description:
          "Sunlit lawns, marigold and music for the first celebrations.",
      },
      {
        label: "02 · Evening",
        title: "Sangeet",
        description:
          "An open-air theatre and ballroom made for a night of dance.",
      },
      {
        label: "03 · The vows",
        title: "Pheras",
        description:
          "A mandap under the open sky, a short walk from every room.",
      },
      {
        label: "04 · Reception",
        title: "Grand Banquet",
        description:
          "A pillarless ballroom that seats the whole extended family.",
      },
    ],
    footnote: "जय श्री बालाजी",
  },

  notice: {
    text: "Please note: dates are confirmed on receipt of the booking advance. Speak to our wedding team for peak-season availability.",
  },

  villas: {
    eyebrow: "Stay together",
    title: "Villas for the Wedding Party",
    description: [
      "Private villas keep the families close and the celebrations private, with courtyards for the quiet moments between rituals.",
    ],
    quote:
      "Rest here for the festival; relax for the families; and for the couple.",
    image: "/weddings/villas.jpg",
    imageAlt: "A villa at Jai Anjaney",
    imageShape: "arch",
    imagePosition: "right",
    cta: { text: "Explore villas", link: "/rooms-and-suites" },
    ctaVariant: "link",
  },

  banner: {
    title: "Where Every Rite Finds Its Place",
  },

  enquiry: {
    id: "enquiry",
    eyebrow: "Begin here",
    title: "Plan Your Wedding",
    description:
      "Tell us about your celebration and our wedding team will reply with a tailored proposal within one working day.",
    image: "/weddings/enquiry.jpg",
    imageCaption: "Where every rite feels like home",
    fields: [
      {
        label: "Full name",
        name: "name",
        autoComplete: "name",
        required: true,
      },
      {
        label: "Phone",
        name: "phone",
        type: "tel",
        autoComplete: "tel",
        required: true,
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        autoComplete: "email",
        required: true,
      },
      { label: "Wedding date", name: "date", type: "date" },
      {
        as: "select",
        label: "Ceremony",
        name: "ceremony",
        placeholder: "Select",
        required: true,
        options: [
          "Full wedding",
          "Mehendi / Haldi",
          "Sangeet",
          "Pheras",
          "Reception",
        ],
      },
      {
        as: "select",
        label: "Guests",
        name: "guests",
        placeholder: "Select",
        required: true,
        options: ["Up to 100", "100–250", "250–400", "400–600", "600+"],
      },
      {
        as: "textarea",
        label: "Your wedding",
        name: "message",
        placeholder:
          "Preferred dates, number of rooms, anything we should know",
        className: "sm:col-span-2",
      },
    ],
    submitLabel: "Request a proposal",
    successMessage:
      "Thank you. Our wedding team will get back to you within one working day.",
    errorMessage: "We couldn't send your request. Please try again or call us.",
    phoneLabel: "Prefer to talk?",
    phone: "+91 12345 12345",
    endpoint: "",
  },
};
