import clsx from "clsx";
import Image from "next/image";

interface GalleryCardProps {
  src: string;
  title: string;
  /** Small label above the title (the photo's category). */
  tag: string;
  /** Grid-cell classes (span / aspect) decided by the parent. */
  className?: string;
  sizes: string;
  priority?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  src,
  title,
  tag,
  className,
  sizes,
  priority,
}) => (
  <figure className={clsx("group relative overflow-hidden", className)}>
    <Image
      src={src}
      alt={title}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div
      aria-hidden
      className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent via-40% to-transparent"
    />
    <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-3 text-white md:p-4">
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
        {tag}
      </span>
      <span className="font-secondary text-sm md:text-base">{title}</span>
    </figcaption>
  </figure>
);

export default GalleryCard;
