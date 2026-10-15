import { VillaType } from "@/@types/roomsPage";
import ArrowLink from "@/components/buttons/ArrowLink";
import LinkButton from "@/components/buttons/LinkButton";
import ArchFrame from "@/components/CommonComponents/ArchFrame";
import { contact } from "@/utils/constent";
import Image from "next/image";

const VillaCard: React.FC<VillaType> = ({
  label,
  title,
  tagline,
  description,
  specs,
  image,
  bookCta,
  viewCta,
}) => (
  <article className="flex flex-col border border-cream/40 bg-espresso text-cream">
    <ArchFrame className="aspect-422/456 w-full">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </ArchFrame>

    {/* Content */}
    <div className="flex flex-1 flex-col gap-3 p-4">
      <p className="text-[10px] uppercase tracking-[0.25em] text-secondary">
        {label}
      </p>

      <div>
        <h3 className="font-primary text-3xl text-cream">{title}</h3>
        <p className="font-secondary text-xl italic text-secondary">
          {tagline}
        </p>
      </div>

      <p className="text-sm font-light leading-6 text-cream/80">
        {description}
      </p>

      <p className="mt-auto border-t border-secondary pt-3 text-xs text-cream/80">
        {specs.join(" · ")}
      </p>

      <div className="flex items-center gap-6">
        <LinkButton
          href={contact.WhatsappCta}
          label="Book Now"
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 flex-1 justify-center border-[#FAF6EC]/60 bg-primary text-sm text-white"
        />
        <ArrowLink
          href={viewCta.link}
          label={viewCta.text}
          className="text-cream"
        />
      </div>
    </div>
  </article>
);

export default VillaCard;
