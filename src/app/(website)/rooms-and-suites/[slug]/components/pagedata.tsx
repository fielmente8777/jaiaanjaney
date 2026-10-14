import type {
  GoodToKnowType,
  RoomDetailPageType,
  VillaDayType,
} from "@/@types/presidentialVillaPage";
import { contact } from "@/utils/constent";

import {
  AcIcon,
  AreaIcon,

  BathIcon,
  BedIcon,
  DiningIcon,
  FoodIcon,
  GolfCartIcon,
  GuestIcon,
  LawnIcon,

  LocationIcon,

  PantryIcon,
  ParkingIcon,
  PoolIcon,
  ProductIcon,
  RainShowerIcon,
  SafeIcon,
  SalonIcon,
  TeaCoffeeIcon,
  TempleIcon,
  TurnDownIcon,
  TvIcon,
  WifiIcon,
} from "@/utils/Room";



const STAY_CONNECTED = {
  title: "Stay Connected",
  items: [
    { label: "High-speed Wi-Fi", icon: <WifiIcon /> },
    { label: "Smart TV", icon: <TvIcon /> },
    { label: "In-room safe", icon: <SafeIcon /> },
    { label: "Tea & coffee tray", icon: <TeaCoffeeIcon /> },
  ],
};

const SERVICE = {
  title: "Service",
  items: [
    { label: "Vegetarian in-room dining", icon: <DiningIcon /> },
    { label: "Daily housekeeping", icon: <TurnDownIcon /> },
    { label: "Golf-cart rides on the estate", icon: <GolfCartIcon /> },
    { label: "Parking for cars & coaches", icon: <ParkingIcon /> },
  ],
};

const MANDIR_AND_LAWNS = [
  { label: "On-site mandir, steps away", icon: <TempleIcon /> },
  { label: "Meditation lawns nearby", icon: <LawnIcon /> },
];

const ROOM_GOOD_TO_KNOW: GoodToKnowType = {
  eyebrow: "Before You Arrive",
  title: "Good to Know",
  description:
    "Questions about your stay? Our reservations desk is happy to help.",
  callLabel: `Call ${contact.phone[0]}`,
  cta: { text: "See Rooms & Suites", link: "/rooms-and-suites" },
  facts: [
    { label: "Check-in", value: "[Time — to confirm]" },
    { label: "Check-out", value: "[Time — to confirm]" },
    { label: "Dining", value: "100% vegetarian, alcohol-free estate" },
    { label: "On the Estate", value: "On-site mandir · Golf carts available" },
    { label: "Children & Extra Bed", value: "[Policy — to confirm]" },
    { label: "Cancellation", value: "[Policy — to confirm]" },
  ],
};

/** "A Day from the …" — dawn, morning & evening are the same everywhere. */
const buildDay = (
  title: string,
  afternoon: { title: string; description: string }
): VillaDayType => ({
  eyebrow: "Close to the Sacred",
  title,
  image: "/room.png",
  items: [
    {
      time: "Dawn",
      title: "First Aarti",
      description: "Join the morning aarti at the on-site mandir.",
    },
    {
      time: "Morning",
      title: "Darshan",
      description: "Salasar Balaji Dham, 00 KM from the estate.",
    },
    { time: "Afternoon", ...afternoon },
    {
      time: "Evening",
      title: "Sattvic Dinner",
      description: "A pure vegetarian table under the lamps.",
    },
  ],
  closing: "जय श्री बालाजी",
});

/* ───────────────────────── Room pages ───────────────────────── */

export const RoomDetailPages: RoomDetailPageType[] = [
  /* ───────── Deluxe Room ───────── */
  {
    slug: "deluxe-room",
    hero: {
      title: "Deluxe Room",
      description: "Restful by design — an easy return after early darshan.",
      images: ["/rooms/room1.png", "/rooms/room2.png", "/rooms/room3.png"],
    },
    highlights: {
      items: [
        { icon: <GuestIcon />, label: "2 Adults + 1 Child" },
        { icon: <AreaIcon />, label: "≈ 320 sq ft" },
        { icon: <BedIcon />, label: "King or Twin" },
        { icon: <RainShowerIcon />, label: "Rain shower in marble" },
        { icon: <LocationIcon />, label: "Main Building, upper floors" },
      ],
    },
    gallery: {
      eyebrow: "The Room",
      title: "Calm, Light and Close to Everything",
      description:
        "The Deluxe Room is the heart of the main building — forty-six light-filled rooms on the upper floors, finished in warm marble, soft linen and carved wood. It is an easy place to come home to after an early start and a long day of darshan. A king or twin bed, a quiet seating corner and a marble bath with a rain shower keep everything within reach, with the restaurant, the mandir and the lawns a short walk away.",
      images: ["/rooms/room1.png", "/rooms/room2.png", "/rooms/room3.png"],
    },
    amenities: {
      eyebrow: "In This Room",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "King or twin bed, fine linen", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Window seating corner", icon: <SalonIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Bath & Estate",
          items: [
            { label: "Rain shower in marble", icon: <RainShowerIcon /> },
            { label: "Signature bath amenities", icon: <BathIcon /> },
            ...MANDIR_AND_LAWNS,
          ],
        },
        STAY_CONNECTED,
        SERVICE,
      ],
    },
    day: buildDay("A Day from the Deluxe Room", {
      title: "Rest",
      description: "Back to a cool, quiet room and fresh linen.",
    }),
    goodToKnow: ROOM_GOOD_TO_KNOW,
  },

  /* ───────── Super Deluxe Room ───────── */
  {
    slug: "super-deluxe-room",
    hero: {
      title: "Super Deluxe Room",
      description: "Room to linger, with a sitting corner of its own.",
      images: ["/rooms/room2.png", "/rooms/room3.png", "/rooms/room1.png"],
    },
    highlights: {
      items: [
        { icon: <GuestIcon />, label: "3 Adults" },
        { icon: <AreaIcon />, label: "≈ 420 sq ft" },
        { icon: <BedIcon />, label: "King Bed" },
        { icon: <SalonIcon />, label: "Private sitting corner" },
        { icon: <LocationIcon />, label: "Main Building, only two" },
      ],
    },
    gallery: {
      eyebrow: "The Room",
      title: "Space for the Whole Family to Gather",
      description:
        "One of only two on the estate, the Super Deluxe Room adds a generous sitting corner to everything the Deluxe offers — space for elders to rest and for the family to gather over evening chai. Warm marble, carved wood and soft light set an unhurried mood, with a king bed, a marble bath and the restaurant, mandir and lawns a short walk away.",
      images: ["/rooms/room2.png", "/rooms/room3.png", "/rooms/room1.png"],
    },
    amenities: {
      eyebrow: "In This Room",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "King bed, fine linen", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Sofa sitting corner", icon: <SalonIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Bath & Estate",
          items: [
            { label: "Walk-in rain shower", icon: <RainShowerIcon /> },
            { label: "Twin vanities & bath amenities", icon: <BathIcon /> },
            ...MANDIR_AND_LAWNS,
          ],
        },
        STAY_CONNECTED,
        SERVICE,
      ],
    },
    day: buildDay("A Day from the Super Deluxe", {
      title: "Family Time",
      description: "Chai and conversation in your sitting corner.",
    }),
    goodToKnow: ROOM_GOOD_TO_KNOW,
  },

  /* ───────── The Anjaney Suite ───────── */
  {
    slug: "anjaney-suite",
    hero: {
      title: "The Anjaney Suite",
      description: "A little ceremony, with a living room of its own.",
      images: ["/rooms/room3.png", "/rooms/room1.png", "/rooms/room2.png"],
    },
    highlights: {
      items: [
        { icon: <GuestIcon />, label: "2 Adults + 2 Children" },
        { icon: <AreaIcon />, label: "≈ 650 sq ft" },
        { icon: <BedIcon />, label: "King Bed" },
        { icon: <SalonIcon />, label: "Separate living room" },
        { icon: <LocationIcon />, label: "Main Building, one of one" },
      ],
    },
    gallery: {
      eyebrow: "The Suite",
      title: "A Stay That Feels Like an Occasion",
      description:
        "The Anjaney Suite is the main building's one and only suite — a separate living room and bedroom for guests who like their stay to feel like an occasion, whether a family milestone or a long-awaited yatra. Receive visitors in the living room, retreat to a king bedroom behind closed doors, and end the day beneath a rain shower in marble — with the mandir and the restaurant a short walk away.",
      images: ["/rooms/room3.png", "/rooms/room1.png", "/rooms/room2.png"],
    },
    amenities: {
      eyebrow: "In This Suite",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "King bed, fine linen", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Separate living room", icon: <SalonIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Bath & Estate",
          items: [
            { label: "Glass-walled rain shower", icon: <RainShowerIcon /> },
            { label: "Backlit vanities & amenities", icon: <BathIcon /> },
            ...MANDIR_AND_LAWNS,
          ],
        },
        STAY_CONNECTED,
        SERVICE,
      ],
    },
    day: buildDay("A Day from the Anjaney Suite", {
      title: "Receive Family",
      description: "Chai for visiting family in your living room.",
    }),
    goodToKnow: ROOM_GOOD_TO_KNOW,
  },

  /* ───────── Silver Villa ───────── */
  {
    slug: "silver-villa",
    hero: {
      title: "Silver Villa",
      description: "A garden-side address, a short stroll from the lawns.",
      images: ["/room.png", "/about.png"],
    },
    highlights: {
      items: [
        { icon: <GuestIcon />, label: "2 Adults + 1 Child" },
        { icon: <AreaIcon />, label: "≈ 400 sq ft" },
        { icon: <BedIcon />, label: "King Bed" },
        { icon: <ProductIcon />, label: "Arched balcony" },
        { icon: <LocationIcon />, label: "Garden villa quarter" },
      ],
    },
    gallery: {
      eyebrow: "The Villa",
      title: "Villa Living in the Quieter Quarter",
      description:
        "The Silver Villa brings villa living to the estate's quieter garden quarter — arched balconies, carved facades and a short stroll to the lawns and the pool. Inside, a king bedroom with a blossom-panelled headboard, a media wall and wardrobe, and a marble bath with twin vanities keep the stay light and easy.",
      images: ["/room.png", "/about.png", "/bnr.png"],
    },
    amenities: {
      eyebrow: "In This Villa",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "King bed, fine linen", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Arched balcony", icon: <ProductIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Bath & Estate",
          items: [
            { label: "Walk-in shower", icon: <RainShowerIcon /> },
            { label: "Twin vanities & amenities", icon: <BathIcon /> },
            { label: "Short walk to the pool", icon: <PoolIcon /> },
            { label: "Meditation lawns nearby", icon: <LawnIcon /> },
          ],
        },
        STAY_CONNECTED,
        SERVICE,
      ],
    },
    day: buildDay("A Day from the Silver Villa", {
      title: "Garden Hours",
      description: "A slow stroll to the lawns and the pool.",
    }),
    goodToKnow: ROOM_GOOD_TO_KNOW,
  },

  /* ───────── Gold Villa ───────── */
  {
    slug: "gold-villa",
    hero: {
      title: "Gold Villa",
      description: "Made for families, with two bedrooms and a living room.",
      images: ["/room.png", "/about.png"],
    },
    highlights: {
      items: [
        { icon: <GuestIcon />, label: "4 Adults + 2 Children" },
        { icon: <AreaIcon />, label: "≈ 850 sq ft" },
        { icon: <BedIcon />, label: "2 King Beds" },
        { icon: <SalonIcon />, label: "Private living room" },
        { icon: <LocationIcon />, label: "Garden villa quarter" },
      ],
    },
    gallery: {
      eyebrow: "The Villa",
      title: "Two Bedrooms, One Family, One Address",
      description:
        "The Gold Villa gathers two bedrooms around a living room of its own — made for families who travel together for a yatra, a wedding or a long weekend in Salasar. Marble media partitions, walk-in dressing areas and a marble bath give every generation its own space, while the living room keeps everyone close at the end of the day.",
      images: ["/room.png", "/about.png", "/bnr.png"],
    },
    amenities: {
      eyebrow: "In This Villa",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "Two king bedrooms", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Private living room", icon: <SalonIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Bath & Estate",
          items: [
            { label: "Rain shower in marble", icon: <RainShowerIcon /> },
            { label: "Signature bath amenities", icon: <BathIcon /> },
            { label: "Short walk to the pool", icon: <PoolIcon /> },
            { label: "Meditation lawns nearby", icon: <LawnIcon /> },
          ],
        },
        STAY_CONNECTED,
        SERVICE,
      ],
    },
    day: buildDay("A Day from the Gold Villa", {
      title: "Together Time",
      description: "Family lunch and rest in your own living room.",
    }),
    goodToKnow: ROOM_GOOD_TO_KNOW,
  },

  /* ───────── Diamond Villa ───────── */
  {
    slug: "diamond-villa",
    hero: {
      title: "Diamond Villa",
      description: "Water & stillness, a short walk from the lawns.",
      images: ["/room.png", "/about.png"],
    },
    highlights: {
      items: [
        { icon: <GuestIcon />, label: "2 Adults + 1 Child" },
        { icon: <AreaIcon />, label: "≈ 550 sq ft" },
        { icon: <BedIcon />, label: "King Bed" },
        { icon: <PoolIcon />, label: "Plunge pool & jacuzzi" },
        { icon: <LocationIcon />, label: "Garden villa quarter" },
      ],
    },
    gallery: {
      eyebrow: "The Villa",
      title: "A Private Retreat Built Around Water",
      description:
        "Set in the estate's garden quarter, the Diamond Villa gathers its rooms around an indoor plunge pool beneath timber slats and a living green wall, with a jacuzzi on the floor above. It is the stay for guests who want the calm of their own water after a day of darshan or celebration. Inside, oak floors, marble-veined walls and soft ambient light keep the mood unhurried — a king bedroom, a lounge screened by carved timber, a walk-in dressing area and a glass-walled rain shower.",
      images: ["/room.png", "/about.png", "/bnr.png"],
    },
    amenities: {
      eyebrow: "In This Villa",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "King-size bed, fine linen", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Lounge seating", icon: <SalonIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Water",
          items: [
            { label: "Indoor plunge pool", icon: <PoolIcon /> },
            { label: "Jacuzzi, upper floor", icon: <PoolIcon /> },
            { label: "Walk-in rain shower", icon: <RainShowerIcon /> },
            { label: "Twin vanities & bath amenities", icon: <BathIcon /> },
          ],
        },
        STAY_CONNECTED,
        SERVICE,
      ],
    },
    day: buildDay("A Day from the Diamond Villa", {
      title: "Cool Water",
      description: "Back to the plunge pool and the green wall.",
    }),
    goodToKnow: ROOM_GOOD_TO_KNOW,
  },

  /* ───────── Presidential Villa (unchanged content) ───────── */
  {
    slug: "presidential-villa",
    hero: {
      title: "Presidential Villa",
      description:
        "The crown of the estate: a private residence for guests who want the whole villa to themselves.",
      images: ["/room.png", "/about.png"],
    },

    highlights: {
      items: [
        { icon: <GuestIcon />, label: "Up to 6 Adults" },
        { icon: <AreaIcon />, label: "2,400 SQ FT VILLA" },
        { icon: <BedIcon />, label: "3 King Beds" },
        { icon: <PoolIcon />, label: "Private Pool & Pavilion" },
        { icon: <FoodIcon />, label: "Vegetarian, Alcohol-Free" },
      ],
    },

    gallery: {
      eyebrow: "The Villa",
      title: "A Private Residence Around a Grand Salon",
      description:
        "One of only two on the estate, the Presidential Villa is a three-bedroom residence wrapped around a grand living salon, a private pantry and a pool pavilion of its own. Evenings begin beneath the chandelier and end beside lamplit water, with golf-cart transfers, a private lawn and the on-site mandir close at hand.",
      images: ["/room.png", "/about.png", "/bnr.png", "/room.png", "/about.png"],
    },

    amenities: {
      eyebrow: "In This Villa",
      title: "Amenities & Comforts",
      groups: [
        {
          title: "Rest",
          items: [
            { label: "Three king bedrooms", icon: <BedIcon /> },
            { label: "Individually controlled AC", icon: <AcIcon /> },
            { label: "Grand living salon", icon: <SalonIcon /> },
            { label: "Turn-down on request", icon: <TurnDownIcon /> },
          ],
        },
        {
          title: "Water & Leisure",
          items: [
            { label: "Private pool", icon: <PoolIcon /> },
            { label: "Pool pavilion & lawn", icon: <LawnIcon /> },
            { label: "Rain showers in marble", icon: <RainShowerIcon /> },
            { label: "Signature bath amenities", icon: <BathIcon /> },
          ],
        },
        STAY_CONNECTED,
        {
          title: "Service",
          items: [
            { label: "Private pantry", icon: <PantryIcon /> },
            { label: "Vegetarian in-villa dining", icon: <DiningIcon /> },
            { label: "Golf-cart transfers", icon: <GolfCartIcon /> },
            { label: "Parking for cars & coaches", icon: <ParkingIcon /> },
          ],
        },
      ],
    },

    day: buildDay("A Day from the Presidential Villa", {
      title: "Poolside",
      description: "A quiet afternoon at your private pavilion.",
    }),

    goodToKnow: {
      eyebrow: "Before you arrive",
      title: "Good to Know",
      description:
        "Questions about your stay? Our reservations desk is happy to help.",
      callLabel: `Call ${contact.phone[0]}`,
      cta: { text: "See Rooms & Suites", link: "/rooms-and-suites" },
      facts: [
        { label: "Check-in", value: "00:00 PM" },
        { label: "Check-out", value: "00:00 AM" },
        { label: "Dining", value: "100% vegetarian, alcohol-free estate" },
        {
          label: "On the Estate",
          value: "On-site mandir · Golf carts available",
        },
        { label: "Cancellation policy", value: "View policy", link: "/contact" },
        { label: "House rules", value: "View policy", link: "/contact" },
      ],
    },
  },
];

export const getRoomDetail = (slug: string) =>
  RoomDetailPages.find((room) => room.slug === slug);
