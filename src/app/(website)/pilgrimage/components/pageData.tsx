import { PilgrimagePageDataType } from "@/@types/pilgrimagePage";
import { contact } from "@/utils/constent";

export const PilgrimagePageData: PilgrimagePageDataType = {
  hero: {
    eyebrow: "The Reason Many Arrive",
    title: "A TOWN THAT WAKES FOR BALAJI",
    description1:
      "Salasar Balaji Dham, dedicated to Lord Hanuman, is one of Rajasthan's most revered temples and most of our guests arrive for the very same darshan.",
    description2:
      "So every stay is planned around that journey: rest that comes easily before an early start, an environment ready for the first aarti of the day, and kitchens that stay pure vegetarian and alcohol-free.",
    checklist: [
      { text: "On-site mandir", icon: "mandir" },
      { text: "Sattvic kitchens", icon: "catering" },
      { text: "2,500 sq ft meditation lawns", icon: "lawn" },
      { text: "Coach parking for yatras", icon: "parking" },
    ],
    image: "/pilgrimage-photo.jpg",
  },

  threeTemples: {
    eyebrow: "The Sacred Circuit",
    title: "THREE TEMPLES, ONE JOURNEY",
    subtitle: "Jai Anjaney sits close to the region's most revered shrines",
    temples: [
      {
        id: "salasar-balaji",
        number: "01",
        distance: "00 KM",
        title: "SALASAR BALAJI DHAM",
        description:
          "The temple of Lord Hanuman that gives the town its name, known for the coconuts devotees tie in prayer.",
      },
      {
        id: "khatu-shyam",
        number: "02",
        distance: "00 KM",
        title: "KHATU SHYAM JI",
        description:
          "The revered shrine of Shyam Baba in Sikar district, drawing devotees from across India.",
      },
      {
        id: "rani-sati",
        number: "03",
        distance: "00 KM",
        title: "RANI SATI DADI MANDIR",
        description:
          "The grand temple at Jhunjhunu, a cornerstone of the region's pilgrimage circuit.",
      },
    ],
  },

  pilgrimServices: {
    eyebrow: "Thoughtfully Planned",
    title: "FOR PILGRIMS & YATRA GROUPS",
    items: [
      {
        id: "onsite-mandir",
        title: "ONSITE MANDIR",
        description: "Aarti every morning & evening, steps from your room.",
        icon: "mandir",
      },
      {
        id: "sattvic-kitchens",
        title: "SATTVIC KITCHENS",
        description: "100% vegetarian and alcohol-free, in every restaurant.",
        icon: "catering",
      },
      {
        id: "meditation-lawns",
        title: "MEDITATION LAWNS",
        description: "2,500 sq ft of green set aside for stillness.",
        icon: "meditation",
      },
      {
        id: "group-stays",
        title: "GROUP STAYS",
        description: "151 rooms & villa rooms for yatras and families.",
        icon: "stay",
      },
      {
        id: "coach-parking",
        title: "COACH PARKING",
        description: "Space for coaches and cars arriving together.",
        icon: "parking",
      },
      {
        id: "golf-carts",
        title: "GOLF CARTS",
        description: "Comfortable rides across the estate for elders.",
        icon: "golfcart",
      },
    ],
  },

  stayBanner: {
    eyebrow: "Yatra Groups & Families",
    title: "PLAN YOUR PILGRIMAGE STAY",
    description:
      "Tell us your dates and group size we will help you plan rooms, meals and the circuit.",
    buttonText: "PLAN MY STAY",
    buttonLink: "/contact",
    phone: contact.phone[0] || "+91 99824 10001",
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "A place of sacred refuge for millions of devotees who journey to Salasar in faith and love, our home must be their sacred companion on every journey.",
    note: "The Standard Greeting of Jai Anjaney Resort",
  },
};
