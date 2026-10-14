"use client";

import FormField from "@/components/Forms/FormField";
import clsx from "clsx";
import { useState } from "react";
import type { RfpSectionType } from "@/@types/meetingsPage";

type Status = "idle" | "sending" | "sent" | "error";

type RfpFormProps = Pick<
  RfpSectionType,
  | "eventTypes"
  | "guestRanges"
  | "submitLabel"
  | "successMessage"
  | "errorMessage"
  | "endpoint"
>;

/** Only the form is a client component, so the rest of the RFP section ships no JS. */
const RfpForm: React.FC<RfpFormProps> = ({
  eventTypes,
  guestRanges,
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

    // TODO: set `rfp.endpoint` in pageData.tsx once the enquiry API exists.
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
      if (!res.ok) throw new Error(`RFP request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <FormField label="Full name" name="name" autoComplete="name" required />
      <FormField label="Company" name="company" autoComplete="organization" />
      <FormField label="Phone" name="phone" type="tel" autoComplete="tel" required />
      <FormField label="Email" name="email" type="email" autoComplete="email" required />
      <FormField
        as="select"
        label="Event type"
        name="eventType"
        placeholder="Select"
        options={eventTypes}
        required
      />
      <FormField
        as="select"
        label="Guests"
        name="guests"
        placeholder="Select"
        options={guestRanges}
        required
      />
      <FormField
        as="textarea"
        label="Dates & requirements"
        name="message"
        placeholder="Preferred dates, spaces, anything we should know"
        className="sm:col-span-2"
      />

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

export default RfpForm;
