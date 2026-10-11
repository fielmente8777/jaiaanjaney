import { ArticleBlock, ArticleType } from "@/@types/articlesPage";
import LinkButton from "@/components/buttons/LinkButton";
import { contact } from "@/utils/constent";
import Image from "next/image";
import ShareLinks from "./ShareLinks";

const diamond = "size-1.5 shrink-0 rotate-45 bg-secondary";

const renderBlock = (block: ArticleBlock, i: number) => {
  switch (block.type) {
    case "paragraph":
      return <p key={i} className="text-sm font-light leading-7 text-light">{block.text}</p>;
    case "quote":
      return (
        <blockquote key={i} className="border-l-2 border-primary pl-5 font-secondary text-xl italic text-dark">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-light text-light">
              <span aria-hidden className={`mt-2 ${diamond}`} />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={i} className="flex flex-col gap-2">
          <div className="relative aspect-5/3 w-full overflow-hidden">
            <Image src={block.src} alt={block.alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </div>
          {block.caption && <figcaption className="text-xs text-light">{block.caption}</figcaption>}
        </figure>
      );
  }
};

/**
 * Article text + sticky sidebar. Renders two siblings (<article>, <aside>) so the parent
 * grid in the page decides the two-column layout.
 */
const ArticleContent: React.FC<Pick<ArticleType, "title" | "intro" | "sections" | "tags">> = ({
  title,
  intro,
  sections,
  tags,
}) => (
  <>
    <article className="flex flex-col gap-6">
      <p className="font-secondary text-lg italic leading-relaxed text-light md:text-xl">{intro}</p>

      {sections.map(({ id, heading, blocks }) => (
        <section key={id} className="flex flex-col gap-4">
          <h2 id={id} className="scroll-mt-28 font-primary text-lg uppercase text-dark md:text-xl">
            {heading}
          </h2>
          {blocks.map(renderBlock)}
        </section>
      ))}

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="border border-secondary/30 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-widest text-light">
            {tag}
          </li>
        ))}
      </ul>
    </article>

    <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
      <nav aria-label="In this article" className="flex flex-col gap-3 bg-white/60 p-5 shadow-sm">
        <p className="text-[11px] uppercase tracking-widest text-light">In this article</p>
        <ul className="flex flex-col gap-2">
          {sections.map(({ id, heading }) => (
            <li key={id}>
              <a href={`#${id}`} className="flex items-center gap-3 text-sm text-dark transition-colors hover:text-primary">
                <span aria-hidden className={diamond} />
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-start gap-3 bg-linear-to-br from-primary to-secondary p-6 text-white">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">Plan your visit</p>
        <h3 className="font-secondary text-2xl leading-tight">Plan Your Stay Around Darshan</h3>
        <p className="text-xs font-light leading-5 text-white/90">
          Tell us your dates and we will help shape the stay around your plans.
        </p>
        <LinkButton
          href={contact.WhatsappCta}
          label="Book Now"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 border-white bg-transparent px-5 text-[11px] uppercase text-white hover:bg-white hover:text-primary"
        />
      </div>

      <ShareLinks title={title} />
    </aside>
  </>
);

export default ArticleContent;
