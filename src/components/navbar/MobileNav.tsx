"use client";

import { useWebContext } from "@/context-api/WebContext";
import clsx from "clsx";
import Link from "next/link";

import { MdClose } from "react-icons/md";
import { NavLink } from "./navlink";
import LinkButton from "../buttons/LinkButton";

const MobileNav = () => {
  const { isOpenNav, setIsOpenNav } = useWebContext();

  return (
    <div
      className={clsx(
        "px-4 fixed top-0 z-50 h-dvh w-full bg-white backdrop-blur-md transition-all duration-300",
        isOpenNav ? "right-0" : "-right-full"
      )}
    >
      <button
        type="button"
        onClick={() => {
          setIsOpenNav(false);
        }}
        className="absolute top-4 right-4 text-primary transition-colors duration-200 hover:text-white"
      >
        <MdClose size={34} />
      </button>
      <ul className="mt-4 flex w-full flex-col gap-2 py-15">
        {NavLink.links.slice(0, NavLink.links.length - 1).map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={clsx(
                "flex items-center gap-2 rounded-md px-3 uppercase py-2 font-medium text-primary transition-colors duration-200",
                "hover:bg-white/5 hover:text-white"
              )}
            >
              <span className="sr-only">{link.label}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <LinkButton
            href={NavLink.links[NavLink.links.length - 1].href}
            label={NavLink.links[NavLink.links.length - 1].label}
            className="uppercase text-white bg-primary hover:bg-secondary lg:px-6 lg:py-3"
          />
    </div>
  );
};

export default MobileNav;
