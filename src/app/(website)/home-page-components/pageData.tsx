export const homePageData = {
  hero: {
    title: "Where Spirituality Meets Luxury",
    description:
      "A landmark destination in Salasar where devotion, grand celebrations, refined hospitality, and unforgettable experiences come together.",

    images: [""],
    video: {
      src: "",
      poster: "/bnr.png",
    },
  },

  highlights: [
    {
      value: "150",
      label: "Guest Rooms & Villas",
    },
    {
      value: "10,000",
      label: "SQ FT Banquet LAWN",
    },
    {
      value: "26,000",
      label: "SQ FT PARTY LAWN",
    },
    {
      value: "1",
      label: "On-Site Temple",
    },
    {
      value: "100%",
      label: "Vegetarian, Alcohol-Free",
    },
  ],

  aboutSection: {
    eyebrow: "A Land Older Than The Resort",
    title: "STAY IN THE SPIRIT OF SALASAR",
    description: [
      "Long before the first stone of Jai Anjaney was laid, this stretch of Rajasthan was a resting place for the faithful, dusty roads, wayside wells, and a temple that has drawn devotees for generations. We built in its shadow, not its shade: grand pillars and arched corridors that honour the sanctity around us rather than compete with it.",
      "Sacred orange anchors our identity. Motifs from the Ramayana are woven through our corridors. Our kitchens keep only pure vegetarian fare. This is hospitality shaped by devotion & luxury.",
    ],

    cta: {
      text: "About Us",
      link: "/about-us",
    },
    image: "/about.png",
  },

  dayAtJaiAnjaney: {
    eyebrow: "Not A Checklist. A rhythm.",
    title: "A day at Jai Anjaney",
    items: [
      {
        title: "Dawn",
        subtitle: "Temple bells, first",
        description:
          "Before the resort wakes, the on site temple does. Guests who rise early join the first aarti of the day, the courtyard still cool.",
        images: ["/temple1.png", "/temple2.png"],
      },
      {
        title: "Morning",
        subtitle: "A sattvic table",
        description:
          "Breakfast under open corridors — pure vegetarian, unhurried, taken in the company of pillars older-looking than they are.",
        images: ["/temple2.png", "/temple1.png"],
      },
      {
        title: "Afternoon",
        subtitle: "Stillness, indoors",
        description:
          "The wellness spa and meditation lawns hold the heat of the day at bay — quiet spaces built for nothing but rest.",
        images: ["/temple1.png", "/temple2.png"],
      },
      {
        title: "Evening",
        subtitle: "Evening aarti",
        description:
          "The courtyard fills. Devotees, wedding guests, and travelers stand shoulder to shoulder for the day's second offering of light.",
        images: ["/temple1.png", "/temple2.png"],
      },
      {
        title: "Night",
        subtitle: "Dinner, under the stars",
        description:
          "The rooftop restaurant closes the day the way it opened — slowly, with good food and the temple lights visible in the distance.",
        images: ["/temple1.png", "/temple2.png"],
      },
    ],
  },

  experiencesSection: {
    eyebrow: "Four Occasions, One Sacred Ground",
    title: "One Destination. Endless Experiences.",

    items: [
      {
        title: "Weddings",
        description:
          "Residential & non residential celebrations across 150 rooms, two banquet halls, open lawns, and an on site temple for pre wedding rituals.",
        image: "/wedding.png",
      },
      {
        title: "Pilgrimage",
        description: "",
        image: "/wedding.png",
      },

      {
        title: "MICE",
        description: "",
        image: "/weddin.png",
      },
    ],
  },

  roomsSection: {
    title: "A Glimpse of <br /> Jai Anjaney",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit fuga aliqua sed rerum quos consequat nobis repellendus deleniti do lorem optio placeat ad exm repellendus deleniti do lorem optio placeat ad exm repellendus deleniti do lorem optio placeat ad exm",
    cta: {
      text: "Explore Rooms & Suites",
      link: "/rooms",
    },
    images: ["/room.png", "/room.png", "/room.png"],
  },
  slidingTitleItems: [
    "lorem ipsum dolor sit amet consectetur adipiscing elit fuga aliqua sed rerum quos consequat nobis repellendus deleniti do lorem optio placeat ad exm repellendus deleniti do lorem optio placeat ad exm repellendus deleniti do lorem optio placeat ad exm",
  ],
  amenitiesSection: {
    eyebrow: "Beyond The Stay",
    title: "An estate built for rest, ritual, & celebration",
    items: [
      {
        title: "Rooftop Restaurant",
        image: "/rooftop-restaurent.png",
      },
      {
        title: "On-Site Temple",
        image: "/on-site-temple.png",
      },
      {
        title: "Wellness Spa",
        image: "/wellness-spa.png",
      },
      {
        title: "BOWLING ALLEY",
        image: "/bowling-alley.png",
      },
    ],
  },

  locationSection: {
    eyebrow: "Nearby Attractions",
    title: "Discover the Heart of Rajasthan",
    // The resort — routes on the map are drawn from here.
    // TODO: replace with the resort's exact pin from Google Maps (right-click → copy coordinates).
    origin: {
      label: "Jai Anjaney, Salasar",
      coords: { lat: 27.7267, lng: 74.7175 },
    },

    // Distances are approximate road distances from Salasar — verify before launch.
    places: [
      {
        title: "Khatu Shyam Ji",
        distance: "110 KM",
        description:
          "The revered temple of Baba Shyam in Sikar district, and the pilgrimage most devotees pair with Salasar Balaji. The Phalgun Mela draws lakhs of pilgrims each spring, many walking the final stretch carrying the Nishan.",
        coords: { lat: 27.3633, lng: 75.4011 },
      },
      {
        title: "Rani Sati Dadi Temple",
        distance: "105 KM",
        description:
          "A grand white-marble temple in Jhunjhunu, among the most visited shrines in Shekhawati. The mirror work and silver-clad interiors are worth an unhurried morning.",
        coords: { lat: 28.125, lng: 75.399 },
      },
      {
        title: "Jeen Mata Temple",
        distance: "85 KM",
        description:
          "An ancient shrine to the goddess Jeen Mata set in the Aravalli hills south of Sikar. Both Navratris bring large fairs; outside them, it is a quiet, wooded temple.",
        coords: { lat: 27.4067, lng: 75.1886 },
      },
      {
        title: "Harshnath Temple",
        distance: "65 KM",
        description:
          "Remains of a 10th-century Shiva temple on Harshnath hill near Sikar, with finely carved stone and sweeping views over the Shekhawati plains.",
        coords: { lat: 27.535, lng: 75.185 },
      },
      {
        title: "Laxmangarh Fort",
        distance: "35 KM",
        description:
          "A 19th-century hilltop fort overlooking a town laid out on a grid like Jaipur, with painted havelis lining the lanes below.",
        coords: { lat: 27.823, lng: 75.026 },
      },
      {
        title: "Fatehpur Havelis",
        distance: "50 KM",
        description:
          "One of Shekhawati's great painted towns. The restored Le Prince Haveli shows the frescoes at their best, alongside dozens of merchant mansions still standing on the old streets.",
        coords: { lat: 27.994, lng: 74.955 },
      },
      {
        title: "Tal Chhapar Sanctuary",
        distance: "40 KM",
        description:
          "Open grassland known for its herds of blackbuck and, in winter, migratory raptors and harriers. Best from September to March, early morning or late afternoon.",
        coords: { lat: 27.805, lng: 74.44 },
      },
      {
        title: "Mandawa",
        distance: "70 KM",
        description:
          "Called the open-air art gallery of Rajasthan — frescoed havelis, a castle-turned-hotel, and lanes that have appeared in many a Hindi film.",
        coords: { lat: 28.055, lng: 75.149 },
      },
      {
        title: "Churu Havelis",
        distance: "85 KM",
        description:
          "Merchant town of grand havelis, including the many-windowed Surana Haveli and the painted Kothari Haveli, with sand dunes just outside town.",
        coords: { lat: 28.297, lng: 74.967 },
      },
      {
        title: "Lohargal",
        distance: "95 KM",
        description:
          "A sacred tirth in the Aravallis where, by legend, the Pandavas' weapons melted in the Surya Kund. Visited for its holy tank and hilltop temples.",
        coords: { lat: 27.78, lng: 75.28 },
      },
    ],
  },

  testimonials: {
    eyebrow: "Guests Reviews",
    title: "Stories from the Stay",
    image: "/testimonials.png",

    items: [
      {
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Guest from Delhi NCR",
      },
      {
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Guest from Delhi NCR",
      },
      {
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Guest from Delhi NCR",
      },
      {
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Guest from Delhi NCR",
      },
      {
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Guest from Delhi NCR",
      },
    ],
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "A place of sacred refuge for millions of devotees who journey to Salasar in faith and love, our home must be their sacred companion on every journey.",
    note: "The Standard Greeting of Jai Anjaney Resort",
  },
};
