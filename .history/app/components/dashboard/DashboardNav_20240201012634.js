import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import React from 'react'

export default function DashboardNav({currentRoute}) {
  return (
    <div>
        <div>{currentRoute}</div>
        <div>
            <UserButton />
            <Switch />
        </div>
    </div>
  );
}
