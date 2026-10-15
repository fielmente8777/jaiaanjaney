import type {
  EnquirySectionType,
  FeatureColumnsType,
  NoticeStripType,
  SplitSectionType,
  StatementBannerType,
} from "@/@types/commonSections";
import type { HeroType } from "@/@types/homePage";
import { GolfCartIcon, PureVegIcon, TempleIcon, BedIcon } from "@/utils/Room";

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
    eyebrow: "The Celebration",
    title: "Four Ceremonies, One Sacred Ground",
    items: [
      {
        label: "Day One",
        title: "Haldi & Mehendi",
        description:
          "Bright afternoons on Party Lawn II, with music and marigolds.",
      },
      {
        label: "Day One · Evening",
        title: "Sangeet",
        description: "Dance floors and chandeliers in the Grand Banquet Hall.",
      },
      {
        label: "Day Two",
        title: "Pheras",
        description: "Vows at the open-air mandap, among water and lamplight.",
      },
      {
        label: "Day Two · Night",
        title: "Reception",
        description: "Dinner for up to a thousand across the lawns.",
      },
    ],
    footnote: "जय श्री बालाजी",
  },

  notice: {
    text: "Please note: dates are confirmed on receipt of the booking advance. Speak to our wedding team for peak-season availability.",
  },

  villas: {
    eyebrow: "For the Families",
    title: "Villas for the Wedding Party",
    description: [
      "Give each family its own address: eighteen villas in a quiet garden quarter, from Silver and Gold to the Diamond Villas with plunge pools and two Presidential Villas for the guests of honour.",
    ],
    quote:
      "Room blocks for the baraat, villas for the families, and a suite for the couple.",
    image: "/weddings/villas.jpg",
    imageAlt: "A villa at Jai Anjaney",
    imageShape: "arch",
    imagePosition: "right",
    cta: { text: "Explore villas", link: "/rooms-and-suites" },
    ctaVariant: "link",
  },

  banner: {
    title: "Grand Ho Toh Jai Anjaney Ho.",
    subtitle: "Celebrate At Jai Anjaney",
  },

  // enquiry: {
  //   id: "enquiry",
  //   formName: "wedding-enquiry",
  //   eyebrow: "Begin Planning",
  //   title: "Plan Your Wedding",
  //   description:
  //     "Tell us about your dates, guests and ceremonies — our wedding team will share venues, room blocks and menus.",
  //   image: "/weddings/enquiry.jpg",
  //   imageCaption: "Where Every Stay Feels Blessed",
  //   fields: [
  //     { label: "Full name", name: "name", placeholder: "Your name", autoComplete: "name", required: true },
  //     { label: "Phone", name: "phone", type: "tel", placeholder: "+91", autoComplete: "tel", required: true },
  //     { label: "Email", name: "email", type: "email", placeholder: "you@example.com", autoComplete: "email", required: true },
  //     { as: "daterange", label: "Wedding dates", name: "weddingDates", placeholder: "Select dates", required: true },
  //     {
  //       as: "select",
  //       label: "Guests",
  //       name: "guests",
  //       placeholder: "Approx. number",
  //       required: true,
  //       options: ["Up to 100", "100–250", "250–400", "400–600", "600+"],
  //     },
  //     {
  //       // PLACEHOLDER options — replace with the real room-block ranges.
  //       as: "select",
  //       label: "Rooms needed",
  //       name: "rooms",
  //       placeholder: "Approx. number",
  //       options: ["No rooms needed", "Up to 20", "20–50", "50–100", "100–151"],
  //     },
  //     {
  //       as: "textarea",
  //       label: "Message",
  //       name: "message",
  //       placeholder: "Ceremonies you are planning",
  //       className: "sm:col-span-2",
  //     },
  //   ],
  //   submitLabel: "Send wedding enquiry",
  //   successMessage:
  //     "Thank you. Our wedding team will get back to you within one working day.",
  //   errorMessage: "We couldn't send your request. Please try again or call us.",
  //   phoneLabel: "Or call our team",
  //   phone: "+91 12345 12345",
  //   endpoint: "",
  // },
  enquiry: {
    id: "enquiry",
    eyebrow: "Begin Planning",
    title: "Plan Your Wedding",
    description:
      "Tell us about your dates, guests and ceremonies our wedding team will share venues, room blocks and menus.",
    image: "/weddings/enquiry.jpg",
    imageCaption: "Where Every Stay Feels Blessed",
    fields: [
      {
        label: "Full name",
        name: "name",
        placeholder: "Your name",
        autoComplete: "name",
        required: true,
      },
      {
        label: "Phone",
        name: "phone",
        type: "tel",
        placeholder: "+91",
        autoComplete: "tel",
        required: true,
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "you@example.com",
        autoComplete: "email",
        required: true,
      },
      {
        as: "daterange",
        label: "Wedding dates",
        name: "dates",
        placeholder: "Select dates",
      },
      {
        as: "select",
        label: "Guests",
        name: "guests",
        placeholder: "Approx. number",
        options: ["Up to 100", "100–250", "250–400", "400–600", "600+"],
      },
      {
        as: "select",
        label: "Rooms needed",
        name: "rooms",
        placeholder: "Approx. number",
        options: ["Up to 20", "20–50", "50–100", "100–151"],
      },
      {
        as: "textarea",
        label: "Message",
        name: "message",
        placeholder: "Ceremonies you are planning",
        className: "sm:col-span-2",
      },
    ],
    submitLabel: "Send wedding enquiry",
    successMessage:
      "Thank you. Our wedding team will get back to you within one working day.",
    errorMessage: "We couldn't send your enquiry. Please try again or call us.",
    phoneLabel: "Or call our team",
    phone: "+91 12345 12345",
    endpoint: "",
  },
};
