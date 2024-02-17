import React from 'react'
import { clerkClient } from '@clerk/nextjs';
export default async function Page() {

  const user = await clerkClient.users.getUser();
  return (
    <div>Simulator Page</div>
  );
}