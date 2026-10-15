import { WeddingsPageDataType } from "@/@types/weddingsPage";
import { contact } from "@/utils/constent";

export const WeddingsPageData: WeddingsPageDataType = {
  hero: {
    eyebrow: "Sacred Vows, Grand Celebrations",
    title: "WEDDINGS AT <br /> JAI ANJANEY",
    description:
      "Pheras blessed beside a temple town, celebrations across lawns and chandeliered halls, and every guest staying on one estate.",
    image: "/room.png",
  },

  oneEstate: {
    eyebrow: "Residential & Non-Residential",
    title: "ONE ESTATE, EVERY <br /> CEREMONY",
    paragraphs: [
      "Residential and non-residential celebrations across 151 rooms, banquet halls, open lawns and an on-site temple for pre-wedding rituals.",
      "Families arrive, settle into rooms and villas, and never need to leave: haldi on the lawn, sangeet under the chandeliers, pheras at the mandap and a reception beneath the stars.",
    ],
    highlights: [
      {
        icon: "rooms",
        text: "151 rooms & villa rooms for guests",
      },
      {
        icon: "mandir",
        text: "On-site mandir for pujas",
      },
      {
        icon: "catering",
        text: "Pure vegetarian catering",
      },
      {
        icon: "golf",
        text: "Golf carts for elders",
      },
    ],
    ctaText: "PLAN YOUR WEDDING",
    ctaLink: "#plan-wedding",
    image: "/wedding.png",
    imageAlt: "Traditional Indian wedding rituals at Jai Anjaney",
  },

  fourCeremonies: {
    eyebrow: "The Celebration",
    title:
      "FOUR CEREMONIES, <br class='block md:hidden' /> ONE <br class='hidden md:block' /> SACRED GROUND",
    blessingText: "जय श्री बालाजी",
    ceremonies: [
      {
        id: "haldi-mehendi",
        day: "DAY ONE",
        title: "HALDI & MEHENDI",
        description:
          "Bright afternoons on Party Lawn II, with music and marigolds.",
      },
      {
        id: "sangeet",
        day: "DAY ONE · EVENING",
        title: "SANGEET",
        description:
          "Dance floors and chandeliers in the Grand Banquet Hall.",
      },
      {
        id: "pheras",
        day: "DAY TWO",
        title: "PHERAS",
        description:
          "Vows at the open-air mandap, among water and lamplight.",
      },
      {
        id: "reception",
        day: "DAY TWO · NIGHT",
        title: "RECEPTION",
        description:
          "Dinner for up to a thousand across the lawns.",
      },
    ],
  },

  villas: {
    eyebrow: "For the Families",
    title: "VILLAS FOR THE WEDDING PARTY",
    description:
      "Give each family its own address: eighteen villas in a quiet garden quarter, from Silver and Gold to the Diamond Villas with plunge pools — and two Presidential Villas for the guests of honour.",
    quote:
      'Room blocks for the baraat, villas for the families, and a suite for the couple.',
    ctaText: "EXPLORE ROOMS & VILLAS →",
    ctaLink: "/rooms-and-suites",
    image: "/wedding-photo.jpg",
    imageAlt: "Luxury villas for wedding party at Jai Anjaney",
  },

  weddingsBanner: {
    title: "Grand Ho Toh <br class='sm:hidden' /> Jai Anjaney Ho.",
    subtitle: "CELEBRATE AT JAI ANJANEY",
  },

  planWedding: {
    eyebrow: "Begin Planning",
    title: "PLAN YOUR WEDDING",
    subtitle:
      "Tell us about your dates, guests and ceremonies — our wedding team will share venues, room blocks and menus.",
    image: "/banquet/banquet-banner.jpg",
    imageCaption: "Where Every Story Stays Blessed.",
    phone: contact.phone[0] || "+91 93149 19191",
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "A place of sacred refuge for millions of devotees who journey to Salasar in faith and love, our home must be their sacred companion on every journey.",
    note: "The Standard Greeting of Jai Anjaney Resort",
  },
};
