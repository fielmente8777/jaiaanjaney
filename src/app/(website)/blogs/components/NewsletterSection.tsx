"use client";

import { NewsletterType } from "@/@types/articlesPage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const NewsletterSection: React.FC<NewsletterType> = ({
  eyebrow,
  title,
  description,
  inputLabel,
  placeholder,
  buttonText,
}) => (
  <SectionWithContainer
    // `isolate` keeps the `.bg-image` mandala (z-index: -1) above this section's own background
    sectionClassName="relative isolate border-t border-secondary/20 bg-white/50 bg-image bg-left"
    containerClassName="grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-16"
  >
    <div className="flex flex-col gap-3">
      <p className="font-secondary text-xl italic text-primary">{eyebrow}</p>
      <SectionHeading
        level={2}
        title={title}
        titleColor="dark"
        titleClassName="md:text-[40px]! md:leading-[48px]!"
      />
      <p className="max-w-md text-sm text-light md:text-base">{description}</p>
    </div>

    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send `new FormData(e.currentTarget).get("email")` to the newsletter / CRM endpoint
      }}
    >
      <label htmlFor="newsletter-email" className="text-[11px] uppercase tracking-widest text-light">
        {inputLabel}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder={placeholder}
          className="h-12 w-full border border-secondary/20 bg-white px-4 text-sm text-dark outline-none placeholder:text-light/60 focus:border-primary"
        />
        <button
          type="submit"
          className="h-12 shrink-0 bg-primary px-8 text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-secondary"
        >
          {buttonText}
        </button>
      </div>
    </form>
  </SectionWithContainer>
);

export default NewsletterSection;
