// "use client";
// import { useWebContext } from "@/context-api/WebContext";
// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { BiMenu } from "react-icons/bi";
// import LinkButton from "../buttons/LinkButton";
// import { Container } from "../sectionComponants";
// import { NavLink, NavUpperLinks } from "./navlink";

// const WebsiteNav = () => {
//   const pathName = usePathname();
//   const { setIsOpenNav, isOpenNav } = useWebContext();
//   const openNav = () => {
//     setIsOpenNav(!isOpenNav);
//   };
//   return (
//     <header className=" max_screen_width">
//       {/* Upper Nav */}
//       <div className="bg-linear-to-r from-primary to-secondary">
//         <Container className="flex items-center justify-center lg:justify-between py-2 text-white">
//           <p className="font-secondary text-lg leading-6 font-semibold">
//             {NavUpperLinks.text}
//           </p>
//           <ul className="flex max-lg:hidden items-center divide-x divide-white ">
//             {NavUpperLinks.links.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   href={link.href}
//                   className={clsx(
//                     "flex items-center gap-2 hover:text-gray-300 px-3",
//                     link.className
//                   )}
//                 >
//                   <span className="">{link.icon}</span>
//                   <span className="sr-only">{link.label}</span>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </div>
//       {/* logo and page links */}
//       <nav className="bg-[#FAF6EC]">
//         <Container className="flex items-center justify-between py-4">
//           {/* logo */}
//           <Link
//             href="/"
//             className="relative block lg:w-[120px] w-[90px] aspect-4/3"
//           >
//             <Image
//               fill
//               className="object-cover"
//               src={NavLink.logo}
//               alt="logo"
//             />
//           </Link>
//           {/* page links */}
//           <ul className="flex max-lg:hidden items-center justify-center gap-10">
//             {NavLink.links
//               .slice(0, NavLink.links.length - 1)
//               .map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     href={link.href}
//                     className={clsx(
//                       "text-dark text-base leading-6 hover:text-primary",
//                       pathName === link.href && "text-primary"
//                     )}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//           </ul>
//           {/* button book-now */}
//           <LinkButton
//             href={NavLink.links[NavLink.links.length - 1].href}
//             label={NavLink.links[NavLink.links.length - 1].label}
//             className="uppercase text-white bg-primary hover:bg-secondary lg:px-6 lg:py-3 max-lg:hidden"
//           />
//           {/* nav menu */}
//           <button
//             type="button"
//             onClick={openNav}
//             aria-label="Open mobile navigation"
//             aria-expanded={isOpenNav}
//             className="lg:hidden"
//           >
//             <BiMenu className="relative h-8 w-8 text-primary" />
//           </button>
//         </Container>
//       </nav>
//     </header>
//   );
// };

// export default WebsiteNav;

"use client";

import { useWebContext } from "@/context-api/WebContext";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";

import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponants";
import { NavLink, NavUpperLinks } from "./navlink";

const WebsiteNav = () => {
  const pathname = usePathname();
  const { setIsOpenNav, isOpenNav } = useWebContext();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(!(y > lastScrollY.current && y > 120));
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const measure = () => {
      if (window.scrollY <= 50) setHeaderHeight(el.offsetHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const links = NavLink.links.slice(0, -1);
  const cta = NavLink.links[NavLink.links.length - 1];

  return (
    <>
      <header
        className={clsx(
          "max_screen_width fixed inset-x-0 top-0 z-50 mx-auto w-full transition-transform duration-500",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div
          className={clsx(
            "grid transition-all duration-500",
            scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="bg-linear-to-r from-primary to-secondary">
              <Container className="flex items-center justify-center py-1.5 text-white lg:justify-between">
                <p className="font-secondary text-base font-semibold leading-6">
                  {NavUpperLinks.text}
                </p>
                <ul className="flex items-center divide-x divide-white max-lg:hidden">
                  {NavUpperLinks.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "flex items-center gap-2 px-3 text-sm hover:text-gray-300",
                          link.className
                        )}
                      >
                        <span>{link.icon}</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav
          className={clsx(
            "bg-cream transition-shadow duration-500",
            scrolled && "shadow-sm"
          )}
        >
          <Container
            className={clsx(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "py-1" : "py-2"
            )}
          >
            {/* Logo - chhota kiya */}
            <Link
              href="/"
              className="relative block aspect-4/3 w-[75px] lg:w-[100px]"
            >
              <Image
                fill
                src={NavLink.logo}
                alt="Logo"
                className="object-cover"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="flex items-center gap-10 max-lg:hidden">
              {links.map((link, i) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));
                return (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={clsx(
                        "text-[15px] transition-colors",
                        isActive
                          ? "text-secondary"
                          : "text-black hover:text-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <LinkButton
              href={cta.href}
              label={cta.label}
              className="bg-primary uppercase text-white hover:bg-secondary lg:px-5 lg:py-2 max-lg:hidden"
            />

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setIsOpenNav(!isOpenNav)}
              aria-label="Open mobile navigation"
              aria-expanded={isOpenNav}
              className="lg:hidden"
            >
              <BiMenu className="h-8 w-8 text-primary" />
            </button>
          </Container>
        </nav>
      </header>
      <div
        aria-hidden="true"
        style={headerHeight ? { height: headerHeight } : undefined}
        className={clsx("w-full", !headerHeight && "h-[108px] lg:h-[127px]")}
      />
    </>
  );
};

export default WebsiteNav;
