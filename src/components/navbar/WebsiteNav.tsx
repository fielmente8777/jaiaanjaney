"use client";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { NavLink, NavUpperLinks } from "./navlink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LinkButton from "../buttons/LinkButton";

const WebsiteNav = () => {
  const pathName = usePathname();
  return (
    <header className=" max_screen_width">
      {/* Upper Nav */}
      <div className="bg-linear-to-r from-primary to-secondary">
        <Container className="flex items-center justify-between py-2 text-white">
          <p className="">{NavUpperLinks.text}</p>
          <ul className="flex items-center divide-x divide-white ">
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
      <nav>
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="relative block w-[120px] aspect-4/3">
            <Image
              fill
              className="object-cover"
              src={NavLink.logo}
              alt="logo"
            />
          </Link>
          <ul className="flex items-center justify-center gap-4">
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
          <LinkButton
            href={NavLink.links[NavLink.links.length - 1].href}
            label={NavLink.links[NavLink.links.length - 1].label}
            className="uppercase text-white bg-primary hover:bg-secondary lg:px-6 lg:py-3"
          />
        </Container>
      </nav>
    </header>
  );
};

export default WebsiteNav;
