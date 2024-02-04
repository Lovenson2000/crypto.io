import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='bg-main m-1 w-11/12'>
        <UserProfile />
    </div>
  );
}