"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page({params}) {
  const router = useRouter();
  return (
    <div>Single Coin Page</div>
  )
}
