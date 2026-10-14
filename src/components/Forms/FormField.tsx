"use client";

import clsx from "clsx";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiChevronDown } from "react-icons/bi";

interface BaseProps {
  label: string;
  name: string;
  required?: boolean;
  /** Layout classes for the wrapper, e.g. `sm:col-span-2`. */
  className?: string;
}

type InputProps = BaseProps & {
  as?: "input";
  type?: "text" | "email" | "tel" | "date" | "number";
  placeholder?: string;
  autoComplete?: string;
};
type SelectProps = BaseProps & {
  as: "select";
  options: string[];
  placeholder: string;
};
type TextareaProps = BaseProps & {
  as: "textarea";
  placeholder?: string;
  rows?: number;
};

type DateRangeProps = BaseProps & {
  as: "daterange";
  placeholder: string;
};

export type FormFieldProps =
  | InputProps
  | SelectProps
  | TextareaProps
  | DateRangeProps;

// 16px on phones stops iOS from zooming into the field; 14px from `md` up.
const CONTROL =
  "w-full border border-secondary/30 bg-white px-3 text-base text-dark outline-none transition-colors placeholder:text-light/60 focus:border-primary md:text-sm";

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/**
 * Check-in/check-out style range picker. The visible input is display-only;
 * the chosen range is submitted through a hidden input named `name`, so the
 * parent form can read it with FormData like every other field.
 */
const DateRangeInput: React.FC<{
  id: string;
  name: string;
  placeholder: string;
}> = ({ id, name, placeholder }) => {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [start, end] = range;
  const wrapRef = useRef<HTMLDivElement>(null);
  const today = useMemo(() => new Date(), []);

  // form.reset() does not touch React state, so clear the range ourselves.
  useEffect(() => {
    const form = wrapRef.current?.closest("form");
    if (!form) return;
    const clear = () => setRange([null, null]);
    form.addEventListener("reset", clear);
    return () => form.removeEventListener("reset", clear);
  }, []);

  const value = start ? (end ? `${formatDate(start)} – ${formatDate(end)}` : formatDate(start)) : "";

  return (
    <div ref={wrapRef} className="relative">
      <DatePicker
        id={id}
        selectsRange
        startDate={start}
        endDate={end}
        onChange={(dates) => setRange(dates as [Date | null, Date | null])}
        minDate={today}
        placeholderText={placeholder}
        dateFormat="d MMM yyyy"
        autoComplete="off"
        wrapperClassName="w-full"
        className={clsx(CONTROL, "h-11 cursor-pointer pr-9")}
      />
      <input type="hidden" name={name} value={value} />
      <BiChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-light"
      />
    </div>
  );
};

/** Label + input / select / textarea / date range in the site's form style. Reusable across forms. */
const FormField: React.FC<FormFieldProps> = (props) => {
  const id = useId();
  const { label, name, required, className } = props;

  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-widest text-light"
      >
        {label}
      </label>

      {props.as === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            required={required}
            defaultValue=""
            className={clsx(CONTROL, "h-11 appearance-none pr-9 invalid:text-light/60")}
          >
            <option value="" disabled>
              {props.placeholder}
            </option>
            {props.options.map((o) => (
              <option key={o} value={o} className="text-dark">
                {o}
              </option>
            ))}
          </select>
          <BiChevronDown
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-light"
          />
        </div>
      ) : props.as === "daterange" ? (
        <DateRangeInput id={id} name={name} placeholder={props.placeholder} />
      ) : props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={props.rows ?? 1}
          placeholder={props.placeholder}
          className={clsx(CONTROL, "min-h-11 resize-y py-2.5 field-sizing-content")}
        />
      ) : (
        <input
          id={id}
          name={name}
          required={required}
          type={props.type ?? "text"}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          inputMode={props.type === "tel" ? "tel" : props.type === "email" ? "email" : undefined}
          className={clsx(CONTROL, "h-11")}
        />
      )}
    </div>
  );
};

export default FormField;
