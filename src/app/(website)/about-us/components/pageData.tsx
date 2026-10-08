import {
  AboutCtaType,
  AboutHeroType,
  StorySectionType,
  ValuesSectionType,
  VisionSectionType,
} from "@/@types/homePage";

interface AboutPageData {
  hero: AboutHeroType;
  slidingTitleItems: string[];
  story: StorySectionType;
  vision: VisionSectionType;
  values: ValuesSectionType;
  welcomeNote: AboutCtaType;
}

export const aboutPageData: AboutPageData = {
  hero: {
    title: "Stay in the spirit of Salasar",
    description:
      "A resort built beside a place of faith, for the people who travel to it, together.",
    images: ["/bnr.png"],
  },

  slidingTitleItems: [
    "Jai Anjaney changes that, bringing devotion, convenience, and comfort together under one roof. &nbsp; ◈ &nbsp; For generations, pilgrims to Salasar had to choose between staying close to the temple and enjoying true comfort. &nbsp; ◈ &nbsp;",
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
      {
        image: "/room.png",
        description: "Give pilgrims and families a comfortable, peaceful stay",
      },
      {
        image: "/room.png",
        description: "Host weddings and celebrations on a grand scale",
      },
      {
        image: "/room.png",
        description: "Offer villa living and generous space to relax",
      },
      {
        image: "/room.png",
        description:
          "Make every guest's journey feel cared for, from arrival to departure",
      },
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

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "Plan a stay, a celebration or a pilgrimage. Our team will help with rooms, venues and transport to the temples.",

    cta: { text: "Contact Us", link: "/contact" },
  },
};
