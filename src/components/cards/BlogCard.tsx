import { ArticleType } from "@/@types/articlesPage";
import Image from "next/image";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

type BlogCardProps = Pick<
  ArticleType,
  "slug" | "category" | "readTime" | "title" | "description" | "bannerImage"
>;

/** Story card: photo, "CATEGORY · READ TIME", title, teaser and a "Read story →" link. The whole card is the link. */
const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  category,
  readTime,
  title,
  description,
  bannerImage,
}) => (
  <Link href={`/${slug}`} className="group flex flex-col gap-3">
    <div className="relative aspect-11/8 w-full overflow-hidden">
      <Image
        src={bannerImage}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <p className="text-[11px] uppercase tracking-[0.2em] text-primary">
      {category} · {readTime}
    </p>

    <h3 className="font-primary text-lg leading-snug text-dark md:text-xl">
      {title}
    </h3>

    <p className="line-clamp-2 text-sm font-light text-light">{description}</p>

    <span className="inline-flex w-fit items-center gap-2 border-b border-primary pb-0.5 text-[11px] uppercase tracking-widest text-dark">
      Read story
      <TbArrowRight
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  </Link>
);

export default BlogCard;
