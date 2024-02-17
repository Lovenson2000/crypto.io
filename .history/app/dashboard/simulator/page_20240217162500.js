"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn);
  console.log(isLoaded);
  console.log(user);
  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
      <form>
        
      </form>
    </div>
  );
}