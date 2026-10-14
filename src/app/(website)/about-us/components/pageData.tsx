import {
  AboutCtaType,
  AboutHeroType,
  StorySectionType,
  ValuesSectionType,
  VisionSectionType,
} from "@/@types/aboutPage";
import { VisitCtaType } from "@/@types/galleryPage";
import { EventFormatsType } from "@/@types/meetingsPage";
import { contact } from "@/utils/constent";
import { ExpIcon, FamilyIcon, SattvicIcon } from "@/utils/icons";
import {
  AwardIcon,
  CorporateIcon,
  GuestIcon,
  ParkingIcon,
  PoolIcon,
  ProductIcon,
  TempleIcon,
} from "@/utils/Room";

interface AboutPageData {
  hero: AboutHeroType;
  slidingTitleItems: string[];
  story: StorySectionType;
  vision: VisionSectionType;
  values: ValuesSectionType;
  welcomeNote: AboutCtaType;
  formats: EventFormatsType;
  visitCta: VisitCtaType;
}

export const aboutPageData: AboutPageData = {
  hero: {
    title: "Stay in the spirit of Salasar",
    description:
      "A resort built beside a place of faith, for the people who travel to it, together.",
    images: ["/about.jpg"],
  },

  slidingTitleItems: [
    "Jai Anjaney changes that, bringing devotion, convenience, and comfort together under one roof. For generations, pilgrims to Salasar had to choose between staying close to the temple and enjoying true comfort.",
  ],

  story: {
    title: "A land older than the resort",
    description: [
      "Long before the first stone was laid, this stretch of Rajasthan was a resting place for the faithful: dusty roads, wayside wells and a temple that has drawn devotees for generations.",
      "We built in its shadow, not its shade. Grand pillars and arched corridors honour the sanctity around us instead of competing with it. Saffron orange anchors our identity, and our kitchens serve only pure vegetarian food.",
    ],
    images: ["/room.png", "/bnr.png"],
  },

  vision: {
    title: "Our vision",
    items: [
      {
        image: "/room.png",
        description:
          "To be Rajasthan's most distinguished spiritual resort, where pilgrimage hospitality means grand spaces, refined comfort and timeless cultural elegance.",
      },
      // {
      //   image: "/room.png",
      //   description: "Give pilgrims and families a comfortable, peaceful stay",
      // },
      // {
      //   image: "/room.png",
      //   description: "Host weddings and celebrations on a grand scale",
      // },
      // {
      //   image: "/room.png",
      //   description: "Offer villa living and generous space to relax",
      // },
      // {
      //   image: "/room.png",
      //   description:
      //     "Make every guest's journey feel cared for, from arrival to departure",
      // },
    ],
  },

  //   values: {
  //     title: "What we hold to",
  //     image: "/about/lounge.png",
  //     items: [
  //       {
  //         icon: "temple",
  //         title: "Timeless hospitality",
  //         description:
  //           "Warmth, grace and attention in every interaction. We treat hospitality as a feeling, not a service.",
  //       },
  //       // The snapshot shows only the first value. The three below are placeholders, so replace them with your own copy.
  //       {
  //         icon: "devotion",
  //         title: "Faith, first",
  //         description:
  //           "Our spaces honour the temple and the people who travel to it, with quiet respect in every detail.",
  //       },
  //       {
  //         icon: "food",
  //         title: "Pure vegetarian",
  //         description:
  //           "Our kitchens serve only pure vegetarian food, prepared with care for every guest.",
  //       },
  //       {
  //         icon: "heritage",
  //         title: "Rooted in heritage",
  //         description:
  //           "Grand pillars, arched corridors and Rajasthani craft carry the character of the land into every room.",
  //       },
  //     ],
  //   },

  values: {
    title: "What we hold to",
    items: [
      {
        icon: "temple" as const,
        title: "Timeless hospitality",
        description:
          "Warmth, grace and attention in every interaction. We treat hospitality as a feeling, not a service.",
        image: "/temple1.png",
      },
      // Only the first value is in the snapshot. The rest are placeholders.
      {
        icon: "devotion" as const,
        title: "Spiritual connection",
        description:
          "Calm spaces for reflection, a temple within the grounds, and the sacred circuit close by.",
        image: "/temple2.png",
      },
      {
        icon: "food" as const,
        title: "Grand experiences",
        description:
          "From weddings to family holidays, scale and craft that make occasions memorable.",
        image: "/temple1.png",
      },
      {
        icon: "heritage" as const,
        title: "Refined luxury",
        description: "Spacious architecture and quiet comfort, without excess.",
        image: "/temple2.png",
      },
      {
        icon: "heritage" as const,
        title: "Family first",
        description:
          "Spaces where several generations can stay, eat, play and pray together.",
        image: "/temple2.png",
      },
    ],
  },
  formats: {
    eyebrow: "What Guides Us",
    title: "Our Values",
    desc: "Five beliefs behind every stay, every celebration and every welcome at the gate.",
    items: [
      {
        icon: <GuestIcon />,
        title: "Heartfelt Hospitality",
        description:
          "Warmth, grace and genuine care in every interaction — hospitality as a feeling, not a service.",
      },
      {
        icon: <ProductIcon />,
        title: "Refined Luxury",
        description:
          "Spacious architecture, elegant interiors and seamless comfort, never extravagance for its own sake.",
      },
      {
        icon: <TempleIcon />,
        title: "Spiritual Connection",
        description:
          "The sacred energy of Salasar, held in calm and grounding spaces for reflection.",
      },
      {
        icon: <FamilyIcon />,
        title: "Family First",
        description:
          "Spaces that bring generations together — to celebrate, to play and to rest.",
      },
      {
        icon: <ExpIcon />,
        title: "Grand Experiences",
        description:
          "From weddings to weekend escapes, every occasion shaped with scale and care.",
      },
      {
        icon: <SattvicIcon />,
        title: "Sattvic by Choice",
        description:
          "Pure vegetarian kitchens and an alcohol-free estate, in keeping with the town we serve.",
      },
    ],
  },
  visitCta: {
    eyebrow: "Plan Your Visit",
    title: "Come for the Stay. Stay for the Feeling.",
    description:
      "Speak to our team about rooms, villas, celebrations and yatra stays.",
    cta: { text: "Enquire Now", link: contact.WhatsappCta },
    secondaryCta: { text: "Call +91 12345 12345", link: contact.callCta },
  },
  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "Plan a stay, a celebration or a pilgrimage. Our team will help with rooms, venues and transport to the temples.",

    cta: { text: "Contact Us", link: "/contact" },
  },
};
