import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='bg-main w-80 my-4'>
        <UserProfile />
    </div>
  );
}