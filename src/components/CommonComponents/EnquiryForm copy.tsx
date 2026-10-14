"use client";

import type { EnquirySectionType } from "@/@types/commonSections";
import FormField from "@/components/Forms/FormField";
import { useEnquiryForm } from "@/hooks/useEnquiryForm";
import clsx from "clsx";

type EnquiryFormProps = Pick<
  EnquirySectionType,
  | "fields"
  | "submitLabel"
  | "successMessage"
  | "errorMessage"
  | "endpoint"
  | "formName"
>;

/**
 * Config-driven form: renders whatever `fields` it is given (MICE RFP, weddings, …).
 * Only the form is a client component, so the rest of the enquiry section ships no JS.
 */
const EnquiryForm: React.FC<EnquiryFormProps> = ({
  fields,
  submitLabel,
  successMessage,
  errorMessage,
  endpoint,
  formName,
}) => {
  const { status, resetKey, onSubmit } = useEnquiryForm({ endpoint, formName });

  return (
    <form
      key={resetKey}
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      {fields.map((field) => (
        <FormField key={field.name} {...field} />
      ))}

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full touch-manipulation bg-primary px-8 text-xs uppercase tracking-widest text-white transition-colors hover:bg-secondary active:bg-secondary disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={clsx(
          "text-sm sm:col-span-2",
          status === "sent" ? "text-dark" : "text-accent",
          status !== "sent" && status !== "error" && "sr-only"
        )}
      >
        {status === "sent" && successMessage}
        {status === "error" && errorMessage}
      </p>
    </form>
  );
};

export default EnquiryForm;
