import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center h-screen justify-between'>
        <UserProfile />
    </div>
  );
}