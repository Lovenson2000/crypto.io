import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import React from 'react'

export default function DashboardNav({currentRoute}) {
  return (
    <div className='flex items-center justify-between p-1 bg-blue-200'>
        <div>{currentRoute}</div>
        <div className='flex gap-4'>
            <UserButton />
            <Switch />
        </div>
    </div>
  );
}
