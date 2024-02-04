"use client";
import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function DashboardNav() {
    const pathname = usePathname();
    const currentPage = pathname.split("/").pop();
    return (
        <div className='flex items-center justify-between p-3 shadow-md rounded-md bg-red-600'>
            <div>{currentPage}</div>
            <div className='flex items-center gap-4'>
                <UserButton />
                <Switch />
            </div>
        </div>
    );
}
