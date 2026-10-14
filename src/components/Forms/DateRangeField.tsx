"use client";

import clsx from "clsx";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar } from "react-icons/bi";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface DateRangeFieldProps {
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  /** Shared control classes from FormField so it matches inputs / selects. */
  controlClassName: string;
}

const toISO = (d: Date | null) =>
  d
    ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    : "";

/**
 * Check-in style range picker (same react-datepicker the BookingForm uses).
 * Submits three values with the form: `<name>` (readable range), `<name>Start`, `<name>End` (ISO).
 * Single-day events: tap the same date twice.
 */
export default function DateRangeField({
  id,
  name,
  placeholder = "Select dates",
  required,
  controlClassName,
}: DateRangeFieldProps) {
  const [[start, end], setRange] = useState<[Date | null, Date | null]>([null, null]);
  // Phones get a centred modal calendar instead of a popper that can run off-screen.
  const isMobile = useMediaQuery("(max-width: 639px)");

  return (
    <div className="relative">
      <DatePicker
        id={id}
        name={name}
        selectsRange
        selected={start}
        startDate={start}
        endDate={end}
        onChange={(dates: [Date | null, Date | null]) => setRange(dates)}
        minDate={new Date()}
        placeholderText={placeholder}
        dateFormat="d MMM yyyy"
        required={required}
        withPortal={isMobile}
        popperClassName="z-30!"
        wrapperClassName="w-full"
        // `inputMode="none"` keeps the phone keyboard from covering the calendar.
        customInput={
          <input
            inputMode="none"
            autoComplete="off"
            className={clsx(controlClassName, "h-11 cursor-pointer pr-9")}
          />
        }
      />
      <BiCalendar
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-light"
      />
      <input type="hidden" name={`${name}Start`} value={toISO(start)} />
      <input type="hidden" name={`${name}End`} value={toISO(end)} />
    </div>
  );
}
