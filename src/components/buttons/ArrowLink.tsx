import clsx from "clsx";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

interface ArrowLinkProps {
  href: string;
  label: string;
  className?: string;
}

/** Underlined text link with a trailing arrow, e.g. "View villa →". */
const ArrowLink: React.FC<ArrowLinkProps> = ({ href, label, className }) => (
  <Link
    href={href}
    className={clsx(
      "group inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium",
      className
    )}
  >
    {label}
    <TbArrowRight
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
);

export default ArrowLink;
