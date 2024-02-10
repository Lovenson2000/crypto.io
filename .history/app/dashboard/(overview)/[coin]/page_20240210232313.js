
import { fetchCoins } from '@/app/api/data';
import React from 'react'

export default async function Page ({params}) {

  const { id } = params;
  console.log(id);
  const coins = await fetchCoins();
  const coin = coins.filter((coin) => coin.id === id);
 
  return (
    <div> This page will give details about {coin.name} </div>
  );
}
