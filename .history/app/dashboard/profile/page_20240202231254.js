import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
        <UserProfile />
    </div>
  );
}