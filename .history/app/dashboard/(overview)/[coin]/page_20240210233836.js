"use client";

import { fetchCoin } from '@/app/api/data';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page () {

  const router = useRouter();
  console.log(router.query);

  const coin = fetchCoin(params.id);
  return (
    <div> This page will give details about {coin.name} </div>
  );
}
