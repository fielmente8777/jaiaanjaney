import { FinalCtaSectionType } from "@/@types/homePage";
import {
  PresidentialVillaType,
  RoomsHeroType,
  VillasSectionType,
} from "@/@types/roomsPage";

interface RoomPageDataType {
  hero: RoomsHeroType;
  welcomeNote: FinalCtaSectionType;
  villas: VillasSectionType;
  presidentialVilla: PresidentialVillaType;
}

const BOOK_CTA = { text: "Book Now", link: "/contact" };

export const RoomPageData: RoomPageDataType = {
  hero: {
    eyebrow: "Stay at Jai Anjaney",
    title: "Rooms & Suites",
    description:
      "Restful rooms, a singular suite and eighteen private villas, each a calm return from darshan, celebration or the long road to Salasar.",
    // Export the three-arch artwork from Figma and save it as /public/rooms-hero.png
    image: "/rooms.png",
    imageAlt: "Jai Anjaney resort facade seen through three arches",
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "Salasar wakes for Balaji. For generations, devotees have travelled to Salasar Balaji Dham, and every stay is shaped around that journey, with restful rooms, early-start comfort, and a pure vegetarian, alcohol-free table.",
    note: "The Reason Many Arrive",
  },

  villas: {
    eyebrow: "In the Garden Quarter",
    title: "The Villas",
    description:
      "Eighteen villas set apart from the main building, near the lawns and the pool, for families who want a little more space and a lot more quiet.",
    items: [
      {
        id: "silver",
        label: "04 · 32 KEYS",
        title: "Silver Villa",
        tagline: "A garden-side address",
        description:
          "Villa living in the estate's quieter quarter, with arched balconies and a short stroll to the lawns and the pool.",
        specs: ["2 Adults + 1 Child", "≈ 400 sq ft", "King Bed"],
        image: "/room.png",
        bookCta: BOOK_CTA,
        viewCta: { text: "View villa", link: "/rooms-and-suites/silver-villa" },
      },
      {
        id: "gold",
        label: "05 · 24 KEYS",
        title: "Gold Villa",
        tagline: "Made for families",
        description:
          "Two bedrooms around a living room of their own, for families who travel together for a yatra, a wedding or a long weekend.",
        specs: ["4 Adults + 2 Children", "≈ 850 sq ft", "2 King Beds"],
        image: "/room.png",
        bookCta: BOOK_CTA,
        viewCta: { text: "View villa", link: "/rooms-and-suites/gold-villa" },
      },
      // TODO: placeholder — the Figma frame repeats the Silver Villa here. Replace with the real third villa.
      {
        id: "villa-3",
        label: "04 · 32 KEYS",
        title: "Silver Villa",
        tagline: "A garden-side address",
        description:
          "Villa living in the estate's quieter quarter, with arched balconies and a short stroll to the lawns and the pool.",
        specs: ["2 Adults + 1 Child", "≈ 400 sq ft", "King Bed"],
        image: "/room.png",
        bookCta: BOOK_CTA,
        viewCta: { text: "View villa", link: "/rooms-and-suites/silver-villa" },
      },
    ],
  },

  presidentialVilla: {
    eyebrow: "07 · The Crown of the Estate",
    title: "The Presidential Villa",
    subtitle: "VVIP Villa · Only two on the estate",
    description:
      "A three-room residence wrapped around a grand living salon, a private pantry and a pool pavilion of its own. Evenings begin under the chandelier and end beside lamplit water — entirely yours, from the gate to the lawn.",
    image: "/room.png",
    features: [
      { icon: "pool", label: "Private pool & pavilion" },
      { icon: "salon", label: "Grand living salon" },
      { icon: "pantry", label: "Private pantry" },
      { icon: "bedrooms", label: "Three bedrooms" },
      { icon: "transfer", label: "Golf-cart transfers" },
      { icon: "guests", label: "Up to 6 adults" },
    ],
    specs: ["≈ 2,400 sq ft", "3 King Beds", "Private lawn"],
    bookCta: BOOK_CTA,
    viewCta: {
      text: "View the Villa",
      link: "/rooms-and-suites/presidential-villa",
    },
  },
};
