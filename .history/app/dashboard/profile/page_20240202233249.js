import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center h-full justify-between'>
        <UserProfile />
    </div>
  );
}