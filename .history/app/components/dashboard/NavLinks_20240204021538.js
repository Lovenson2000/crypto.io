"use client";

import { IoHome } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { FaUniregistry } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import clsx from "clsx";

const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: IoHome
    },
    {
        name: 'My Coins',
        href: '/dashboard/coins',
        icon: TbCoin,
    },
    {
        name: 'News',
        href: '/dashboard/news',
        icon: MdNewspaper
    },
    {
        name: 'Simulator',
        href: '/dashboard/simulator',
        icon: FaUniregistry
    },
    {
        name: 'My Profile',
        href: '/dashboard/profile',
        icon: FaRegUserCircle
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] items-center justify-start gap-4 rounded-md p-3 text-sm font-medium bg-white hover:bg-indigo-100 hover:text-indigo-700 hover:scale-y-125 focus:ring md:flex-none shadow-sm",
                            {
                                "bg-indigo-100 text-indigo-800": pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6 text-lg text-indigo-700" />
                        <p className="text-[1rem]">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}