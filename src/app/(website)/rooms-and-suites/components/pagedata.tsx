import {
  StayRootedSectionType,
  BuildingRoomsSectionType,
  ThoughtfulComfortsSectionType,
} from "@/@types/roomsPage";
import { FinalCtaSectionType } from "@/@types/homePage";

export const RoomPageData: {
  stayRooted: StayRootedSectionType;
  buildingRooms: BuildingRoomsSectionType;
  thoughtfulComforts: ThoughtfulComfortsSectionType;
  welcomeNote: FinalCtaSectionType;
} = {
  stayRooted: {
    eyebrow: "Rest, Ritual & Return",
    title: "A Stay Rooted in Salasar",
    subtitle:
      "Mornings begin with temple bells. Evenings return to lamplit courtyards.",
    description:
      "Every room at Jai Anjaney keeps time with a pilgrim town. Inside, the estate's neo-classical grandeur softens into warm marble, carved wood and linen in the colours of sandstone and saffron, whether you arrive for darshan, a wedding or a long-awaited family break.",
    stats: [
      {
        value: "123",
        label: "Keys",
      },
      {
        value: "151",
        label: "Rooms",
      },
      {
        value: "7",
        label: "Ways to Stay",
      },
    ],
    images: {
      main: "/rooms/intro-image.png",
      small: "/rooms/intro-new-image.jpg",
    },
  },

  buildingRooms: {
    eyebrow: "In the Main Building",
    title: "Rooms & Suite",
    description:
      "Forty-nine keys on the upper floors of the main building, calm, well connected, and easy to come home to after a long day of darshan.",
    rooms: [
      {
        number: "01",
        tag: "46 Rooms",
        title: "Deluxe Room",
        subtitle: "Restful by design",
        description:
          "Light-filled rooms finished in warm marble, soft linen and carved wood, an easy return after early darshan.",
        specs: {
          guests: "2 Adults + 1 Child",
          size: "≈ 320 sq ft",
          bed: "King or Twin",
        },
        image: "/rooms/room1.png",
        images: ["/rooms/room1.png", "/rooms/room2.png", "/rooms/room3.png"],
        cta: {
          viewText: "View Room",
          viewLink: "#",
          bookText: "Book Now",
          bookLink: "/contact",
        },
      },
      {
        number: "02",
        tag: "Only 2",
        title: "Super Deluxe Room",
        subtitle: "Room to linger",
        description:
          "A larger room with its own sitting corner, space for elders to rest and for the family to gather over evening chai.",
        specs: {
          guests: "3 Adults",
          size: "≈ 420 sq ft",
          bed: "King Bed",
        },
        image: "/rooms/room2.png",
        images: ["/rooms/room2.png", "/rooms/room3.png", "/rooms/room1.png"],
        cta: {
          viewText: "View Room",
          viewLink: "#",
          bookText: "Book Now",
          bookLink: "/contact",
        },
      },
      {
        number: "03",
        tag: "One of One",
        title: "The Anjaney Suite",
        subtitle: "A little ceremony",
        description:
          "The main building's one & only suite, a separate living room & bedroom for guests who like their stay to feel like an occasion.",
        specs: {
          guests: "2 Adults + 2 Children",
          size: "≈ 650 sq ft",
          bed: "King Bed",
        },
        image: "/rooms/room3.png",
        images: ["/rooms/room3.png", "/rooms/room1.png", "/rooms/room2.png"],
        cta: {
          viewText: "View Suite",
          viewLink: "#",
          bookText: "Book Now",
          bookLink: "/contact",
        },
      },
    ],
  },

  thoughtfulComforts: {
    eyebrow: "In Every Room & Villa",
    title: "Thoughtful Comforts",
    subtitle:
      "The small things, done with care, so rest comes easily, whatever brought you to Salasar.",
    items: [
      {
        title: "High-Speed Wi-Fi",
        subtitle: "Across the estate",
        icon: "wifi",
      },
      {
        title: "Air Conditioning",
        subtitle: "Individually controlled",
        icon: "ac",
      },
      {
        title: "King-Size Beds",
        subtitle: "Fine linen & pillows",
        icon: "bed",
      },
      {
        title: "In-Room Dining",
        subtitle: "Pure vegetarian menu",
        icon: "dining",
      },
      {
        title: "Smart TV",
        subtitle: "Satellite & streaming",
        icon: "tv",
      },
      {
        title: "In-Room Safe",
        subtitle: "For valuables & papers",
        icon: "safe",
      },
      {
        title: "Bath Amenities",
        subtitle: "Jai Anjaney signature range",
        icon: "bath",
      },
      {
        title: "Rain Shower",
        subtitle: "Walk-in, marble-lined",
        icon: "shower",
      },
      {
        title: "Tea & Coffee",
        subtitle: "In-room kettle & tray",
        icon: "coffee",
      },
      {
        title: "Daily Housekeeping",
        subtitle: "Turn-down on request",
        icon: "housekeeping",
      },
      {
        title: "Parking",
        subtitle: "For cars & coaches",
        icon: "parking",
      },
      {
        title: "Golf-Cart Rides",
        subtitle: "Room to mandir to lawn",
        icon: "golf-cart",
      },
    ],
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "Salasar wakes for Balaji. For generations, devotees have travelled to Salasar Balaji Dham, and every stay is shaped around that journey, with restful rooms, early-start comfort, and a pure vegetarian, alcohol-free table.",
    note: "The Reason Many Arrive",
  },
};