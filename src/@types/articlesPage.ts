/* ───────────── Articles / Stories ───────────── */
export interface ArticleMetaData {
  title: string;
  description: string;
  keyWords: string;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface ArticleSection {
  /** Used for the "In this article" anchor links */
  id: string;
  heading: string;
  blocks: ArticleBlock[];
}

export interface ArticleType {
  slug: string;
  /** Filter chip + card overline, e.g. "Pilgrimage" */
  category: string;
  /** e.g. "6 min read" */
  readTime: string;
  title: string;
  /** Short teaser shown on the card */
  description: string;
  publishedAt: string;
  author: string;
  bannerImage: string;
  /** Italic lead paragraph shown above the first section */
  intro: string;
  sections: ArticleSection[];
  /** Small chips at the end of the article */
  tags: string[];
  metaData: ArticleMetaData;
}

export interface ArticlesHeroType {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ArticlesListType {
  title: string;
  /** Label of the first filter chip */
  allLabel: string;
  /** Cards per page; pagination only shows when there are more posts than this */
  pageSize: number;
  posts: ArticleType[];
}

export interface NewsletterType {
  eyebrow: string;
  title: string;
  description: string;
  inputLabel: string;
  placeholder: string;
  buttonText: string;
}
