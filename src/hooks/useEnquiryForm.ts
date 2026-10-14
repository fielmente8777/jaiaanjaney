"use client";

import { useCallback, useState } from "react";

export type EnquiryStatus = "idle" | "sending" | "sent" | "error";

interface Options {
  endpoint?: string;
  /** Sent as `form` in the payload so one API route can tell MICE / wedding / etc. apart. */
  formName?: string;
}

/**
 * All the submit logic for the enquiry-style forms, so no form re-implements it.
 * Fields are read straight from the DOM (`FormData`), which is why a form needs no
 * per-field state: add a field to the page data and it is submitted automatically.
 */
export function useEnquiryForm({ endpoint, formName }: Options) {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  // Bumping this remounts the <form>, which clears every field (incl. the date picker).
  const [resetKey, setResetKey] = useState(0);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (status === "sending") return;

      // TODO: set `endpoint` in the page data once the enquiry API exists.
      if (!endpoint) {
        setStatus("error");
        return;
      }

      // Read before the first `await`: `e.currentTarget` is null afterwards.
      const data = Object.fromEntries(new FormData(e.currentTarget));

      setStatus("sending");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ form: formName, ...data }),
        });
        if (!res.ok) throw new Error(`Enquiry request failed: ${res.status}`);
        setResetKey((k) => k + 1);
        setStatus("sent");
      } catch {
        setStatus("error");
      }
    },
    [endpoint, formName, status]
  );

  return { status, resetKey, onSubmit };
}
