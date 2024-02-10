"use client";
import { fetchCoins } from '@/app/api/data';
import { useRouter } from 'next/navigation'
import React from 'react'

async function page({params}) {
  const { id } = params;
  const response = await fetchCoins();
  const coin = response.filter((coin) => coin.id === id);
 
  console.log(router);
  return (
    <div>Single Coin Page</div>
  )
}