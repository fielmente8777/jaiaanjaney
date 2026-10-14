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
    <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-[4px] pl-[22px] pr-[22px] pb-[20px] text-white">
      <span
        className="font-nunito-sans font-normal text-[11px] leading-[16px] tracking-[0.14em] uppercase text-[#F3D5A5]"
        style={{ color: "var(--brand-gold-pale, #F3D5A5)" }}
      >
        {tag}
      </span>
      <span className="font-secondary italic font-normal text-[21px] leading-[26px] tracking-normal text-white">
        {title}
      </span>
    </figcaption>
  </figure>
);

export default GalleryCard;
