import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React from 'react'

export default function DashboardNav() {
    const router = useRouter();
    console.log(router);
  return (
    <div className='flex items-center justify-between p-3 shadow-sm rounded-md bg-blue-300'>
        <div>fsfff</div>
        <div className='flex items-center gap-4'>
            <UserButton />
            <Switch />
        </div>
    </div>
  );
}
