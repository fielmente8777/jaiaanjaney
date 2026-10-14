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
    loadMoreLabel: "Load more photographs",
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
        src: "/gallery/main-building.jpg",
        title: "The Main Building",
        category: "resort",
      },
      {
        id: "entrance-gate",
        src: "/gallery/entrance-gate.jpg",
        title: "The Entrance Gate",
        category: "resort",
      },
      {
        id: "rooftop",
        src: "/gallery/rooftop.jpg",
        title: "The Rooftop",
        category: "resort",
      },
      {
        id: "lobby",
        src: "/gallery/lobby.jpg",
        title: "The Lobby",
        category: "resort",
      },
      {
        id: "banquet-hall",
        src: "/gallery/banquet-hall.jpg",
        title: "The Banquet Hall",
        category: "banquets",
      },
      {
        id: "grand-ballroom",
        src: "/gallery/grand-ballroom.jpg",
        title: "The Grand Ballroom",
        category: "banquets",
      },
      {
        id: "temple",
        src: "/gallery/temple.jpg",
        title: "Salasar Balaji Temple",
        category: "resort",
      },
      {
        id: "poolside-pavilion",
        src: "/gallery/poolside-pavilion.jpg",
        title: "Poolside Pavilion",
        category: "banquets",
      },
      {
        id: "candlelit",
        src: "/gallery/candlelit.jpg",
        title: "Candlelit Evenings",
        category: "dining",
      },
      {
        id: "silver-villa",
        src: "/gallery/silver-villa.jpg",
        title: "The Silver Villa",
        category: "rooms",
      },
      {
        id: "presidential-villa",
        src: "/gallery/presidential-villa.jpg",
        title: "Presidential Villa",
        category: "rooms",
      },
      {
        id: "plunge-pool",
        src: "/gallery/plunge-pool.jpg",
        title: "Private Plunge Pool",
        category: "rooms",
      },
      {
        id: "bowling",
        src: "/gallery/bowling.jpg",
        title: "Bowling Alley",
        category: "leisure",
      },
      {
        id: "wedding",
        src: "/gallery/wedding.jpg",
        title: "Wedding Celebrations",
        category: "events",
      },
    ],
  },

  film: {
    eyebrow: "A Glimpse of Jai Anjaney",
    title: "Watch the Film",
    description: "[Resort film to be added]",
    poster: "/gallery/film-poster.jpg",
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
