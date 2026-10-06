"use client";
import { useWebContext } from "@/context-api/WebContext";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponants";
import { NavLink, NavUpperLinks } from "./navlink";

const WebsiteNav = () => {
  const pathName = usePathname();
  const { setIsOpenNav } = useWebContext();
  return (
    <header className=" max_screen_width">
      {/* Upper Nav */}
      <div className="bg-linear-to-r from-primary to-secondary">
        <Container className="flex items-center justify-center lg:justify-between py-2 text-white">
          <p className="">{NavUpperLinks.text}</p>
          <ul className="flex max-lg:hidden items-center divide-x divide-white ">
            {NavUpperLinks.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 font-medium hover:text-gray-300 px-3"
                >
                  <span className="">{link.icon}</span>
                  <span className="sr-only">{link.label}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      {/* logo and page links */}
      <nav className="bg-[#FAF6EC]">
        <Container className="flex items-center justify-between py-4">
          {/* logo */}
          <Link
            href="/"
            className="relative block lg:w-[120px] w-[90px] aspect-4/3"
          >
            <Image
              fill
              className="object-cover"
              src={NavLink.logo}
              alt="logo"
            />
          </Link>
          {/* page links */}
          <ul className="flex max-lg:hidden items-center justify-center gap-10">
            {NavLink.links
              .slice(0, NavLink.links.length - 1)
              .map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "text-dark text-lg hover:text-primary",
                      pathName === link.href && "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
          {/* button book-now */}
          <LinkButton
            href={NavLink.links[NavLink.links.length - 1].href}
            label={NavLink.links[NavLink.links.length - 1].label}
            className="uppercase text-white bg-primary hover:bg-secondary lg:px-6 lg:py-3 max-lg:hidden"
          />
          {/* nav menu */}
          <button
            onClick={() => setIsOpenNav((prev) => !prev)}
            className="lg:hidden"
          >
            <BiMenu className="relative w-8 h-8 col" />
          </button>
        </Container>
      </nav>
    </header>
  );
};

export default WebsiteNav;
