import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='bg-main my-4'>
        <UserProfile />
    </div>
  );
}