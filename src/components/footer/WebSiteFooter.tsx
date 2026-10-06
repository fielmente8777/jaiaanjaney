import Link from "next/link";
import { Container } from "../sectionComponants";
import Image from "next/image";
import { WebsiteFooterLinks } from "./footerLink";
import LinkButton from "../buttons/LinkButton";

const WebSiteFooter = () => {
  return (
    <footer className="bg-[#3F2416] text-white max_screen_width max-lg:py-10 lg:pt-18 lg:pb-10">
      <Container>
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] md:grid-cols-2 grid-cols-1 gap-10">
          {/* logo */}
          <Link href="/" className="block relative w-[200px] max-md:mx-auto aspect-4/3.25">
            <Image src="/logo.png" alt="logo" fill className="object-cover" />
          </Link>
          {/* links */}
          {WebsiteFooterLinks.listLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">{link.title}</h2>
              <ul className="flex flex-col gap-2">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <LinkButton
            label="Book Now"
            href="/contact"
            className=" bg-white h-fit border-none w-fit uppercase text-primary"
          />
        </div>
        <div className="w-full h-px bg-white my-10" />
        <div className="flex max-lg:flex-col justify-center max-lg:text-center gap-4 lg:justify-between items-center font-secondary italic">
          <p>
            © 2026 Jai Anjaney Resort, All rights reserved. A Sacred Destination
            - Churu District, Rajasthan
          </p>
          <p>
            Powered By <Link href="https://fielmente.com/" className="font-bold">Fielmente</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default WebSiteFooter;
