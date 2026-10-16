// "use client";

// import { useEffect, useRef, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FillCalenderIcon, FillUserIcon } from "./BookingFormIcons";

// export default function BookingForm() {
//   const [guestOpen, setGuestOpen] = useState(false);
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);
//   const [promoCode, setPromoCode] = useState("");

//   const today = new Date();

//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   const guestRef = useRef<HTMLDivElement>(null);

//   /** Closes the guest popover on an outside click or Escape. */
//   useEffect(() => {
//     if (!guestOpen) return;

//     const handleClickOutside = (e: MouseEvent) => {
//       if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
//         setGuestOpen(false);
//       }
//     };

//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setGuestOpen(false);
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEscape);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [guestOpen]);

//   const formatDate = (date: Date | null) => {
//     if (!date) return "";
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const guestLabel = `${adults} Adult${adults !== 1 ? "s" : ""}${
//     children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""
//   }`;

//   const handleSearch = () => {
//     if (!startDate || !endDate) return;

//     const query = {
//       checkIn: formatDate(startDate),
//       checkOut: formatDate(endDate),
//       adults,
//       children,
//       promoCode: promoCode.trim() || undefined,
//     };

//     console.log("book rooms", query);
//   };

//   const fieldCls =
//     "relative flex items-center px-5 h-14 transition-colors";
//   const labelCls = "text-white tracking-wide whitespace-nowrap";

//   return (
//     <div className="w-full">
//       <div className="grid w-full lg:grid-cols-[1fr_1fr_1fr_auto] md:grid-cols-2 grid-cols-1 divide-x divide-white items-stretch bg-white/20 backdrop-blur-sm">
//         {/* Dates */}
//         <div className={`${fieldCls} cursor-pointer hover:bg-white/5`}>
//           <FillCalenderIcon />
//           <DatePicker
//             selected={startDate}
//             onChange={(dates: [Date | null, Date | null]) => {
//               setStartDate(dates[0]);
//               setEndDate(dates[1]);
//             }}
//             startDate={startDate}
//             endDate={endDate}
//             selectsRange
//             minDate={today}
//             placeholderText="Check-in & out"
//             dateFormat="MMM d, yyyy"
//             aria-label="Select check-in and check-out dates"
//             className="w-full bg-transparent placeholder:text-white placeholder:uppercase placeholder:text-[13px] placeholder:tracking-wide text-white outline-none cursor-pointer"
//             wrapperClassName="w-full"
//           />
//         </div>

//         {/* Guests */}
//         <div
//           ref={guestRef}
//           className={`${fieldCls} cursor-pointer hover:bg-white/5`}
//         >
//           <button
//             type="button"
//             onClick={() => setGuestOpen((o) => !o)}
//             aria-haspopup="true"
//             aria-expanded={guestOpen}
//             className="flex w-full items-center gap-2.5 text-left"
//           >
//             <FillUserIcon />
//             <span
//               className={`${labelCls} ${
//                 adults || children ? "" : "uppercase text-[13px]"
//               }`}
//             >
//               {adults || children ? guestLabel : "Occupancy"}
//             </span>
//           </button>

//           {guestOpen && (
//             <div
//               role="dialog"
//               aria-label="Select number of guests"
//               className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-b-md bg-background p-4 shadow-xl bg-white"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <GuestRow
//                 label="Adults"
//                 value={adults}
//                 min={1}
//                 max={10}
//                 onChange={setAdults}
//               />
//               <GuestRow
//                 label="Children"
//                 value={children}
//                 min={0}
//                 max={6}
//                 onChange={setChildren}
//               />
//             </div>
//           )}
//         </div>

//         {/* Promo code */}
//         <div className={fieldCls}>
//           <label htmlFor="promo-code" className="sr-only">
//             Promo code
//           </label>
//           <input
//             id="promo-code"
//             type="text"
//             value={promoCode}
//             onChange={(e) => setPromoCode(e.target.value)}
//             placeholder="Promo Code"
//             className="w-full bg-transparent placeholder:text-white placeholder:uppercase placeholder:text-[13px] placeholder:tracking-wide text-white outline-none"
//           />
//         </div>

//         {/* CTA */}
//         <button
//           type="button"
//           onClick={handleSearch}
//           // disabled={!startDate || !endDate}
//           className="h-14 px-7 bg-primary text-white uppercase font-medium tracking-widest  transition-colors whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

// function GuestRow({
//   label,
//   value,
//   min,
//   max,
//   onChange,
// }: {
//   label: string;
//   value: number;
//   min: number;
//   max: number;
//   onChange: (v: number) => void;
// }) {
//   return (
//     <div className="flex items-center justify-between mb-3 last:mb-0 ">
//       <span className="text-sm">{label}</span>
//       <div className="flex items-center gap-3">
//         <button
//           type="button"
//           onClick={() => value > min && onChange(value - 1)}
//           disabled={value <= min}
//           aria-label={`Decrease ${label}`}
//           className="w-7 h-7 rounded-full border hover:bg-white/10 transition flex items-center justify-center text-base leading-none disabled:opacity-30 disabled:hover:bg-transparent"
//         >
//           −
//         </button>
//         <span className="w-4 text-center text-sm">{value}</span>
//         <button
//           type="button"
//           onClick={() => value < max && onChange(value + 1)}
//           disabled={value >= max}
//           aria-label={`Increase ${label}`}
//           className="w-7 h-7 rounded-full border hover:bg-white/10 transition flex items-center justify-center text-base leading-none disabled:opacity-30 disabled:hover:bg-transparent"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FillCalenderIcon, FillUserIcon } from "./BookingFormIcons";

interface BookingFormProps {
  /** Full Tailwind class(es), e.g. "bg-white/20" or "bg-white shadow-md". Default: transparent */
  bg?: string;
  /** Text, placeholder and divider color, e.g. "text-black". Default: "text-white" */
  textColor?: string;
  /** Icon color, e.g. "text-primary". Default: inherits textColor */
  iconColor?: string;
}

export default function BookingForm({
  bg = "bg-transparent",
  textColor = "text-white",
  iconColor = "",
}: BookingFormProps) {
  const [guestOpen, setGuestOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  const today = new Date();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const guestRef = useRef<HTMLDivElement>(null);

  /** Closes the guest popover on an outside click or Escape. */
  useEffect(() => {
    if (!guestOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
        setGuestOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGuestOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [guestOpen]);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const guestLabel = `${adults} Adult${adults !== 1 ? "s" : ""}${
    children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""
  }`;

  const handleSearch = () => {
    if (!startDate || !endDate) return;

    const query = {
      checkIn: formatDate(startDate),
      checkOut: formatDate(endDate),
      adults,
      children,
      promoCode: promoCode.trim() || undefined,
    };

    console.log("book rooms", query);
  };

  const fieldCls =
    "relative flex items-center gap-3 px-5 h-12 lg:h-full transition-colors hover:bg-current/5";
  const labelCls =
    "whitespace-nowrap text-base font-normal leading-6 capitalize";
  const inputCls =
    "w-full bg-transparent text-base font-normal leading-6 outline-none placeholder:text-current placeholder:capitalize placeholder:text-base placeholder:font-normal placeholder:leading-6";

  return (
    <div className="w-full">
      <div
        className={`grid w-full grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_auto] lg:h-[56px] items-stretch backdrop-blur-sm border border-current/60 lg:border-0 divide-y lg:divide-y-0 lg:divide-x divide-current/30 shadow-xl lg:shadow-none ${bg} ${textColor}`}
      >
        {/* Dates */}
        <div className={`${fieldCls} cursor-pointer`}>
          {/* <span className={`shrink-0 ${iconColor}`}>
            <FillCalenderIcon />
          </span> */}
          <DatePicker
            selected={startDate}
            onChange={(dates: [Date | null, Date | null]) => {
              setStartDate(dates[0]);
              setEndDate(dates[1]);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={today}
            placeholderText="Check-in & out"
            dateFormat="MMM d, yyyy"
            aria-label="Select check-in and check-out dates"
            className={`${inputCls} cursor-pointer`}
            wrapperClassName="w-full"
          />
        </div>

        {/* Guests */}
        <div ref={guestRef} className={`${fieldCls} cursor-pointer`}>
          <button
            type="button"
            onClick={() => setGuestOpen((o) => !o)}
            aria-haspopup="true"
            aria-expanded={guestOpen}
            className="flex h-full w-full items-center gap-3 text-left"
          >
            {/* <span className={`shrink-0 ${iconColor}`}>
              <FillUserIcon />
            </span> */}
            <span className={labelCls}>
              {adults || children ? guestLabel : "Occupancy"}
            </span>
          </button>

          {guestOpen && (
            <div
              role="dialog"
              aria-label="Select number of guests"
              className="absolute left-0 top-full z-50 w-full lg:w-64 bg-white p-4 text-black shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <GuestRow
                label="Adults"
                value={adults}
                min={1}
                max={10}
                onChange={setAdults}
              />
              <GuestRow
                label="Children"
                value={children}
                min={0}
                max={6}
                onChange={setChildren}
              />
            </div>
          )}
        </div>

        {/* Promo code */}
        <div className={fieldCls}>
          <label htmlFor="promo-code" className="sr-only">
            Promo code
          </label>
          <input
            id="promo-code"
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo Code"
            className={inputCls}
          />
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleSearch}
          className="h-12 lg:h-full px-8 py-0 bg-primary text-white uppercase text-sm font-medium leading-none tracking-widest transition-colors whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function GuestRow({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-3 last:mb-0 text-black">
      <span className="text-sm text-black">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => value > min && onChange(value - 1)}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
          className="w-7 h-7 rounded-full border border-black/40 text-black hover:bg-black/5 transition flex items-center justify-center text-base leading-none disabled:opacity-30 disabled:hover:bg-transparent"
        >
          −
        </button>
        <span className="w-4 text-center text-sm text-black">{value}</span>
        <button
          type="button"
          onClick={() => value < max && onChange(value + 1)}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
          className="w-7 h-7 rounded-full border border-black/40 text-black hover:bg-black/5 transition flex items-center justify-center text-base leading-none disabled:opacity-30 disabled:hover:bg-transparent"
        >
          +
        </button>
      </div>
    </div>
  );
}
