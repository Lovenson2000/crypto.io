"use client";

import { fetchCoin } from '@/app/api/data';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page () {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div> This page will give details about </div>
  );
}
