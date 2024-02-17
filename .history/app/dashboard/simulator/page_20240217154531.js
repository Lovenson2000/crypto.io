import React from 'react'
import { clerkClient } from '@clerk/nextjs';
export default async function Page() {
  const userId = 'my-user-id';

  const user = await clerkClient.users.getUser(userId);
  return (
    <div>Simulator Page</div>
  );
}