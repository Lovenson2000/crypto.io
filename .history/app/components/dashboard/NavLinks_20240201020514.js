import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";

const links = [
    { name: 'Home', href: '/dashboard', icon: IoHome },
    {
        name: 'My Coins',
        href: '/dashboard/invoices',
        icon: DocumentDuplicateIcon,
    },
    { name: 'News', href: '/dashboard/', icon: UserGroupIcon },
];

export default function NavLinks() {
    return (
        <div>

        </div>
    );
}