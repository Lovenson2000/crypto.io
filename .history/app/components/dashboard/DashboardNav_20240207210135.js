"use client";
import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react'
import { ModeToggle } from '../ModeToggle';

export default function DashboardNav() {
    const pathname = usePathname();
    const currentPage = pathname.split("/").pop();
    return (
        <div className='dark:text-slate-50 flex items-center justify-between p-3 shadow-md rounded-md bg-white'>
            <div className='capitalize'>{currentPage}</div>
            <div className='flex items-center gap-4'>
                <UserButton />
                <ModeToggle />
            </div>
        </div>
    );
}
