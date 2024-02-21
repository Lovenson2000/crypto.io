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
                            "dark:bg-slate-800 flex h-[48px] items-center justify-start gap-4 rounded-md p-3 text-sm font-medium bg-white dark:hover:bg-slate-700 hover:bg-indigo-100 hover:text-main dark:hover:text-slate-100 hover:translate-y-[-2px] focus:ring md:flex-none shadow-sm",
                            {
                                "bg-indigo-600 dark:bg-indigo-600 text-white": pathname === link.href,
                            },
                            
                        )}
                    >
                        <LinkIcon className={`${pathname === link.href ? "text-white" : "text-main"} w-6 text-lg`} />
                        <p className="text-[1rem]">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}