import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center justify-between'>
        <UserProfile />
    </div>
  );
}