import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import React from 'react'

export default function DashboardNav({currentRoute}) {
  return (
    <div className='flex items-center justify-between p-3 rounded-md bg-slate-200'>
        <div>{currentRoute}</div>
        <div className='flex items-center gap-4'>
            <UserButton />
            <Switch />
        </div>
    </div>
  );
}
