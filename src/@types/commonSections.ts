import type { CtaLink } from "@/@types/galleryPage";
import type { FormFieldProps } from "@/components/Forms/FormField";

/* Types for the reusable page sections in components/CommonComponents. */

export interface StatementBannerType {
  title: string;
  subtitle?: string;
}

export interface SplitSectionHighlight {
  label: string;
  icon: React.ReactNode;
}

export interface SplitSectionType {
  eyebrow: string;
  title: string;
  description: string[];
  image: string;
  imageAlt?: string;
  imageShape?: "plain" | "arch";
  imagePosition?: "left" | "right";
  highlights?: SplitSectionHighlight[];
  quote?: string;
  cta?: CtaLink;
  ctaVariant?: "button" | "link";
}

export interface FeatureColumnsType {
  eyebrow: string;
  title: string;
  items: { label: string; title: string; description: string }[];
  footnote?: string;
}

export interface NoticeStripType {
  text: string;
}

export interface EnquirySectionType {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageCaption: string;
  fields: FormFieldProps[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  phoneLabel: string;
  phone: string;
  endpoint?: string;
}
