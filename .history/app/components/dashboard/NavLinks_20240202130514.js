"use client";

import { IoHome } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { FaUniregistry } from "react-icons/fa";
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
        icon: FaUniregistry
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
                            "flex h-[48px] items-center justify-start gap-4 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none shadow-sm",
                            {
                                "bg-sky-100 text-blue-600": pathname === link.href,
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