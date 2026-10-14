import {
  FilmSectionType,
  GalleryHeroType,
  GallerySectionType,
  VisitCtaType,
} from "@/@types/galleryPage";
import { FinalCtaSectionType } from "@/@types/homePage";
import { contact } from "@/utils/constent";

interface GalleryPageDataType {
  hero: GalleryHeroType;
  gallery: GallerySectionType;
  film: FilmSectionType;
  visitCta: VisitCtaType;
  welcomeNote: FinalCtaSectionType;
}

// a placeholder written from the photos — replace with the final copy.
export const galleryPageData: GalleryPageDataType = {
  hero: {
    eyebrow: "A Glimpse of Jai Anjaney",
    title: "Gallery",
    description:
      "The estate in its many moods, morning light on sandstone, lamplit evenings, celebrations and quiet corners.",
  },

  gallery: {
    categories: [
      { id: "all", label: "All" },
      { id: "resort", label: "The Estate" },
      { id: "rooms", label: "Rooms & Villas" },
      { id: "dining", label: "Dining" },
      { id: "banquets", label: "Celebrations" },
      { id: "events", label: "Sacred" },
      { id: "leisure", label: "Leisure" },
    ],
    items: [
      {
        id: "main-building",
        src: "/bnr.png",
        title: "The Main Building",
        category: "resort",
      },
      {
        id: "entrance-gate",
        src: "/testimonials.png",
        title: "The Gate at Night",
        category: "resort",
      },
      {
        id: "rooftop",
        src: "/rooftop-restaurent.png",
        title: "Rooftop Restaurant",
        category: "dining",
      },
      {
        id: "lobby",
        src: "/dining/photo2.jpg",
        title: "Reception",
        category: "resort",
      },
      {
        id: "banquet-hall",
        src: "/dining/banner-photo.png",
        title: "The Restaurant",
        category: "dining",
      },
      {
        id: "grand-ballroom",
        src: "/banquet/banquet-banner.jpg",
        title: "Grand Banquet Hall",
        category: "banquets",
      },
      {
        id: "temple",
        src: "/temple1.png",
        title: "On-Site Mandir",
        category: "events",
      },
      {
        id: "poolside-pavilion",
        src: "/dining/photo3.jpg",
        title: "Presidential Villa Pool",
        category: "rooms",
      },
      {
        id: "candlelit",
        src: "/wellness-spa.png",
        title: "Spa & Salon",
        category: "leisure",
      },
      {
        id: "silver-villa",
        src: "/wedding-photo.jpg",
        title: "The Villa Quarter",
        category: "rooms",
      },
      {
        id: "presidential-villa",
        src: "/gallery1.jpg",
        title: "Presidential Living Salon",
        category: "rooms",
      },
      {
        id: "plunge-pool",
        src: "/gallery2.jpg",
        title: "Diamond Villa Plunge Pool",
        category: "rooms",
      },
      {
        id: "bowling",
        src: "/bowling-alley.png",
        title: "Bowling Alley",
        category: "leisure",
      },
      {
        id: "wedding",
        src: "/wedding.png",
        title: "Wedding Celebrations",
        category: "banquets",
      },
    ],
    loadMoreLabel: "LOAD MORE PHOTOGRAPHS",
  },

  film: {
    eyebrow: "A Glimpse of Jai Anjaney",
    title: "Watch the Film",
    description: "[Resort film to be added]",
    poster: "/banquet/lawn-2.jpg",
    video: "/gallery/film.mp4",
  },

  visitCta: {
    eyebrow: "See It for Yourself",
    title: "Plan Your Visit",
    description: "Photographs only tell half of it. Come and stay a while.",
    cta: { text: "Book your stay", link: contact.WhatsappCta },
    secondaryCta: { text: "Call +91 12345 12345", link: contact.callCta },
  },

  welcomeNote: {
    eyebrow: "जय श्री बालाजी",
    description:
      "A place of sacred refuge for millions of devotees who journey to Salasar in faith and love, our home must be their sacred companion on every journey.",
    note: "The Standard Greeting of Jai Anjaney Resort",
  },
};
