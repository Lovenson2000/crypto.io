import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function DashboardNav({ param }) {
    const pathname = usePathname();
    return (
        <div className='flex items-center justify-between p-3 shadow-sm rounded-md bg-blue-300'>
            <div>{param}</div>
            <div className='flex items-center gap-4'>
                <UserButton />
                <Switch />
            </div>
        </div>
    );
}
