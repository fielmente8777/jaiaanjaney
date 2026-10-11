export interface CtaLink {
  text: string;
  link: string;
}

/* ───────────── Hero ───────────── */
export interface GalleryHeroType {
  eyebrow: string;
  title: string;
  description: string;
}

/* ───────────── Photo grid ───────────── */
export interface GalleryCategoryType {
  /** "all" is the reset tab and must exist. */
  id: string;
  label: string;
}

export interface GalleryItemType {
  id: string;
  src: string;
  title: string;
  /** Must match a `GalleryCategoryType.id` (other than "all"). */
  category: string;
}

export interface GallerySectionType {
  categories: GalleryCategoryType[];
  items: GalleryItemType[];
  loadMoreLabel: string;
  /** Photos revealed per "load more". Keep at 14 so the mosaic rows close. */
  pageSize?: number;
}

/* ───────────── Film ───────────── */
export interface FilmSectionType {
  eyebrow: string;
  title: string;
  description: string;
  /** Still shown behind the play button. */
  poster: string;
  /** mp4 played in place when the button is pressed. */
  video: string;
}

/* ───────────── Visit CTA (shared) ───────────── */
export interface VisitCtaType {
  eyebrow: string;
  title: string;
  description: string;
  cta: CtaLink;
  secondaryCta: CtaLink;
}
