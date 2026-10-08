import { contact } from "@/utils/constent"
import { FillCallIcon, FillLocationIcon } from "@/utils/icons"

export const  NavLink = {
    logo: "/logo.png",
    links: [
        {
            label: "The Resort",
            href: "/",
        },
        {
            label:"About Us",
            href: "/about-us",
        },
        {
            label: "Rooms & Suites",
            href: "",
        },
        {
            label: "Dining & Banquets",
            href: "",
        },
        {
            label: "Wellness",
            href: "",
        },
        {
            label: "Gallery",
            href: "",
        },
        {
            label: "Contact",
            href: "",
        },
        {
            label: "Book Now",
            href: "",
        }
    ],
}

export const NavUpperLinks = {
    text:"जय श्री बालाजी",
    links: [
        {
            label: contact.phone[0],
            href: "tel:" + contact.phone[0],
            icon: <FillCallIcon />,
        },
        {
            label: "Salasar, Churu District, Rajasthan",
            href: contact.addressLink,
            icon: <FillLocationIcon />,
        },
    ],
}