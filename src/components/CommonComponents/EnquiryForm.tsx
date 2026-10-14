"use client";

import type { EnquirySectionType } from "@/@types/commonSections";
import FormField from "@/components/Forms/FormField";
import clsx from "clsx";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

type EnquiryFormProps = Pick<
  EnquirySectionType,
  "fields" | "submitLabel" | "successMessage" | "errorMessage" | "endpoint"
>;

/** Only the form is a client component, so the rest of the enquiry section ships no JS. */
const EnquiryForm: React.FC<EnquiryFormProps> = ({
  fields,
  submitLabel,
  successMessage,
  errorMessage,
  endpoint,
}) => {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;

    // TODO: set `endpoint` in the page data once the enquiry API exists.
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(`Enquiry request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((field) => (
        <FormField key={field.name} {...field} />
      ))}

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 bg-primary px-8 text-xs uppercase tracking-widest text-white transition-colors hover:bg-secondary disabled:opacity-60 sm:col-span-2"
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
