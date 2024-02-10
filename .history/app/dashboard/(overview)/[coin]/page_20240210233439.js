
import { fetchCoin } from '@/app/api/data';
import React from 'react'

export default async function Page ({params}) {  
  const coin = await fetchCoin(params.id);
  return (
    <div> This page will give details about {coin.name} </div>
  );
}
