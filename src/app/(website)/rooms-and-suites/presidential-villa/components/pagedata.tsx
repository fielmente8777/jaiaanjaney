import { PresidentialVillaPageType } from "@/@types/presidentialVillaPage";
import { contact } from "@/utils/constent";
import { AcIcon, AreaIcon, BathIcon, BedIcon, DiningIcon, FoodIcon, GolfCartIcon, GuestIcon, LawnIcon, PantryIcon, ParkingIcon, PoolIcon, RainShowerIcon, SafeIcon, SalonIcon, TeaCoffeeIcon, TurnDownIcon, TvIcon, WifiIcon } from "@/utils/Room";

export const PresidentialVillaPageData: PresidentialVillaPageType = {
  hero: {
    title: "Presidential Villa",
    description:
      "The crown of the estate: a private residence for guests who want the whole villa to themselves.",
    images: ["/room.png", "/about.png"],
  },

  highlights: {
    items: [
      { icon: <GuestIcon/>, label: "Up to 6 Adults" },
      { icon: <AreaIcon/>, label: "2,400 SQ FT VILLA" },
      { icon: <BedIcon/>, label: "3 King Beds" },
      { icon: <PoolIcon/>, label: "Private Pool & Pavilion" },
      { icon: <FoodIcon/>, label: "Vegetarian, Alcohol-Free" },
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
          { label: "Individually controlled AC", icon: <AcIcon/> },
          { label: "Grand living salon", icon: <SalonIcon/> },
          { label: "Turn-down on request", icon: <TurnDownIcon/> },
        ],
      },
      {
        title: "Water & Leisure",
        items: [
          { label: "Private pool", icon: <PoolIcon/> },
          { label: "Pool pavilion & lawn", icon: <LawnIcon/> },
          { label: "Rain showers in marble", icon: <RainShowerIcon/> },
          { label: "Signature bath amenities", icon: <BathIcon/> },
        ],
      },
      {
        title: "Stay Connected",
        items: [
          { label: "High-speed Wi-Fi", icon: <WifiIcon/> },
          { label: "Smart TV", icon: <TvIcon/> },
          { label: "In-room safe", icon: <SafeIcon/> },
          { label: "Tea & coffee tray", icon: <TeaCoffeeIcon/> },
        ],
      },
      {
        title: "Service",
        items: [
          { label: "Private pantry", icon: <PantryIcon/> },
          { label: "Vegetarian in-villa dining", icon: <DiningIcon/> },
          { label: "Golf-cart transfers", icon: <GolfCartIcon/> },
          { label: "Parking for cars & coaches", icon: <ParkingIcon/> },
        ],
      },
    ],
  },

  day: {
    eyebrow: "Close to the Sacred",
    title: "A Day from the Presidential Villa",
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
      {
        time: "Afternoon",
        title: "Poolside",
        description: "A quiet afternoon at your private pavilion.",
      },
      {
        time: "Evening",
        title: "Sattvic Dinner",
        description: "A pure vegetarian table under the lamps.",
      },
    ],
    closing: "जय श्री बालाजी",
  },

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
};

