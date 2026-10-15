import type { EnquirySectionType } from "@/@types/commonSections";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading, Tagline } from "@/components/typography";
import Image from "next/image";
import { TbPhone } from "react-icons/tb";
import EnquiryForm from "./EnquiryForm";

const EnquirySection: React.FC<EnquirySectionType> = ({
  id = "enquiry",
  eyebrow,
  title,
  description,
  image,
  imageCaption,
  phoneLabel,
  phone,
  ...form
}) => (
  <Section id={id} className="relative group overflow-hidden border-b-4 border-primary bg-cream">
    <Container className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative aspect-3/4 overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[44.44%]">
        <Image
          src={image}
          alt={imageCaption}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent via-40% to-transparent"
        />
        <p className="absolute inset-x-0 bottom-0 p-4 font-secondary text-xl italic text-white md:p-8 md:text-2xl">
          {imageCaption}
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:col-start-2">
        <div className="flex flex-col gap-3">
          <Tagline eyebrow={eyebrow} wrapperClassName="items-start" />
          <SectionHeading
            title={title}
            titleClassName="md:text-[40px]! md:leading-[48px]!"
          />
          <p className="text-sm text-light md:text-base">{description}</p>
        </div>

        <EnquiryForm {...form} />

        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="flex w-fit items-center gap-2 border-t border-secondary/30 pt-4 text-sm text-light"
        >
          <TbPhone aria-hidden className="text-primary" />
          {phoneLabel} <span className="text-dark">{phone}</span>
        </a>
      </div>
    </Container>
  </Section>
);

export default EnquirySection;
