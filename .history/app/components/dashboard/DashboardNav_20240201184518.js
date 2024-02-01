"use client";
import { Switch } from '@/components/ui/switch';
import { currentUser, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function DashboardNav() {
    const pathname = usePathname();
    let currentPage = pathname.split("/").pop();
    currentPage.charAt[0].toUppercase() + currentPage.slice(1);
    return (
        <div className='flex items-center justify-between p-3 shadow-sm rounded-md bg-blue-300'>
            <div>{currentPage}</div>
            <div className='flex items-center gap-4'>
                <UserButton />
                <Switch />
            </div>
        </div>
    );
}
