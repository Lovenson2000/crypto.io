import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function Page() {
  const {isSignedIn, user} = useUser();

  return (
    <div>Simulator Page</div>
  );
}