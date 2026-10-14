import {
  EventFormatsType,
  EventsBannerType,
  EventsIntroType,
  MeetingsHeroType,
  RfpSectionType,
} from "@/@types/meetingsPage";
import { contact } from "@/utils/constent";
import { AwardIcon, CorporateIcon, GuestIcon, ParkingIcon, PoolIcon, ProductIcon } from "@/utils/Room";

interface MeetingsPageDataType {
  hero: MeetingsHeroType;
  stats: { value: string; label: string }[];
  intro: EventsIntroType;
  formats: EventFormatsType;
  banner: EventsBannerType;
  rfp: RfpSectionType;
}


export const meetingsPageData: MeetingsPageDataType = {
  hero: {
    eyebrow: "Meetings · Incentives · Conferences · Events",
    title: "Meetings & Events",
    description:
      "Conferences, offsites and award nights on a resort estate, with rooms for every delegate and space to unwind between sessions.",
    images: ["/meetings/hero.jpg"],
  },

  stats: [
    { value: "500–600", label: "Delegates Indoors" },
    { value: "151", label: "Rooms On Site" },
    { value: "5", label: "Event Venues" },
    { value: "1", label: "Open-air theatre" },
    { value: "12,000", label: "Sq Ft Pool" },
  ],

  intro: {
    eyebrow: "Work, Then Wonder",
    title: "Business, Beautifully Hosted",
    description: [
      "Bring the whole team to one address. Hold the plenary in the Grand Banquet Hall, break out into the smaller banquet and garden, and close the day with a gala dinner on the lawns.",

      "Between sessions there is a 12,000 sq ft pool, a bowling alley and gaming zone, a spa and meditation lawns — and 151 rooms, so nobody has to travel back at night.",
    ],
    image: "/meetings/intro.jpg",
    cta: { text: "Request a proposal", link: contact.WhatsappCta },
  },

  formats: {
    eyebrow: "What We Host",
    title: "Event Formats",
    items: [
      { icon: <GuestIcon />, title: "Conferences", description: "Plenary sessions for 500–600 delegates." },
      { icon: <CorporateIcon />, title: "Offsites & Retreats", description: "Strategy days with room to think." },
      { icon: <PoolIcon/>, title: "Incentive Trips", description: "Reward teams with villas, pools and celebrations." },
      { icon: <ProductIcon />, title: "Product Launches", description: "Stage the reveal in the open-air theatre." },
      { icon: <AwardIcon />, title: "Award Nights", description: "Gala dinners on lawns under the sky." },
      { icon: <ParkingIcon />, title: "Dealer & Community Meets", description: "Coach arrivals and large-group logistics." },
    ],
  },

  banner: {
    title: "Stay Grand. Celebrate Bigger.",
    subtitle: "Events at Jai Anjaney",
  },

  rfp: {
    eyebrow: "Plan Your Event",
    title: "Send an RFP",
    description:
      "Share your dates, delegate count and room needs. Our events team will come back with venues, menus and a proposal.",
    image: "/meetings/rfp.jpg",
    imageCaption: "Business, Beautifully Hosted",
    eventTypes: [
      "Conference",
      "Corporate celebration",
      "Offsite",
      "Wedding",
      "Social gathering",
      "Cultural / devotional",
    ],
    guestRanges: ["Up to 50", "50–150", "150–300", "300–600", "600+"],
    submitLabel: "Submit RFP",
    successMessage: "Thank you. Our events team will get back to you within one working day.",
    errorMessage: "We couldn't send your request. Please try again or call us.",
    phoneLabel: "Prefer to talk?",
    phone: "+91 12345 12345",
    endpoint: "",
  },
};
