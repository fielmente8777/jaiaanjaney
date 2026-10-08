import { contact } from "@/utils/constent"
import { FillCallIcon, FillLocationIcon } from "@/utils/icons"

export const  NavLink = {
    logo: "/logo.png",
    links: [
        {
            label: "THE RESORT",
            href: "/",
        },
        {
            label: "ABOUT US",
            href: "/about-us",
        },
        {
            label: "ROOMS & SUITES",
            href: "/rooms-and-suites",
        },
        {
            label: "DINING",
            href: "",
        },
        {
            label: "BANQUETS & LAWNS",
            href: "",
        },
        {
            label: "GALLERY",
            href: "",
        },
        {
            label: "CONTACT",
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
            className: "font-body font-light text-base leading-6",
        },
        {
            label: "Salasar, Churu District, Rajasthan",
            href: contact.addressLink,
            icon: <FillLocationIcon />,
            className: "font-secondary font-semibold italic text-lg leading-6",
        },
    ],
}