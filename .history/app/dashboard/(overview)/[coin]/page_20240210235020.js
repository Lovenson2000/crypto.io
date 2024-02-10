"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page () {

  const router = useRouter();

  console.log(router.query);
  return (
    <div> This page will give details about </div>
  );
}
