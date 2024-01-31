import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { FaUniregistry } from "react-icons/fa";

const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: IoHome
    },
    {
        name: 'My Coins',
        href: '/dashboard/invoices',
        icon: TbCoin,
    },
    {
        name: 'News',
        href: '/dashboard/',
        icon: MdNewspaper
    },
];

export default function NavLinks() {
    return (
        <div>

        </div>
    );
}