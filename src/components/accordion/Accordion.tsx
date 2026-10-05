"use client";

import { useState } from "react";
import clsx from 'clsx';

const Accordion: React.FC<{ q: string; a: string, i: number }> = ({
  q: question,
  a: answer,
  i: index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-secondary py-4 px-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3 className={clsx(`text-2xl font-secondary font-normal uppercase pr-4 flex items-center gap-3.5`, isOpen ? "text-primary" : "text-light")}> <span className="font-body text-sm font-light">0{index+1}</span> {question}</h3>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <DropDownIcon />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 text-start text-dark font-light ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

export const DropDownIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="#635B54"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);