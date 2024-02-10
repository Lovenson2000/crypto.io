
import { fetchCoin } from '@/app/api/data';
import { useRouter } from 'next/router';
import React from 'react'

export default async function Page () {
  const router = useRouter
  const coin = await fetchCoin(params.id);
  return (
    <div> This page will give details about {coin.name} </div>
  );
}
