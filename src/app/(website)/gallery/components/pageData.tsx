import {
  FilmSectionType,
  GalleryHeroType,
  GallerySectionType,
  VisitCtaType,
} from "@/@types/galleryPage";

interface GalleryPageDataType {
  hero: GalleryHeroType;
  gallery: GallerySectionType;
  film: FilmSectionType;
  visitCta: VisitCtaType;
}

// NOTE: the Figma export was too small to read, so every label and caption below is
// a placeholder written from the photos — replace with the final copy.
export const galleryPageData: GalleryPageDataType = {
  hero: {
    eyebrow: "A Glimpse of the Estate",
    title: "Gallery",
    description:
      "A walk through our rooms, lawns, morning light on sandstone, lamplit evenings, and the quiet corners in between.",
  },

  gallery: {
    loadMoreLabel: "Load more photographs",
    categories: [
      { id: "all", label: "All" },
      { id: "resort", label: "The Resort" },
      { id: "rooms", label: "Rooms & Suites" },
      { id: "dining", label: "Dining" },
      { id: "banquets", label: "Banquets & Lawns" },
      { id: "events", label: "Events" },
      { id: "leisure", label: "Leisure" },
    ],
    // Order matters: the mosaic layout is assigned by position (see GallerySection).
    items: [
      { id: "main-building", src: "/gallery/main-building.jpg", title: "The Main Building", category: "resort" },
      { id: "entrance-gate", src: "/gallery/entrance-gate.jpg", title: "The Entrance Gate", category: "resort" },
      { id: "rooftop", src: "/gallery/rooftop.jpg", title: "The Rooftop", category: "resort" },
      { id: "lobby", src: "/gallery/lobby.jpg", title: "The Lobby", category: "resort" },
      { id: "banquet-hall", src: "/gallery/banquet-hall.jpg", title: "The Banquet Hall", category: "banquets" },
      { id: "grand-ballroom", src: "/gallery/grand-ballroom.jpg", title: "The Grand Ballroom", category: "banquets" },
      { id: "temple", src: "/gallery/temple.jpg", title: "Salasar Balaji Temple", category: "resort" },
      { id: "poolside-pavilion", src: "/gallery/poolside-pavilion.jpg", title: "Poolside Pavilion", category: "banquets" },
      { id: "candlelit", src: "/gallery/candlelit.jpg", title: "Candlelit Evenings", category: "dining" },
      { id: "silver-villa", src: "/gallery/silver-villa.jpg", title: "The Silver Villa", category: "rooms" },
      { id: "presidential-villa", src: "/gallery/presidential-villa.jpg", title: "Presidential Villa", category: "rooms" },
      { id: "plunge-pool", src: "/gallery/plunge-pool.jpg", title: "Private Plunge Pool", category: "rooms" },
      { id: "bowling", src: "/gallery/bowling.jpg", title: "Bowling Alley", category: "leisure" },
      { id: "wedding", src: "/gallery/wedding.jpg", title: "Wedding Celebrations", category: "events" },
    ],
  },

  film: {
    eyebrow: "The estate in motion",
    title: "Watch the Film",
    description: "Two minutes at Jai Anjaney Resort.",
    poster: "/gallery/film-poster.jpg",
    video: "/gallery/film.mp4",
  },

  visitCta: {
    eyebrow: "We'd love to host you",
    title: "Plan Your Visit",
    description: "Dates, rooms and darshan timings, we'll arrange it all.",
    cta: { text: "Book your stay", link: "/contact" },
    secondaryCta: { text: "Or speak to us", link: "/contact" },
  },
};
