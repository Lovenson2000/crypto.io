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
    {
        name: 'Simulator',
        href: '/dashboard/',
        icon: FaUniregistry
    },
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                const linkIcon = link.icon;
                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        classname={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
                    >

                    </Link>
                );
            })}
        </>
        
    );
}