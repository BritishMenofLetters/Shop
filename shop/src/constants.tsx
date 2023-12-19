import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <Icon icon="lucid:home" width="24" height="24"/>,
    },
    {
        title: "Products",
        path: "/products",
        icon: <Icon icon="bx:bx-category-alt" width="24" height="24"/>,
    },
    {
        title: "Cart",
        path: "/cart",
        icon: <Icon icon="bx:bx-cart" width="24" height="24"/>,
    },
    {
        title: "About",
        path: "/about",
        icon: <Icon icon="bx:bx-info-circle" width="24" height="24"/>,
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <Icon icon="bx:bx-phone" width="24" height="24"/>,
    },
];