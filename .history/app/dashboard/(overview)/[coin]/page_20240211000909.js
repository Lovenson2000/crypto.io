"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

export default function Page () {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div> This page will give details about </div>
  );
}
