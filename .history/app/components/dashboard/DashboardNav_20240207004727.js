"use client";
import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function DashboardNav() {
    const pathname = usePathname();
    const currentPage = pathname.split("/").pop();
    return (
        <div className='flex items-center justify-between p-3 shadow-md rounded-md bg-slate-100'>
            <div className='capitalize'>{currentPage}</div>
            <div className='flex items-center gap-4'>
                <UserButton />
                <Switch />
            </div>
        </div>
    );
}