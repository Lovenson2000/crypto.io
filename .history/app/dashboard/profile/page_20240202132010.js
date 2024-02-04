import { UserProfile } from '@clerk/nextjs';
import React from 'react'

export default function page() {
  return (
    <div className='h-screen'>
        <h1>User Profile Page</h1>
        <UserProfile />
    </div>
  );
}